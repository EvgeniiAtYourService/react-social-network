import React from 'react'
import cls from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import PersonName from './PersonName/PersonName'
import PersonChat from './PersonChat/PersonChat'

function Dialogs(props) {
  const messagesArray = props.dialogsState.messages.map((chat) => (
    <PersonChat message={chat.message} />
  ))

  const peopleArray = props.dialogsState.people.map((person) => (
    <PersonName id={person.id} name={person.name} />
  ))

  const messageField = React.createRef()

  const handleClick = () => {
    const messageText = messageField.current.value
    alert(messageText)

    
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{peopleArray}</div>
      <div className={cls.messagesItems}>
        {messagesArray}
        <textarea ref={messageField}></textarea>
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
