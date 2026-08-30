"use client"
import api, { url } from '@/api/api'
import Button from '@/components/Button'
import Card from '@/components/Card'
import TextField from '@/components/TextField'
import { isAxiosError } from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'
import { MdAlternateEmail, MdEmail } from "react-icons/md"
import { toast } from 'sonner'

const SignUp = () => {

  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = async() => {
    setLoading(true)
    const toastId = toast.loading("Creating account, it will take a minute...");
    try {
      const {data} = await api.post("/user/sign-up", {
        name,
        username,
        email,
        password
      })
    toast.dismiss(toastId)
    toast.success(data.message)
    localStorage.setItem("session_code", data.token);
    router.replace("/dashboard")

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
      className='flex flex-col gap-2 md:gap-4'
      >
       <div className='text-center'>
         <h1
        className='text-2xl font-medium'
        >
          Create your account
        </h1>
        <p className='md:block hidden'>
          Build a stronger resume with AI-powered insights.
        </p>
       </div>

        <div className="flex md:flex-row flex-col gap-4">
        <TextField
        value={name}
        startIcon={<FaUser color='#333 ' />}
        placeholder='Kamble Rutik'
        label='Name'
        type='text'
        onChange={(e) => setName(e.target.value)}
        />
        <TextField
        value={username}
        startIcon={<MdAlternateEmail color='#333 ' />}
        placeholder='devjrts'
        label='Username'
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        />
        </div>

      <TextField
        value={email}
        startIcon={<MdEmail color='#333 ' />}
        placeholder='developer@jrts.dev'
        label='Email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        value={password}
        startIcon={<FaLock color='#333 ' />}
        placeholder='********'
        label='Password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <p className="text-center">
        By creating account you're accepting our 
      <Link href={"/terms "} className='text-blue-500 font-semibold' > Terms of Service </Link>
       and
      <Link href={"/privacy "} className='text-blue-500 font-semibold' > Privacy Policy </Link>
      </p>

        <Button
        onClick={signUp}
        disabled={loading}
        >
          Sign Up
        </Button>

       <Button
               disabled={loading}
               className="bg-white border border-[#333] text-[#333] shadow-sm p-2 rounded-sm flex justify-center items-center gap-2"
               onClick={github}
               >
                 <IoLogoGithub color='#333' size={24} />
                 Continue with GitHub
               </Button>

      <p className="text-center">Already have an account? <Link href={"/auth/sign-in"} className='text-blue-500 font-semibold' >Sign In</Link></p>
      </Card>
    </div>
  )
}

export default SignUp