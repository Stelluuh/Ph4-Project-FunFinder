import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext'


const ActivityForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [childsAge, setChildsAge] = useState('')
    const [duration, setDuration] = useState('')
    const { addActivity } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addActivity({
            name: name.toLowerCase(),
            description: description.toLowerCase(),
            childs_age: childsAge,
            duration: duration
        })
        setName('')
        setDescription('')
        setChildsAge('')
        setDuration('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Activity Form</label>
        <input
            type="text"
            name="name"
            placeholder="Activity Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            name="description"
            placeholder="Activity Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <input
            type="text"
            name="childs_age"
            placeholder="Child's Age"
            value={childsAge}
            onChange={(e) => setChildsAge(e.target.value)}
        />
        <input
            type="text"
            name="duration"
            placeholder="Duration(minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
        />
        <input type="submit" value="Add Activity"/>
      </form>
    </div>
  )
}

export default ActivityForm
