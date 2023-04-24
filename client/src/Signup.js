import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        // create a POST request to /signup
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
            .then(response => response.json()) // we are getting the response back from the server and converting it to json
            .then(user => {
                // we signup the user by calling the signup function from the UserContext
                    if (!user.error) {
                        signup(user)
                        // if there are no errors, redirect to the home page? navigate('/')
                    } else {
                        const listErrors = user.error.map((error) => <li>{error}</li>)
                        setErrorsList(listErrors)
                    }
                    //We do this by using the navigate function from react-router-dom
                // if there are errors, display them.
                     // We do this by setting the errorsList state to the errors we get back from the server
            })
      
           

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input
                placeholder="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                placeholder="passwordConfirmation"
                id="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
        </form>
        <hr/>
        <li>
            {errorsList}
        </li>
        
    </div>
  )
}

export default Signup
