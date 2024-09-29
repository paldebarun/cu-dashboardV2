import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import arrow from '../../images/Group 3430.png'

const ThirdForm = ({ pagination, setPagination, formData, updateFormData }) => {
  const [localFormData, setLocalFormData] = useState(formData)

  useEffect(() => {
    updateFormData(localFormData)
  }, [localFormData, updateFormData])

  const handleInputChange = (advisor, field, value) => {
    setLocalFormData(prevData => ({
      ...prevData,
      [advisor]: {
        ...prevData[advisor],
        [field]: value
      }
    }))
  }

  const renderAdvisorFields = (advisor, title) => (
    <div className='flex gap-6 w-full mx-auto justify-between py-16'>
      <div className='w-3/12 space-y-3'>
        <p>{title} NAME</p>
        <input
          type="text"
          value={localFormData[advisor]?.ProposedFacultyAdvisorName || ''}
          onChange={(e) => handleInputChange(advisor, 'ProposedFacultyAdvisorName', e.target.value)}
          className='outline-none w-full border-black border-2 rounded-lg py-2 px-3'
        />
      </div>
      <div className='w-3/12 space-y-3'>
        <p>EID</p>
        <input
          type="text"
          value={localFormData[advisor]?.ProposedFacultyAdvisorEid || ''}
          onChange={(e) => handleInputChange(advisor, 'ProposedFacultyAdvisorEid', e.target.value)}
          className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
        />
      </div>
      <div className='w-3/12 space-y-3'>
        <p>PHONE NO</p>
        <input
          type="tel"
          value={localFormData[advisor]?.MobileNumber || ''}
          onChange={(e) => handleInputChange(advisor, 'MobileNumber', e.target.value)}
          className='outline-none w-full text-slate-400 border-black border-2 rounded-lg py-2 px-3'
        />
      </div>
     
    </div>
  )

  return (
    <div className='w-full px-3'>
      <p className='text-lg'>FACULTY ADVISOR/ CO - FACULTY ADVISOR DETAILS</p>

      {renderAdvisorFields('proposedFacultyAdvisor1', 'FACULTY ADVISOR 1')}
      {renderAdvisorFields('proposedFacultyAdvisor2', 'FACULTY ADVISOR 2')}
      {renderAdvisorFields('proposedFacultyCoAdvisor1', 'FACULTY CO ADVISOR 1')}
      {renderAdvisorFields('proposedFacultyCoAdvisor2', 'FACULTY CO ADVISOR 2')}

      <div className='w-full flex justify-end gap-6 px-5 py-16'>
        <div onClick={() => { setPagination(pagination - 1) }} className='bg-[#767676] text-white px-4 py-3 rounded-lg hover:cursor-pointer'>BACK</div>
        <div onClick={() => { setPagination(pagination + 1) }} className='bg-[#6296FE] text-white px-4 py-3 rounded-lg gap-2 flex items-center justify-center hover:cursor-pointer'>
          <p>NEXT</p>
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default ThirdForm