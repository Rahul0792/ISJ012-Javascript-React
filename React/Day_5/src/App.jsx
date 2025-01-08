import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Products from './components/Products'

function App() {
  const [count1, setCount] = useState(0)

  return (
    <>
      <h1>heyy</h1>
      <Counter></Counter>
      <Products></Products>
    </>
  )
}

export default App

