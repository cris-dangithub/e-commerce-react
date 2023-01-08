/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect } from 'react'
//Redux
import { useDispatch } from 'react-redux'
import { marginOff } from '../store/slices/marginBottomRoute.slice'
//Route
import { useNavigate } from 'react-router-dom'
//CSS
import './styles/User.css'
/* ======================================================================== */

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }
  console.log(user);
  useEffect(() => {
    dispatch(marginOff())
  }, [])
  return (
    <article className='c-login'>
      <div className='login-bg'></div>
      <section className='user__info'>
        <i className="user__icon fa-solid fa-circle-user"></i>
        <h3 className='login__greeting'>{`${user.firstName} ${user.lastName}`}</h3>
        <ul className='user__list login__test-data-list'>
          <li className='user__item login__test-data-item'>
            <span className='user__list-subtitle'>Email:</span>
            <h4 className='user__info'>{user.email}</h4>
          </li>
          <li className='user__item login__test-data-item'>
            <span className='user__list-subtitle'>Phone:</span>
            <h4 className='user__info'>{user.phone}</h4>
          </li>
        </ul>
        <button className='login__btn user__btn' onClick={handleClick}>Logout</button>
      </section>
    </article>
  )
}

export default User