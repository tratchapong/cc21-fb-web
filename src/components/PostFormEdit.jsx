import usePostStore from "../stores/postStore"


function PostFormEdit() {
	const currentPost = usePostStore(state => state.currentPost)
	return (
		<>
		<div className="text-4xl">PostFormEdit</div>
		<div className="divider"></div>
		{JSON.stringify(currentPost, null, 2)}
		</>
	)
}

export default PostFormEdit