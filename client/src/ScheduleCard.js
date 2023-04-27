import React from 'react'
import './styles/ScheduleCard.css' 

const ScheduleCard = ({schedule}) => {
    console.log('from schedule card: ', schedule)
  return (
    <div>
        <div className='time-container'>
            <p>Time of day: {schedule.time_of_day}</p>
        </div>
    </div>
  )
}

export default ScheduleCard
