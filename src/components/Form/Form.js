import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/postsAction';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    creator: '',
    tags: '',
    selectedFile: '',
  })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value })
  }

  const clear = () => {
    
  }

  return (
    <div>
      Create a Memory
      <form
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='creator'
          placeholder='Creator'
          value={postData.creator}
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={postData.title}
          onChange={handleChange}
        />
        <input
          type='text'
          name='message'
          placeholder='Message'
          value={postData.message}
          onChange={handleChange}
        />
        <input
          type='text'
          name='tags'
          placeholder='Tags'
          value={postData.tags}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
        <button onClick={clear}>Cancel</button>
      </form>
    </div>
  )
}

export default Form