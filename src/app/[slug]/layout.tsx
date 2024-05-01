import DoctorCard from "@/components/doctor-card"
import { Doctor } from "@/models/Doctor"
import React from "react"
import data from "@/content/data/data.json"

type Props = {
  children: React.ReactNode
  params: {
    slug: string
  }
}
export const dynamicParams = false
export async function generateStaticParams() {
  return data.doctors.map((doctor: Doctor) => ({
    slug: doctor.slug,
  }))
}

export default async function layout({ children, params }: Props) {
  console.log(process.env.NEXT_PUBLIC_BASE_URL)
  const { slug } = params
  const doctor = data.doctors.find((d) => d.slug === slug)!
  return (
    <main className=" py-8  ">
      <div className="container">
        <div className=" md:flex gap-8">
          <div className="w-[220px] shrink-0 max-md:hidden">
            <DoctorCard data={doctor} />
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}
