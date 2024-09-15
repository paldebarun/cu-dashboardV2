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
 import plus from '../images/Group 1000002786.png'

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

interface ScheduleEvent {
  start: string;
  end: string;
  subject: string;
  location?: string;
  organizer?: string;
}


const scheduledData: { [key: string]: ScheduleEvent[]} = {
  "2024-09-21": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "Interview Call for Freshers"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Interview Call for Freshers"
    }
  ],
  "2024-09-22": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "Art Exhibition Setup"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Art Exhibition Opening"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "Guided Tour"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "Guest Speaker Session"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Artist Meet & Greet"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "Art Exhibition Main Event",
      "location": "Art Gallery",
      "organizer": "Cultural Society"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Live Painting Demo"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "Closing Ceremony"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Exhibition Wrap-Up"
    }
  ],
  "2024-09-23": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "AI Workshop Setup"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Introduction to AI"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "AI Workshop Session 1",
      "location": "Room 204",
      "organizer": "Tech Club"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "AI Tools Overview"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Lunch Break"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "AI Workshop Session 2"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Hands-on AI Project"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "AI in Industry Discussion"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Workshop Closing Remarks"
    }
  ],
  "2024-09-24": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "Music Fest Setup"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Sound Check"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "Band Rehearsal"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "Stage Setup"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Lunch Break"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "Guest Artist Performance"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Main Music Fest",
      "location": "Auditorium",
      "organizer": "Music Society"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "Band Performance"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Closing Act"
    }
  ],
  "2024-09-25": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "Hackathon Kickoff",
      "location": "Lab 101",
      "organizer": "Coding Club"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Team Formation"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "Problem Statement Release"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "Coding Begins"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Lunch Break"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "Coding Continues"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Progress Check"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "Mentorship Session"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Day 1 Wrap-Up"
    }
  ],
  "2024-09-26": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "Drama Rehearsal Setup"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Scene 1 Rehearsal"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "Scene 2 Rehearsal"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "Scene 3 Rehearsal"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Lunch Break"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "Scene 4 Rehearsal"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Scene 5 Rehearsal"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "Full Dress Rehearsal",
      "location": "Main Stage",
      "organizer": "Drama Club"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Rehearsal Wrap-Up"
    }
  ],
  "2024-09-27": [
    {
      "start": "9:00",
      "end": "9:30",
      "subject": "Networking Event Setup"
    },
    {
      "start": "10:00",
      "end": "10:30",
      "subject": "Keynote Speech"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "subject": "Panel Discussion"
    },
    {
      "start": "12:00",
      "end": "12:30",
      "subject": "Networking Session 1"
    },
    {
      "start": "13:00",
      "end": "13:30",
      "subject": "Lunch Break"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "subject": "Networking Session 2"
    },
    {
      "start": "15:00",
      "end": "15:30",
      "subject": "Main Networking Event",
      "location": "Conference Room",
      "organizer": "Professional Society"
    },
    {
      "start": "16:00",
      "end": "16:30",
      "subject": "Industry Expert Meetup"
    },
    {
      "start": "17:00",
      "end": "17:30",
      "subject": "Event Wrap-Up"
    }
  ]
};








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




const Page = () => {

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);

  useEffect(() => {
    if (date) {
      const formattedDate = date.toISOString().split('T')[0];
      console.log(formattedDate);


      const data = scheduledData[formattedDate] || [];

 
      const finalData = data.length ? data : scheduledData[new Date().toISOString().split('T')[0]] || [];

      setSchedule(finalData);
    } else {
      
      const today = new Date().toISOString().split('T')[0];
      setSchedule(scheduledData[today] || []);
    }
  }, [date]);


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
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Name</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Date Purchased</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left">Purchased By</th>
                    <th className="py-3 text-sm font-thin text-slate-600 px-6 text-left"></th> 
                  </tr>
                </thead>
                <tbody>
                  {
                    eventApprovalData.map((event, index) => (
                      <tr key={index} className="border-b px-2">
                        <td className="py-3 text-sm px-6 font-light">{event.name}</td>
                        <td className="py-3 text-sm px-6 font-light">{event.datepurchased}</td>
                        <td className="py-3 text-sm px-6 font-light">{event.purchasedby}</td>
                        <td className="py-3 px-6 ">
                          <button className="bg-[#F0F9FF]  text-[#89868D] text-sm px-3 py-2 rounded-xl  border boorder-[#0095FF]">
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

          <div className='calender_section flex flex-col justify-start items-center px-3 bg-slate-100 rounded-lg'>
          <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md "
    />
<div className='w-full py-3 rounded-lg bg-white '>
    <div className=' w-full flex justify-between px-3'>
    <p>{date?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
      <div className='bg-[#0095FF] w-[35px] h-[36px] rounded-lg flex items-center justify-center hover:cursor-pointer'>
        <Image src={plus} alt="add-schedule"/>
      </div>

    </div>

<div className='schedule-section w-full mt-6 flex flex-col justify-start gap-6 px-2'>
  {schedule.length > 0 ? (
    schedule.map((data, index) => (
      <div key={index} className='flex gap-2 border-b-2 py-3'>
        <p className='text-slate-500 text-wrap'>
          {data.start}
        </p>

        <div className='bg-[#C3DBFF] w-9/12 p-3 space-y-4 rounded-2xl'>
          <p className='text-sm'>{data.subject}</p>
          <p className='text-sm text-slate-500'>{data.start} - {data.end}</p>
        </div>
      </div>
    ))
  ) : (
    <div className='w-full flex justify-center'>
       <p className="text-slate-500 py-3 ">No schedule available </p>
    </div>
   
  )}
</div>

        </div>  
          </div>
          </div>
  
          
        </div>
      </div>
    )
  }
  
  export default Page
  