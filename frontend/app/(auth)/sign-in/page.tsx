"use client"
import api from '@/api/api'
import Button from '@/components/Button'
import Card from '@/components/Card'
import TextField from '@/components/TextField'
import { isAxiosError } from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { FaLock } from 'react-icons/fa6'
import { MdAlternateEmail } from "react-icons/md"

const SignIn = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async() => {
    console.log("API calling");
    
    try {
      const {data} = await api.post("/user/sign-in", {
        username,
        password
      })

    console.log(data);

    } catch (error) {
      if (isAxiosError(error)) {
        const errMessage = error.response?.data.message
        alert(errMessage)
      }
    } finally {
      console.log("API called");
      
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
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

        <Button
        onClick={signIn}
        >
          Sign In
        </Button>

      <p className="text-center">Don't have an account? <Link href={"/sign-up "} className='text-blue-500 font-semibold' >Sign Up</Link></p>
      </Card>
    </div>
  )
}

export default SignIn