import { create } from "zustand";
import { createPost, getAllPosts } from "../api/postApi";
import useUserStore from "./userStore";

const usePostStore = create( (set,get)=> ({
	posts : [],
	currentPost : null,
	createPost : async (body) => {
		const resp = await createPost(body, useUserStore.getState().token)
		console.log(resp.data)
		// set({posts : resp.data.result})
		get().getAllPosts()
		return resp
	},
	getAllPosts : async () => {
		const resp = await getAllPosts(useUserStore.getState().token)
		set({posts : resp.data.posts})
		return resp
	}
}))

export default usePostStore