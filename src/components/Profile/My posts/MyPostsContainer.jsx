import React from 'react'
// import StoreContext from '../../../StoreContext'
import { connect } from 'react-redux'

import {
  changeTextareaValueActionCreator,
  addPostActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

// function MyPostsContainer(props) {
//   return (
//     <StoreContext.Consumer>
//       { store => {
//         const state = store.getState()

//         const addPost = () => {
//           store.dispatch(addPostActionCreator())
//         }

//         const changeValue = (text) => {
//           store.dispatch(changeTextareaValueActionCreator(text))
//         }

//         return (
//           <MyPosts
//             changeTextareaValue={changeValue}
//             addPost={addPost}
//             postsArray={state.profilePage.posts}
//             stateTextareaValue={state.profilePage.currentTextareaValue}
//           />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }



const mapStateToProps = (state) => {
  return {
    postsArray: state.profilePage.posts,
    stateTextareaValue: state.profilePage.currentTextareaValue
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    changeTextareaValue: (text) => {
      dispatch(changeTextareaValueActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)






export default MyPostsContainer
