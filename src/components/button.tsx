"use client"
import { cn } from "@/utils/cn"
import { useRouter } from "next/navigation"
import React, { ButtonHTMLAttributes } from "react"

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
        "rounded bg-secondary hover:bg-primary duration-300 px-5 py-3 text-white ",
        className
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
