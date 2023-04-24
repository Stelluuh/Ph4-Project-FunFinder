import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <NavLink to="/login">
            <button>Login</button>
        </NavLink>
        <h3> or </h3>
        <NavLink to="/login">
            <button>Signup</button>
        </NavLink>
    </div>
  )
}

export default Navbar
