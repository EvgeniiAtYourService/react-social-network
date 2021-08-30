import React from 'react'
import MyPostsContainer from './My posts/MyPostsContainer'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
      />
    </div>
  )
}

export default Profile
