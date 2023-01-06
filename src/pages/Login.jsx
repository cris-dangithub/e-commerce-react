import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
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
    <article>
      <h2>Welcome! Enter your email and password to continue</h2>
      <section>
        <h3>Test data</h3>
        <ul>
          <li>cristiandaniel@gmail.com</li>
          <li>cristian123</li>
        </ul>
      </section>
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
      <footer>
        <p>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </footer>

    </article>
  )
}

export default Login