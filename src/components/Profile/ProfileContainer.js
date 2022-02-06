import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    console.log(this.props)
    if (!userId) {
      userId = 2
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((res) => {
        //   this.props.toggleIsFetching(false)
        console.log(res.data)
        this.props.setUserProfile(res.data)
      })
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

const ProfileContWithURLData = withRouter(ProfileContainer)

const ProfileAPIWrapper = connect(mapStateToProps, { setUserProfile })(
  ProfileContWithURLData
)
export default ProfileAPIWrapper
