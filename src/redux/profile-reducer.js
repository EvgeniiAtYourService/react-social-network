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
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts.length + 1,
        message: state.currentTextareaValue,
      })
      state.currentTextareaValue = ''
      return state
    case CHANGE_TEXTAREA_VALUE:
      state.currentTextareaValue = action.newValue
      return state
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


