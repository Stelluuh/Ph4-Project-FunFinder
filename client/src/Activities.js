import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/AuthContext'
import ActivityCard from './ActivityCard'
import ActivityForm from './ActivityForm'
import './styles/Activities.css'


const Activities = () => {
  const { isLoggedIn, checkLogin, allActivities } = useContext(UserContext)

  useEffect(() => {
    checkLogin()
  }, [])


  // const renderAllActivities = allActivities.map(activity => {
  //   return <ActivityCard key={activity.id} activity={activity}/>
  // })
  


  
  
  return (
    <div className="activities-container">
      {isLoggedIn ? (
        <>
          <h1>activities<span class="list">list</span></h1>
            <ActivityForm />
          <div className="activity-cards">
            {/* {renderAllActivities} */}
            {allActivities.map(activity => {
              return <ActivityCard key={activity.id} activity={activity}/>
            })}
          </div>
  
        </>
      ) : (
        <h3>Please Login or Signup</h3>
        )}
    </div>
  )
}

export default Activities
