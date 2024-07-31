import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0);
  return <div className='App'>
    <button onClick={()=>setCounter(counter-1)}>-</button>
    <div className='counter'>{counter}</div>
    <button onClick={()=>setCounter(counter+1)}>+</button>
  </div>
}

export default App
