import React from "react"
import { notFound } from "next/navigation"
import Blog from "@/models/Blog"

import "react-quill/dist/quill.snow.css"

import dbConnect from "@/lib/db"

type Props = { params: { slug: string; blogID: string } }

const Page = async ({ params }: Props) => {
  const { blogID } = params

  await dbConnect()
  const blog = await Blog.findById(blogID).exec()
  if (!blog) notFound()

  return (
    <div className="ql-snow w-full grow">
      <div
        className="ql-editor h-fit min-h-[calc(100vh-120px)]  w-full grow  rounded-lg border bg-white px-6  py-8 text-sm text-[#333]"
        dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  )
}

export default Page
