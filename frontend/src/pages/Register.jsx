import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='rounded-lg p-5 mx-auto border-2 border-blue-300 mt-20 max-w-lg'>
      <form className='flex flex-col gap-3'>
        <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
        />
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
        <input
          type='password'
          placeholder='confirm password'
          className='border p-3 rounded-lg'
        />
        <button type='submit'
          className='uppercase text-white bg-blue-600 hover:opacity-95 rounded-lg p-3'>
          Register
        </button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-600 hover:underline hover:cursor-pointer'>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default Register