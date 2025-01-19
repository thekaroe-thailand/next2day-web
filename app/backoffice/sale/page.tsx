'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl, Token } from '../../config';
import Swal from 'sweetalert2';

export default function Page() {
    const [barcode, setBarcode] = useState("");
    const [orderItems, setOrderItems] = useState([]); // รายการสินค้าที่ขาย
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = `${ApiUrl}/api/sale/list`;
            const response = await axios.get(url);
            setOrderItems(response.data);

            let sum = 0;
            for (const item of response.data) {
                sum += item.price;
            }
            setTotalPrice(sum);
        } catch (err: any) {
            Swal.fire({
                title: 'error',
                text: err.message,
                icon: 'error'
            })
        }
    }

    const handleDelete = async (id: number) => {
        try {
            const url = `${ApiUrl}/api/sale/delete/${id}`;
            await axios.delete(url);
            fetchData();
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

            fetchData();

            setBarcode(""); // clear barcode
        } catch (err: any) {
            Swal.fire({
                title: 'error',
                text: err.message,
                icon: 'error'
            })
        }
    }

    const handleConfirm = async () => {
        try {
            const url = `${ApiUrl}/api/sale/confirmOrder`;
            await axios.put(url);
            fetchData();
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
                <input value={barcode} className="form-control" onChange={(e) => setBarcode(e.target.value)} />
                <button className="btn flex items-center" onClick={handleSave}>
                    <i className="fa-solid fa-save mr-3"></i>
                    บันทึก
                </button>
            </div>
            {orderItems.length > 0 && (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-left pl-3">barcode</th>
                                <th className="text-left pl-3">ชื่อสินค้า</th>
                                <th className="text-right pr-3">ราคา</th>
                                <th className="w-5"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item: any) => (
                                <tr key={item.id}>
                                    <td>{item.book.barcode}</td>
                                    <td>{item.book.name}</td>
                                    <td className="text-right">{item.price}</td>
                                    <td className="text-center">
                                        <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-right mt-5 font-bold text-xl">
                        <div>จำนวนสินค้า : {orderItems.length}</div>
                        <div>ราคารวม : {totalPrice.toLocaleString()}</div>
                    </div>

                    <div className="text-center mt-3">
                        <button onClick={handleConfirm} className="bg-teal-600 text-white px-4 py-2 rounded-lg text-xl">
                            <i className="fa-solid fa-check pr-3"></i>
                            ยืนยันการขาย
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}