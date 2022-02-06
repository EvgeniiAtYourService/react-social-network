import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

function Header(props) {
  return (
    <header className={classes.header}>
      <img
        className={classes.img}
        src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ?
        props.login
        :
        <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header
