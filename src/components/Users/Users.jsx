import React, { Component } from 'react'
import styles from './Users.module.css'
import Axios from 'axios'
import userDef from '../../assets/images/userDef.png'



export default class UsersC extends Component {
 
    componentDidMount() {
    alert('new')
     Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
        this.props.setUsers(response.data.items)
    })     
 }

  render() {
    
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    console.log(pagesCount);
    console.log(pages);
    return (
      <div> 
      {pages.map((pageNumber) => {
        return (<span className={ this.props.currentPage === pageNumber && styles.selectedPage } >{pageNumber}</span>)
      })}

        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userDef}
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
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




}
