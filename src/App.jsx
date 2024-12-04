import { useState } from 'react'
 
const App = () => {
  const [color, setColor]= useState('Pink')

  return (
    <div className='w-full h-screen duration-200 flex items-center justify-center' 
    style={{backgroundColor:color}}>
      <div className='text-center flex gap-2 bg-gray-400 p-3 rounded'>
      <button 
      className='px-3 py-2 font-bold text-white bg-blue-700 rounded' 
      onClick={()=>setColor('Blue')}>Blue</button>
      <button 
      className='px-3 py-2 font-bold text-white  bg-green-700 rounded' 
      onClick={()=>setColor('Green')}>Green</button>
      <button
       className='px-3 py-2 font-bold text-white  bg-red-700 rounded' 
       onClick={()=>setColor('Red')}>Red</button>
      <button
       className='px-3 py-2 font-bold text-white  bg-orange-600 rounded' 
       onClick={()=>setColor('orange')}>Orange</button>
      <button
       className='px-3 py-2 font-bold text-white  bg-black rounded' 
       onClick={()=>setColor('Black')}>Black</button>
      <button
       className='px-3 py-2 font-bold text-white  bg-purple-700 rounded' 
       onClick={()=>setColor('Purple')}>Purple</button>
      
      </div>
      
    </div>
  )
}

export default App
