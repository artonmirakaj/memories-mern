import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const fetchPosts = () => axios.get(`${API_URL}/posts`);

export const createNewPost = (newPost) => axios.post(`${API_URL}/posts`, newPost);