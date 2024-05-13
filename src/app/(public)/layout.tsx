import React from "react"

import Header from "@/components/header"

type Props = { children: React.ReactNode }

const layout = ({ children }: Props) => {
  return (
    <div className="  min-h-screen bg-[#f0f0f0]">
      <Header />
      {children}
    </div>
  )
}

export default layout
