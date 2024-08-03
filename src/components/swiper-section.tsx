"use client"

import React from "react"
// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/effect-flip"
import "swiper/css/zoom"

import Link from "next/link"
import { Doctor as DoctorType } from "@/models/Doctor"

import DoctorCard from "./doctor-card"

interface SwiperSectionProps {
  doctors: DoctorType[]
}
const SwiperSection: React.FC<SwiperSectionProps> = ({ doctors }) => {

  return (
    <Swiper
      className="flex w-[90%] items-center justify-center shadow-xl"
      modules={[Navigation, Zoom, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      // navigation
      zoom={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      <div className="">
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index} className="  shadow-2xl shadow-neutral-400">
            <Link
              href={`/${doctor.personalInformation.name.toLowerCase().split(" ")[0]}/1`}
              suppressHydrationWarning={false}>
              <DoctorCard data={doctor} destination="swiper" />
            </Link>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  )
}

export default SwiperSection
