import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileAPIWrapper from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'




const App = (props) => {
  return (
    // Компонента возвращает JSX разметку / тег / <
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?">
          <ProfileAPIWrapper />
        </Route>
        <Route path="/dialogs">
          <DialogsContainer />
        </Route>
        <Route path="/users">
          <UsersContainer />
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
