import React from 'react'
import css from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg"></img>
      </div>
      <div className={css.descriptionBlock}>ava + des</div>
    </div>
  )
}

export default ProfileInfo
