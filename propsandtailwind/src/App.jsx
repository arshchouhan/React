import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card"

const arr=[1,2,3]

function App() {
  

  return (
    <>
      <Card name="Arsh" obj={arr}/>
      <br />
      <Card name="Guglu"/>
    </>
  )
}

export default App
