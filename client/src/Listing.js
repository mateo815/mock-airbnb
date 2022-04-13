import React, {useState} from 'react'


function Listing({listing}) {


  


  return (
    <div>
        <img src={listing.image_url} alt='city' />
        {listing.location} 
        {listing.price}
        
    </div>
  )
}

export default Listing