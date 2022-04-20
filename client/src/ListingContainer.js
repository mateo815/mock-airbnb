import React from 'react'

import {NavLink} from 'react-router-dom';

import Listing from './Listing';


function ListingContainer({listings, user}) {
  
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
                          <NavLink to={`/listings/${listing.id}`} >
                              <Listing  listing={listing} key={listing.id} user={user}/>
                          </NavLink>
                          <h5>{listing.address}</h5>
                          <p>${listing.price.rate}/night</p>
                      </div>
                  )})}
              </div>
          )})}
      </div>
      )}


export default ListingContainer
