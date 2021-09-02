const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_MESSAGE_VALUE = 'CHANGE-MESSAGE-VALUE'

const initialState = {
    messages: [
      { id: 1, message: 'jopin' },
      { id: 2, message: 'hihi' },
      { id: 3, message: 'kfc want' },
    ],
    people: [
      { id: 0, name: 'Jora' },
      { id: 1, name: 'Gali' },
      { id: 2, name: 'Komi' },
      { id: 3, name: 'Jroa' },
    ], // trailing comma
    messagesTextareaValue: '',
  }

const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {...state}


  switch (action.type) {
    case ADD_MESSAGE:
      const mesArray = stateCopy.messages
      const message = stateCopy.messagesTextareaValue

      mesArray.push({
        id: mesArray.length + 1,
        message: message,
      })

      stateCopy.messagesTextareaValue = ''
      return stateCopy
    case CHANGE_MESSAGE_VALUE:
      stateCopy.messagesTextareaValue = action.newValue
      return stateCopy
    default:
      return state
  }
}


export const addMessage = () => ({ type: ADD_MESSAGE })
export const changeMessageValue = (text) => ({
  type: CHANGE_MESSAGE_VALUE,
  newValue: text,
})


export default dialogsReducer
