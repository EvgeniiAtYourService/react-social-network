import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from './PersonName.module.css'

function PersonName(props) {
    const path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default PersonName
