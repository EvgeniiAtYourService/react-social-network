import React from 'react'
import MyPosts from './My posts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsArray={props.profileState.posts} addPostFun={props.addPostFun} />
    </div>
  )
}

export default Profile
