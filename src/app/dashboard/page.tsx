'use client';
import React, { useState } from 'react';


export default function DashboardPage({ username }: { username: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {sidebarOpen && (
        <div className="w-64 bg-white shadow-md p-4 flex flex-col gap-4">
          <div className="font-semibold text-lg">👤 Hai {username}</div>
          <button className="text-left hover:bg-gray-200 p-2 rounded">Halaman Utama</button>
          <button className="text-left hover:bg-gray-200 p-2 rounded">Riwayat Transaksi</button>
          <button className="text-left hover:bg-gray-200 p-2 rounded">Notifikasi</button>
          <button className="text-left hover:bg-gray-200 p-2 rounded">Pengaturan</button>
          <button
            onClick={() => {
              localStorage.removeItem('username');
              window.location.href = '/login';
            }}
            className="text-left hover:bg-red-100 text-red-600 p-2 rounded"
          >
            Keluar
          </button>
        </div>
      )}

   
      <div className="flex-1 p-6">
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-2xl">👨🏻‍💻</button>
            <div className="font-bold text-xl">BPPN.STORE</div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="text-xl">🔍</button>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center font-bold text-xl">ML</div>
          <div className="bg-white p-6 rounded-lg shadow text-center font-bold text-xl">PUBG</div>
          <div className="bg-white p-6 rounded-lg shadow text-center font-bold text-xl">FF</div>
          <div className="bg-white p-6 rounded-lg shadow text-center font-bold text-xl">+</div>
        </div>
      </div>
    </div>
  );
}
