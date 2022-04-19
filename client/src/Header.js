import React from 'react'
import LogoutButton from './LogoutButton'

function Header({setUser, user}) {

  console.log(user)
  return (
    <div className='header__center'>
        <LogoutButton setUser={setUser}/>
  
          <h1>
            <span id='title'>airMQ</span>
          </h1>
          <h2>Welcome Back {user.name}!</h2>
      </div>
  )
}

export default Header