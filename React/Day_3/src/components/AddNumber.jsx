import React, { useState } from 'react'

const AddNumber = () => {
  const [num1, SetNum1] = useState(0);
  const [num2, SetNum2] = useState(0);
  const [sum, setsum] = useState(0);


  return (
    <div>

      <hr />
      <h1>sum of {num1}  and { num2} is {sum}</h1>

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
