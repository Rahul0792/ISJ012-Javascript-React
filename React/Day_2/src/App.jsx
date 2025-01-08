import './App.css'
import Sport from './component/Sport'

function App() {
  const sport = ["Hockey", "Cricket", "Football"];
  const username = "virat Kohli";

  return (
    <>
      <h1> I am in App</h1>
      <Sport Username={username} Sports={sport}></Sport>
    </>
  )
}

export default App
// .............................................