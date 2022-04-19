import React from 'react'
import LogoutButton from './LogoutButton'

function Header({setUser}) {
  return (
    <div className='header__center'>
        <LogoutButton setUser={setUser}/>
  
          <h1>
            <span id='title'>airMQ</span>
          </h1>
      </div>
  )
}

export default Header