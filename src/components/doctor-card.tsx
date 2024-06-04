/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import { type Doctor } from "@/models/Doctor"
import { Instagram, MapPin, Phone } from "lucide-react"

type Props = {
  data: Doctor
}
const DoctorCard = ({ data }: Props) => {
  return (
    <div className="space-y-5 rounded  border bg-white    p-5  text-sm ">
      <div className="text-center ">
        <div className="mx-auto mb-7 aspect-square h-[126px] w-[126px] overflow-hidden rounded-full">
          <img
            src={data.image}
            alt={data.personalInformation.name}
            className="h-full w-full object-cover object-[0,18%]"
          />
        </div>
        <p className=" mb-1 text-xl font-semibold text-[#333] ">
          {data.personalInformation.name}
        </p>
        <span className=" text-[#929191]">
          {data.personalInformation.specialization}
        </span>
      </div>

      <div className="ml-auto h-[1.5px] w-2/3 bg-gray-300"></div>
      <div className=" space-y-2">
        <div className="flex items-center gap-1 text-sm text-[#919191] duration-200 hover:text-[#333]">
          <MapPin className="  c w-4  shrink-0 text-primary" />
          {data.personalInformation.location}
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(
              data.personalInformation.contact.phoneNumber,
            )
          }}
          className="flex cursor-pointer items-center gap-1 text-sm text-[#919191] duration-200 hover:text-[#333]">
          <Phone className="w-4  shrink-0 text-primary" />

          {data.personalInformation.contact.phoneNumber}
        </div>
        {data.personalInformation.contact.socialMedia.map((e, i) => {
          return (
            <a
              target="_blank"
              href={e.link}
              key={e.id}
              className="flex cursor-pointer items-center gap-1 text-[#919191] duration-200 hover:text-[#333]">
              <Instagram className=" w-4  shrink-0 text-primary" />

              {e.user}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorCard
