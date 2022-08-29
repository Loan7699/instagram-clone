import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useReducer, useState } from 'react'

import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ChatPage from './pages/ChatPage';
import Explore from './pages/Explore';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';
import DetailUser from './pages/DetailUser';
import AppReducer from './reducer/AppReducer.js'
import AppContext from './components/AppContext';

import getApi from './api/getApi';

function App() {
  const initialState = { user: null, posts: [] }
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <div className="App">
      <AppContext.Provider value={{state, dispatch}}>
      <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/detail/:id" element={<DetailUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="register/" element={<Register />} />
        
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;

