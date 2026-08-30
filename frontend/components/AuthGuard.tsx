"use client"
import { useRouter } from "next/navigation"
import { ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";

const AuthGuard = ({children}: {children: ReactNode}) => {

    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("session_code");

        if (!token) {
            toast.error("Session Expired.")
            router.replace("/auth/sign-in")
        } else {
            setIsAuthenticated(true)
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
    <>
    {children}
    </>
  )
}

export default AuthGuard