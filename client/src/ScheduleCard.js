import React from 'react'
// import Schedule from './Schedule'

const ScheduleCard = ({schedule}) => {
    console.log('from schedule card: ', schedule)
  return (
    <div>
      <h3>Schedule details</h3>
        <p>Time of day: {schedule.time_of_day}</p>
    </div>
  )
}

export default ScheduleCard
