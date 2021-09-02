import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/redux-store'
// import StoreContext, { Provider } from './StoreContext'
import { Provider } from 'react-redux'

console.log(store);
const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}


rerenderEntireTree() 


reportWebVitals()
