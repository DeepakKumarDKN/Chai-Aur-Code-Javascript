import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
       <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
        <button onClick={()=>setColor('red')} className='outline-none font-medium bg-red-700 px-6 py-1 rounded-3xl'>Red</button>
        <button onClick={()=>setColor('orange')} className='outline-none font-medium bg-orange-600 px-6 py-1 rounded-3xl'>Orange</button>
        <button onClick={()=>setColor('gray')} className='outline-none font-medium bg-gray-500 px-6 py-1 rounded-3xl'>Gray</button>
        <button onClick={()=>setColor('lime')} className='outline-none font-medium bg-lime-400 px-6 py-1 rounded-3xl'>Lime</button>
        <button onClick={()=>setColor('teal')} className='outline-none font-medium bg-teal-400 px-6 py-1 rounded-3xl'>Teal</button>
        <button onClick={()=>setColor('Black')} className='outline-none font-medium bg-black px-6 py-1 rounded-3xl text-white'>Black</button>
        <button onClick={()=>setColor('pink')} className='outline-none font-medium bg-pink-100 px-6 py-1 rounded-3xl'>Pink</button>
        <button onClick={()=>setColor('blue')} className='outline-none font-medium bg-blue-600 px-6 py-1 rounded-3xl'>Blue</button>
       </div>
      </div>
    </div>
    </>
  )
}

export default App
