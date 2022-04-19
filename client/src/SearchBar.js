import React from 'react'

function SearchBar({onSubmit, setLocation}) {

  return (
    <div className='search'> Where are you going?
      <form onSubmit={onSubmit} className='form' >
                <div className="field">
                    <input type="text"  onChange={(e) => setLocation(e.target.value)} placeholder='Enter Destination' />
                    <button className="form-button" type="submit" >Search</button>
                </div> 
      </form>
      
      
    </div>
  );
}

export default SearchBar
