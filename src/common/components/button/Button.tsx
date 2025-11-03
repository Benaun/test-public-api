import type React from 'react'

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  classname?: string
}

export const Button = ({
  children,
  classname,
  ...props
}: IProps) => {
  return (
    <button className={`cursor-pointer ${classname}`} {...props}>
      {children}
    </button>
  )
}
