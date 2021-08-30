import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, num: '1', message: 'Hi, hwru' },
        { id: 2, num: '2', message: "What's the weather today" },
        { id: 3, num: '3', message: 'i want kfc' },
      ],
      currentTextareaValue: '',
    },

    messagesPage: {
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
    },

    sideBar: {},
  },
  _callSubscriber() {
    alert('no subscriber')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)

    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

    this._state.sideBar = sidebarReducer(this._state.sideBar, action)

    this._callSubscriber(this._state)
  },
}

window.store = store





export default store
