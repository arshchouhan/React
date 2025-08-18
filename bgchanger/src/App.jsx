import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div class="w-screen h-screen" style={{backgroundColor:color}}>
      <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button class="bg-red-600 text-white rounded-full outline-none px-3 py-1 shadow-md shadow-black" style={{borderColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button class="bg-green-600 text-white rounded-full outline-none px-3 py-1 shadow-md shadow-black" style={{borderColor:"red"}} onClick={()=>setColor("green")}>Green</button>
          <button class="bg-yellow-600 text-white rounded-full outline-none px-3 py-1 shadow-md shadow-black" style={{borderColor:"red"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button class="bg-blue-600 text-white rounded-full outline-none px-3 py-1 shadow-md shadow-black" style={{borderColor:"red"}} onClick={()=>setColor("blue")}>Blue</button>
          <button class="bg-purple text-black rounded-full outline-none px-3 py-1 shadow-md shadow-black" style={{borderColor:"red"}} onClick={()=>setColor("purple")}>Lavender</button>
          <button class="bg-white text-black rounded-full outline-none px-3 py-1 shadow-md shadow-black" style={{borderColor:"red"}} onClick={()=>setColor("white")}>White</button>
        </div>
      </div>
    </div>
      
      
    </>
  )
}

export default App
