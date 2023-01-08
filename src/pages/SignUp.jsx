/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect } from 'react'
//Axios
import axios from 'axios'
//React Hook Form
import { useForm } from 'react-hook-form'
//Router
import { Link } from 'react-router-dom'
//Redux
import { useDispatch } from 'react-redux'
//Customs hooks
import usePetitions from '../hooks/usePetitions.js'
import { marginOff } from '../store/slices/marginBottomRoute.slice.js'
/* ======================================================================== */

const SignUp = () => {
  const dispatch = useDispatch()
  const objReset = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: ''
  }
  const { loginUser } = usePetitions()
  const { register, handleSubmit, reset } = useForm()
  const submit = data => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/users`
    data.role = 'admin'
    axios.post(URL, data)
      .then(res => {
        console.log(res);
        const dataToLogIn = {
          email: data.email,
          password: data.password
        }
        loginUser(dataToLogIn, reset, objReset)
      })
      .catch(err => console.log(err))
  }
  useEffect(()=>{
    dispatch(marginOff())
  },[])
  return (
    <article className='c-login'>
      <div className='login-bg'></div>
      <h2 className='login__greeting'>Sign up</h2>
      <form className='login__form' onSubmit={handleSubmit(submit)}>
        <div className='sign-up__form-item'>
          <label className='login__form-label' htmlFor="frstName">First Name</label>
          <input className='filter-form-price__input' type="text" id='frstName' {...register('firstName')} />
        </div>
        <div className='sign-up__form-item'>
          <label className='login__form-label' htmlFor="lstName">Last Name</label>
          <input className='filter-form-price__input' type="text" id='lstName' {...register('lastName')} />
        </div>
        <div className='sign-up__form-item'>
          <label className='login__form-label' htmlFor="email">Email</label>
          <input className='filter-form-price__input' type="email" id='email' {...register('email')} />
        </div>
        <div className='sign-up__form-item'>
          <label className='login__form-label' htmlFor="password">Password</label>
          <input className='filter-form-price__input' type="password" id='password' {...register('password')} />
        </div>
        <div className='sign-up__form-item'>
          <label className='login__form-label' htmlFor="phone">Phone (10 characters)</label>
          <input className='filter-form-price__input' type="number" id='phone' {...register('phone')} />
        </div>
        <button className='login__btn'>Sign Up</button>
      </form>
      <footer className='login__footer'>
        <p className='login__footer-paragraph'>
          Already have an account? <Link className='login__footer-link' to='/login'>Log in</Link>
        </p>
      </footer>
    </article>
  )
}

export default SignUp