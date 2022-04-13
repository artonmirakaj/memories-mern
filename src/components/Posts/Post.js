import React from 'react'
import { useDispatch } from 'react-redux'
import { deletedPost, likedPost } from '../../actions/postsAction';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
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
      <button onClick={() => dispatch(deletedPost(post._id))}>Delete</button>
      <button onClick={() => dispatch(likedPost(post._id))}>Like {post.likeCount}</button>
    </div>
  )
}

export default Post