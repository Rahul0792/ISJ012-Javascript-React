import React from 'react'
import Counter from './components/Counter'
import { useState } from 'react';
import AddNumber from './components/AddNumber';
const App = () => {
    const [Visibile, SetVisibile] = useState(true);
  
  return(
    <div>
      <h1>Set Visibility</h1>

      {/* this is mount or set visibility */}

      <button onClick={() => SetVisibile(!Visibile) }>Toggle visibility </button>
      {Visibile && <Counter />}

      
      <br /><br /><br />
      <hr />
      <hr />
      

      <h1>Use Effect </h1>

      <Counter />
      <AddNumber></AddNumber>

    </div>
  )
}
export default App
