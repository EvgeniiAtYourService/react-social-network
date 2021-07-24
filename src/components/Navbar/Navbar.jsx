import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

function Navbar() {
    return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                  <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={classes.item}>
                  <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={classes.item}>
                  <NavLink to="/news">News</NavLink>
                </div>
                <div className={classes.item}>
                  <a>Music</a>
                </div>
                <div className={classes.item}>
                  <a>Settings</a>
                </div>
            </nav>
    )
}

export default Navbar
