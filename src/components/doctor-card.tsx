/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import { type Doctor } from "@/models/Doctor"
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react"

const TikTok = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className={className + " fill-primary "}>
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
)
const SocialMedia = {
  tiktok: TikTok,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
}

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
          const Icon =
            SocialMedia[e.platform.toLowerCase() as keyof typeof SocialMedia]
          return (
            <a
              target="_blank"
              href={e.link}
              key={e.id}
              className="flex cursor-pointer items-center gap-1 text-[#919191] duration-200 hover:text-[#333]">
              <Icon className=" w-4  shrink-0 text-primary" />
              {e.user}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorCard
