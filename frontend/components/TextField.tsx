"use client"
import { cn } from '@/utils/cn';
import { InputHTMLAttributes, ChangeEvent, useState, ReactNode } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import IconButton from './IconButton';

interface props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string,
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = (props: props) => {

  const [show, setShow] = useState(false)
  const [focuse, setFocuse] = useState(false)

  return (
    <div className='w-full'>
      <p
      className='text-[#333]'
      >{props.label}</p>
      <div
      className={cn(
        `border border-[#333] w-full flex gap-2 items-center justify-between outline-none transition-all p-2  rounded-sm ${
        focuse && "border-2 border-blue-500"
        }`,
        props.className
      )}
      >
        {props.startIcon}

        <input 
        className="outline-none text-lg placeholder:text-[#333] w-full"
        {...props}
        type={show ? "text" : "password"}
        onFocus={() => setFocuse(true)} 
        onBlur={() => setFocuse(false)}
        />

      {
        props.type === "password" && (
          <IconButton
          onClick={() => setShow(!show)}
          >
            { 
           show ? <FaRegEyeSlash /> : <FaRegEye />
            }
          </IconButton>
        )
      }

      </div>
    </div>
  )
}

export default TextField