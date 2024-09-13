"use client"


import React from 'react'
import home from '../images/Home.png'
import ManageEntities from '../images/Chart.png'
import Image from 'next/image'
import EventApproval from '../images/Document.png'
import Notification from '../images/Message.png'
import profile from '../images/Profile.png'
import setting from '../images/Info-Square.png'
import signup from '../images/Logout.png'
import search from '../images/XMLID 223.png'
import bellicon from '../images/Group 1000002785.png'
import rectanglehollow from '../images/Rectangle 907.png'
import rectanglefilled from '../images/Rectangle 1393.png'
import arrowhead from '../images/Group 21861.png'


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  Dept_Societies: {
    label: "Dept.Societies",
    color: "#54B8FF",
  },
  Clubs: {
    label: "Clubs",
    color: "#3CD856",
  },
  Prof_Societies: {
    label: "Prof.Societies",
    color: "#FF947A",
  },
  Communities: {
    label: "Communities",
    color: "#BF83FF",
  },
} satisfies ChartConfig;


const sidebarData=[
    {
        icon:home,
        text:"Home"
    },
    {
        icon:ManageEntities,
        text:"Manage Entities"
    },
    {
        icon:EventApproval,
        text:"Event Approval"
    },
    {
        icon:Notification,
        text:"Notifications"
    },
    {
        icon:profile,
        text:"Profile"
    },
    {
        icon:setting,
        text:"Setting"
    },
    {
        icon:signup,
        text:"Signup"
    },
    
]

const EntityData=[
    {   text:"Entity",
        width:178,
        height:181
    },
    {   text:"Entity",
        width:178,
        height:181
    },
    {   text:"Entity",
        width:178,
        height:181
    },
    {   
        text:"Entity",
        width:178,
        height:181
    },

]


