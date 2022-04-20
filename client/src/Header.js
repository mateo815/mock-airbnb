import React from 'react'
import ProfileButton from './ProfileButton'
import LogoutButton from './LogoutButton'
import {Link} from "react-router-dom"

function Header({setUser, user}) {

  console.log(user)
  
  return (
    <div className='header__center'>
        <div className="logout_btn">
          <LogoutButton setUser={setUser}/>
        </div>
        <div id='user_welcome'>
            <h3>Welcome Back {user.name}!</h3>
            <Link to={`/users/${user.id}`}>
                <ProfileButton />
            </Link>
          </div>
        <h1 id="title">air-MQ</h1>
        
          
    </div>
  )
}

export default Header