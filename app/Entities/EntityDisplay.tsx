"use client"


import React from 'react'
import search from '../images/search.png'
import Image from 'next/image'
import arrowdown from '../images/keyboard_arrow_down.png'


interface Entity {
    Name: string;
    Department: string;
    Institute: string;
    Cluster: string;
  }

  interface EntityDisplayProps {
    data: Entity[];
  }



const EntityDisplay = ({data}: EntityDisplayProps) => {
  return (
    <div className='w-11/12 shadow-xl border rounded-2xl px-2 h-[700px] bg-[#F0F1F6]'>
      <div className='header py-4 flex justify-between px-3'>
         <div className='flex w-6/12 bg-[#F0F1F6] py-3 px-4 border shadow-inner rounded-full'> 
            <Image src={search} alt="search" />
            <input type="text" placeholder='Search' className='outline-none  px-4 bg-[#F0F1F6]' />
         </div>
         
         <div className='flex items-center border gap-2 shadow-lg py-2 px-4 rounded-full hover:cursor-pointer'>
             <p className='font-normal'>Department</p>
             <Image src={arrowdown} alt="kyboard-arrow-down" className='w-3 h-2' />
         </div>

         <div className='flex items-center border gap-2 shadow-lg py-2 px-4 rounded-full hover:cursor-pointer'>
             <p className='font-normal'>Cluster</p>
             <Image src={arrowdown} alt="kyboard-arrow-down" className='w-3 h-2' />
         </div>
      </div>

   
      <div className="w-full h-[700px] bg-[#F0F1F6] border   rounded-3xl overflow-hidden">
  <div className="overflow-y-auto w-full max-h-[700px] border ">
    <table className="w-full text-center">
      <thead className="bg-gradient-to-r from-[#6FA8E7] to-[#194D95] rounded-t-2xl ">
        <tr >
          <th className="border-b-2 text-white font-normal py-6">Name</th>
          <th className="border-b-2 text-white font-normal py-6">Department</th>
          <th className="border-b-2 text-white font-normal py-6">Institute</th>
          <th className="border-b-2 text-white font-normal py-6">Cluster</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={`border-b border-black ${index === data.length - 1 ? 'rounded-b-2xl' : ''}`}>
            <td className="py-2 font-bold">{item.Name}</td>
            <td className="py-2 font-normal text-sm">{item.Department}</td>
            <td className="py-2 font-normal text-sm">{item.Institute}</td>
            <td className="py-2 font-normal text-sm">{item.Cluster}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default EntityDisplay