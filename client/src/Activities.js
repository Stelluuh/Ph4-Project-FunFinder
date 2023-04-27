import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/AuthContext'


const Activities = () => {
  const { user, isLoggedIn } = useContext(UserContext)

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/activities')
      .then(res => res.json())
      .then(data => console.log(data))
    }
  }, [user])



  return (
    <div>
      <h1>Activities List</h1>
    </div>
  )
}

export default Activities
