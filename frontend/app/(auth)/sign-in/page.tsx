"use client"
import Button from '@/components/Button'
import Card from '@/components/Card'
import TextField from '@/components/TextField'
import { isAxiosError } from 'axios'
import { useState } from 'react'
import { FaUser, FaLock } from 'react-icons/fa6'

const SignIn = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async() => {
    try {
      
    } catch (error) {
      if (isAxiosError(error)) {
        const errMessage = error.response?.data.message
        alert(errMessage)
      }
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
        startIcon={<FaUser color='#333 ' />}
        placeholder='@devjrts'
        label='Username'
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

        <Button>
          Sign In
        </Button>

      </Card>
    </div>
  )
}

export default SignIn