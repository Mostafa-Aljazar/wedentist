import { Doctor, DoctorResponse } from "@/types/doctors-response"
import React from "react"
import { asrar, mesfer, rayan } from "@/assets"
import Image from "next/image"

type Props = {
  data: Doctor
}
const images = [mesfer, rayan, asrar] as const
const DoctorCard = ({ data }: Props) => {
  return (
    <div className="border bg-white shadow p-5 rounded    space-y-5  text-sm">
      <div>
        <div className="w-[126px] h-[126px] aspect-square rounded-full mx-auto mb-7 overflow-hidden">
          <Image
            src={images[data.id - 1]}
            alt={data.personalInformation.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className=" text-[#333]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          blanditiis ea nostrum enim necessitatibus maiores consequuntur
          repudiandae at ducimus et labore totam iste exercitationem sunt, quo
          quis suscipit excepturi ex?
        </p>
      </div>

      <div className="w-2/3 h-[1.5px] ml-auto bg-gray-300"></div>
      <div className=" space-y-4">
        <p>عنوان فرعي </p>
        <p className="text-[#aaa] text-xm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, porro
          iure est odit mollitia similique in culpa libero doloribus ad!
          Doloribus officiis vero unde excepturi tempora autem, perspiciatis
          architecto, eos voluptatibus quidem,
        </p>
      </div>
      <div className="w-2/3 h-[1.5px] ml-auto bg-gray-300"></div>
      <div className="flex gap-3 "></div>
    </div>
  )
}

export default DoctorCard
