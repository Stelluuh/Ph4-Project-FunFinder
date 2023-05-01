import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/AuthContext'
import ActivityCard from './ActivityCard'


const Activities = () => {
  const { user, isLoggedIn, checkLogin } = useContext(UserContext)
  const [allActivities, setAllActivities] = useState([])

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     fetch('/activities')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //   }
  // }, [user])

  useEffect(() => {
    checkLogin()
  }, [])

  //All activities of all users.
  useEffect(() => {
    fetch('/activities')
    .then(response => response.json())
    .then(data => setAllActivities(data))
  }, [isLoggedIn])


  const renderAllActivities = allActivities.map(activity => {
    return <ActivityCard key={activity.id} activity={activity}/>
  })


  // //Activities that belong to user only
  // const userActivities = user?.activities?.map(
  //   activity => {
  //     return <ActivityCard key={activity.id} activity={activity}/>
  //   }
  // )



  return (
    <div>
      {isLoggedIn ? (
        <>
           <h1>Activities List</h1>
           {/* {userActivities} */}
           {renderAllActivities}

        </>
      ) : (
        <h3>Please Login or Signup</h3>
      )}
    </div>
  )
}

export default Activities
