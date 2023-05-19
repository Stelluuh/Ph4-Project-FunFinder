import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext'
import './styles/ActivityCard.css'

const ActivityCard = ({activity}) => {
  const { isLoggedIn } = useContext(UserContext)
  console.log({activity})
  const {name, childs_age, description, duration} = activity

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
      <p>age: {childs_age}</p>
      <p>{description}</p>
      <p>{duration} minutes</p>
      
    </div>

  )
}
}

export default ActivityCard
