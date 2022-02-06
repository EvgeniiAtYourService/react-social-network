import React from 'react'
import styles from './Users.module.css'
import userDef from '../../assets/images/userDef.png'
import { NavLink } from 'react-router-dom'
import FollowButtonContainer from './FollowButton/FollowButtonContainer'

function Users(props) {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  // console.log(pagesCount)
  // console.log(pages)
  return (
    <div>
      {pages.map((pageNumber) => {
        return (
          <span
            onClick={() => {
              props.onPageChanged(pageNumber)
            }}
            className={props.currentPage === pageNumber && styles.selectedPage}
            style={{ cursor: 'pointer', marginRight: '5px' }}
          >
            {pageNumber}
          </span>
        )
      })}

      {props.users.map((u) => (
        <div key={u.id}>
        
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userDef}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <FollowButtonContainer uFollowed={u.followed} uId={u.id} />
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
