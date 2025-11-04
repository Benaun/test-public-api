import type React from 'react'

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export const Button = ({
  children,
  className,
  ...props
}: IProps) => {
  return (
    <button
      className={`cursor-pointer ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
