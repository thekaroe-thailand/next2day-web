'use client';
import { useState } from "react";
export default function Page() {
    const [x, setX] = useState(0);
    const handleClick = () => {
        setX(x + 1);
    }
    return (
        <>
            <button onClick={handleClick}>
                Click me
            </button>
            <div>x = {x}</div>
        </>
    )
}
