import React from 'react'
import { addMessage, changeMessageValue } from '../../redux/dialogs-reducer'
// import StoreContext from '../../StoreContext'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'

// function DialogsContainer(props) {
//   return (
//     <StoreContext.Consumer>
//       { store => {
//         const state = store.getState().dialogsPage

//         const newMessageBody = state.messagesTextareaValue

//         const handleClick = () => {
//           store.dispatch(addMessage())
//         }

//         const handleChange = (messageText) => {
//           store.dispatch(changeMessageValue(messageText))
//         }

//         return (
//           <Dialogs
//             addMessage={handleClick}
//             currentInputValue={newMessageBody}
//             changeInputValue={handleChange}
//             messages={state.messages}
//             people={state.people}
//           />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }


const mapStateToProps = (state) => {
  return {
    people: state.dialogsPage.people,
    messages: state.dialogsPage.messages,
    currentInputValue: state.dialogsPage.messagesTextareaValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue: (text) => {
      dispatch(changeMessageValue(text))
    },
    addMessage: () => {
      dispatch(addMessage())
    }
  }
}




const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)



export default DialogsContainer
