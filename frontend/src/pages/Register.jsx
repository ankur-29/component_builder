import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/login');
    } catch (e) {
      setLoading(false);
      setError(data.message);
    }
  }

  return (
    <div className='rounded-lg p-5 mx-auto border-2 border-blue-300 mt-20 max-w-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input onChange={handleChange}
          type='text'
          placeholder='username'
          id='username'
          className='border p-3 rounded-lg'
        />
        <input onChange={handleChange}
          type='email'
          placeholder='email'
          id='email'
          className='border p-3 rounded-lg'
        />
        <input onChange={handleChange}
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />
        <input onChange={handleChange}
          type='password'
          placeholder='confirm password'
          id='confirmPassword'
          className='border p-3 rounded-lg'
        />
        <button type='submit' disabled={loading}
          className='uppercase text-white bg-blue-600 hover:opacity-95 rounded-lg p-3'>
          {loading ? 'Loading...' : 'Register'}
        </button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Have an account?</p>
        <Link to={'/login'}>
          <span className='text-blue-600 hover:underline hover:cursor-pointer'>Login</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
}

export default Register