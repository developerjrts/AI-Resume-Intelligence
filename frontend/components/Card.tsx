import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react'


interface props {
  children?: ReactNode;
  className?: string;
}

const Card = (props: props) => {
  return (
    <div
    className={cn(
      "p-4 rounded-sm bg-white shadow-sm",
      props.className
    )}
    >
    {props.children}
    </div>
  )
}

export default Card