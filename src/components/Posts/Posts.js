import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  )
}

export default Posts