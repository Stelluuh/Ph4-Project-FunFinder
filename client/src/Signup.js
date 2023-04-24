import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

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
    </div>
  )
}

export default Signup
