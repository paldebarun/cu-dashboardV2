import Image from 'next/image'
import Culogo from '../images/cu-logo 1.png'
import Culogo2 from '../images/Component 168.png'
import Grouplogo from '../images/Group 3411.svg'
import search from '../images/XMLID 223.png'
import home from '../images/homeEntity.png'
import sidebarSearch from '../images/search.png'
import depsocicon from '../images/event_available.png'
import profsocicon from '../images/reviews.png'
import commicon from '../images/live_help.png'
import Link from 'next/link'

const sidebarData=[
    {
       icon:sidebarSearch,
       text:"Clubs"
    },
    {
      icon:depsocicon,
      text:"Dept.Soc."
    },
    {
        icon:profsocicon,
        text:"Prof.Soc."
    },
    {
     icon:commicon,
     text:"Communities"
    }

]

export default function EntityLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className='w-full h-screen overflow-y-hidden'> 
        <div className='flex  py-4 px-5 bg-[#F0F1F6] justify-between shadow-lg'>
           <div className='flex gap-3 w-full'>
            <Image src={Culogo} alt="cu-logo" className='w-28' />
            <Image src={Culogo2} alt="cu-logo-2" className='w-28'/>
            <Image src={Grouplogo} alt="group-logo" className='w-28'/>

            <div className='flex gap-2 w-4/12  items-center rounded-xl bg-white px-4 py-2 shadow-inner '>
            <Image src={search} alt="search" className='w-5 h-5 ' />
            <input type="text" placeholder='search' className='outline-none  w-full'/>
           </div>
           </div>

           

           <div className='flex items-center gap-4'>
            <Image src={home} alt="home" className='w-8 h-7 hover:cursor-pointer' />
            <Link href="/login" className='bg-white px-7 py-2 rounded-full  border-2 border-slate-400'> login</Link>
           </div>
        </div>
        <div className='flex w-full'>
        <div className='sidebar h-screen w-2/12 py-20 bg-[#F0F1F6]'>
         {
            sidebarData.map((ele,index)=>(
                <div key={index} className='flex  gap-3 border-b-2 items-center px-7 py-7 group hover:bg-gradient-to-r from-[#6FA8E7] to-[#194D95] hover:cursor-pointer'>
                    <Image src={ele.icon} alt={ele.text} className='group-hover:invert'/>
                    <p className='group-hover:text-white text-lg'>{ele.text}</p>
                    </div>
            ))
         }
        </div>
        {children}
        </div>
        </section>
  }