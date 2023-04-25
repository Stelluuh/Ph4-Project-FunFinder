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

    if(isLoggedIn) { // if the user is logged in, display the home page
      return (
        <div>
          <h3>Hello {user.username}. See your activities below:</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )
    } else {
      return(
        <div>
          <NavLink to="/login">
              <button>Login</button>
          </NavLink>
          <NavLink to="/signup">
              <button>Signup</button>
          </NavLink>
        </div>
      )
    }
}

//   return(
//     <div>
//       <NavLink to="/login">
//           <button>Login</button>
//       </NavLink>
//       <NavLink to="/signup">
//           <button>Signup</button>
//       </NavLink>
//     </div>
//   )
// }

export default Navbar
