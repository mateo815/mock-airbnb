import React, { useState, useEffect } from 'react'

function SearchBar({onSubmit, setLocation}) {
  
  
  // const [location, setLocation] = useState('')
  // const [listings, setListings] = useState([])
  

  

  // const onSubmit = (e) => {
  //   e.preventDefault()
    
  //   fetch("/search", {
  //     method:'POST',
  //     headers: {"Content-Type": "application/json"},
      
  //     body: JSON.stringify({location: location})
  //   })
  //   .then((r) => r.json())
  //   .then(data => setListings(data))
  // }

 

//   const searchListings = (input) => {
//     const availableListings = listings.map((l) => l.city === input.city)
//     setListings(availableListings)
// }

    
  
  

  return (
    <div className='search'> Where you Heading?
      <form onSubmit={onSubmit} className='form' >
                <div className="field">
                    <label>search</label>
                    <input type="text"  onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button className="form-button" type="submit" >Search</button>
      </form>
      
      {/* <div className='searchResult'>
        {listings.map((value, key) => {
          return <div> {value.location} </div>
        })}

      </div> */}
    </div>
  );
}

export default SearchBar
