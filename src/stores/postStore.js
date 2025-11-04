import { create } from "zustand";
import { createPost, deletePost, getAllPosts, updatePost } from "../api/postApi";

const usePostStore = create( (set,get)=> ({
	posts : [],
	currentPost : null,
	createPost : async (body) => {
		const resp = await createPost(body)
		console.log(resp.data)
		get().getAllPosts()
		return resp
	},
	getAllPosts : async () => {
		const resp = await getAllPosts()
		set({posts : resp.data.posts})
		return resp
	},
	deletePost : async (id) => {
		const resp = await deletePost(id)
		get().getAllPosts()
		return resp
	},
	updatePost : async (id, body) => {
		const resp = await updatePost(id, body)
		get().getAllPosts()
		return resp
	},
	setCurrentPost : (post) => set({currentPost : post})
}))

export default usePostStore