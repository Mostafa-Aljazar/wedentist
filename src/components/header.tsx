"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { logo } from "@/assets"
import { cn } from "@/utils/cn"

type Props = {}

const Header = (props: Props) => {
  const { slug } = useParams()
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-30 bg-white py-4 shadow-sm">
      <div className="container">
        <div className="flex  items-center justify-between">
          <nav>
            <ul className="flex gap-4 ">
              <li>
                <Link
                  href={`/${slug}`}
                  className={cn(
                    "  duration-300  ",
                    pathname === `/${slug}`
                      ? "text-primary"
                      : "text-[#3e4444] hover:text-primary",
                  )}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "  duration-300 ",
                    pathname === `/${slug}/about`
                      ? " text-primary "
                      : "text-[#3e4444] hover:text-primary",
                  )}
                  href={`/${slug}/about`}>
                  نبذة تعريفية
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "  duration-300 ",
                    pathname === `/${slug}/contact`
                      ? "text-primary "
                      : "text-[#3e4444] hover:text-primary",
                  )}
                  href={`/${slug}/contact`}>
                  للتواصل
                </Link>
              </li>
            </ul>
          </nav>
          <Link href={`/${slug}`}>
            <Image src={logo} alt="logo" className="w-12" />
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
