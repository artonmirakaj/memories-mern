import { 
  fetchPosts,
  createNewPost,
  updateCurrentPost,
  deletePost,
  likePost }
from '../hooks/requests';
import {
  CREATE,
  FETCH_ALL,
  UPDATE,
  DELETE,
} from '../constants/actionTypes';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();

    dispatch({
      type: FETCH_ALL,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await createNewPost(post);

    dispatch({
      type: CREATE,
      payload: data
    })
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const { data } = await updateCurrentPost(id, updatePost);

    dispatch({
      type: UPDATE,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}

export const deletedPost = (id) => async (dispatch) => {
  try {
    await deletePost(id);

    dispatch({
      type: DELETE,
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}

export const likedPost = (id) => async (dispatch) => {
  try {
    const { data } = await likePost(id);
    
    dispatch({
      type: UPDATE,
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}