"use client";

import { useEffect, useState } from 'react';

const Page = ({ params }: { params: { entityName: string } }) => {
  const [entityName, setEntityName] = useState(params.entityName);
  const [name, setName] = useState('');
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [entityType, setEntityType] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setEntityName(decodeURIComponent(params.entityName));
  }, [params.entityName]);

  const handleSendOtp = async () => {
    if (!email) {
      setMessage("Please enter your university email.");
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("OTP sent successfully! Check your email.");
      } else {
        setMessage(data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage("An error occurred while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !uid || !email || !otp || !entityType) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:4000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          uid,
          otp,
          entityType,
          entityId: entityName, // Assuming entityName is the ID of the entity
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Member successfully registered! Pending approval.");
      } else {
        setMessage(data.message || "Failed to register member.");
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center py-16">
        <div className="p-10 bg-[#e3edff] rounded-lg shadow-lg w-full max-w-2xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-bold mb-4">Membership Form</h2>
            <h3 className="text-center text-lg font-semibold mb-4">{entityName}</h3>
            {message && <p className="text-center text-red-500">{message}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="entityType">
                  Entity Type
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="entityType"
                  type="text"
                  placeholder="Type of entity"
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                />
              </div>
              <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  University Email
                </label>

                <div className="w-full flex border rounded-xl justify-between">
                  <input
                    className=" bg-transparent   w-9/12 py-2 px-3 text-gray-700   outline-none"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="  text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                    style={{ backgroundColor: "#bdd3ff" }}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send OTP'}
                  </button>
                </div>
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
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="flex justify-center  mb-40">
                <button
                  type="submit"
                  className="text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                  style={{ backgroundColor: "#6296FE" }}
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
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
