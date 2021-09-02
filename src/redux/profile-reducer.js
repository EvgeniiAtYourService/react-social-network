const ADD_POST = 'ADD-POST'
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE'

const initialState = {
    posts: [
      { id: 1, num: '1', message: 'Hi, hwru' },
      { id: 2, num: '2', message: "What's the weather today" },
      { id: 3, num: '3', message: 'i want kfc' },
    ],
    currentTextareaValue: '',
  }

const profileReducer = (state = initialState, action) => {
  
  let stateCopy = {...state}

  switch (action.type) {
    case ADD_POST:
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push({
        id: state.posts.length + 1,
        message: state.currentTextareaValue,
      })
      stateCopy.currentTextareaValue = ''
      return stateCopy
    case CHANGE_TEXTAREA_VALUE:
      stateCopy.posts = [...state.posts]
      stateCopy.currentTextareaValue = action.newValue
      return stateCopy
    default:
      return state
  }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const changeTextareaValueActionCreator = (text) => ({
  type: CHANGE_TEXTAREA_VALUE,
  newValue: text,
})


export default profileReducer


