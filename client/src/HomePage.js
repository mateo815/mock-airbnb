import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ListingCard from './ListingPage'
import LogoutButton from './LogoutButton'
import ListingContainer from './ListingContainer'
import Header from './Header'

function HomePage({setUser, listings}) {
  
  

  return (
    <div className='home'>
        <Header setUser={setUser} />
        <SearchBar listings={listings}/>
       <ListingContainer listings={listings}/>
    </div>
  )
}

export default HomePage