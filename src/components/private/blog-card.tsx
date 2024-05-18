/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { logo } from "@/assets"
import { formatDateToYYYY_MM_DD } from "@/utils/formate-date"
import axios from "axios"

import { Blog } from "@/types/blogs-response"

import { Button } from "../ui/button"

type Props = Blog & {
  slug: string
}

const BlogCard = ({ title, createdAt, preview, slug, _id, coverImage }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      setIsLoading(true)
      if (window.confirm("هل انت متاكد من حزف المقال")) {
        await axios.delete(`/api/${slug}/delete-blog/${_id}`)

        router.refresh()
      }
    } catch (error) {
      console.log(
        "🚀 ~ consthandleDelete:React.MouseEventHandler<HTMLButtonElement>= ~ error:",
        error,
      )
      window.alert("لم يتم حذف المقال")
    } finally {
      setIsLoading(false)
    }
  }
  const handleGoToEditPage: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/${slug}/dashboard/blogs/edit/${_id}`)
  }
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
        <div className=" grow space-y-3 leading-tight">
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
        <div className=" shrink-0 space-y-5">
          <Button
            isLoading={isLoading}
            onClick={handleDelete}
            type="button"
            className="block"
            variant="destructive">
            حذف المقال
          </Button>

          <Button
            onClick={handleGoToEditPage}
            className=" block"
            type="button"
            variant="outline">
            تعديل المقال
          </Button>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
