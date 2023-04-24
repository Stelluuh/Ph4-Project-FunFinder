import React, { useState, useEffect } from 'react'

//This will be used to create a context object with a default value of null
const UserContext = React.createContext();

//This component will be used to wrap the entire application and provides the context to all the components
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    const login =(user) => {
        setUser(user)
    }



  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }