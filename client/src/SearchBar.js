import React, { useState } from 'react'
import {DateRangePicker} from "react-date-range"

function SearchBar() {

  const [startDate, setStartDate] = useState
  (new Date());
  const [endDate, setEndDate] = useState
  (new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key:"selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selction.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div className='search'> Where you Heading?
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
}

export default SearchBar