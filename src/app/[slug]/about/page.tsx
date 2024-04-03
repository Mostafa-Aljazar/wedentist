import React from "react"
import Button from "@/components/button"
import { DoctorResponse } from "@/types/doctors-response"

type Props = {
  params: { slug: string }
}

const page = async ({ params }: Props) => {
  const { slug } = params
  const response = await fetch("http://localhost:3000/data/data.json")
  const data = (await response.json()) as DoctorResponse
  const doctor = data.doctors.find((d) => d.slug === slug)!
  return (
    <div className="bg-white border rounded-lg px-6 py-8  text-sm text-[#333] h-fit">
      <h1 className="text-[30px] lg:text-[35px] mb-7">نبذة تعريفية</h1>
      <p>{doctor.introduction}</p>
      <h2 className="py-7 text-[28px] lg:text-[32px]">المسيرة التعليمية</h2>

      <div className=" space-y-4">
        <div dir="ltr">
          <p>
            <span className="font-bold text-base">{doctor.education.year}</span>{" "}
            <span>{doctor.education.course}</span>
            <br /> from{" "}
            <span className="font-semibold">{doctor.education.uni}</span>,{" "}
            <span>{doctor.education.location}</span> /{" "}
            <span className="font-bold">{doctor.education.GAP}</span>
          </p>
        </div>
        <div className="flex gap-4">
          <Button href={`/${slug}/contact`}>تواصل معي</Button>
          <a
            className="rounded bg-[#888] hover:bg-[#333] duration-300 px-5 py-3 text-white  leading-tight"
            href={`/${slug}.pdf`}
            download>
            تحميل الCV
          </a>
        </div>
      </div>
    </div>
  )
}

export default page
