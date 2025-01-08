import React, { useState } from "react";
function CounterApp() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </>
  );
}

export default CounterApp;
