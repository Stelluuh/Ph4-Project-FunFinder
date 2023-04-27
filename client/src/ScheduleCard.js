import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext'
import './styles/ScheduleCard.css' 

const ScheduleCard = ({schedule}) => {
    const { deleteSchedule, isLoggedIn } = useContext(UserContext)

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
                <button onClick={() => deleteSchedule(schedule.id)}>x</button>
            </div>
        </div>
      )
    }
}

export default ScheduleCard
