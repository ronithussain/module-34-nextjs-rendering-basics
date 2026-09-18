import React from 'react';

const FoodDetailsPage = async({params}) => {
    const {foodId} = await params;
    
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods/${foodId}`)
    const data = await res.json();
    const food = data.data;

    console.log(food, 'food details page');
    return (
        <div>
           <h2 className='text-3xl'>Food Details Page: {foodId}</h2>
           {/* <h3>{dish_name}</h3>  */}
        </div>
    );
};

export default FoodDetailsPage;