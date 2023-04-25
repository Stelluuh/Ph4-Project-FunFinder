import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/AuthContext';

// This is the home page that will be displayed when the user is logged in


const Home = () => {

  const navigate = useNavigate()
  const { user, isLoggedIn } = useContext(UserContext)

    if(isLoggedIn) {
      return (
        <div>
          <h1>Hello {user.username}</h1>
        </div>
      )
    } else {
      <h3>Please Login or Signup</h3>
      navigate('/login')
    }
  
  return (
    <div>
      <h1>Hello from Home Page</h1>
    </div>
  )
}

export default Home
