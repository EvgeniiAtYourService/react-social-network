import React from 'react'
import MyPostsContainer from './My posts/MyPostsContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer
      />
    </div>
  )
}

export default Profile
