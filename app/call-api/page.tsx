'use client';

import axios from 'axios';

export default function Page() {
    const payload = {
        id: 1,
        name: 'kob',
        age: 20
    }
    const doPost = async () => await axios.post('http://localhost:3000', payload);
    const doGet = async () => await axios.get('http://localhost:3000/1');
    const doPut = async () => await axios.put('http://localhost:3000/1', payload);
    const doDelete = async () => await axios.delete('http://localhost:3000/1');
    return (
        <>
            <button onClick={doPost}>Post</button>
            <button onClick={doGet}>Get</button>
            <button onClick={doPut}>Put</button>
            <button onClick={doDelete}>Delete</button>
        </>
    );
}
