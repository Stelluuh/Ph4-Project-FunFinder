import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/AuthContext'
import './styles/ScheduleCard.css' 

const ScheduleCard = ({ schedule, activities }) => {
    const { deleteSchedule, isLoggedIn, checkLogin } = useContext(UserContext)

    useEffect(() => {
        checkLogin()
    }, [])

    const userActivities = activities.map(activity => {
        if (activity.id === schedule.activity_id) {
            return <li key={activity.id}>{activity.name}</li>
        } else {
            return null
        }
    })

    console.log(userActivities)

    if (!isLoggedIn) {
        return (
            <div>
                <h3>Please Login or Signup</h3>
            </div>
        )
    } else {
      return (
        <div>
            <div className='time-container'>
                <p>Time of day: {schedule.time_of_day}</p>
                {userActivities}
                <button onClick={() => deleteSchedule(schedule.id)}>Complete</button>
            </div>
        </div>
      )
    }
}

export default ScheduleCard
