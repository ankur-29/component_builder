import React from 'react';
import features from '../Utils/features';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='flex flex-col items-center gap-7 mx-14 mt-28'>
            <h2 className='font-bold text-2xl'>
                Effortlessly Manage and Create Your Components Like a
                <span className='text-blue-500'>  Pro!</span>
            </h2>
            <p className='text-center w-[500px] max-sm:w-full text-slate-500'>
                Save time by reusing your favorite components. Enhance your development workflow
                by having quick access to a library of reusable components and ensure consistency
                across your projects.
            </p>
            <Link to='/login'>
                <button className='bg-blue-500 rounded-lg p-3 text-white'>
                    Get Started !!
                </button>
            </Link>

            <h2 className='mt-10 font-bold text-2xl'>Key Features</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    features.map((feature) => (
                        <div key={feature.id}
                            className='bg-green-200 rounded-lg p-6 flex flex-col items-center'>
                            <div>
                                {feature.name}
                            </div>
                            <h3>
                                {feature.name}
                            </h3>
                            <p className='w-[80%] text-center'>
                                {feature.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Homepage