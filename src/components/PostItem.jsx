import { toast } from "react-toastify"
import { CloseIcon, CommentIcon, LikeIcon, ShareIcon, ThreeDotIcon } from "../icons"
import usePostStore from "../stores/postStore"
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar"
import TimeAgo from "react-timeago"

function PostItem(props) {
	const { post } = props
	const user = useUserStore(state => state.user)
	const deletePost = usePostStore(state=> state.deletePost)
	const updatePost = usePostStore(state=> state.updatePost)
	const setCurrentPost = usePostStore(state => state.setCurrentPost)

	const hdlUpdate = () => {
		setCurrentPost(post)
		document.getElementById('editform-modal').showModal()
	}

	const hdlDelete = async () => {
		try {
			const resp = await deletePost(post.id)
			toast.success(resp.data.message)
		}catch(err) {
			const errMsg = err.response?.data?.error?.message || err.message
			toast.error(errMsg)
		}
	}
	
	return (
		<div className="card bg-base-100 shadow-xl">
			<div className="card-body p-3">
				<div className="flex justify-between">
					<div className="flex gap-3">
						<Avatar className='w-11 h-11 rounded-full' imgSrc={post.user.profileImage} />
						<div className="flex flex-col">
							<p className="font- text-sm">{post.user.firstName} {post.user.lastName}</p>
							<p className="text-xs backdrop-opacity-40">
								<TimeAgo date={post.createdAt} />
							</p>
						</div>
					</div>
					<div className="flex gap-2">
						{post.userId === user.id &&
							<div className="dropdown">
								<div tabIndex={0} role='button'>
									<div className="avatar item-center cursor-pointer">
										<div className="w-10 h-10 rounded-full flex! justify-center items-center hover:bg-gray-200">
											<ThreeDotIcon className='w-6' />
										</div>
									</div>
								</div>
								<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
									<li onClick={hdlUpdate}><a>Edit</a></li>
									<li onClick={hdlDelete} ><a>Delete</a></li>
								</ul>
							</div>
						}
						<div className="avatar item-center cursor-pointer">
							<div className="w-10 h-10 rounded-full flex! justify-center items-center hover:bg-gray-200">
								<CloseIcon className='w-6' />
							</div>
						</div>
					</div>
				</div>
				<p>{post.message}</p>
				{post.image
					&& <img src={post.image} alt="post image" className='p-4 max-h-[200px] object-contain' />
				}

				{/* like, comment number */}
				<div className="flex justify-between items-center pe-4">
					<div className="avatar items-end cursor-pointer gap-1">
						<div className="w-7 h-7 rounded-full flex! justify-center items-center bg-blue-200">
							<LikeIcon />
						</div>
						<p>99 likes</p>
					</div>
					<div className="flex">
						<p className="opacity-60">3 comments</p>
					</div>
				</div>
				<div className="divider h-0 my-0"></div>
				{/* 3 buttons like, comment, share */}
				<div className="flex justify-between">
					<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
						<LikeIcon className='w-6' />
					</div>
					<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
						<CommentIcon className='w-6' />
					</div>
					<div className="flex gap-3 justify-center items-center cursor-pointer hover:bg-gray-300 rounded-lg py-2 flex-1">
						<ShareIcon className='w-6' />
					</div>
				</div>
				<div className="divider h-0 my-0"></div>
				{/* ComentContainer start here */}
			</div>
		</div>
	)
}

export default PostItem