import React, { useState } from 'react'

const Counter = () => {

  console.log("Heyyy");
  const [count, Setcount] = useState(0);
  const [isLogin, SetisLogin] = useState(true);


  // console.log(count);


  function setButtonClick() {
    Setcount(count + 2);
    console.log(count);

  }

  function setButtonDecrease() {
    Setcount(count - 2);

  }

  function setValueZero() {
    Setcount(0);

  }

  function handlebutton() {
    SetisLogin(!isLogin);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={setButtonClick}>Increase</button>
      <button onClick={setButtonDecrease}>Decrease</button>
      <button onClick={setValueZero}>Decrease</button>

      {/* second method for set value without creating function at above */}
      {/* same line new function created */}
      <button onClick={() => Setcount((count) => (count + 1))}>Increase Using arrow function </button>
      <hr />

      {/* while click on handle button in shows mount and unmount */}
      <button onClick={handlebutton}>Handle Button</button>
      <br />
      <br />
      {isLogin ? <button >Log In</button> : <button>Log Out</button>}


    </>
  )
}

export default Counter
