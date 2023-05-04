import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/AuthContext'
import './styles/ScheduleCard.css' 

const ScheduleCard = ({ schedule, activities }) => {
    const { deleteSchedule, updateSchedule, isLoggedIn, checkLogin } = useContext(UserContext)
    const [editing, setEditing] = useState(false)
    const [timeOfDay, setTimeOfDay] = useState(schedule.time_of_day)
    const [activityId, setActivityId]= useState(schedule.activity.id)
    

    useEffect(() => {
        checkLogin()
    }, [])

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

    //INSTEAD OF THIS, WE CAN DO schedule.activity.name
    // const userActivities = activities.map(activity => {
    //     if (activity.id === schedule.activity_id) {
    //         return <li key={activity.id}>{activity.name}</li>
    //     } else {
    //         return null
    //     }
    // })

    // console.log(userActivities)

    if (!isLoggedIn) {
        return (
          <div>
            <h3>Please Login or Signup</h3>
          </div>
        );
      } else if (editing) {
        return (
          <form className="time-container" onSubmit={handleSubmit}>
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
      } else {
        return (
          <div>
            <div className="time-container">
              <p>Time of day: {schedule.time_of_day}</p>
              <p>Activity: {schedule.activity.name}</p>
              {/* {userActivities} */}
              <button onClick={() => deleteSchedule(schedule.id)}>Complete</button>
              <button onClick={() => setEditing(true)}>Edit</button>
            </div>
          </div>
        );
      }
    };


export default ScheduleCard



