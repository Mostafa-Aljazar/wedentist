"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Doctor as DoctorType } from "@/models/Doctor"
import { Autoplay } from "swiper/modules"

// import required modules

import DoctorCard from "./doctor-card"

interface SwiperSectionProps {
  doctors: DoctorType[]
}
const SwiperSection: React.FC<SwiperSectionProps> = ({ doctors }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        786: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      loop={true}>
      {doctors.map((doctor, index) => (
        <SwiperSlide key={doctor.slug + index} className="flex justify-center">
          <DoctorCard data={doctor} destination="swiper" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperSection
