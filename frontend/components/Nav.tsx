"use client"
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

const Nav = () => {

    const router = useRouter()

  return (
    <div className="px-4 h-[10%] flex justify-between items-center py-2 bg-white shadow-sm">
        <h1 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>AI Resume Intelligence</h1>
        <Button
        onClick={() => router.replace("/auth/sign-up")}
        >
            Sign Up
        </Button>
    </div>
  )
}

export default Nav