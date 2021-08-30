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
  switch (action.type) {
    case ADD_MESSAGE:
      const mesArray = state.messages
      const message = state.messagesTextareaValue

      mesArray.push({
        id: mesArray.length + 1,
        message: message,
      })

      state.messagesTextareaValue = ''
      return state
    case CHANGE_MESSAGE_VALUE:
      state.messagesTextareaValue = action.newValue
      return state
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
