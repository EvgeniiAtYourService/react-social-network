import React from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersCountAC } from '../../redux/users-reducer'
import Users from './Users'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    },
    setUsersCount: (usersCount) => {
      dispatch(setUsersCountAC(usersCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)


export default UsersContainer
