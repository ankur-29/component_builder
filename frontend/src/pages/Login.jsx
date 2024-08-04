import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      dispatch(loginStart());
      const res = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success === false) {
        dispatch(loginFailure(data.message));
        return;
      }
      dispatch(loginSuccess(data));
      navigate('/dashboard');
    } catch(err) {
      dispatch(loginFailure(err.message));
    }
  }

  return (
    <div className='rounded-lg p-5 mx-auto border-2 border-blue-300 mt-20 max-w-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input 
          onChange={handleChange}
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
        />
        <input 
          onChange={handleChange}
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <button type='submit' disabled={loading}
          className='uppercase text-white bg-blue-600 hover:opacity-95 rounded-lg p-3'>
           {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/register'}>
          <span className='text-blue-600 hover:underline hover:cursor-pointer'>Register</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Login