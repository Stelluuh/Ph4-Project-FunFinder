import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { login } = useContext(UserContext) // we get the login function from the UserContext because we need to update the user state in the UserContext
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // create a POST request to /login
    // if there are no errors, redirect to the home page
    // if there are errors, display them


  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type='text'
          placeholder="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input
          type='password'
          placeholder='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input type='submit'/>
        <ul>
          {/* if there are errors, display them here*/}
        </ul>
      </form>
    </div>
  )
}

export default Login
