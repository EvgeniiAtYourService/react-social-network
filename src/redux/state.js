import { rerenderEntireTree } from "../render"

const state = {
  profilePage: {
    posts: [
      { id: 1, num: '1', message: 'Hi, hwru' },
      { id: 2, num: '2', message: "What's the weather today" },
      { id: 3, num: '3', message: 'i want kfc' },
    ],
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
  },

  sideBar: {},
}

export const addPost = (messageText) => {
  const {
    profilePage: { posts: postsArray },
  } = state

  postsArray.push({
    id: postsArray.length + 1,
    message: messageText, 
  })


  rerenderEntireTree(state)

    // console.log(postsArray);
}

export default state
