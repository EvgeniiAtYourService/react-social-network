import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {
  changeTextareaValueActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer'

function MyPosts(props) {
  const newPost = React.createRef()
  const addPostText = () => {
    props.addPost()
  }

  const changeValue = () => {
    const text = newPost.current.value
    props.changeTextareaValue(text)
  }

  return (
    <div className={classes.postField}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPost}
            onChange={changeValue}
            value={props.stateTextareaValue}
          />
        </div>
        <div>
          <button onClick={addPostText}>Add post</button>
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
