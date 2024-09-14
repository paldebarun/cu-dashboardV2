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
import { Calendar } from "@/components/ui/calendar"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
 import { useState,useEffect } from 'react'

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


// const scheduledData = {
//   "2024-09-21": {
//     "9:00": {
//       subject: "Interview Call for Freshers",
//       time: "9:00-9:30"
//     },
//     "10:00": {
//       subject: "Interview Call for Freshers",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "Interview Call for Freshers",
//       time: "11:00-11:30"
//     },
//     "12:00": {
//       subject: "Interview Call for Freshers",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Interview Call for Freshers",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "Interview Call for Freshers",
//       time: "14:00-14:30"
//     },
//     "15:00": {
//       subject: "Interview Call for Freshers",
//       time: "15:00-15:30"
//     },
//     "16:00": {
//       subject: "Interview Call for Freshers",
//       time: "16:00-16:30"
//     },
//     "17:00": {
//       subject: "Interview Call for Freshers",
//       time: "17:00-17:30"
//     }
//   },
//   "2024-09-22": {
//     "9:00": {
//       subject: "Art Exhibition Setup",
//       time: "9:00-9:30"
//     },
//     "10:00": {
//       subject: "Art Exhibition Opening",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "Guided Tour",
//       time: "11:00-11:30"
//     },
//     "12:00": {
//       subject: "Guest Speaker Session",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Artist Meet & Greet",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "Art Exhibition Main Event",
//       time: "14:00-14:30",
//       location: "Art Gallery",
//       organizer: "Cultural Society"
//     },
//     "15:00": {
//       subject: "Live Painting Demo",
//       time: "15:00-15:30"
//     },
//     "16:00": {
//       subject: "Closing Ceremony",
//       time: "16:00-16:30"
//     },
//     "17:00": {
//       subject: "Exhibition Wrap-Up",
//       time: "17:00-17:30"
//     }
//   },
//   "2024-09-23": {
//     "9:00": {
//       subject: "AI Workshop Setup",
//       time: "9:00-9:30"
//     },
//     "10:00": {
//       subject: "Introduction to AI",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "AI Workshop Session 1",
//       time: "11:00-11:30",
//       location: "Room 204",
//       organizer: "Tech Club"
//     },
//     "12:00": {
//       subject: "AI Tools Overview",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Lunch Break",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "AI Workshop Session 2",
//       time: "14:00-14:30"
//     },
//     "15:00": {
//       subject: "Hands-on AI Project",
//       time: "15:00-15:30"
//     },
//     "16:00": {
//       subject: "AI in Industry Discussion",
//       time: "16:00-16:30"
//     },
//     "17:00": {
//       subject: "Workshop Closing Remarks",
//       time: "17:00-17:30"
//     }
//   },
//   "2024-09-24": {
//     "9:00": {
//       subject: "Music Fest Setup",
//       time: "9:00-9:30"
//     },
//     "10:00": {
//       subject: "Sound Check",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "Band Rehearsal",
//       time: "11:00-11:30"
//     },
//     "12:00": {
//       subject: "Stage Setup",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Lunch Break",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "Guest Artist Performance",
//       time: "14:00-14:30"
//     },
//     "15:00": {
//       subject: "Main Music Fest",
//       time: "15:00-15:30",
//       location: "Auditorium",
//       organizer: "Music Society"
//     },
//     "16:00": {
//       subject: "Band Performance",
//       time: "16:00-16:30"
//     },
//     "17:00": {
//       subject: "Closing Act",
//       time: "17:00-17:30"
//     }
//   },
//   "2024-09-25": {
//     "9:00": {
//       subject: "Hackathon Kickoff",
//       time: "9:00-9:30",
//       location: "Lab 101",
//       organizer: "Coding Club"
//     },
//     "10:00": {
//       subject: "Team Formation",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "Problem Statement Release",
//       time: "11:00-11:30"
//     },
//     "12:00": {
//       subject: "Coding Begins",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Lunch Break",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "Coding Continues",
//       time: "14:00-14:30"
//     },
//     "15:00": {
//       subject: "Progress Check",
//       time: "15:00-15:30"
//     },
//     "16:00": {
//       subject: "Mentorship Session",
//       time: "16:00-16:30"
//     },
//     "17:00": {
//       subject: "Day 1 Wrap-Up",
//       time: "17:00-17:30"
//     }
//   },
//   "2024-09-26": {
//     "9:00": {
//       subject: "Drama Rehearsal Setup",
//       time: "9:00-9:30"
//     },
//     "10:00": {
//       subject: "Scene 1 Rehearsal",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "Scene 2 Rehearsal",
//       time: "11:00-11:30"
//     },
//     "12:00": {
//       subject: "Scene 3 Rehearsal",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Lunch Break",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "Scene 4 Rehearsal",
//       time: "14:00-14:30"
//     },
//     "15:00": {
//       subject: "Scene 5 Rehearsal",
//       time: "15:00-15:30"
//     },
//     "16:00": {
//       subject: "Full Dress Rehearsal",
//       time: "16:00-16:30",
//       location: "Main Stage",
//       organizer: "Drama Club"
//     },
//     "17:00": {
//       subject: "Rehearsal Wrap-Up",
//       time: "17:00-17:30"
//     }
//   },
//   "2024-09-27": {
//     "9:00": {
//       subject: "Networking Event Setup",
//       time: "9:00-9:30"
//     },
//     "10:00": {
//       subject: "Keynote Speech",
//       time: "10:00-10:30"
//     },
//     "11:00": {
//       subject: "Panel Discussion",
//       time: "11:00-11:30"
//     },
//     "12:00": {
//       subject: "Networking Session 1",
//       time: "12:00-12:30"
//     },
//     "13:00": {
//       subject: "Lunch Break",
//       time: "13:00-13:30"
//     },
//     "14:00": {
//       subject: "Networking Session 2",
//       time: "14:00-14:30"
//     },
//     "15:00": {
//       subject: "Main Networking Event",
//       time: "15:00-15:30",
//       location: "Conference Room",
//       organizer: "Professional Society"
//     },
//     "16:00": {
//       subject: "Industry Expert Meetup",
//       time: "16:00-16:30"
//     },
//     "17:00": {
//       subject: "Event Wrap-Up",
//       time: "17:00-17:30"
//     }
//   }
// };






