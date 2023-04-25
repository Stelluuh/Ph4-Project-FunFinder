import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
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

export default Navbar
