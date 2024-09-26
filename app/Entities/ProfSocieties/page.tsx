

import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from './EntityDisplay'




const Page = () => {
  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="Professional Societies" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#6195F4' rightcolor='#201690' />
       

        </div>
        
        <EntityDisplay />

    </div>
  )
}

export default Page