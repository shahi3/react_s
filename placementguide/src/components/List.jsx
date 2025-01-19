import React from 'react'
import { AiFillDelete } from "react-icons/ai";


function List({task ,date ,ondeleteitem}) {
  
  return (
  <>
 
    <div className="row kg-row container cntr">
    <div className="col-6">{task}</div>
    <div className="col-4">{date}</div>
    <div className="col-2">
        <button className='btn btn-danger'onClick={() => ondeleteitem(task)}><AiFillDelete/></button></div>

  </div>
  </>
  )
}

export default List
