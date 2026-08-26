import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const IconButton = (props: props) => {
  return (
    <button
    className='hover:bg-gray-300 transition-all duration-500 cursor-pointer rounded-full p-2'
    {...props}
    >
        {props.children}
    </button>
  )
}

export default IconButton