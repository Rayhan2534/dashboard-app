'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      
      localStorage.setItem('username', username);
      router.push('/dashboard');
    } else {
      alert('Masukkan username dengan benar');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="mb-6">
        <h1 className="text-5xl font-extrabold text-black">BPPN.STORE</h1>
      </div>

      <div className="bg-blue-500 shadow-md rounded-md p-6 w-full max-w-sm">
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}