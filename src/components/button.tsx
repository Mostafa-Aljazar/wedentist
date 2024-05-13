"use client"

import React, { ButtonHTMLAttributes } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/utils/cn"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}
const Button = ({ className, children, href, ...props }: Props) => {
  const router = useRouter()
  const handleClick = () => {
    if (href) router.push(href)
  }
  return (
    <button
      onClick={handleClick}
      className={cn(
        "rounded bg-[#3e4444] px-5 py-3 text-white duration-300 hover:bg-primary ",
        className,
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
