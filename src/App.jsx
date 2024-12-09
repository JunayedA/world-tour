import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './components/countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>World tour</h1>
      <Countries></Countries>
    </>
  )
}

export default App
