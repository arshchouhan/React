import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from './App.jsx'


function MyApp()
{
  return (
    <a href="https://google.com"> Visit google </a>
  )
}

const reactElement = React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},   // The html element returned inside the App function
  "Click this to visit google"                   // to render in main.jsx is parsed to this syntx by a transpiler named as babble                     
)

createRoot(document.getElementById('root')).render(
 
    reactElement

)
