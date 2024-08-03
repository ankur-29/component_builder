import React from 'react';
import reactLogo from '../assets/react.svg';
const Header = () => {
  return (
    <div className='flex justify-between items-center mx-auto p-5 bg-blue-200'>
        <div className='flex gap-3 items-center'>
            <div className='bg-white w-8 h-8 rounded-md flex items-center justify-center'>
            <img src={reactLogo} alt="react logo"/>
            </div>
            <h1 className='text-2xl font-bold text-blue-600'>
                UI <span className='text-black font-normal'>Components</span>
            </h1>
        </div>
    </div>
  )
}

export default Header