"use client"

import React, { useState } from 'react'
import search from '../images/search.png'
import Image from 'next/image'
import arrowdown from '../images/keyboard_arrow_down.png'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



interface Entity {
    Name: string;
    Department: string;
    Institute: string;
    Cluster: string;
}

interface EntityDisplayProps {
    data: Entity[];
}

const departments = [
    "Physiotherapy",
    "Automobile Engineering",

];

const clusters = [
    "Health & Allied Sciences",
    "Engineering & Technology",


];

const EntityDisplay = ({ data }: EntityDisplayProps) => {
    const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
    const [selectedClusters, setSelectedClusters] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
   
    const handleDepartmentSelect = (department: string) => {
        setSelectedDepartments(prev => 
            prev.includes(department) 
                ? prev.filter(d => d !== department) 
                : [...prev, department]
        );
    };

 
    const handleClusterSelect = (cluster: string) => {
        setSelectedClusters(prev => 
            prev.includes(cluster) 
                ? prev.filter(c => c !== cluster) 
                : [...prev, cluster] 
        );
    };

   
    const filteredData = data.filter(item =>
        (selectedDepartments.length === 0 || selectedDepartments.includes(item.Department)) &&
        (selectedClusters.length === 0 || selectedClusters.includes(item.Cluster)) &&
        (item.Name.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className='w-11/12 shadow-xl border rounded-2xl px-2 h-[700px] bg-[#F0F1F6]'>
            <div className='header py-4 flex justify-between px-3'>
                <div className='flex w-6/12 bg-[#F0F1F6] py-3 px-4 border shadow-inner rounded-full'>
                    <Image src={search} alt="search" />
                    <input type="text"
                        placeholder='Search by Name'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className='outline-none px-4 w-full bg-[#F0F1F6]' />
                </div>

            
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex items-center border gap-2 shadow-lg py-2 px-4 rounded-full hover:cursor-pointer'>
                            <p className='font-normal'>Department</p>
                            <Image src={arrowdown} alt="kyboard-arrow-down" className='w-3 h-2' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Select Departments</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            departments.map((department, index) => (
                                <DropdownMenuCheckboxItem
                                    key={index}
                                    checked={selectedDepartments.includes(department)}
                                    onCheckedChange={() => handleDepartmentSelect(department)}
                                >
                                    {department}
                                </DropdownMenuCheckboxItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>

             
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex items-center border gap-2 shadow-lg py-2 px-4 rounded-full hover:cursor-pointer'>
                            <p className='font-normal'>Clusters</p>
                            <Image src={arrowdown} alt="keyboard-arrow-down" className='w-3 h-2' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Select Clusters</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {
                            clusters.map((cluster, index) => (
                                <DropdownMenuCheckboxItem
                                    key={index}
                                    checked={selectedClusters.includes(cluster)}
                                    onCheckedChange={() => handleClusterSelect(cluster)}
                                >
                                    {cluster}
                                </DropdownMenuCheckboxItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

           
            <div className="w-full h-[700px] bg-[#F0F1F6] border rounded-3xl overflow-hidden">
                <div className="overflow-y-auto w-full max-h-[700px] border ">
                    <table className="w-full text-center">
                        <thead className="bg-gradient-to-r from-[#6FA8E7] to-[#194D95] rounded-t-2xl ">
                            <tr>
                                <th className="border-b-2 text-white font-normal py-6">Name</th>
                                <th className="border-b-2 text-white font-normal py-6">Department</th>
                                <th className="border-b-2 text-white font-normal py-6">Institute</th>
                                <th className="border-b-2 text-white font-normal py-6">Cluster</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className={`border-b border-black ${index === data.length - 1 ? 'rounded-b-2xl' : ''}`}>
                                    <td className="py-2 px-4 font-bold">{item.Name}</td>
                                    <td className="py-2 px-4 font-normal text-sm">{item.Department}</td>
                                    <td className="py-2 px-4 font-normal text-sm">{item.Institute}</td>
                                    <td className="py-2 px-4 font-normal text-sm">{item.Cluster}</td>
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
