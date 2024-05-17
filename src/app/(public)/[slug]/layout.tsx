import React from "react"
import { notFound } from "next/navigation"
import Doctor, { type Doctor as DoctorType } from "@/models/Doctor"

import dbConnect from "@/lib/db"
import DoctorCard from "@/components/doctor-card"

type Props = {
  children: React.ReactNode
  params: {
    slug: string
  }
}

export default async function layout({ children, params }: Props) {
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  const { slug } = params
  await dbConnect()
  const doctor = (await Doctor.findOne({ slug })) as DoctorType

  !doctor && notFound()

  return (
    <main className=" py-8  ">
      <div className="container">
        <div className=" gap-8 md:flex">
          <div className="w-[220px] shrink-0 max-md:hidden">
            <DoctorCard data={JSON.parse(JSON.stringify(doctor))} />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
