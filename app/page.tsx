'use client';
import { useState } from 'react';
import Swal from 'sweetalert2'; // เพิ่มโค้ดนี้เพื่อใช้ SweetAlert2
import axios from 'axios'; // เพิ่มโค้ดนี้เพื่อใช้ Axios
import { ApiUrl, Token } from './config'; // เพิ่มโค้ดนี้เพื่อใช้ค่าจาก confg.ts
import { useRouter } from 'next/navigation'; // เพิ่มโค้ดนี้เพื่อใช้ useRouter

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // เพิ่มโค้ดนี้เพื่อใช้ useRouter

  const handleLogin = async () => {
    try {
      const payload = {
        username: username,
        password: password
      }
      const url = `${ApiUrl}/api/user/signin`;
      const response = await axios.post(url, payload);

      if (response.data.token !== null) {
        localStorage.setItem(Token, response.data.token);
        router.push('/backoffice'); // เปลี่ยนหน้าเป็นหน้า backoffice
      }
    } catch (err: any) {
      // แสดงข้อความข้อผิดพลาด
      Swal.fire({
        title: 'Error',
        text: err.message,
        icon: 'error'
      })
    }
  }

  return (
    <div className="w-[500px] mx-auto bg-gray-700 p-10 rounded-2xl mt-20">
      <div className="text-2xl font-bold text-center mb-10">
        Login to BackOffice
      </div>
      <div>Username</div>
      <input type="text"
        className="form-control"
        onChange={(e) => setUsername(e.target.value)} />

      <div className="mt-4">Password</div>
      <input type="password"
        className="form-control"
        onChange={(e) => setPassword(e.target.value)} />

      <button className="btn mt-5" onClick={handleLogin}>Login</button>
    </div>
  );
}