const chartData = [
  // { month: "January", Dept_Societies: 186, Clubs: 80, Prof_Societies: 200, Communities: 100 },
  // { month: "February", Dept_Societies: 305, Clubs: 200, Prof_Societies: 150, Communities: 90 },
  // { month: "March", Dept_Societies: 237, Clubs: 120, Prof_Societies: 130, Communities: 85 },
  // { month: "April", Dept_Societies: 73, Clubs: 190, Prof_Societies: 110, Communities: 75 },
  // { month: "May", Dept_Societies: 209, Clubs: 130, Prof_Societies: 120, Communities: 80 },
  { month: "Jun", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
  { month: "Jul", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
  { month: "Aug", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
  { month: "Sept", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
  { month: "Oct", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
  { month: "Nov", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
  { month: "Dec", Dept_Societies: 214, Clubs: 140, Prof_Societies: 125, Communities: 82 },
]


const eventApprovalData=[

    {
      name:"lorem ipsum",
      datepurchased:"1-2-2024",
      purchasedby:"xyz",
      
    },
    {
        name:"lorem ipsum",
        datepurchased:"1-2-2024",
        purchasedby:"xyz",
        
      },
      {
        name:"lorem ipsum",
        datepurchased:"1-2-2024",
        purchasedby:"xyz",
        
      },
      {
        name:"lorem ipsum",
        datepurchased:"1-2-2024",
        purchasedby:"xyz",
        
      },
      {
        name:"lorem ipsum",
        datepurchased:"1-2-2024",
        purchasedby:"xyz",
        
      }
]

const page = () => {
    return (
      <div className='flex w-screen '>
        <div className='sidebar  flex flex-col gap-6 w-1/5 h-screen'>
          <div className='flex flex-col items-start px-10 py-4'>
            <p className='text-2xl '>Hello!</p>
            <p className='text-3xl font-semibold'>Toshit</p>
          </div>
          <div className='p-3 flex flex-col gap-5'>
            {
              sidebarData.map((data, index) => (
                <div key={index} className='flex items-center gap-3 hover:cursor-pointer py-4 px-6 rounded-2xl hover:bg-[#C3DBFF]'>
                  <Image src={data.icon} alt={data.text} />
                  <p>{data.text}</p>
                </div>
              ))
            }
          </div>
        </div>
  
        <div className='w-full flex flex-col '>
          <div className='Navbar flex w-full h-[100px]  items-center justify-between px-3'>
            <div className='flex gap-2 px-5 py-5 h-[60px] bg-[#F9FAFB] rounded-2xl'>
              <Image src={search} alt="search" className='w-6 h-6' />
              <input placeholder='Search' className='outline-none bg-[#F9FAFB] w-[300px]' />
            </div>
  
            <div className='flex gap-3'>
              <div className='w-[63.22px] h-[60px] relative'>
                <Image src={rectanglehollow} alt="belliconbg" className='w-full h-full' />
                <Image src={bellicon} alt="bellicon" className='absolute w-6/12 h-6/12 top-1/4 left-1/4' />
              </div>
  
              <Image src={rectanglefilled} alt="filledrectangle" className='w-[63.22px] h-[60px]' />
  
              <div className='flex items-start'></div>
              <div>
                <p className='font-semibold'>Toshit</p>
                <p className='text-slate-400'>Admin</p>
              </div>
  
              <Image src={arrowhead} alt="profile" className='w-[16.86px] h-[16px] mt-3 hover:cursor-pointer' />
            </div>
          </div>
  
          <div className='w-full'>
            <div className='w-full h-auto flex gap-6 py-7 px-10'>
              {
                EntityData.map((entity, index) => (
                  <div key={index} className="w-[150px] h-[150px] rounded-2xl shadow-lg flex items-center justify-center">
                    <p>{entity.text}</p>
                  </div>
                ))
              }
            </div>

            <div className='w-full flex gap-6 px-10 py-7'>
    
            <div className='eventApproval-section shadow-md  rounded-2xl w-6/12 px-7 py-5'>
              <h2 className="text-2xl font-semibold mb-4">Event Approval</h2>
              <table className="w-full bg-white ">
                <thead className="">
                  <tr>
                    <th className="py-3 font-thin text-slate-600 px-6 text-left">Name</th>
                    <th className="py-3 font-thin text-slate-600 px-6 text-left">Date Purchased</th>
                    <th className="py-3 font-thin text-slate-600 px-6 text-left">Purchased By</th>
                    <th className="py-3 font-thin text-slate-600 px-6 text-left"></th> 
                  </tr>
                </thead>
                <tbody>
                  {
                    eventApprovalData.map((event, index) => (
                      <tr key={index} className="border-b px-2">
                        <td className="py-3 px-6 font-light">{event.name}</td>
                        <td className="py-3 px-6 font-light">{event.datepurchased}</td>
                        <td className="py-3 px-6 font-light">{event.purchasedby}</td>
                        <td className="py-3 px-6 ">
                          <button className="bg-[#F0F9FF]  text-[#89868D] px-4 py-2 rounded-xl  border boorder-[#0095FF]">
                           View
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

            <div className='w-3/12 shadow-lg rounded-2xl'>
              <p className='text-white'>xyz</p>
            </div>

            </div>

            <div className='w-9/12 py-10'>
  <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
    <BarChart accessibilityLayer data={chartData}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={20}
        axisLine={false}
        tickFormatter={(value) => value.slice(0, 5)}
      />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
     
      <Bar dataKey="Dept_Societies" fill="var(--color-Dept_Societies)" radius={4} />
      <Bar dataKey="Clubs" fill="var(--color-Clubs)" radius={4} />
      <Bar dataKey="Prof_Societies" fill="var(--color-Prof_Societies)" radius={4} />
      <Bar dataKey="Communities" fill="var(--color-Communities)" radius={4} />
    </BarChart>
  </ChartContainer>
</div>


          </div>
        </div>
      </div>
    )
  }
  
  export default page
  