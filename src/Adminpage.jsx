

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
            
        }
    }
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter vehincle RegNo' onChange={(e)=>setReg(e.target.value)}/>
            <select id='category' onChange={(e)=>setCat(e.target.value)}>
                <option value='No'>Select</option>
                <option value='Auto'>Auto</option>
                <option value='truck'>Truck</option>
                <option value='Bus'>Bus</option>
                <option value='Car'>Car</option>

            </select>
            <input type='text' placeholder='Driver Name' onChange={(e)=>setName(e.target.value)}/>
            <input type='checkbox' placeholder='Available' onClick={(e)=>setAvail(e.target.value)}/>
            <button onClick={addFleet}>Add Fleet</button>
        </form>
    </div>
  )
}

export default Adminpage