import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ListingCard from './ListingPage'
import LogoutButton from './LogoutButton'
import ListingContainer from './ListingContainer'
import Header from './Header'

function HomePage({setUser, setLocation, onSubmit, listings}) {
 
  

  return (
    <div className='home'>
        <Header setUser={setUser} />
        <SearchBar setLocation={setLocation} onSubmit={onSubmit}/>
        <ListingContainer listings={listings} />
    </div>
  )
}

export default HomePage