import React, {useState} from 'react'
import { Switch, Route, useParams} from 'react-router-dom'


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