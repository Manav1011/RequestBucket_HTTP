import React, { useState } from 'react'

function App() {  
  const[val,seatVal] = useState(0)
  const ChangeVal = () => {
    let value = val
    fetch("http://127.0.0.1:8000/get_cookies")
      .then(response => response.json())
      .then(data => {
        console.log(data)
    });
    seatVal(value = value +1)
    console.log(val)
  }
  return (
    <div>
      <div>Manav</div>      
      <button onClick={ChangeVal} type="submit">Submit</button>    
    <h1>{val}</h1>
    </div>  
  )
}

export default App