'use client';

import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter(); // create a router instance

    return (
        <button onClick={() => router.push('/dashboard')}>
            Go to Dashboard
        </button>
    );
}