import {React, useState} from 'react'
import Calendar from 'react-calendar';

function DateCalendar() {

  const [date, setDate] = useState(new Date())

  const onChange = (date) => {
    setDate(date)
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      {console.log(date)}
    </div>
  )
}

export default DateCalendar