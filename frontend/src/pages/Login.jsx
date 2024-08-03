import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='rounded-lg p-5 mx-auto border-2 border-blue-300 mt-20 max-w-lg'>
      <form className='flex flex-col gap-3'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
        />
        <button type='submit'
          className='uppercase text-white bg-blue-600 hover:opacity-95 rounded-lg p-3'>
          Login
        </button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/register'}>
          <span className='text-blue-600 hover:underline hover:cursor-pointer'>Register</span>
        </Link>
      </div>
    </div>
  )
}

export default Login