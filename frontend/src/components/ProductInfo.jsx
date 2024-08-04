import React from 'react'

const ProductInfo = () => {
  return (
    <div className='flex gap-4 p-3'>
        <div className='border rounded-lg p-3 bg-white'>
            <h1 className='font-bold'>0</h1>
            <span className='text-slate-500'>Projects Created</span>
        </div>
        <div className='border rounded-lg p-3 bg-white'>
            <h1 className='font-bold'>0</h1>
            <span className='text-slate-500'>Components Added</span>
        </div>
        <div className='border rounded-lg p-3 bg-white'>
            <h1 className='font-bold'>0</h1>
            <span className='text-slate-500'>Favorites components</span>
        </div>
    </div>
  )
}

export default ProductInfo