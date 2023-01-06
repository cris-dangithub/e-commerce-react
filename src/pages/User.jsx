import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }
  console.log(user);
  return (
    <article>
      <section>
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <button onClick={handleClick}>Logout</button>
      </section>
    </article>
  )
}

export default User