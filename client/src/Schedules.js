import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/AuthContext'
import ScheduleCard from './ScheduleCard'
import ScheduleForm from './ScheduleForm'


const Schedules = () => {
  const [formFlag, setFormFlag] = useState(false) // this is to hide the form after it is submitted
  const { user, isLoggedIn, checkLogin, allActivities } = useContext(UserContext)

  const addScheduleFlag = () => {
    setFormFlag(false)
  }

  useEffect(() => { // useEffect is a hook that allows us to perform side effects (execut outside normal flow in rendering process). It runs after the component renders for the first time.
    checkLogin() // Call the checkLogin function when the component mounts
  }, [])


  const scheduleList = user?.schedules?.map(schedule => {
    return <ScheduleCard key={schedule.id} schedule={schedule} activities={allActivities} />
  })

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h3>My Schedule</h3> 
          <ScheduleForm activities={allActivities} addScheduleFlag={addScheduleFlag}/>
          {scheduleList}     
        </>
      ) : (
        <h3>Please Login or Signup</h3>
      )}
    </div>
  )
}

export default Schedules
