import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

const App = (props) => {
  return (
    // Компонента возвращает JSX разметку / тег / <
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile">
          <Profile
            profileState={props.appState.profilePage}
            addPostFun={props.addPostFun}
          />
        </Route>
        <Route path="/dialogs">
          <Dialogs dialogsState={props.appState.messagesPage} />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </div>
    </div>
  )
}

export default App

// конструкторы функций, объекты, КОМПОНЕНТЫ с большой буквы
