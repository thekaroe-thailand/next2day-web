'use client';

import { useState } from "react";

export default function DropdownList() {
    const [foodList, setFoodList] = useState([
        { name: 'apple' },
        { name: 'banana' },
        { name: 'orange' },
        { name: 'mango' }
    ]);
    const [food, setFood] = useState('apple');
    return (
        <>
            <select onChange={(e) => setFood(e.target.value)}>
                {foodList.map((item, index) => (
                    <option key={index} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div>Food Selected: {food}</div>
        </>
    );
}
