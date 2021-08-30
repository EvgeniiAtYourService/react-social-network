import React from 'react'
import { addMessage, changeMessageValue } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'


function DialogsContainer(props) {
  const state = props.store.getState().dialogsPage

  const newMessageBody = state.messagesTextareaValue


  const handleClick = () => {
    props.store.dispatch(addMessage())
  }

  const handleChange = (messageText) => {
    props.store.dispatch(changeMessageValue(messageText))
  }

  return  <Dialogs addMessage={handleClick} currentInputValue={newMessageBody} changeInputValue={handleChange} messages={state.messages} people={state.people} />
  
}

export default DialogsContainer
