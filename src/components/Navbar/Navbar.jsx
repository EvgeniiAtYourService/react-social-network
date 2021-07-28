import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

function Navbar() {
    return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                  <NavLink activeClassName={classes.activeLink} to="/profile">Profile</NavLink>
                </div>
                <div className={classes.item}>
                  <NavLink activeClassName={classes.activeLink} to="/dialogs">Messages</NavLink>
                </div>
                <div className={classes.item}>
                  <NavLink activeClassName={classes.activeLink} to="/news">News</NavLink>
                </div>
                <div className={classes.item}>
                  <NavLink activeClassName={classes.activeLink} to='/music'>Music</NavLink>
                </div>
                <div className={classes.item}>
                  <NavLink activeClassName={classes.activeLink} to='/settings'>Settings</NavLink>
                </div>
            </nav>
    )
}

export default Navbar
