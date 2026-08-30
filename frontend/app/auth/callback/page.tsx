"use client"
import React, {useEffect} from 'react'
import {useRouter, useSearchParams} from "next/navigation"
import { toast } from 'sonner'

const page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    toast.success("Authorization successfull");
    const toastId = toast.loading("Signing you in...")
    const token = searchParams.get("session_code");

    if (!token) {
      router.replace("/auth/sign-in");
      return;
    }

    localStorage.setItem("session_code", token);
    toast.dismiss(toastId)
    toast.success("Welcome to AI Resume Intelligence.")
    router.replace("/dashboard")
    
  }, [router, searchParams])

  return (
    <div 
    className="flex items-center justify-center min-h-screen"
    >
        Signing you in...
    </div>
  )
}

export default page