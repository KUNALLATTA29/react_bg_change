
import './App.css'
import {useState} from 'react'

function App() {
  const [color, setColor] = useState("black");
  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed item-center flex flex-wrap justify-center gap-3 ">
          <button className='bg-red-500 w-2/4 text-white py-2 px-2 rounded'
          onClick={()=> setColor("red")}>Red</button>
          <button className='bg-green-500 w-2/4 text-white py-2 px-2 rounded'
          onClick={()=> setColor("green")}>Green</button>
          <button className='bg-black w-2/4 text-white py-2 px-2 rounded'
          onClick={()=> setColor("black")}>Black</button>
          <button className='bg-blue-500 w-2/4 text-white py-2 px-2 rounded'
          onClick={()=> setColor("blue")}>Blue</button>
          <button className='bg-purple-500 w-2/4 text-white py-2 px-2 rounded'
          onClick={()=> setColor("purple")}>Purple</button>
        </div>
      </div>
  )
}

export default App
