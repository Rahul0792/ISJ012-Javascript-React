import React from 'react'
import { Link } from 'react-router-dom'  //If we want to use link then link import compulsory===============================
const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      {/* Just Like anker tag  */}
      <Link to="About">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="NotFound">Notfound</Link>

    </div>
  )
}

export default Home
