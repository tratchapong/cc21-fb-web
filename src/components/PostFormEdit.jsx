import { useState } from "react"
import { PhotoIcon2 } from "../icons"
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar"
import AddPicture from "./AddPicture"
import axios from "axios"
import { toast } from "react-toastify"
import usePostStore from "../stores/postStore"


function PostFormEdit() {
	const user = useUserStore(state => state.user)
	const updatePost = usePostStore(state => state.updatePost)
	const currentPost = usePostStore(state => state.currentPost)
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)
	const [message, setMessage] = useState(currentPost.message)
	const [image, setImage] = useState(currentPost.image)
	const [loading, setLoading] = useState(false)

	const hdlUpdatePost = async () => {
		console.log('updatePost')
	}

	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-xl text-center">Update post</h3>
			<div className="divider mt-1 mb-0"></div>
			<div className="flex gap-2">
				<Avatar className='w-11 h-11 rounded-full' imgSrc={user.profileImage} />
				<div className="flex flex-col">
					<div className="text-sm">{user.firstName} {user.lastName}</div>
					<select className="select bg-slate-200 select-xs w-full max-w-xs" defaultValue=''>
						<option disabled selected value=''>who can see?</option>
						<option>public</option>
						<option>friends</option>
					</select>
				</div>
			</div>
			<textarea className="textarea textarea-ghost w-full"
				onChange={e => setMessage(e.target.value)}
				value={message}
				rows={message.split('\n').length}
			></textarea>
			{addPic && <AddPicture file={file} setFile={setFile} />}
			<div className="flex border rounded-lg p-2 justify-between items-center">
				<p>add with your post</p>
				<div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100
				 hover:bg-slate-200 active:scale-110" onClick={() => setAddPic(prv => !prv)}>
					<PhotoIcon2 className='w-7' />
				</div>
			</div>
			<button className="btn btn-sm btn-primary" onClick={hdlUpdatePost} disabled={loading || (!message.trim() && !file)}>
				Update Post
				{loading && <span className="loading loading-dots loading-sm"></span>}
			</button>
		</div>
	)
}

export default PostFormEdit