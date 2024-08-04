import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex p-4 bg-green-100 mx-auto justify-between'>
            <h2 className='hidden sm:block'>
                Welcome, Anand
            </h2>
            <div className='flex gap-4'>
                <Link to='/dashboard'>
                   Home
                </Link>
                <Link to='/project'>
                   Projects
                </Link>
                <Link to='/fav'>
                   Favourites
                </Link>
            </div>
            <div>
                <input type='text' placeholder='search'/>
            </div>
        </div>
    )
}

export default Navbar