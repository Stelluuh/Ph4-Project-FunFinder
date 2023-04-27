import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//This will be used to create a context object with a default value of null
const UserContext = React.createContext();

//This component will be used to wrap the entire application and provides the context to all the components
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [schedules, setSchedules] = useState([])
  
  const navigate = useNavigate()
  
    useEffect(() => {
        fetch('/me') 
            .then(response => response.json()) // we are getting the response back from the server and converting it to json
            .then(data => {
                
                setUser(data) // setting the user state to the data we get back from the server
                if (data.errors) { // if the data has an error property, set isLoggedIn to false, otherwise set it to true
                  setIsLoggedIn(false)
                } else {
                  setIsLoggedIn(true)
                  // getSchedules()
                }
            })
    }, [])

    // const getSchedules = () => {
    //   fetch('/schedules')
    //     .then(response => response.json())
    //     .then(data => {
    //       // console.log('from AuthContext: ', data)
    //       setSchedules(data)
    //     })
    // }

    const addSchedule = (schedule) => { // schedule is the data we get back from the server from a form submission.
      const updatedUser = {...user, schedules: [...user.schedules, schedule]} // we are creating a new user object with the new schedule added to the schedules array
      setUser(updatedUser) // we are setting the user state to the updatedUser object
    
    }

    console.log('User Data: ', user)

   const signup = (user) => {
      setUser(user) // setting the user state to the data we get back from the server
      setIsLoggedIn(true) // setting isLoggedIn to true
   }

   const login =(user) => { // we are getting the user back from the server (login.js file line 50)
      setUser(user)
      setIsLoggedIn(true)
   }

   const logout = () => {
      setUser({})
      setIsLoggedIn(false)
      navigate('/')
      
   }

  return ( 
   //the values in this UserContext object will be available to all the components wrapped inside the UserProvider component
    <UserContext.Provider value={{ 
        user, 
        signup, 
        login, 
        logout, 
        isLoggedIn, 
        addSchedule
       }}> 
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }