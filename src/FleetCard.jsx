import React from 'react'

const FleetCard = ({reg,name,avail,cat}) => {
  
 function updateDriver()
 {
  const newName= prompt('Enter new Driver name');
 
  if(newName.trim()==='')
  {
    alert('cannot update')
  }
  else{
    
  }
 }
 function changeStatus()
 {
    if(avail==true)
    {
      avail=false
    }
    else{
      avail=true;
    }
 }
 function delVehicle()
 {
  

 }
  return (
    <div className='container'>
      <div className="card">
        <h4>Vehicle RegNo:{reg}</h4>
        <p>Driver Name:{name}</p>
        <p>Status : {avail}</p>
        <p>Category : {cat}</p>
      </div>
      <div className='buttonContainer'>
        <button onClick={updateDriver}>Update Driver</button>
        <button onClick={changeStatus}>Change Availabilty</button>
      <button onClick={delVehicle}>Delete Vehicle</button>
      
      </div>
      
    </div>
  )
}

export default FleetCard