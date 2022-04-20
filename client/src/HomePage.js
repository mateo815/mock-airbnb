import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ListingCard from './ListingPage'
import LogoutButton from './LogoutButton'
import ListingContainer from './ListingContainer'
import Header from './Header'

function HomePage({setUser, setLocation, onSubmit, listings, user}) {
 
  

  return (
    <div className='home'>
        <Header setUser={setUser} user={user}/>
        <SearchBar setLocation={setLocation} onSubmit={onSubmit}/>
        <div>
        <ListingContainer listings={listings} user={user} />
        </div>
    </div>
  )
}

export default HomePage