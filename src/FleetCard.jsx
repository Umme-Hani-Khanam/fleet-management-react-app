import React from 'react'

const FleetCard = ({reg,name,avail,cat}) => {

  return (
    <div class='container'>
      <div class="card">
        <h4>Vehicle RegNo:{reg}</h4>
        <p>Driver Name:{name}</p>
        <p>Status : {avail}</p>
        <p>Category : {cat}</p>
      </div>
      
    </div>
  )
}

export default FleetCard