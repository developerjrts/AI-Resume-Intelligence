"use client"
import Nav from '@/components/Nav'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Landing = () => {

   const router = useRouter();
   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem("session_code");
  
      if (token) {
        router.replace("/dashboard")
      } else {
        setIsAuthenticated(false)
      }
  
    }, [router]);
  
      if (!isAuthenticated) {
          return (
              <div className="flex min-h-screen items-center justify-center">
                  <p>Loading...</p>
              </div>
          )
      }


  return (
    <div className="h-screen bg-white">
      <Nav />
      <div className="flex flex-col gap-2 justify-center px-5 md:px-48 items-center text-center h-[90%]">
        <h1 className='text-3xl md:text-6xl font-semibold'>Turn Your Resume Into Your
           <span
           className='bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent'
           >
            {" "}Competitive Advantage.
          </span>
        </h1>
        <p
        className='text-xl md:text-2xl'
        >Upload your resume for an instant, AI-powered analysis. We score your resume against industry standards and provide actionable feedback to get you past ATS and in front of recruiters.</p>
      </div>
    </div>
  )
}

export default Landing