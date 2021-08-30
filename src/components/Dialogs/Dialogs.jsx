import React from 'react'
import cls from './Dialogs.module.css'
import PersonName from './PersonName/PersonName'
import PersonChat from './PersonChat/PersonChat'
import { addMessage, changeMessageValue } from '../../redux/dialogs-reducer'

function Dialogs(props) {

  // const messagesArray = props.dialogsState.messages.map((chat) => (
  //   <PersonChat message={chat.message} />
  // ))

  const messagesArray = props.messages.map((chat) => (
    <PersonChat message={chat.message} />
  ))

  // const peopleArray = props.dialogsState.people.map((person) => (
  //   <PersonName id={person.id} name={person.name} />
  // ))


  const peopleArray = props.people.map((person) => (
    <PersonName id={person.id} name={person.name} />
  ))

  const messageField = React.createRef()

  const handleClick = () => {
    props.addMessage(addMessage())
  }

  const handleChange = () => {
    const messageText = messageField.current.value
    props.changeInputValue(messageText)
  }

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>{peopleArray}</div>
      <div className={cls.messagesItems}>
        <div>{messagesArray}</div>
        <textarea
          ref={messageField}
          value={props.currentInputValue}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  )
}

export default Dialogs
