"use client";

import React, { useState, useEffect } from 'react';
import logo from '../../images/loginpageicon2.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [loginData, setLoginData] = useState({ userID: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear any previous error

    try {
      const response = await fetch('http://localhost:4000/api/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: loginData.userID, password: loginData.password }),
      });

      const data = await response.json();

      if (data.success) {
        // Store JWT token in localStorage or cookies
        localStorage.setItem('token', data.token);

        // Redirect based on role
        if (data.role === 'Student Rep') {
          router.push('/student-dashboard');
        } else if (data.role === 'Faculty') {
          router.push('/faculty-dashboard');
        } else if (data.role === 'Central Office') {
          router.push('/centralOffice');
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='loginpage h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center w-4/12 border gap-6 px-6 py-10 rounded-3xl backdrop-blur-lg'>
        <Image src={logo} alt="logo" className='w-8/12' />
        <p className='text-white font-bold text-xl'>Login</p>
        <p className='text-center text-slate-300'>
          Welcome to University Co-Curricular Activities Management System
        </p>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          name="userID"
          placeholder='User ID'
          className='bg-transparent outline-none w-full px-3 py-4 border rounded-2xl text-white'
          value={loginData.userID}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder='Password'
          className='bg-transparent outline-none w-full px-3 py-4 border rounded-2xl text-white'
          value={loginData.password}
          onChange={handleChange}
        />

        <button
          onClick={submitHandler}
          className='w-6/12 bg-[#D91F23] font-bold flex justify-center text-white rounded-full py-5 text-2xl'
        >
          Login
        </button>

        <p className='text-white underline underline-offset-2'>Forget password</p>
      </div>
    </div>
  );
};

export default Page;