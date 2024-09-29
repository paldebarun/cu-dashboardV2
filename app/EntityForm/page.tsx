"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import tick from '../images/tick.png'
import FirstForm from './component/FirstForm'
import SecondForm from './component/SecondForm'
import ThirdForm from './component/ThirdForm'
import FourthForm from './component/FourthForm'
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';
const Page = () => {
  const [pagination, setPagination] = useState(1)
  const [formData, setFormData] = useState({})
  const router = useRouter();
  const updateFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }))
  }

  const handleSubmit = async () => {
    try {
      const toastId = toast.loading("Submitting");
      console.log(formData);
      let endpoint = '';
      
      switch(formData.entityType) {
        case "COMMUNITY":
          endpoint = 'http://localhost:4000/api/communitiesRoutes/communities';
          break;
        case "DEPT. SOCIETY":
          endpoint = 'http://localhost:4000/api/deptSocieties/departmental-societies';
          break;
        case "PROFF. SOCIETY":
          endpoint = 'http://localhost:4000/api/proffSocieties/professional-societies';
          break;
        default:
          endpoint = 'http://localhost:4000/api/clubRoutes/clubs';
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.dismiss(toastId); 
        toast.success("Successfully applied");
        router.push('/login')
      } else {
        toast.dismiss(toastId); // dismiss loading toast
        toast.error("Something went wrong. Please try again.");
        router.push('/login');

      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form. Please try again.')
    }
  }

  return (
    <div className='px-7 py-10 flex justify-center items-center'>
      <div className='bg-[#E3EDFF] px-8 py-10 w-8/12'>
        <div className='bg-white py-3 space-y-6'>
          <p className='text-2xl px-3'>Entity Proposal Form</p>
          
          <div className='flex w-full py-5'>
          </div>
          
          {pagination === 1 && <FirstForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} />}
          {pagination === 2 && <SecondForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} />}
          {pagination === 3 && <ThirdForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} />}
          {pagination === 4 && <FourthForm pagination={pagination} setPagination={setPagination} formData={formData} updateFormData={updateFormData} handleSubmit={handleSubmit} />}
        </div>
      </div>
    </div>
  )
}

export default Page