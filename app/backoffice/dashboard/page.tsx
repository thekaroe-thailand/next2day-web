'use client'

import Chart from 'apexcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiUrl } from '../../config';

export default function Page() {
    const [totalBooks, setTotalBooks] = useState(0);
    const [countOrder, setCountOrder] = useState(0);
    const [totalSale, setTotalSale] = useState(0);

    useEffect(() => {
        fetchDataBooks(); // ดึงข้อมูลหนังสือ
        fetchDataOrder(); // ดึงข้อมูลบิล และยอดขาย
        renderChart(); // แสดงกราฟ
    }, []);

    const fetchDataOrder = async () => {
        const responseCountOrder = await axios.get(`${ApiUrl}/api/sale/countOrder`);
        setCountOrder(responseCountOrder.data.count);

        const responseTotalSale = await axios.get(`${ApiUrl}/api/sale/totalSale`);
        setTotalSale(responseTotalSale.data.total);
    }

    const fetchDataBooks = async () => {
        const response = await axios.get(`${ApiUrl}/api/book`);
        setTotalBooks(response.data.length);
    }

    const renderChart = () => {
        const element = document.getElementById('chart')
        const chart = new Chart(element, {
            chart: {
                type: 'bar',
                height: 350
            },
            series: [{
                name: 'ยอดขาย',
                data: [800, 1500, 400, 200, 900, 600, 700, 800, 1800, 500, 300, 1200]
            }],
            xaxis: {
                categories: [
                    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม',
                    'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม',
                    'พฤศจิกายน', 'ธันวาคม'
                ]
            }
        });
        chart.render();
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="flex gap-3">
                <div className="p-5 bg-teal-500 w-full text-2xl text-right">
                    <div>ยอดขาย <i className="fa-solid fa-coins"></i></div>
                    <div className="text-4xl text-bold">{totalSale.toLocaleString()}</div>
                </div>

                <div className="p-5 bg-indigo-500 w-full text-2xl text-right">
                    <div>หนังสือ <i className="fa-solid fa-book"></i></div>
                    <div className="text-4xl text-bold">{totalBooks}</div>
                </div>

                <div className="p-5 bg-orange-500 w-full text-2xl text-right">
                    <div>บิลขาย <i className="fa-solid fa-file-invoice"></i></div>
                    <div className="text-4xl text-bold">{countOrder}</div>
                </div>
            </div>

            <div className="mt-5 bg-white p-5 text-black text-center">
                <div className="text-xl font-bold">ยอดขาย</div>
                <div id="chart"></div>
            </div>
        </div>
    )
}