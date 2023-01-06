import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>e-commerce</Link>
        </li>
        <li>
          <Link to='/user'>User</Link>
        </li>
        <li>
          <Link to='/purchases'>Purchases</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar