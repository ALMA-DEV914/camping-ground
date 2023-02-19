import React from 'react'

export default function OperatingHours({data}) {
  return (
    <div className='openHours'>
        <h2>Opreating Hours</h2>
      {data && data.data.map((data, i) =>
      <div key={i}>
      {data.operatingHours.map((operatingHours, i) =>
      <div key={i}>
        <h5 key={operatingHours.i}>{operatingHours.name}</h5>
        <span>{operatingHours.description}</span><br></br>
        <span><b>Open on standard hours from monday to sunday? Yes </b>"{operatingHours.standardHours.sunday}"</span><br></br>
        <span>{operatingHours.exceptions.map((exceptions, i) => 
        <span key={i}>{exceptions.name} - {exceptions.startDate} - {exceptions.endDate} are closed from monday to sunday<br></br></span>)}</span><br></br>
      </div>)}
      </div>)}
    </div>
  )
}
