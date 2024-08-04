import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDiv = () => {
  return (
    <div className='border-2 rounded-lg h-[400px]'>
      <div className='flex'>
        <h1>All Projects</h1>
        <Link to='/projects'>
          more
        </Link>
      </div>
    </div>
  )
}

export default ProjectDiv