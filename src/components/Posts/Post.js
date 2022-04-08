import React from 'react'

const Post = ({ post, setCurrentId }) => {
  return (
    <div>
      <h3>Creator: {post.creator}</h3>
      <h3>Title: {post.title}</h3>
      <h3>message: {post.message}</h3>
      <div>tags: {post?.tags?.map((tag) => (
        <div key={post._id}>#{tag}</div>
        ))}
      </div>
      <button onClick={() => setCurrentId(post._id)}>Edit</button>
      <button>Delete</button>
      <button>Like</button>
    </div>
  )
}

export default Post