import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io"
function Task({newitem}, deleteitem) {
    const [task,settask]=useState('');
    const [date,setdate]=useState('');

    const gettask=(event )=>{
       settask(event.target.value);
    }
    const getdate=(event )=>{
        setdate(event.target.value);
     }
     const add=()=>{
       newitem(task,date);
       setdate("");
       settask("");
     }
  return (
   <>
   <div className="row kg-row container cntr " id='cntr1'>
    <div className="col-6">
        <input type="text" value={task}  onChange={gettask} />
    </div>
    <div className="col-4">
        <input type="date" value={date} onChange={getdate} />
    </div>
    <div className="col-2">
        <button className='btn btn-success' onClick={add}>
        <IoIosAddCircle /></button></div>

  </div>
   </>
  )
}

export default Task;
