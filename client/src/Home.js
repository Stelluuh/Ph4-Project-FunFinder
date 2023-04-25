import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/AuthContext';

// This is the home page that will be displayed when the user is logged in


const Home = () => {

  const navigate = useNavigate()
  const { user, isLoggedIn } = useContext(UserContext)

    if(isLoggedIn) { // if the user is logged in, display the home page
      return (
        <div>
          <h1>Hello {user.username}</h1>
        </div>
      )
    } else { // if the user is not logged in, redirect to the login page
      <h3>Please Login or Signup</h3>
      // navigate('/login')
    }

    //q: how do I keep the user logged in after hitting refresh?
    //a: we need to make a request to the server to check if the user is logged in
    //   we can do this in the useEffect hook in the AuthContext.js file
  
  return (
    <div>
      <h1>Hello from Home Page</h1>
    </div>
  )
}

export default Home
