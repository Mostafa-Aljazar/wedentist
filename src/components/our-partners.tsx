import React from "react"
import { notFound } from "next/navigation"
import Doctor, { Doctor as DoctorType } from "@/models/Doctor"

import SwiperSection from "./swiper-section"

export const dynamic = "force-dynamic"
const OurPartners = async () => {
  const doctors = (await Doctor.find().exec()) as DoctorType[]
  if (!doctors) notFound()
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center gap-7 ">
          <div className="flex aspect-square w-fit items-center rounded-full bg-primary p-2 text-white">
            <h2 className=" w-fit text-4xl   font-semibold lg:text-5xl ">شركائنا</h2>
          </div>
          <p className="text-light text-xl font-light">نحن نعمل مع أفضل الشركاء</p>
          <SwiperSection doctors={JSON.parse(JSON.stringify(doctors))} />
        </div>
      </div>
    </section>
  )
}

export default OurPartners
