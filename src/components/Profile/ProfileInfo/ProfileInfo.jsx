import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import css from './ProfileInfo.module.css'

function ProfileInfo(props) {
  if (!props.profile) {
    return <Preloader />
  } else { 
  return (
    <div>
      <div>
        <img src={props.profile.photos.large}></img>
      </div>
      <div className={css.descriptionBlock}>ava + des</div>
    </div>
  )
  }
}

export default ProfileInfo
