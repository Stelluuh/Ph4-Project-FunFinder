import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext';

const ScheduleForm = () => {
    const [timeOfDay, setTimeOfDay] = useState('')

    const {addSchedule} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addSchedule({ // we are passing the schedule object to the addSchedule function in AuthContext.js
            time_of_day: timeOfDay// this comes from state
        })
        console.log(timeOfDay)
    }
    // console.log('time of day: ', timeOfDay  )

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Schedule Form</label>
                <input 
                    type="text"
                    name="time_of_day"
                    placeholder="(ex. morning, afternoon, evening)"
                    value={timeOfDay}
                    onChange = {(e) => {
                        setTimeOfDay(e.target.value)
                        // console.log(e.target.value)
                    }}
                />
                <input type="submit" value="Add Schedule"/>
            </form>
        </div>
    )
}

export default ScheduleForm