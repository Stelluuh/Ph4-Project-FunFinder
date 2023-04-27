import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/AuthContext';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
import Schedules from './Schedules';
import Activities from './Activities';
import './App.css';

function App() {



  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
