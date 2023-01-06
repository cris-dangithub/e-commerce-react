import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import usePetitions from '../hooks/usePetitions.js'

const SignUp = () => {
  const objReset = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: ''
  }
  const { loginUser } = usePetitions()
  const navigate = useNavigate()
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
  return (
    <article>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="frstName">First Name</label>
          <input type="text" id='frstName' {...register('firstName')} />
        </div>
        <div>
          <label htmlFor="lstName">Last Name</label>
          <input type="text" id='lstName' {...register('lastName')} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password')} />
        </div>
        <div>
          <label htmlFor="phone">Phone (10 characters)</label>
          <input type="number" id='phone' {...register('phone')} />
        </div>
        <button>Sign Up</button>
      </form>
    </article>
  )
}

export default SignUp