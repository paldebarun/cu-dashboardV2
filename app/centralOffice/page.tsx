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
        <div className='sidebar flex flex-col gap-6 w-1/5 border h-screen'>
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
          <div className='Navbar flex w-full h-[100px] border items-center justify-between px-3'>
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

          </div>
        </div>
      </div>
    )
  }
  
  export default page
  