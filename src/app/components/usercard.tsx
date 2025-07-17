'use client';
import React from 'react';

type Props = {
  username: string;
  onLogout: () => void;
};

export default function UserCard({ username, onLogout }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-72">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl">
          👤
        </div>
        <div>
          <div className="font-semibold text-lg">{username}</div>
          <div className="text-gray-500 text-sm">Akun Terdaftar</div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button className="text-left hover:bg-gray-100 p-2 rounded">🔔 Notifikasi</button>
        <button className="text-left hover:bg-gray-100 p-2 rounded">⚙ Pengaturan</button>
        <button
          onClick={onLogout}
          className="text-left hover:bg-red-100 text-red-600 p-2 rounded"
        >
          🚪 Keluar
        </button>
      </div>
    </div>
  );
}
