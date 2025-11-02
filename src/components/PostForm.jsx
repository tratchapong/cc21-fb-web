
import { useState } from 'react'
import { PhotoIcon2 } from '../icons'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import AddPicture from './AddPicture'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function PostForm() {
  const user = useUserStore(state => state.user)
  const token = useUserStore(state => state.token)
  const [addPic, setAddPic] = useState(false)
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')
  // const [imageUrl, setImageUrl] = useState('')


  const hdlCreatePost = async () => {
    let imageUrl = ''
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "cc20-upload"); // from Cloudinary
        const rs = await axios.post("https://api.cloudinary.com/v1_1/tratchapong/image/upload", formData)
        console.log(rs.data);
        imageUrl = rs.data.secure_url;
      }
      const body = { message, image: imageUrl }
      const rs = await axios.post('http://localhost:8899/api/post', body, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success(rs.data.message)
      document.getElementById('postform-modal').close()
    } catch (err) {
      const errMsg = err.response?.data.error || err.message
      toast.error(errMsg)
    }
  }
  return (
    <div className='flex flex-col gap-2'>
      <h3 className="text-xl text-center">Create post</h3>
      <div className="divider mt-1 mb-0"></div>
      <div className="flex gap-2">
        <Avatar className='w-11 h-11 rounded-full'
          imgSrc={user.profileImage}
        />
        <div className="flex flex-col">
          <div className="text-sm">{user.firstName} {user.lastName}</div>
          <select className='select bg-slate-200 select-xs w-full max-w-xs'>
            <option disabled>who can see?</option>
            <option>public</option>
            <option>friends</option>
          </select>
        </div>
      </div>
      <textarea className='textarea textarea-ghost w-full'
        placeholder={`what do you think? ${user.firstName}`}
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={message.split('\n').length}
      ></textarea>
      {addPic &&
        <AddPicture file={file} setFile={setFile} />
      }

      <div className="flex border rounded-lg p-2 justify-between items-center">
        <p>add with your post</p>
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100
         hover:bg-slate-200 active:scale-110" onClick={() => setAddPic(prv => !prv)} >
          <PhotoIcon2 className='w-7' />
        </div>
      </div>
      <button className='btn btn-sm btn-primary'
        onClick={hdlCreatePost}
        disabled={message.trim().length === 0 && !file}
      >Create Post</button>
    </div>
  )
}
