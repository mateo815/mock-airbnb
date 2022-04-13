import React, {useState} from 'react'
import { Switch, Route, useParams} from 'react-router-dom'


function ListingPage({listings, addRes}) {
  
  const listing_id = useParams()
  
  // const listing = listings.find(l => l.id === parseInt(id))

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [listingId, setListingId] = useState('')

  const onSubmit = (e) => {
      e.preventDefault()

      const newResi = {
        check_in: checkIn,
        check_out: checkOut,
        listing_id: listing_id
      }
      
      fetch("/reservations", {
        method:'POST',
        headers: {"Content-Type": "application/json"},
        
        body: JSON.stringify(newResi)
      })
      .then((r) => r.json())
      .then(data => addRes(data))
      e.target.reset()
    }
  



  return (
    <div>
      
      <div className='search'>
        <form onSubmit={onSubmit} className='form' >
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