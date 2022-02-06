import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsFetching,
  toggleIsFollowing,
} from '../../redux/users-reducer'
// import UsersAPIComponent from './UsersAPIComponent'
import Axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../API/api'

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setUsersCount(data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false)
      this.props.setUsers(data.items)
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsFetching,
  toggleIsFollowing,
})(UsersAPIComponent)

export default UsersContainer
