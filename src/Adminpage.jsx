

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FleetCard from './FleetCard';

const Adminpage = () => {
    const[reg,setReg]=useState('');
    const[name,setName]=useState('');
    const[avail,setAvail]=useState(false);
    const[cat,setCat]=useState(null);
    const navigate=useNavigate();
    function addFleet()
    {
        if(!reg || !name || !cat )
        {
            alert("Fill all the input fields");
            return;
        }
        else{
            navigate('/fleetCard') 
                    
        }
    }
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter vehicle RegNo' onChange={(e)=>setReg(e.target.value)}/>
       <br></br>  <label>Category   <select id='category' onChange={(e)=>setCat(e.target.value)}>
                <option value='No'>Select</option>
                <option value='Auto'>Auto</option>
                <option value='truck'>Truck</option>
                <option value='Bus'>Bus</option>
                <option value='Car'>Car</option>

            </select>
            </label>
            <br/>
            <input type='text' placeholder='Driver Name' onChange={(e)=>setName(e.target.value)}/>
            <br/><label>Available</label>
            <input type='checkbox'  onClick={(e)=>setAvail(e.target.value)}></input>
          <br/>  <button style={{backgroundColor:"green"}}onClick={addFleet}>Add Fleet</button>
        </form>
        <FleetCard reg='reg' name="name" avail='avail' cat='cat'/>

    </div>
  )
}

export default Adminpage