import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext'

const ActivityCard = ({activity}) => {
  const { deleteActivity, isLoggedIn } = useContext(UserContext)
  // console.log({activity})
  const {name, childs_age, description, duration, id} = activity

  if (!isLoggedIn) {
  return (
    <div>
      <h3>Please Login or Signup</h3>
    </div>
  )
} else {

  return (
    <div className='activity-card'>
      <h3>{name}</h3>
      <p>Child's Age: {childs_age}</p>
      <p>Description: {description}</p>
      <p>Duration: {duration} minutes</p>
      <button onClick={() => deleteActivity(id)}>x</button>
    </div>
  )
}
}

export default ActivityCard
