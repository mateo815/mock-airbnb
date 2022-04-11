import React from 'react'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'
function StartPage({setUser, setIsLoggedIn}) {
  return (
    <div>
        <SigninForm setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
        <h2 id='member'>Not a member?</h2>
        <SignupForm/>  
    </div>
  )
}

export default StartPage