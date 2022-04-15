import React from 'react'

function Listing({listing}) {

  
  return (
    <div>
      <img src={listing.images[4]}></img>
    </div>
  )
}

export default Listing