import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header'


function ListingPage({listings, user, setUser}) {
  
  const {id} = useParams() 
  const listing = listings.find(l => l.id == id)
  
  console.log(listing)
  

  const [check_in, setCheckIn] = useState('')
  const [check_out, setCheckOut] = useState('')
  

  const onSubmit = (e) => {
      e.preventDefault()
      console.log(listing)

      const newResi = {
        check_in: check_in,
        check_out: check_out,
        api_id: id,
        location: listing.city,
        price: listing.price.rate,
        description: listing.name

      }
      
      fetch("/reservations", {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        
        body: JSON.stringify(newResi)
      })
      .then((r) => r.json())
      .then(alert(`Enjoy your Stay!`))
      
    }
  



    
  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <div className='search'>
        <div className='page_info'>
          <div id='image_container'>
            <img className='page_images' src={listing.images[0]} alt='img'></img>
            <img className='page_images' src={listing.images[1]} alt='img'></img>
            <img className='page_images' src={listing.images[2]} alt='img'></img>
            <img className='page_images' src={listing.images[3]} alt='img'></img>
          </div>
          <div id="description_container">
          <h4>{listing.address}</h4>
          <h5>${listing.price.rate}/night</h5>
          <p>{listing.name}</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className='listing_page_form' >
                <div className="field">
                    <label>Check In Date</label>
                    <input type="text" onChange={(e) => setCheckIn(e.target.value)} placeholder="DD/MM/YYYY"/>
                    <label>Check Out Date</label>
                    <input type="text" onChange={(e) => setCheckOut(e.target.value)} placeholder="DD/MM/YYYY"/>
                </div>
                
                <button className="form-button" type="submit" >Rent</button>
                
        </form>
      </div>
    </div>
  )
}

export default ListingPage