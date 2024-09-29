import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import arrow from '../../images/Group 3430.png'


const FourthForm = ({ pagination, setPagination, formData, updateFormData, handleSubmit }) => {
  const [localFormData, setLocalFormData] = useState(formData)
  

  useEffect(() => {
    updateFormData(localFormData)
  }, [localFormData, updateFormData])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLocalFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await handleSubmit()
  }

  return (
    <div className='w-full px-3'>
      <p className='text-lg'>REFERRAL DETAILS</p>

    
      <div className='w-full flex justify-end gap-6 px-5 py-16'>
        <div onClick={() => { setPagination(pagination - 1) }} className='bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer'>BACK</div>
        <div onClick={onSubmit} className='bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer'>
          <p>SUBMIT</p>
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default FourthForm