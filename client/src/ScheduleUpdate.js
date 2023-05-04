import React, {useEffect, useState } from 'react'

const ScheduleUpdate = () => {

  const [edit, setEdit] = useState(false)
  const [activity, setActivity] = useState(activity.name)

 


  const handleSubmit = (e) => {
    e.preventDefault()
    setEdit(false)
  }


  if (!edit) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Time of Day' />
          <input type='text' placeholder='Activity' />
          <button type='submit'>Update</button>
        </form>
        
      </div>
    )
  }
}

export default ScheduleUpdate
