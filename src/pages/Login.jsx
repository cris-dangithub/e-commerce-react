/* ============================ IMPORTS ============================ */
import React, { useEffect } from 'react'
//React Hook Form
import { useForm } from 'react-hook-form'
//Redux
import { useDispatch } from 'react-redux'
import { marginOff } from '../store/slices/marginBottomRoute.slice'
//Router
import { Link } from 'react-router-dom'
//Custom hooks
import usePetitions from '../hooks/usePetitions'
//CSS
import './styles/Login.css'
/* ======================================================================== */

const Login = () => {
  const dispatch = useDispatch()
  const objReset = {
    email: '',
    password: ''
  }
  const { register, handleSubmit, reset } = useForm()
  const { loginUser } = usePetitions()
  const submit = data => {
    loginUser(data, reset, objReset)
  }
  useEffect(() => {
    dispatch(marginOff())
  }, [])
  return (
    <article className='c-login'>
      <div className='login-bg'></div>
      <h2 className='login__greeting'>Welcome! Enter your email and password to continue</h2>
      <section className='login__test-data-container'>
        <h3 className='login__test-data-title'>Test data</h3>
        <ul className='login__test-data-list'>
          <li className='login__test-data-item'>
            <i className="fa-regular fa-envelope"></i>
            <span className='login__item-text'>cristiandaniel@gmail.com</span>
          </li>
          <li className='login__test-data-item'>
            <i className="fa-solid fa-lock"></i>
            <span className='login__item-text'>cristian123</span>
          </li>
        </ul>
      </section>
      <form className='login__form' onSubmit={handleSubmit(submit)}>
        <div className='login__form-item'>
          <label className='login__form-label' htmlFor="email">Email</label>
          <input
            className='login__form-input filter-form-price__input'
            placeholder='Enter your email'
            type="text" id='email' {...register('email')}
          />
        </div>
        <div className='login__form-item'>
          <label className='login__form-label' htmlFor="password">Password</label>
          <input
            className='login__form-input filter-form-price__input'
            placeholder='Enter your password'
            type="password" id='password' {...register('password')}
          />
        </div>
        <button className='login__btn'>Login</button>
      </form>
      <footer className='login__footer'>
        <p className='login__footer-paragraph'>
          Don't have an account? <Link className='login__footer-link' to='/signup'>Sign up</Link>
        </p>
      </footer>
    </article>
  )
}

export default Login