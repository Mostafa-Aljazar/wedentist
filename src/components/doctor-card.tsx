"use client";
import { type Doctor } from "@/models/Doctor";
import React from "react";
import { asrar, mesfer, rayan } from "@/assets";
import Image from "next/image";
import { Instagram, MapPin, Phone } from "lucide-react";


type Props = {
  data: Doctor;
};
const images = [mesfer, rayan, asrar] as const;
const DoctorCard = ({ data }: Props) => {
  return (
    <div className="border bg-white  p-5 rounded    space-y-5  text-sm ">

      <div className="text-center ">
        <div className="mx-auto mb-7 aspect-square h-[126px] w-[126px] overflow-hidden rounded-full">
          <Image
            // @ts-ignore
            src={images[data.id - 1]}
            alt={data.personalInformation.name}
            className="h-full w-full object-cover"
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
              data.personalInformation.contact.phoneNumber
            );
          }}
          className="flex cursor-pointer gap-1 items-center text-sm text-[#919191] hover:text-[#333] duration-200"
        >
          <Phone className="shrink-0  w-4 text-primary" />

          {data.personalInformation.contact.phoneNumber}
        </div>
        {data.personalInformation.contact.socialMedia.map((e, i) => {
          return (
            <a
              target="_blank"
              href={e.link}
              key={e.id}
              className="flex gap-1 items-center text-[#919191] hover:text-[#333] duration-200 cursor-pointer"
            >
              <Instagram className=" shrink-0  w-4 text-primary" />

              {e.user}
            </a>
          );
        })}
      </div>

      <button className="group flex items-center ml-auto mr-auto justify-between gap-4 rounded-lg border border-primary bg-primary px-6 py-1 transition-colors hover:bg-transparent focus:outline-none ">
        <span className="font-medium text-sm text-white transition-colors group-hover:text-primary group-active:text-primary">
          تعديل
        </span>

        <span className="shrink-0 rounded-full border border-current bg-white p-1 text-primary group-active:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-file-pen-line"
          >
            <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
            <path d="M8 18h1" />
            <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default DoctorCard;
