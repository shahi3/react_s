import { useState } from "react"
function App() {
  let [counter , setcounter] = useState(1)
  const addvalue  = () => {
    if(counter==20)
    setcounter(20);
   else
    setcounter(counter+1)
  }
  function removevalue() {
  if (counter == 0) 
    setcounter(0);
  else 
    setcounter(counter-1);
  
}
  return (
    <>
      <h2>welcome to the counter</h2>
      <h3>count is {counter}</h3><br />
      <button onClick={addvalue}> add value {counter}</button><br />
      <button onClick={removevalue}> remove value {counter}</button><br />
    </>
  );

}

export default App
