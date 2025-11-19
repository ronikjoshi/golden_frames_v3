import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import * as api from "../api";

export const getPosts = createAsyncThunk ("posts/getPosts", async () => {
    const {data} = await api.fetchPosts();
    return data;
});

export const createPost = createAsyncThunk ("posts/createPost", async (postData) => {
    const {data} = await api.createPost(postData);
    return data;
});

export const updatePost = createAsyncThunk ("posts/updatePost", async (id, updatedPost) => {
    const {data} = await api.updatePost(id, updatePost);
    return data;
})

const postSlice = createSlice ({
    name: "posts",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => action.payload)
            .addCase(createPost.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(updatePost.fulfilled, (state,action) => {
                return state.map((post) => post._id === action.payload._id ? action.payload : post)
            })
    }


}) 

export default postSlice.reducer;