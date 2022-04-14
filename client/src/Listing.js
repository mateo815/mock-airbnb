import React from 'react'

function Listing({listing}) {

  
  return (
    <div>
      <img src={listing.images[0]}></img>
    </div>
  )
}

export default Listing