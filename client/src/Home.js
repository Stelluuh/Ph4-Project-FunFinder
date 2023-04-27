import React, { useContext } from 'react'
import { UserContext } from './context/AuthContext';


// This is the home page that will be displayed when the user is logged in


const Home = () => {

  const { user, isLoggedIn } = useContext(UserContext)

    if(isLoggedIn) { // if the user is logged in, display the home page
      return (
        <div>
          <h1>{user.name}'s FunFinder</h1>
        
        </div>
      )
    } else { 
      return(
        <div>
          <h1>Welcome to FunFinder Homepage</h1>
          <h3>Please Login or Signup</h3>
        </div>
      )
    }
}
  
//   return (
//     <div>
//       <h1>Welcome to FunFinder Homepage</h1>
//     </div>
//   )
// }

export default Home
