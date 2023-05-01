import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext';

const ScheduleForm = () => {
    const [timeOfDay, setTimeOfDay] = useState('')
    const [activityId, setActivityId] = useState('')

    const {addSchedule, allActivities, addActivities} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addSchedule({ // we are passing the schedule object to the addSchedule function in AuthContext.js
            time_of_day: timeOfDay,// this comes from state
            activtiy_id: activityId
        })

        setTimeOfDay('') // reset the form
   
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
                <select>
                    <option 
                        value="{activityId}"
                        onChange = {(e) => {setActivityId(e.target.value)}}
                    >Select an Activity
                    </option>
                    {activityOptions}
                </select>

                <input type="submit" value="Add Schedule"/>
            </form>
        </div>
    )
}

export default ScheduleForm