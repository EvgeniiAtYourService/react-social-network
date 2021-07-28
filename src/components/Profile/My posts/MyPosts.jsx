import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
  const newPost = React.createRef()
  const addPost = () => {
    const text = newPost.current.value
    props.addPostFun(text)
    newPost.current.value = ""
  }

  return (
    <div className={classes.postField}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPost}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className="posts">
        {props.postsArray.map((post) => (
          <Post num={post.num} message={post.message} />
        ))}
        {/* Массив */}
      </div>
    </div>
  )
}

export default MyPosts
