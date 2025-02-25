import React from 'react'
import './HomeCategoryCard.css'
import { Assets } from '../Assets/Assets'

const HomeCategoryCard = () => {

    const categories = [
        { id: 1, name: 'coupon', image: Assets.coupon },
        { id: 2, name: 'Five Gallon Bottle',image:Assets.gallon },
        { id: 3, name: 'Accessories', image: Assets.dispencer },
        { id: 4, name: 'Small Bottles', image: Assets.bottle },
      ];


  return (

    <div className='category-container'>
    {categories.map((category) => (
      <div key={category.id} className='category-card'>
        <img src={category.image} alt={category.name} className='category-image' />
        <p className='category-name'>{category.name}</p>
      </div>
    ))}
  </div>
  
);
};

export default HomeCategoryCard
