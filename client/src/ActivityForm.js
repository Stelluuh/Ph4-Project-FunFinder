import React, { useState, useContext } from 'react'
import { UserContext } from './context/AuthContext'


const ActivityForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [childsAge, setChildsAge] = useState('')
    const [duration, setDuration] = useState('')
    const [submitted, setSubmitted] = useState(false)
    
    const { addActivity, errors } = useContext(UserContext)


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
        setSubmitted(true)
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
      <ul>
        {errors}
      </ul>
      {!errors && submitted && <p>Activity Added!</p>}

    </div>
  )
}

export default ActivityForm
