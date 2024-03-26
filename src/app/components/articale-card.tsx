import React from "react"

type Props = {
  title: string
  data: string
  preview: string
}

const ArticleCard = ({ title, data, preview }: Props) => {
  return (
    <article className="flex gap-4 p-4 bg-white rounded-lg border shadow-sm ">
      <div className=" aspect-square w-[350px] bg-slate-100 flex  justify-center rounded overflow-hidden items-center">
        IMAGE
      </div>
      <div className=" space-y-3 leading-tight">
        <p className="text-[1.1rem] lg:text-[1.38rem]  font-semibold">
          {title}
        </p>
        <span className=" text-[#aaaaaa] text-xs block">{data}</span>
        <p className="text-[#aaaaaa] text-sm">{preview}</p>
      </div>
    </article>
  )
}

export default ArticleCard
