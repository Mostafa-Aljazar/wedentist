"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { logo } from "@/assets"
import { LogOut, SquareTerminal, Users } from "lucide-react"
import { signOut } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SideBar() {
  const pathName = usePathname()
  return (
    <aside className="inset-y fixed right-0  top-0 z-20 flex h-full flex-col border-l bg-white">
      <div className="border-b p-2">
        <Button
          className="overflow-hidden  bg-white hover:bg-white"
          size="icon"
          aria-label="Home">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className=" size-7" />
          </Link>
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-lg ",
                  pathName === "/dashboard" && " bg-muted",
                )}
                aria-label="الرئيسية">
                <Link href={"/dashboard"}>
                  <SquareTerminal className="size-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={5}>
              الرئيسية
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-lg ",
                  pathName.includes("/dashboard/users") && " bg-muted",
                )}
                aria-label="المقالات">
                <Link href={"/dashboard/users"}>
                  <Users className="size-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={5}>
              المقالات
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={async () => {
                  await signOut()
                }}
                variant="ghost"
                size="icon"
                className="mt-auto rounded-lg"
                aria-label="Account">
                <LogOut className=" size-5  text-red-500" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={5}>
              تسجيل الخروج
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}
