import React from 'react'

import {
  changeTextareaValueActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

function MyPostsContainer(props) {
  const state = props.store.getState()

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  const changeValue = (text) => {
    props.store.dispatch(changeTextareaValueActionCreator(text))
  }

  return <MyPosts changeTextareaValue={changeValue} addPost={addPost} postsArray={state.profilePage.posts} stateTextareaValue={state.profilePage.currentTextareaValue} />
}

export default MyPostsContainer
