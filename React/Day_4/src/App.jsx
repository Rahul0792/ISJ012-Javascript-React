import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Practice from './Components/Practice'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Counter></Counter>
      <Practice></Practice>
    </>
  )
}

export default App
