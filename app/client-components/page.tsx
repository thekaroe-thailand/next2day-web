'use client';
import { useState } from "react";
export default function Page() {
    const [items] = useState(['java', 'php', 'c++']);
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
}