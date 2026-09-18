'use client';

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        console.log('increase button clicked');
        setCount(count + 1)
    }
    console.log('counter component');
    return (
        <div>
            <h2 className='text-4xl font-bold'>Counter: {count}</h2>
            <button 
            onClick={handleIncrease}
            className="btn btn-active">Increase</button>
        </div>
    );
};

export default Counter;