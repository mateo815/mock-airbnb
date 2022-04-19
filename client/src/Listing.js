import React from 'react'

function Listing({listing}) {

  
  return (
    <div>
      <img src={listing.images[3]} id='thumbnail'></img>
    </div>
  )
}

export default Listing