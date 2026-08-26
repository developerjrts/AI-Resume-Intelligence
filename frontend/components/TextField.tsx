"use client"
import { cn } from '@/utils/cn';
import { ChangeEvent, InputHTMLAttributes, ReactNode, useState } from 'react';

interface props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: ReactNode;
}

const TextField = ({label, startIcon, className, ...inputProps}: props) => {

  const [focuse, setFocuse] = useState(false)

  return (
    <div className='w-full'>
      <p
      className='text-[#333]'
      >{label}</p>
      <div
      className={cn(
        `border border-[#333] w-full flex gap-2 items-center justify-between outline-none transition-all p-2  rounded-sm ${
        focuse && "border-2 border-blue-500"
        }`,
        className
      )}
      >
        {startIcon}

        <input 
        className="outline-none text-lg placeholder:text-[#555] w-full"
        {...inputProps}
        onFocus={() => setFocuse(true)} 
        onBlur={() => setFocuse(false)}
        />

      </div>
    </div>
  )
}

export default TextField