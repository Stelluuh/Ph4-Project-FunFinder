import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext';
import './styles/Home.css'

const Home = () => {

  const { user, isLoggedIn } = useContext(UserContext)

  if(isLoggedIn) { // if the user is logged in, display the home page
    return (
      <div className="home">
        <h1>{user.name}'s <span class='fun-finder'>fun-finder</span></h1>
        <p>FunFinder is an app that allows you to quickly find a list of activities for your kids. You can add an activity to your list or select an activity from our pre-populated list. Once you've created a list, you can schedule those activities for specific times of day. We hope you enjoy using FunFinder to make planning your family's activities a breeze!</p>
      </div>
    )
  } else { 
    return(
      <div className="home">
        <h1>Welcome to FunFinder Homepage</h1>
        <h3>Please Login or Signup</h3>
        <p>FunFinder is an app that allows you to quickly find a list of activities for your kids. You can add an activity to your list or select an activity from our pre-populated list. Once you've created a list, you can schedule those activities for specific times of day. We hope you enjoy using FunFinder to make planning your family's activities a breeze!</p>
      </div>
    )
  }
}

export default Home
