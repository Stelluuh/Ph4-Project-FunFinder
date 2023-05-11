import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext';
import './styles/Home.css'

const Home = () => {

  const { user, isLoggedIn } = useContext(UserContext)

  if(isLoggedIn) { // if the user is logged in, display the home page
    return (
      <div className="home">
        <h1>{user.name}'s <span class='fun-finder'>fun-finder</span></h1>
        <p>FunFinder is an app that helps you quickly find close-to-home activities for your kids. Just look through the activity list and select those that interest your child. Then create a schedule with the days and times that work best for you.</p>
        <p>Planning your family's activities is a breeze with FunFinder!</p>
      </div>
    )
  } else { 
    return(
      <div className="home">
        <h1>Welcome to FunFinder Homepage</h1>
        <h3>Please Login or Signup</h3>
        <p>FunFinder is an app that helps you quickly find close-to-home activities for your kids. Just look through the activity list and select those that interest your child. Then create a schedule with the days and times that work best for you.</p>
        <p>Planning your family's activities is a breeze with FunFinder!</p>
      </div>
    )
  }
}

export default Home
