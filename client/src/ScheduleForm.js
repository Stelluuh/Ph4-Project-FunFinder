import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext';
import './styles/forms.css'

const ScheduleForm = () => {
    const [timeOfDay, setTimeOfDay] = useState('')
    const [activityId, setActivityId] = useState('')

    const {addSchedule, allActivities} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addSchedule({ // we are passing the schedule object to the addSchedule function in AuthContext.js
            time_of_day: timeOfDay,// this comes from state
            activity_id: activityId
        })
        // reset the form
        setTimeOfDay('') 
        setActivityId('')
    }
    // console.log('time of day: ', timeOfDay  )

    const activityOptions = allActivities.map(activity => {
        return <option key={activity.id} value={activity.id}>{activity.name}</option>
    })

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
                <select value={activityId} onChange={(e) => setActivityId(e.target.value)}>
                    <option value="">Select an Activity</option>
                    {activityOptions}
                </select>

                <input type="submit" value="Add Schedule"/>
            </form>
        </div>
    )
}

export default ScheduleForm