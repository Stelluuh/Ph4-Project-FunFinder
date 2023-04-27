import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext'
import ScheduleCard from './ScheduleCard'


const Schedules = () => {
  const { user, isLoggedIn } = useContext(UserContext)
  console.log('from schedules: ', user.schedules)
  
  if (isLoggedIn) {
    const scheduleList = user.schedules.map(schedule => {
      return <ScheduleCard key={schedule.id} schedule={schedule} />
    })
    return (
      <div>
        <h3>My Schedule</h3> 
        {scheduleList}     
        <button>Add Schedule</button>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Please Login or Signup</h3>
      </div>
    )
  }
  

}


export default Schedules
