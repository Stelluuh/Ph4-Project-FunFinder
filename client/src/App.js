import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/AuthContext';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Navbar from './Navbar';
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
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
