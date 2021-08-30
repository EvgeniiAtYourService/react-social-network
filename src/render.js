import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
// import state, { addPost } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import state, { addPost, changeTextareaValue } from './redux/state'



export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state} addPostFun={addPost} changeTextareaValue={changeTextareaValue} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
 




  