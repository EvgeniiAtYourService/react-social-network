import React from 'react'
import { connect } from 'react-redux'
import FollowButton from './FollowButton'
import {
  follow,
  unfollow,
  toggleIsBtnLoading,
  toggleIsFollowing,
} from '../../../redux/users-reducer'
import Axios from 'axios'
import { usersAPI } from '../../../API/api'

class FollowButtonAPIContainer extends React.Component {
  // constructor(props) {
  //   super(props)

  // }
  componentDidMount() {
    // this.props.toggleIsBtnLoading(true)
    console.log(this.props)
    Axios.get(
      'https://social-network.samuraijs.com/api/1.0/follow/' + this.props.id,
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        if (res.data === true) {
          this.props.follow(this.props.id)
        } else {
          this.props.unfollow(this.props.id)
        }
        // this.props.toggleIsBtnLoading(false)
      })
      .catch((err) => {
        console.log(err.response)
        alert('Ошибка определения подписки')
        // this.props.toggleIsBtnLoading(false)
      })
  }

  follow(userId) {
    // this.props.toggleIsBtnLoading(true)
    // console.log('qwe', this.props)
    usersAPI
      .followUser(userId)
      .then((data) => {
        console.log(data)
        // this.props.toggleIsBtnLoading(false)
        // this.props.follow(this.props.id)
        // this.props.toggleIsFollowing(false)
        this.props.toggleIsFollowing(false)
      })
      .catch((err) => {
        console.log(err.response)
        console.log(err)
        alert('Ошибка подписки')
        // this.props.toggleIsBtnLoading(false)
        // this.props.toggleIsFollowing(false)
      })
  }

  unfollow(userId) {
    // this.props.toggleIsBtnLoading(true)
    // this.props.toggleIsFollowing(true)
    usersAPI
      .unfollow(userId)
      .then((data) => {
        console.log(data)
        // this.props.toggleIsBtnLoading(false)
        // this.props.unfollow(this.props.id)
        this.props.toggleIsFollowing(false)
      })
      .catch((err) => {
        console.log(err.response)
        console.log(err)
        alert('Ошибка подписки')
        // this.props.toggleIsBtnLoading(false)
        // this.props.toggleIsFollowing(false)
      })
  }

  render() {
    return (
      <FollowButton
        followed={this.props.followed}
        id={this.props.id}
        isBtnLoading={this.props.isBtnLoading}
        follow={this.follow}
        unfollow={this.unfollow}
        isFollowing={this.props.isFollowing}
        toggleIsFollowing={this.props.toggleIsFollowing}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    followed: ownProps.uFollowed,
    id: ownProps.uId,
    isBtnLoading: state.usersPage.btnIsLoading,
    isFollowing: state.usersPage.isFollowing,
  }
}

const FollowButtonContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  toggleIsBtnLoading,
  toggleIsFollowing,
})(FollowButtonAPIContainer)

export default FollowButtonContainer
