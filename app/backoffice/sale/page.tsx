'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl, Token } from '../../config';
import Swal from 'sweetalert2';

export default function Page() {
    const [barcode, setBarcode] = useState("");
    const [orderItems, setOrderItems] = useState([]); // รายการสินค้าที่ขาย

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = `${ApiUrl}/api/sale/list`;
            const response = await axios.get(url);
            setOrderItems(response.data);
        } catch (err: any) {
            Swal.fire({
                title: 'error',
                text: err.message,
                icon: 'error'
            })
        }
    }

    const handleSave = async () => {
        try {
            const url = `${ApiUrl}/api/sale/save`;
            const payload = { barcode: barcode }
            await axios.post(url, payload)
        } catch (err: any) {
            Swal.fire({
                title: 'error',
                text: err.message,
                icon: 'error'
            })
        }
    }

    return (
        <div>
            <h1>ขายสินค้า</h1>
            <div className="flex gap-3">
                <input className="form-control" onChange={(e) => setBarcode(e.target.value)} />
                <button className="btn flex items-center" onClick={handleSave}>
                    <i className="fa-solid fa-save mr-3"></i>
                    บันทึก
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>barcode</th>
                        <th>ชื่อสินค้า</th>
                        <th className="text-right">ราคา</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map((item: any) => (
                        <tr key={item.id}>
                            <td>{item.book.barcode}</td>
                            <td>{item.book.name}</td>
                            <td className="text-right">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}