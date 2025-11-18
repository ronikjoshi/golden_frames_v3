import axios from "axios";

const url = "https://verbose-happiness-xrgjgqgvjwpc64w4-5000.app.github.dev/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);