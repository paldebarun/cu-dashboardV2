
"use client"
import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from './EntityDisplay'
import { useState,useEffect } from 'react';




const Page = () => {
   
  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="club" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#EE8585' rightcolor='#7A180B' />
       

        </div>
        
        <EntityDisplay  />

    </div>
  )
}

export default Page