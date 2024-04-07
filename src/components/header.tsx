"use client"
import { logo } from "@/assets"
import { cn } from "@/utils/cn"
import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import React from "react"

type Props = {}

const Header = (props: Props) => {
  const { slug } = useParams()
  const pathname = usePathname()
  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-30">
      <div className="container">
        <div className="flex  justify-between items-center">
          <nav>
            <ul className="flex gap-4 ">
              <li>
                <Link
                  href={`/${slug}`}
                  className={cn(
                    "  duration-300  ",
                    pathname === `/${slug}`
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  )}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "  duration-300 ",
                    pathname === `/${slug}/about`
                      ? 'text-primary"'
                      : "text-secondary hover:text-primary"
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
                      ? 'text-primary"'
                      : "text-secondary hover:text-primary"
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
