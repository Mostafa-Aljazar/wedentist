"use client"
import { cn } from "@/utils/cn"
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
        <div className="flex  justify-between">
          <Link href={`/${slug}`}>LOGO</Link>
          <nav>
            <ul className="flex gap-4 ">
              <li>
                <Link
                  href={`/${slug}`}
                  className={cn(
                    "  duration-300  ",
                    pathname === `/${slug}`
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-900"
                  )}>
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className={cn(
                    "  duration-300 ",
                    pathname === `/${slug}/about`
                      ? 'text-gray-900"'
                      : "text-gray-400 hover:text-gray-900"
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
                      ? 'text-gray-900"'
                      : "text-gray-400 hover:text-gray-900"
                  )}
                  href={`/${slug}/contact`}>
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
