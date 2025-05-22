import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chexkbox from './components/Chexkbox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Chexkbox/>
    </>
  )
}

export default App
