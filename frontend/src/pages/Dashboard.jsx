import React from 'react'
import Navbar from '../components/Navbar';
import ProductDiv from '../components/ProjectDiv';
import FavouriteSection from '../components/FavouriteSection';
import ProductInfo from '../components/ProductInfo';

const Dashboard = () => {
    return (
       <div>
        <Navbar/>
        <ProductInfo />
        <ProductDiv />
        <FavouriteSection />
       </div>
      );
}

export default Dashboard