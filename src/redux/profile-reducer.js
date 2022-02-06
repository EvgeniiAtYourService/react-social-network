const ADD_POST = 'ADD-POST'
const CHANGE_TEXTAREA_VALUE = 'CHANGE-TEXTAREA-VALUE'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialState = {
  posts: [
    { id: 1, num: '1', message: 'Hi, hwru' },
    { id: 2, num: '2', message: "What's the weather today" },
    { id: 3, num: '3', message: 'i want kfc' },
  ],
  currentTextareaValue: '',
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        currentTextareaValue: '',
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: state.currentTextareaValue,
          },
        ],
      }

    // stateCopy.posts = [...state.posts]
    // stateCopy.posts.push({
    //   id: state.posts.length + 1,
    //   message: state.currentTextareaValue,
    // })
    // stateCopy.currentTextareaValue = ''

    case CHANGE_TEXTAREA_VALUE:
      return {
        ...state,
        currentTextareaValue: action.newValue,
      }

    // stateCopy.posts = [...state.posts]
    // stateCopy.currentTextareaValue = action.newValue
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const changeTextareaValueActionCreator = (text) => ({
  type: CHANGE_TEXTAREA_VALUE,
  newValue: text,
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export default profileReducer
