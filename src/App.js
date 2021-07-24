import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'

const App = () => {
  return (
    // Компонента возвращает JSX разметку / тег / <
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

// конструкторы функций, объекты, КОМПОНЕНТЫ с большой буквы
