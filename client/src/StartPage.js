import React from 'react'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
function StartPage({setUser, setIsLoggedIn}) {
  return (
    <div>
        <h2>Login</h2>
        <SigninForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
        <h2>Register Here</h2>
        <SignupForm/>  
    </div>
  )
}

export default StartPage