

import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from '../EntityDisplay'





const Page = async () => {
   
    const res = await fetch('http://localhost:4000/api/deptSocieties/departmental-societies/');
   
    const body=await res.json();
  
     console.log("this is response : ", body);

  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="Departmental Societies" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#F9D356' rightcolor='#8F7715' />
       

        </div>
        
        <EntityDisplay data={body.Entities} />

    </div>
  )
}

export default Page