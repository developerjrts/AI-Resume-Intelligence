import { cn } from '@/utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

const Button = (props: props) => {
  return (
    <button
    className={cn(
        "bg-blue-500 py-2 px-4 rounded-sm cursor-pointer active:bg-blue-600 text-white",
        props.className
    )}
    {...props}
    >
        {props.children ? props.children : "Button"}

    </button>
  )
}

export default Button