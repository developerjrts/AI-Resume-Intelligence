"use client"
import api, { url } from '@/api/api'
import Button from '@/components/Button'
import Card from '@/components/Card'
import TextField from '@/components/TextField'
import { isAxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaLock } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'
import { MdAlternateEmail } from "react-icons/md"
import {toast} from 'sonner'

const SignIn = () => {

  const [loading, setLoading] = useState<boolean>(false)
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter()

  const signIn = async() => {
    setLoading(true)
    const toastId = toast.loading("Verifying...")
    try {
      const {data} = await api.post("/user/sign-in", {
        username,
        password
      })

    toast.dismiss(toastId)
    toast.success(data.message)
    localStorage.setItem("session_code", data.token)

    } catch (error) {
      if (isAxiosError(error)) {
        const errMessage = error.response?.data.message
        toast.dismiss(toastId)
        toast.error(errMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  const github = () => {
    window.open(`${url}/user/github`)
  }

  return (
    <div className="flex p-2 justify-center items-center min-h-screen">
      <Card
      className='flex flex-col gap-4'
      >
       <div className='text-center'>
         <h1
        className='text-2xl font-medium'
        >
          Welcome back!
        </h1>
        <p>
          Sign in to continue improving your resume with AI.
        </p>
       </div>

        <TextField
        value={username}
        startIcon={<MdAlternateEmail color='#333 ' />}
        placeholder='devjrts'
        label='Username'
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
        value={password}
        startIcon={<FaLock color='#333 ' />}
        placeholder='********'
        label='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        />

        <Link
        href={`/verify?username=${username}`}
        className='font-semibold text-blue-500 text-right'
        >Forgot Password?</Link>

        <Button
        onClick={signIn}
        >
          Sign In
        </Button>

        <Button
        disabled={loading}
        className="bg-white border border-[#333] text-[#333] shadow-sm p-2 rounded-sm flex justify-center items-center gap-2"
        onClick={github}
        >
          <IoLogoGithub color='#333' size={24} />
          Continue with GitHub
        </Button>

      <p className="text-center">Don't have an account? <Link href={"/sign-up "} className='text-blue-500 font-semibold' >Sign Up</Link></p>
      </Card>
    </div>
  )
}

export default SignIn