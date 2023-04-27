import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext';

const ScheduleForm = ({ addSchedule }) => {
    const [timeOfDay, setTimeOfDay] = useState('')

    const {addSchedule} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addSchedule({ // we are passing the schedule object to the addSchedule function in AuthContext.js
            timeOfDay: timeOfDay // this comes from the
        })


    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Schedule Form</label>
                <input 
                    type="text"
                    name="time of day"
                    placeholder="time of day: (ex. morning, afternoon, evening)"
                    value={timeOfDay}
                    onChange = {(e) => setTimeOfDay(e.target.value)}
                />
                <input type="submit" value="Add Schedule" />
            </form>
        </div>
    )
}