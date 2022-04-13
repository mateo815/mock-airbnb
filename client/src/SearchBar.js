import React, { useState, useEffect } from 'react'

function SearchBar({listings}) {
  
  // const [filteredListings, setFilteredListings] = useState([])
  const [location, setLocation] = useState('')

  // const handleFilter = (e) => {
  //   const searchLocation = e.target.value;
  //   setLocation(searchLocation);
  //   const newFilter = listings.filter((listing) => {
  //     return listing.location.toLowerCase().includes(searchLocation.toLowerCase());
  //   });
  // }

  const onSubmit = (e) => {
    e.preventDefault()
    
    fetch("/search", {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      
      body: JSON.stringify({location: location})
    })
    .then((r) => r.json())
    .then(data => console.log(data))
  }

    
    

  

  return (
    <div className='search'> Where you Heading?
      <form onSubmit={onSubmit} className='form' >
                <div className="field">
                    <label>search</label>
                    <input type="text"  onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button className="form-button" type="submit" >Search</button>
      </form>
      <div className='searchResult'>
        {listings.map((value, key) => {
          return <div> {value.location} </div>
        })}

      </div>
    </div>
  );
}

export default SearchBar
