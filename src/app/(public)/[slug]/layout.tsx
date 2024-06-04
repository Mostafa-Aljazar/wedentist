import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { logo } from "@/assets"
import Doctor, { type Doctor as DoctorType } from "@/models/Doctor"

import dbConnect from "@/lib/db"
import DoctorCard from "@/components/doctor-card"
import Header from "@/components/header"

type Props = {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export const revalidate = 90

export default async function layout({ children, params }: Props) {
  const { slug } = params
  await dbConnect()
  const doctor = (await Doctor.findOne({ slug })) as DoctorType

  !doctor && notFound()

  return (
    <>
      <Header doctor={JSON.parse(JSON.stringify(doctor))} />

      <main className=" min-h-[calc(100vh-173px)]  py-8 ">
        <div className="container">
          <div className=" gap-8 md:flex">
            <div className="w-[220px] shrink-0 max-md:hidden">
              <DoctorCard data={JSON.parse(JSON.stringify(doctor))} />
            </div>
            {children}
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center bg-white py-6 md:hidden ">
        <div className="flex items-center  gap-3 text-sm font-semibold uppercase text-gray-800">
          <Link href={`/${slug}`}>
            <Image src={logo} alt="logo" className=" w-12 " />
          </Link>
          made by wedentis
        </div>
      </footer>
    </>
  )
}
