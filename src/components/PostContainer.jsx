import { useEffect } from 'react'
import CreatePost from './CreatePost'
import usePostStore from '../stores/postStore'
import PostItem from './PostItem'
import PostFormEdit from './PostFormEdit'
import { CloseIcon } from '../icons'

function PostContainer() {

	const posts = usePostStore(state => state.posts)
	const getAllPosts = usePostStore(state => state.getAllPosts)
	const currentPost = usePostStore(state => state.currentPost)
	const setCurrentPost = usePostStore(state => state.setCurrentPost)

	useEffect(() => {
		getAllPosts()
	}, [])

	return (
		<>
			<div className='w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg'>
				<CreatePost />

				{posts.map(post => (
					<PostItem key={post.id} post={post} />
				))}
			</div>
			<dialog className='modal' id='editform-modal' onClose={() => setCurrentPost(null)}>
				<div className="modal-box ">
					{currentPost && <PostFormEdit />}
					<form method='dialog'>
						<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
							<CloseIcon />
						</button>
					</form>
				</div>
			</dialog>
		</>
	)
}

export default PostContainer