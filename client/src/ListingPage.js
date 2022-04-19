import React, {useState} from 'react'
import { Switch, Route, useParams, Link} from 'react-router-dom'


function ListingPage({listings}) {
  
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
      
      <div className='search'>
        <div className='page_info'>
          <div id='image_container'>
            <img className='page_images' src={listing.images[0]}></img>
            <img className='page_images' src={listing.images[1]}></img>
            <img className='page_images' src={listing.images[2]}></img>
            <img className='page_images' src={listing.images[3]}></img>
            {/* <img className='page_images' src={listing.images[3]}></img>
            <img className='page_images' src={listing.images[3]}></img> */}
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
                <Link to='/'>
                <button className="form-button" type="submit" >Rent</button>
                </Link>
        </form>
      </div>
    </div>
  )
}

export default ListingPage