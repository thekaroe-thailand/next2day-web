'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiUrl, Token } from '../../config';
import Swal from 'sweetalert2';

export default function Page() {
    const [barcode, setBarcode] = useState("");

    const handleSave = async () => { }

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
        </div>
    )
}