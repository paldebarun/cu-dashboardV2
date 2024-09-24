"use client"

import React, { useState } from 'react'
import logo from '../../images/loginpageicon2.png'
import Image from 'next/image'

const Page = () => {
  const [loginData, setLoginData] = useState({ userID: '', password: '' });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("This is login data:", loginData);
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

        <div
          onClick={submitHandler}
          className='w-6/12 bg-[#D91F23] font-bold flex justify-center text-white rounded-full py-5 text-2xl'
        >
          Login
        </div>

        <p className='text-white underline underline-offset-2'>Forget password</p>
      </div>
    </div>
  )
}

export default Page;
