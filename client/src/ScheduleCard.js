import React, { useContext, useState } from 'react'
import { UserContext } from './context/AuthContext'
import './styles/ScheduleCard.css' 

const ScheduleCard = ({ schedule, activities }) => {
    const { deleteSchedule, updateSchedule, isLoggedIn } = useContext(UserContext)
    const [editing, setEditing] = useState(false)
    const [timeOfDay, setTimeOfDay] = useState(schedule.time_of_day)
    const [activityId, setActivityId]= useState(schedule.activity.id)
    const [showDetails, setShowDetails] = useState(false)
    

    const handleSubmit = (e) => {
        e.preventDefault();

        updateSchedule({
            id: schedule.id,
            time_of_day: timeOfDay,
            activity_id: activityId
        })
        setEditing(false)
    }

    const handleCancel = () => {
        setEditing(false)
        setTimeOfDay(schedule.time_of_day)
        setActivityId(schedule.activity.id)
    }

    if (!isLoggedIn) { //if the user is not logged in, they will see this message
        return (
          <div className="schedule-card">
            <h3>Please Login or Signup</h3>
          </div>
        );
      } else if (editing) { //if the user is logged in and editing is true, they will see this form
        return (
          <form className="schedule-card" onSubmit={handleSubmit}>
            <label>
              Time of day:
              <input
                type="text"
                value={timeOfDay}
                onChange={(event) => setTimeOfDay(event.target.value)}
              />
            </label>
            <label>
              Activity:
              <select
                value={activityId}
                onChange={(event) => setActivityId(event.target.value)}
              >
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        );
      } else { //if the user is logged in and editing is false, they will see this
        return (
          <div className="schedule-card">
            <div className="schedule-card">
              <p>Time of day: {schedule.time_of_day}</p>
              <p>Activity: {schedule.activity.name}</p>
              <button onClick={() => deleteSchedule(schedule.id)}>Complete</button>
              <button onClick={() => setEditing(true)}>Edit</button>
              <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            {showDetails && ( //if showDetails is true, then show the details
              <div className="schedule-card">
                <p>Description: {schedule.activity.description}</p>
                <p>Duration: {schedule.activity.duration} minutes</p>
              </div>
            )}
          </div>
        );
      }
    };


export default ScheduleCard



