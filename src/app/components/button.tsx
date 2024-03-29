import { cn } from "@/utils/cn"
import React, { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={cn(
        "rounded bg-[#888] hover:bg-[#333] duration-300 px-5 py-3 text-white ",
        className
      )}
      {...props}>
      {children}
    </button>
  )
}

export default Button
