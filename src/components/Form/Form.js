import React, { useState } from 'react';

const Form = () => {
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    creator: '',
    tags: '',
    selectedFile: '',
  })

  const handleSubmit = (e) => {
    console.log(e)
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