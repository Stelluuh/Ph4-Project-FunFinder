import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {


  const { user, isLoggedIn, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogout = () => { // when the user clicks the logout button, we send a DELETE request to /logout
      fetch('/logout', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'} //
      })
      .then(() => {
        console.log('logged out')
        logout() // we logout the user by calling the logout function from the UserContext
        navigate('/')
      })
    }

    if(isLoggedIn) { 
      return (
        <div>
          <NavLink to="/">
              <button class="secondary">Home</button>
          </NavLink>
          <NavLink to="/schedules">
              <button class="secondary">My Daily schedule</button>
          </NavLink>
          <NavLink to="/activities">
              <button class="secondary">Browse Activities</button>
          </NavLink>
          <button class="secondary" onClick={handleLogout}>Logout</button>
        </div>
      )
    } else {
      return(
        <div>
          <NavLink to="/login">
              <button class="secondary">Login</button>
          </NavLink>
          <NavLink to="/signup">
              <button class="secondary">Signup</button>
          </NavLink>
        </div>
      )
    }
}


export default Navbar
