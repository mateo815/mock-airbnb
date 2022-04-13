import React from 'react'
import LogoutButton from './LogoutButton'

function Header({setUser}) {
  return (
    <div className='header__center'>
        <LogoutButton setUser={setUser}/>
    </div>
  )
}

export default Header