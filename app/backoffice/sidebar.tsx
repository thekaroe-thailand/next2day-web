'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl, Token } from '../config';
import { useRouter } from 'next/navigation'; // เติมตรงนี้เพื่อให้เปลี่ยนหน้าได้
import Swal from 'sweetalert2'; // เพิ่มโค้ดนี้เพื่อใช้ SweetAlert2

export default function Sidebar() {
    const router = useRouter(); // เติมตรงนี้เพื่อให้เปลี่ยนหน้าได้
    const [name, setName] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `${ApiUrl}/api/user/info`;
        const token = localStorage.getItem(Token);
        const headers = {
            'Authorization': token
        }
        const response = await axios.get(url, { headers });
        if (response.data.name !== null) {
            setName(response.data.name);
        }
    }

    const handleLogout = async () => {
        const button = await Swal.fire({
            title: 'Sign Out',
            text: 'คุณต้องการออกจากระบบหรือไม่?',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true
        })

        if (button.isConfirmed) {
            localStorage.removeItem(Token);
            router.push("/"); // ไปที่หน้า login
        }
    }

    return (
        <div className="w-[300px] h-screen bg-gray-700">
            <div className="mb-0 bg-gradient-to-tr from-blue-500 to-pink-600 p-5">
                <div>Kob POS</div>
                <div><i className="fa-solid fa-user"></i> {name}</div>
                <div className="mt-5">
                    <button className="bg-red-500 text-white p-2 rounded-md"
                        onClick={handleLogout}>
                        <i className="fa-solid fa-times mr-2"></i>
                        Logout
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 p-5">
                <Link href="/backoffice/dashboard">
                    <i className="fa-solid fa-chart-line mr-2"></i>
                    Dashboard
                </Link>
                <Link href="/book">
                    <i className="fa-solid fa-book mr-2"></i>
                    Book
                </Link>
                <Link href="/backoffice/sale">
                    <i className="fa-solid fa-cart-shopping mr-2"></i>
                    Sale
                </Link>
            </div>
        </div>
    )
}