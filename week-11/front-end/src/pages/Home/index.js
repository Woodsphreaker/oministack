import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="dash">Dash</Link>
      <Link to="users">Users</Link>
    </>
  )
}

export default Home
