import { fetchPosts, createNewPost, updateCurrentPost } from '../hooks/requests';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await fetchPosts();

    dispatch({
      type: 'FETCH_ALL',
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
      type: 'CREATE',
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
      type: 'UPDATE',
      payload: data
    })
  } catch (error) {
    console.log(error)
  }
}