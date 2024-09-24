

import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from '../EntityDisplay'


const data=[
    {
        Name:"Physio Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Mechatronics Engineering",
        Institute:"University Institute of Engineering(UIE)",
        Cluster:"Engineering & Technology"
    },
    {
        Name:"Automobile Engineers Society",
        Department:"Automobile Engineering",
        Institute:"University Institute of Engineering(UIE)",
        Cluster:"Engineering & Technology"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },

    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },

    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },

    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },

    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },

    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },

    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },
    {
        Name:"Mechatronics Society",
        Department:"Physiotherapy",
        Institute:"University Institute of Applied Health Sciences (UIAHS)",
        Cluster:"Health & Allied Sciences"
    },






]



const Page = () => {
  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="club" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#EE8585' rightcolor='#7A180B' />
       

        </div>
        
        <EntityDisplay data={data} />

    </div>
  )
}

export default Page