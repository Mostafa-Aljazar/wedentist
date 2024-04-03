import React from "react"

type Props = {
  title: string
  date: string
  preview: string
}

const ArticleCard = ({ title, date, preview }: Props) => {
  return (
    <article className="flex   max-[550px]:flex-col gap-4 p-4 bg-white rounded-lg border  ">
      <div className=" aspect-square max-[550px]:w-full w-[190px] shrink-0 bg-slate-100 flex  justify-center rounded overflow-hidden items-center">
        IMAGE
      </div>
      <div className=" space-y-3 leading-tight">
        <p className="text-[1.1rem] lg:text-[1.38rem]  font-semibold text-gray-900">
          {title}
        </p>
        <span className=" text-[#aaaaaa] text-xs block">{date}</span>
        <p className="text-[#aaaaaa] text-sm">{preview}</p>
      </div>
    </article>
  )
}

export default ArticleCard
