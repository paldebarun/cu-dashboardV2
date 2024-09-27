

import React from 'react'
import EntityBanner from '../EntityBanner'
import EntityDisplay from '../EntityDisplay'










const Page = async() => {

 

     const res = await fetch('http://localhost:4000/api/deptSocieties/departmental-societies/');
    console.log("this is response of club : ",res);

   const body=await res.json();


    console.log("this is body ",body);
   

 



//    const body=
//    {
//     "success": true,
//     "message": "Clubs retrieved successfully",
//     "Entity": [
//         {
//             "_id": "66f4dc5aca1a1e3696f55ad3",
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
//             "TypeOfEntity": "Club",
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
//                     "_id": "66f4dc5aca1a1e3696f55ad4"
//                 },
//                 {
//                     "ProposedFacultyAdvisorName": "Dr. Jane Smith",
//                     "ProposedFacultyAdvisorEid": "JS12345",
//                     "MobileNumber": "1234567890",
//                     "_id": "66f4dc5aca1a1e3696f55ad5"
//                 }
//             ],
//             "proposedFacultyCoAdvisor": [
//                 {
//                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
//                     "ProposedFacultyCoAdvisorEid": "EB67890",
//                     "MobileNumber": "0987654321",
//                     "_id": "66f4dc5aca1a1e3696f55ad6"
//                 },
//                 {
//                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
//                     "ProposedFacultyCoAdvisorEid": "EB67890",
//                     "MobileNumber": "0987654321",
//                     "_id": "66f4dc5aca1a1e3696f55ad7"
//                 }
//             ],
//             "proposedStudentRepresentative": [
//                 {
//                     "proposedStudentRepresentativeName": "Alice Johnson",
//                     "proposedStudentRepresentativeUid": "UJ98765",
//                     "MobileNumber": "1122334455",
//                     "_id": "66f4dc5aca1a1e3696f55ad8"
//                 },
//                 {
//                     "proposedStudentRepresentativeName": "Alice Johnson",
//                     "proposedStudentRepresentativeUid": "UJ98765",
//                     "MobileNumber": "1122334455",
//                     "_id": "66f4dc5aca1a1e3696f55ad9"
//                 }
//             ],
//             "proposedStudentJointRepresentative": [
//                 {
//                     "proposedStudentRepresentativeName": "Bob Williams",
//                     "proposedStudentRepresentativeUid": "UJ54321",
//                     "MobileNumber": "5566778899",
//                     "_id": "66f4dc5aca1a1e3696f55ada"
//                 },
//                 {
//                     "proposedStudentRepresentativeName": "Bob Williams",
//                     "proposedStudentRepresentativeUid": "UJ54321",
//                     "MobileNumber": "5566778899",
//                     "_id": "66f4dc5aca1a1e3696f55adb"
//                 }
//             ],
//             "ProposedDate": "2024-08-15T00:00:00.000Z",
//             "__v": 0
//         },
//         {
//             "_id": "66f4dc5dca1a1e3696f55ae1",
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
//             "TypeOfEntity": "Club",
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
//                     "_id": "66f4dc5dca1a1e3696f55ae2"
//                 },
//                 {
//                     "ProposedFacultyAdvisorName": "Dr. Jane Smith",
//                     "ProposedFacultyAdvisorEid": "JS12345",
//                     "MobileNumber": "1234567890",
//                     "_id": "66f4dc5dca1a1e3696f55ae3"
//                 }
//             ],
//             "proposedFacultyCoAdvisor": [
//                 {
//                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
//                     "ProposedFacultyCoAdvisorEid": "EB67890",
//                     "MobileNumber": "0987654321",
//                     "_id": "66f4dc5dca1a1e3696f55ae4"
//                 },
//                 {
//                     "ProposedFacultyCoAdvisorName": "Dr. Emily Brown",
//                     "ProposedFacultyCoAdvisorEid": "EB67890",
//                     "MobileNumber": "0987654321",
//                     "_id": "66f4dc5dca1a1e3696f55ae5"
//                 }
//             ],
//             "proposedStudentRepresentative": [
//                 {
//                     "proposedStudentRepresentativeName": "Alice Johnson",
//                     "proposedStudentRepresentativeUid": "UJ98765",
//                     "MobileNumber": "1122334455",
//                     "_id": "66f4dc5dca1a1e3696f55ae6"
//                 },
//                 {
//                     "proposedStudentRepresentativeName": "Alice Johnson",
//                     "proposedStudentRepresentativeUid": "UJ98765",
//                     "MobileNumber": "1122334455",
//                     "_id": "66f4dc5dca1a1e3696f55ae7"
//                 }
//             ],
//             "proposedStudentJointRepresentative": [
//                 {
//                     "proposedStudentRepresentativeName": "Bob Williams",
//                     "proposedStudentRepresentativeUid": "UJ54321",
//                     "MobileNumber": "5566778899",
//                     "_id": "66f4dc5dca1a1e3696f55ae8"
//                 },
//                 {
//                     "proposedStudentRepresentativeName": "Bob Williams",
//                     "proposedStudentRepresentativeUid": "UJ54321",
//                     "MobileNumber": "5566778899",
//                     "_id": "66f4dc5dca1a1e3696f55ae9"
//                 }
//             ],
//             "ProposedDate": "2024-08-15T00:00:00.000Z",
//             "__v": 0
//         }
//     ]
// }
   
   
      
  

  return (
    <div className='w-9/12 flex py-10'>
        <div className='w-5/12'>
        <EntityBanner text="club" description="Discover a world of opportunities to explore your passions and make a lasting impact on campus." leftcolor='#EE8585' rightcolor='#7A180B' />
       

        </div>
        
        <EntityDisplay data={body.Entities}  />

    </div>
  )
}



export default Page