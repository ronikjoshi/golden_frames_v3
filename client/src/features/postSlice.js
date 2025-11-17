import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit"
import * as api from "../api";

export const getPosts = createAsyncThunk ("posts/getPosts", async () => {
    const {data} = await api.fetchPosts();
    return data;
});

const postSlice = createSlice ({
    name: "posts",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => action.payload)
    }


}) 