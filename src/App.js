import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react'

import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import ChatPage from './pages/ChatPage';
import Explore from './pages/Explore';
import LoginLogout from './pages/LoginLogout';
import './App.css';
import DetailUser from './pages/DetailUser';

import getApi from './api/getApi';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getApi.getUserLogin().then(res => {
      console.log("res", res.data);
      setUsers(res.data)
    })
  }, [])

  const [checkId, setCheckId] = useState(false)

  const handleLogin = () => {

  }

  return (
    <div className="App">
      {checkId ?
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/detail/:id" element={<DetailUser />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<LoginLogout />} />
        </Routes>
      }
    </div>
  );
}

export default App;

