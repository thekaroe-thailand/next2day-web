'use client';
import { useEffect, useRef, useState } from "react";
export default function Page() {
    const refUsername = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        refUsername.current?.focus();
    }, []);

    return (
        <>
            <input />
            <input ref={refUsername} type="text"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input />
            <div>Username: {username}</div>
            {username == 'admin' && <div>Welcome Admin</div>}
        </>
    );
}
