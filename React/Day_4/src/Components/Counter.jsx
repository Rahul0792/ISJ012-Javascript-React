import React, { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);


  // useeffect is used for handling sideeffects
  // three Types

  // 1 .UseEffect With Dependency Array  =====Run On mount
  // 2 .Use Effect with empty dependency Array   ==== If return use then it run on Mount
  // 3 .UseEffect With Value in Array   === If value change then run the code again or run the state again 

  useEffect(() => {


    // sending request to backend
    // used for mount
    console.log("Sending request to backend")    // For understanding purpose


    // Used For Un mount 
    // Disconnect from one server and connect to another server
    // means disconnecting existing server then rerturn is used 
    return () => {
      console.log("Disconnect From server ");
    }

    // Explain with example in
    //  Practice component


  }, []);
  console.log("Hiiii")                 // For understanding purpose

  return (
    <>
      heyy
      <button onClick={() => { setCount(count + 1) }}>heyy</button>
      <h1>count is {count}</h1>
    </>
  )
}

export default Counter

















//------------------------------------------------------------------------------------------------------------------
import React, { useState } from 'react'

const AddNumber = () => {
  const [num1, SetNum1] = useState(0);
  const [num2, SetNum2] = useState(0);
  const [sum, setsum] = useState(0);


  return (
    <div>

      <hr />
      <h1>sum of {num1}  and {num2} is {sum}</h1>

      <input type="number" placeholder='Enter Number 1' onChange={(event) => SetNum1(event.target.value)} />

      <br />
      <br />
      <input type="number" placeholder='Enter Number 2' onChange={(event) => SetNum2(event.target.value)} />

      <br />
      <br />
      <button onClick={() => setsum(parseFloat(num1) + parseFloat(num2))}>Calculate Sum</button>
    </div>
  )
}

export default AddNumber
