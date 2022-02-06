import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.resultCode === 0) {
          const { login, id, email } = res.data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authState.isAuth,
    login: state.authState.login
  }
}

const HeaderSecondContainer = connect(mapStateToProps, { setAuthUserData })(
  HeaderContainer
)
export default HeaderSecondContainer
