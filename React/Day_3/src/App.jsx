import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)


  function handleButtonClick() {
    console.log(counter);
    setCounter(counter + 2);
    function calculateSum() {
      return { num1 + num2 };
    }
  }

  return (
    <>
      <h1>React State</h1>
      <input type="text" placeholder='Enter Num1' onChange={(event) => setnum1(event.target.value)} />
      
      <input type="text" placeholder='Enter Num2' onChange={(event) => setnum2(event.target.value)} />

      <button onClick={calculateSum}>Addition is </button>

    </>

  )
};

export default App
