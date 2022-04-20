import React from 'react'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
function StartPage({setUser, setIsLoggedIn}) {
  return (
    <div>
        
        <SigninForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
        
        <SignupForm/>  
    </div>
  )
}

export default StartPage