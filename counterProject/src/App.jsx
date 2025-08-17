import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //use state is an Hook(React state management)- used to propaget changes to the ui whenever the state of the variable changes

  let [counter,setCounter]=useState(15);                          
  const increase=()=>{
     if(counter<20) setCounter(counter+1);
  }

  const decrease=()=>{
    if(counter>0) setCounter(counter-1);
  }
  // counter->value
  //setCounter-> method to count
  //usestate(15)->the value passed to paranthesis is default value;

  return (
    <>
      
      <h3>Counter Value: {counter}</h3>
      <button
      onClick={increase}>Increase Value</button>
      <br />
      <button
      onClick={decrease}>Decrease value</button>
    </>
  )
}

export default App
