

import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from '../EntityDisplay'





const Page = async() => {

    // const body={
    //     "success": true,
    //     "message": "Communities retrieved successfully",
    //     "Entity": [
    //         {
    //             "_id": "66f4de36762a95b41f46a3f3",
    //             "ProposedEntityName": "Tech Innovators",
    //             "EntityDepartment": {
    //                 "_id": "66b9b03bc0ac943bedddc3ff",
    //                 "name": "DAA",
    //                 "__v": 0
    //             },
    //             "EntityInstitute": {
    //                 "_id": "66c20d024d660ac444fb3b76",
    //                 "name": "B1",
    //                 "__v": 0
    //             },
    //             "EntityCluster": {
    //                 "_id": "66c20c8c4d660ac444fb3b71",
    //                 "name": "Technology",
    //                 "__v": 0
    //             },
    //             "TypeOfEntity": "Community",
    //             "CategoryOfEntity": "b",
    //             "ProposedBy": "student",
    //             "proponentName": "John Doe",
    //             "proponentDepartment": {
    //                 "_id": "66b9b03bc0ac943bedddc3ff",
    //                 "name": "DAA",
    //                 "__v": 0
    //             },
    //             "natureofEntity": "Invention and incubation",
    //             "proposedFacultyAdvisor": [
    //                 {
    //                     "ProposedFacultyAdvisorName": "Dr. Jane Smith",
    //                     "ProposedFacultyAdvisorEid": "JS12345",
    //                     "MobileNumber": "1234567890",
    //                     "_id": "66f4de36762a95b41f46a3f4"
    //                 },
    //                 {
    //                     "ProposedFacultyAdvisorName": "Dr. Jane Smith",
    //                     "ProposedFacultyAdvisorEid": "JS12345",
    //                     "MobileNumber": "1234567890",
    //                     "_id": "66f4de36762a95b41f46a3f5"
    //                 }
    //             ],
    //             "proposedFacultyCoAdvisor": [
    //                 {
    //                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
    //                     "ProposedFacultyCoAdvisorEid": "EB67890",
    //                     "MobileNumber": "0987654321",
    //                     "_id": "66f4de36762a95b41f46a3f6"
    //                 },
    //                 {
    //                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
    //                     "ProposedFacultyCoAdvisorEid": "EB67890",
    //                     "MobileNumber": "0987654321",
    //                     "_id": "66f4de36762a95b41f46a3f7"
    //                 }
    //             ],
    //             "proposedStudentRepresentative": [
    //                 {
    //                     "proposedStudentRepresentativeName": "Alice Johnson",
    //                     "proposedStudentRepresentativeUid": "UJ98765",
    //                     "MobileNumber": "1122334455",
    //                     "_id": "66f4de36762a95b41f46a3f8"
    //                 },
    //                 {
    //                     "proposedStudentRepresentativeName": "Alice Johnson",
    //                     "proposedStudentRepresentativeUid": "UJ98765",
    //                     "MobileNumber": "1122334455",
    //                     "_id": "66f4de36762a95b41f46a3f9"
    //                 }
    //             ],
    //             "proposedStudentJointRepresentative": [
    //                 {
    //                     "proposedStudentRepresentativeName": "Bob Williams",
    //                     "proposedStudentRepresentativeUid": "UJ54321",
    //                     "MobileNumber": "5566778899",
    //                     "_id": "66f4de36762a95b41f46a3fa"
    //                 },
    //                 {
    //                     "proposedStudentRepresentativeName": "Bob Williams",
    //                     "proposedStudentRepresentativeUid": "UJ54321",
    //                     "MobileNumber": "5566778899",
    //                     "_id": "66f4de36762a95b41f46a3fb"
    //                 }
    //             ],
    //             "ProposedDate": "2024-08-15T00:00:00.000Z",
    //             "__v": 0
    //         },
    //         {
    //             "_id": "66f4de50762a95b41f46a401",
    //             "ProposedEntityName": "Tech Innovators",
    //             "EntityDepartment": {
    //                 "_id": "66b9b03bc0ac943bedddc3ff",
    //                 "name": "DAA",
    //                 "__v": 0
    //             },
    //             "EntityInstitute": {
    //                 "_id": "66c20d024d660ac444fb3b76",
    //                 "name": "B1",
    //                 "__v": 0
    //             },
    //             "EntityCluster": {
    //                 "_id": "66c20c8c4d660ac444fb3b71",
    //                 "name": "Technology",
    //                 "__v": 0
    //             },
    //             "TypeOfEntity": "Community",
    //             "CategoryOfEntity": "b",
    //             "ProposedBy": "student",
    //             "proponentName": "John Doe",
    //             "proponentDepartment": {
    //                 "_id": "66b9b03bc0ac943bedddc3ff",
    //                 "name": "DAA",
    //                 "__v": 0
    //             },
    //             "natureofEntity": "Invention and incubation",
    //             "proposedFacultyAdvisor": [
    //                 {
    //                     "ProposedFacultyAdvisorName": "Dr. Jane Smith",
    //                     "ProposedFacultyAdvisorEid": "JS12345",
    //                     "MobileNumber": "1234567890",
    //                     "_id": "66f4de50762a95b41f46a402"
    //                 },
    //                 {
    //                     "ProposedFacultyAdvisorName": "Dr. Jane Smith",
    //                     "ProposedFacultyAdvisorEid": "JS12345",
    //                     "MobileNumber": "1234567890",
    //                     "_id": "66f4de50762a95b41f46a403"
    //                 }
    //             ],
    //             "proposedFacultyCoAdvisor": [
    //                 {
    //                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
    //                     "ProposedFacultyCoAdvisorEid": "EB67890",
    //                     "MobileNumber": "0987654321",
    //                     "_id": "66f4de50762a95b41f46a404"
    //                 },
    //                 {
    //                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
    //                     "ProposedFacultyCoAdvisorEid": "EB67890",
    //                     "MobileNumber": "0987654321",
    //                     "_id": "66f4de50762a95b41f46a405"
    //                 }
    //             ],
    //             "proposedStudentRepresentative": [
    //                 {
    //                     "proposedStudentRepresentativeName": "Alice Johnson",
    //                     "proposedStudentRepresentativeUid": "UJ98765",
    //                     "MobileNumber": "1122334455",
    //                     "_id": "66f4de50762a95b41f46a406"
    //                 },
    //                 {
    //                     "proposedStudentRepresentativeName": "Alice Johnson",
    //                     "proposedStudentRepresentativeUid": "UJ98765",
    //                     "MobileNumber": "1122334455",
    //                     "_id": "66f4de50762a95b41f46a407"
    //                 }
    //             ],
    //             "proposedStudentJointRepresentative": [
    //                 {
    //                     "proposedStudentRepresentativeName": "Bob Williams",
    //                     "proposedStudentRepresentativeUid": "UJ54321",
    //                     "MobileNumber": "5566778899",
    //                     "_id": "66f4de50762a95b41f46a408"
    //                 },
    //                 {
    //                     "proposedStudentRepresentativeName": "Bob Williams",
    //                     "proposedStudentRepresentativeUid": "UJ54321",
    //                     "MobileNumber": "5566778899",
    //                     "_id": "66f4de50762a95b41f46a409"
    //                 }
    //             ],
    //             "ProposedDate": "2024-08-15T00:00:00.000Z",
    //             "__v": 0
    //         }
    //     ]
    // }
    const res=await fetch('http://localhost:4000/api/communitiesRoutes/communities');
    
    const body=await res.json();
    
       console.log("this is response : ", body);


  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="Communities" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#45C87A' rightcolor='#146034' />
       

        </div>
        
        <EntityDisplay data={body.Entity} />

    </div>
  )
}

export default Page