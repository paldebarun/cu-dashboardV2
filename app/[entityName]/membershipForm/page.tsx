"use client";
import { useEffect, useState } from 'react';



const Page = ({params}:{params:{entityName:string}}) => {
  const [entityName, setEntityName] = useState(params.entityName);

  useEffect(() => {
  
    setEntityName(decodeURIComponent(params.entityName));
  }, [params.entityName]);

  return (
    <>
  
      <div className="flex justify-center items-center min-h-screen">
        <div style={{ backgroundColor: '#e3edff' }} className="p-10 rounded-lg shadow-lg w-full max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-md"> 
            <h2 className="text-center text-xl font-bold mb-4">Membership Form</h2>
            <h3 className="text-center text-lg font-semibold mb-4">{entityName}</h3>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uid">
                  UID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="uid"
                  type="text"
                  placeholder="Enter your UID"
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  University Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-28"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="absolute right-1 top-11 transform -translate-y-1/2 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                  style={{ backgroundColor: "#bdd3ff" }}
                >
                  Send OTP
                </button>
              </div>

              <div className="mb-10">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                  OTP
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                />
              </div>
              <div className="flex justify-center  mb-40">
                <button className="text-white font-bold py-2 px-4 rounded hover:bg-blue-700" style={{ backgroundColor: "#6296FE" }}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
