"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('culoginToken');
    console.log("token : ",token);
    if (token !== 'loggedin') {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="text-black">
      {/* Content */}
    </div>
  );
}