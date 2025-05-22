import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoEntry from './components/TodoEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoEntry/>
    </>
  )
}

export default App
