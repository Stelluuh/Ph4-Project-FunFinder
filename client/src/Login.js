import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/AuthContext';
// import Button from '@material-ui/core/Button';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const { login } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      }, 
      body: JSON.stringify({ 
        username: username,
        password: password
      })
    })
      .then(response => response.json()) 
      .then(user => { 
        console.log('from login- user.error:', user.error)
        console.log('from login- user:', user)
       
        if(!user.errors) {
          login(user)
          navigate('/')
        } else {
          setUsername('')
          setPassword('')
          const logError = user.errors.map((error) => <li>{error}</li>)
          setErrors(logError)
        }
      })

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
          {errors}
        </ul>
      </form>
    </div>
  )
}

export default Login
