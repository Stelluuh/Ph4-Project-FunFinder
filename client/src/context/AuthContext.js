import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

//This will be used to create a context object with a default value of null
const UserContext = React.createContext();

//This component will be used to wrap the entire application and provides the context to all the components
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [allActivities, setAllActivities] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errors, setErrors] = useState([])
  
  const navigate = useNavigate()
  const location = useLocation()
  



    const checkLogin = () => {
      fetch('/me')
        .then(response => response.json())
        .then(data => {
          setUser(data)
          if (data.errors) {
            setIsLoggedIn(false)
            setErrors(data.errors)
          } else
          // setUser(data);
          setIsLoggedIn(true);
          // setIsLoggedIn(!data.errors);

        })
    };
  
    useEffect(() => {
      checkLogin();
    }, [isLoggedIn]);

    useEffect(() => {
      fetch('/activities')
      .then(response => response.json())
      .then(data => setAllActivities(data))
    }, [isLoggedIn])

    useEffect(() => {
      setErrors([])
    }, [location.pathname]) // this will clear the errors array whenever the user navigates to a new page

    const addActivity = (activity) => {
      fetch('/activities', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(activity)
      })
      .then(response => response.json())
      .then(newActivity => {
        if(!newActivity.errors) {
        console.log(newActivity)
        setAllActivities([...allActivities, newActivity])
      } else {
        const errorLi = newActivity.errors.map(error => <li key={error}>{error}</li>)
        setErrors(errorLi)
        }
      })
    }

    const addSchedule = (schedule) => { // schedule is the data we get back from the server from a form submission.
      fetch('/schedules', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(schedule)
      })
      .then(response => response.json())
      .then(newSchedule => {
        if (!newSchedule.errors) {
        setUser({ ...user, schedules: [...user.schedules, newSchedule]})
        } else {
          const errorLi= newSchedule.errors.map(error => <li key={error}>{error}</li>)
          setErrors(errorLi)

        }
      })    
    }

    const updateSchedule = (updatedSchedule) => {
      fetch(`/schedules/${updatedSchedule.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedSchedule)
      })
      .then(response => response.json())
      .then(updatedScheduleData => {
        setUser({...user, schedules: user.schedules.map(schedule => {
          if (schedule.id === updatedScheduleData.id) {
            return updatedScheduleData;
          } else {
            return schedule;
          }
        })})
      })
    }

    const deleteSchedule = (id) => {
      fetch(`/schedules/${id}`, {
        method: 'DELETE',
      })
      .then(setUser({...user, schedules: [...user.schedules.filter(schedule => schedule.id !== id)]} ))
    }

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
      setErrors([])
      
   }

  return ( 
   //the values in this UserContext object will be available to all the components wrapped inside the UserProvider component
    <UserContext.Provider value={{ 
        user, 
        signup, 
        login, 
        logout, 
        isLoggedIn, 
        errors,
        setErrors,
        addSchedule,
        deleteSchedule,
        checkLogin,
        allActivities,
        addActivity,
        updateSchedule
       }}> 
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }