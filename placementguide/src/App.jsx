import { useState } from 'react'
import Task from './components/task'
import List from './components/List'
import { RiTodoLine } from "react-icons/ri";

function App() {
  const [data,setdata]= useState( [{
    task:"reading",
    date:"2/1/2025",
  }]);
  const newitem=(newtask,newdate)=>{
    const nitem=[...data,{task:newtask,
      date:newdate,}]
      setdata(nitem);
  }
  const ondeleteitem =(task)=>{
    const updatedData = data.filter((item) => item.task !== task);
    setdata(updatedData);  }

  return (
    <>
      <h1>TO DO AAP  <RiTodoLine /></h1>
      <Task newitem={newitem} />
      {data.map((item)=>(
        <List key={item}  task={item.task} date={item.date} ondeleteitem={ondeleteitem} />
        ))
      }
    </>
  )
}

export default App
