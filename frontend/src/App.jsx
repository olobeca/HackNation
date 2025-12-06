import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import UserContext from './context/UserContext';
import {useState} from 'react'



function App() {
  const [UserData,SetUserData] = useState({username:"",userDepartment:""})
  return (
    <>
      <UserContext.Provider value={{UserData:UserData,SetUserData:SetUserData}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
