import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json();
    const foods = data.data;

    console.log(foods);

    return (
        <div className='container mx-auto'>
            <h2>Menu Page...</h2>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} />)
                }
            </div>
        </div>
    );
};

export default MenuPage;