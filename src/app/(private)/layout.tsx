import React from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/next-auth"
import { Toaster } from "@/components/ui/sonner"
import SideBar from "@/components/private/side-bar"
import TopBar from "@/components/private/top-bar"

type Props = {
  children: React.ReactNode
}

const layout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")
  return (
    <div className="grid h-screen w-full pr-[56px] pt-[56px]">
      <SideBar />
      <TopBar />
      <div className="p-4 lg:p-8">{children}</div>
      <Toaster />
    </div>
  )
}

export default layout
