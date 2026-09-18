'use client'
import { use } from "react";


const SearchFood = ({foodPromise}) => {
    const foods = use(foodPromise).data;

    // console.log(foods, 'the food promise data resolved successfull');

    
    return (
        <div>
           <h2>Top Foods: {foods.length}</h2>
        </div>
    );
};

export default SearchFood;