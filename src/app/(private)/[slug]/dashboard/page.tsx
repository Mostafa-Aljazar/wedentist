import React from "react"
import { notFound } from "next/navigation"
import Doctor, { type Doctor as DoctorType } from "@/models/Doctor"

import dbConnect from "@/lib/db"
import DoctorInfo from "@/components/private/doctor-inot"

type Props = { params: { slug: string } }

export const dynamic = "force-dynamic"
const page = async ({ params: { slug } }: Props) => {
  await dbConnect()
  const doctor = (await Doctor.findOne({ slug })) as DoctorType
  console.log("🚀 ~ page ~ doctor:", doctor)
  if (!doctor) notFound()
  return (
    <div>
      <DoctorInfo doctor={JSON.parse(JSON.stringify(doctor))} />
    </div>
  )
}
export default page
