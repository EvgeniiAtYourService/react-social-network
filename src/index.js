import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'


console.log(store);
const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App appState={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}


rerenderEntireTree(store.getState()) 

store.subscribe( () => {
  const state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals()
