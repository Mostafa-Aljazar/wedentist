import React from "react"

type Props = {}

const DoctorCard = (props: Props) => {
  return (
    <div className="border bg-white shadow p-5 rounded    space-y-5  text-sm">
      <div>
        <div className="rounded-full w-[125px]  mx-auto  bg-slate-100 aspect-square flex items-center text-sm justify-center mb-7">
          Image
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
