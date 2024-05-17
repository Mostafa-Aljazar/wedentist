/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import { logo } from "@/assets"
import { formatDateToYYYY_MM_DD } from "@/utils/formate-date"

import { Blog } from "@/types/blogs-response"

type Props = Blog & {
  slug: string
}

const ArticleCard = ({
  title,
  preview,
  createdAt,
  slug,
  _id,
  coverImage,
}: Props) => {
  return (
    <Link href={`/${slug}/blogs/${_id}`} className="block">
      <article className="flex   gap-4 rounded-lg border bg-white p-4 max-[550px]:flex-col  ">
        <div className=" flex aspect-square w-[190px] shrink-0 items-center justify-center  overflow-hidden rounded bg-slate-50 max-[550px]:w-full">
          <img
            src={coverImage || logo.src}
            alt="cover"
            className=" h-full w-full object-cover"
          />
        </div>
        <div className=" space-y-3 leading-tight">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[1.1rem] font-semibold  text-gray-900 lg:text-[1.38rem]">
                {title}
              </p>
            </div>
          </div>
          <span className=" block text-xs text-[#aaaaaa]">
            {formatDateToYYYY_MM_DD(createdAt)}
          </span>
          <p className="text-sm text-[#aaaaaa]">{preview}</p>
        </div>
      </article>
    </Link>
  )
}

export default ArticleCard
