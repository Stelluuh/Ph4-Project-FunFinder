import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/AuthContext'
import ScheduleCard from './ScheduleCard'
import ScheduleForm from './ScheduleForm'


const Schedules = () => {
  const { user, isLoggedIn, checkLogin } = useContext(UserContext)
  
  useEffect(() => {
    checkLogin() // Call the checkLogin function when the component mounts
  }, [])

  const scheduleList = user?.schedules?.map(schedule => {
    return <ScheduleCard key={schedule.id} schedule={schedule} />
  })

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h3>My Schedule</h3> 
          {scheduleList}     
          <ScheduleForm />
        </>
      ) : (
        <h3>Please Login or Signup</h3>
      )}
    </div>
  )
}

// const Schedules = () => {
//   const { user, isLoggedIn } = useContext(UserContext)
  
//   if (isLoggedIn) { 
//     const scheduleList = user?.schedules?.map(schedule => { //adding the ? after user and schedules checks to see if they exits and it will prevent the error 'cannot read properties of undefined(reading 'map) from happening if the user is not logged in
//       return <ScheduleCard key={schedule.id} schedule={schedule} />
//     })

//     return (
//       <div>
//         <h3>My Schedule</h3> 
//         {scheduleList}     
//         <ScheduleForm />
//       </div>
//     )
//   } else {
    
//     return (
//       <div>
//         <h3>Please Login or Signup</h3>
//       </div>
//     )
//   }
  

// }



export default Schedules
