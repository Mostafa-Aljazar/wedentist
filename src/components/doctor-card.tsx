"use client"
import { Doctor, DoctorResponse } from "@/types/doctors-response"
import React from "react"
import { asrar, mesfer, rayan } from "@/assets"
import Image from "next/image"
import { Instagram, MapPin, Phone } from "lucide-react"

type Props = {
  data: Doctor
}
const images = [mesfer, rayan, asrar] as const
const DoctorCard = ({ data }: Props) => {
  return (
    <div className="border bg-white  p-5 rounded    space-y-5  text-sm">
      <div className="text-center ">
        <div className="w-[126px] h-[126px] aspect-square rounded-full mx-auto mb-7 overflow-hidden">
          <Image
            src={images[data.id - 1]}
            alt={data.personalInformation.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className=" text-[#333] font-semibold text-xl mb-1 ">
          {data.personalInformation.name}
        </p>
        <span className=" text-[#929191]">
          {data.personalInformation.specialization}
        </span>
      </div>

      <div className="w-2/3 h-[1.5px] ml-auto bg-gray-300"></div>
      <div className=" space-y-2">
        <div className="flex gap-1 items-center text-sm text-[#919191] hover:text-[#333] duration-200">
          <MapPin className="  c shrink-0  w-4 text-primary" />
          {data.personalInformation.location}
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(
              data.personalInformation.contact.phoneNumber
            )
          }}
          className="flex cursor-pointer gap-1 items-center text-sm text-[#919191] hover:text-[#333] duration-200">
          <Phone className="shrink-0  w-4 text-primary" />
          {data.personalInformation.contact.phoneNumber}
        </div>
        {data.personalInformation.contact.socialMedia.map((e, i) => {
          return (
            <a
              target="_blank"
              href={e.link}
              key={e.id}
              className="flex gap-1 items-center text-[#919191] hover:text-[#333] duration-200 cursor-pointer">
              <Instagram className=" shrink-0  w-4 text-primary" />
              {e.user}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorCard
