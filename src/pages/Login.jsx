import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import usePetitions from '../hooks/usePetitions'

const Login = () => {
  const objReset = {
    email: '',
    password: ''
  }
  const { register, handleSubmit, reset } = useForm()
  const { loginUser } = usePetitions()
  const submit = data => {
    loginUser(data, reset, objReset)
  }



  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register('password')} />
        </div>
        <button>Login</button>
      </form>

    </div>
  )
}

export default Login