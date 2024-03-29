"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type Props = {}

const Header = (props: Props) => {
  const pathName = usePathname()
  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-30">
      <div className="container">
        <div className="flex  justify-between">
          <Link href={"/"}>LOGO</Link>
          <nav>
            <ul className="flex gap-4 ">
              <li>
                <Link href="/" className="  duration-300  text-gray-900">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className="  duration-300 text-gray-400 hover:text-gray-900"
                  href="/about">
                  نبذة تعريفية
                </Link>
              </li>
              <li>
                <Link
                  className="  duration-300 text-gray-400 hover:text-gray-900"
                  href="/contact">
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