const chartData = [

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
      datepurchased:"",
      purchasedby:"",
      
    },
    {
      name:"lorem ipsum",
      datepurchased:"",
      purchasedby:"",
        
      },
      {
        name:"lorem ipsum",
      datepurchased:"",
      purchasedby:"",
        
      },
      {
        name:"lorem ipsum",
        datepurchased:"",
        purchasedby:"",
        
      },
      {
        name:"lorem ipsum",
        datepurchased:"",
        purchasedby:"",
        
      }
]




const page = () => {

  const [date, setDate] = useState<Date | undefined>(new Date());
  
  useEffect(()=>{
    const fun=()=>{
      console.log("this is date",date);
    }
    fun();
  },[date]);


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
              <Image src={search} alt="search" className='w-[24px] h-[24px]' />
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

          <div className='w-full flex px-10 py-7 '>
     <div className='w-11/12 border-r-2'>
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
    
            <div className='eventApproval-section shadow-md  rounded-2xl w-8/12 px-7 py-5'>
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

            <div className='w-9/12  rounded-2xl shadow-lg px-10 py-7'>
              <p className='py-7 text-2xl font-bold'>Active Entities</p>
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

          <div className='calender_section flex flex-col justify-start items-center '>
          <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md "
    />

<div className='shcedile-section mt-6 '>
          
        </div>
          
          </div>
          </div>
  
          
        </div>
      </div>
    )
  }
  
  export default page
  