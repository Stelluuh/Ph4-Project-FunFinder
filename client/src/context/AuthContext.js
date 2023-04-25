import React, { useState, useEffect } from 'react'

//This will be used to create a context object with a default value of null
const UserContext = React.createContext();

//This component will be used to wrap the entire application and provides the context to all the components
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/me') 
            .then(response => response.json()) // we are getting the response back from the server and converting it to json
            .then(data => {
                console.log('from authcontext:', data)
                setUser(data) // setting the user state to the data we get back from the server
                data.error ? setIsLoggedIn(false) : setIsLoggedIn(true) // if the data has an error property, set isLoggedIn to false, otherwise set it to true
            })
    }, [])

   const signup = (user) => {
      setUser(user) // setting the user state to the data we get back from the server
      setIsLoggedIn(true) // setting isLoggedIn to true
   }

   const login =(user) => {
      setUser(user)
      setIsLoggedIn(true)
   }

   const logout = () => {
      setUser({})
      setIsLoggedIn(false)
   }

  return ( 
   //the values in this UserContext object will be available to all the components wrapped inside the UserProvider component
    <UserContext.Provider value={{ user, signup, login, logout, isLoggedIn }}> 
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }