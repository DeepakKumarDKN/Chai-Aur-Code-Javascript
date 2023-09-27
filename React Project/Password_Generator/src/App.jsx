import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charcters, setCharacters]= useState(false)
  const [password, setPassword] = useState()


  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charcters) str +="@#$_+<>{}[]!-"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charcters, setPassword])

  return (
    <>
      <div className="project_container bg-black text-white h-screen
      font-sans	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont">
        <h1 className="text-center text-4xl pt-10">Password Generator</h1>

      

      </div>
    </>
  )
}

export default App
