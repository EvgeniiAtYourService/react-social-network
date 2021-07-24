import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    debugger
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post num="1" message="Hi, hwru?" />
        <Post num="2" message="What's the weather today?" />
      </div>
    </div>
  )
}

export default MyPosts
