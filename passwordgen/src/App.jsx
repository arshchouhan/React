import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
 const [length,setLength]=useState(8);
 const [numberAllowed,setNumberAllowed]=useState(false);
 const [characterAllowed,setCharacterAllowed]=useState(false);
 const [password,setPassword]=useState("");

 const passRef=useRef(null);

 const passwordGenerator= useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str+="0123456789";
  if(characterAllowed) str+="!@#$%^&*()_-+=|";

  for(let i=0;i<length;i++)
  {
    let index=Math.floor(Math.random()*str.length +1);
    pass+=str.charAt(index);
  }

  setPassword(pass);

 },[length,numberAllowed,characterAllowed,setPassword])

 const copytoclb=useCallback(()=>{
  passRef.current?.select();
  passRef.current?.setSelectionRange(0,101);
  window.navigator.clipboard.writeText(password);
 },[password])

 useEffect(() => {passwordGenerator()}, [length, characterAllowed, numberAllowed])

  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-700 text-center">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text" 
            value={password} 
            className="outline-none w-full py-1 px-3" 
            placeholder='Password' 
            readOnly
            ref={passRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0" onClick={copytoclb}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range" 
              min={6} 
              max={100} 
              value={length} 
              onChange={(e) => { setLength(e.target.value) }} 
              className='cursor-pointer'
              id="len"
            />
            <label htmlFor="len">length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked={characterAllowed} 
              onChange={() => setCharacterAllowed((prev) => !prev)}  id="chars"
            />
            <label htmlFor="chars">Characters</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked={numberAllowed} 
              onChange={() => setNumberAllowed((prev) => !prev)}  id="nums"
            />
            <label htmlFor="nums">Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
