import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/AuthContext';
// import Button from '@material-ui/core/Button';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const { login } = useContext(UserContext) // we get the login function from the UserContext because we need to update the user state in the UserContext
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // create a POST request to /login
    // if there are no errors, redirect to the home page
    // if there are errors, display them
    
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // we are sending json data to the server
      }, 
      body: JSON.stringify({ // we are sending the username and password from the form to the server
        username: username,
        password: password
      })
    })
      .then(response => response.json()) // we are getting the response back from the server and converting it to json
      .then(user => { // we are getting the user back from the server
        console.log('from login- user.error:', user.error)
        console.log('from login- user:', user)
        // if no errors:
        //   we login the user by calling the login function from the UserContext
        //   direct to homepage
        if(!user.errors) {
          login(user)
          navigate('/')
        } else {
        // if errors = display on page
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
        {/* <Button type='submit' variant="outlined">submit</Button> */}
        <ul>
          {errors}
        </ul>
      </form>
    </div>
  )
}

export default Login
