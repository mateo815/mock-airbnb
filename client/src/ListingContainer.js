import React from 'react'

import { Link } from 'react-router-dom';

import Listing from './Listing';


function ListingContainer({listings}) {
  
  
  console.log(listings)

    const allListings = listings.map((l) => (
      <div>
        <img src={l.url} ></img>
        <h5>{l.city}</h5>
        <h6>${l.price.rate} per night</h6>
      </div>
    ))
  
  
    const rows = [...Array( Math.ceil(listings.length / 4) )]; 
    // // chunk the products into the array of rows
    const productRows = rows.map( (row, idx) => listings.slice(idx * 4, idx * 4 + 4) ) 




    return (
      <div className='container' style={{paddingLeft:"200px"}}>
          {productRows.map((row,indx) => {return(
              <div className='row' key={indx}>
                  {row.map(listing => { 
                      // console.log(post)
                      return(
                      <div  key={listing.id} className='col-md-3'>
                          <Link to={`/listings/${listing.id}`} >
                              <Listing  listing={listing} key={listing.id}/>
                          </Link>
                      </div>
                  )})}
              </div>
          )})}
      </div>
      // <div>
      //   {allListings}
      // </div>
      )}


export default ListingContainer
