import React from 'react'
import css from './PersonChat.module.css'

function PersonChat(props) {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    )
}

export default PersonChat
