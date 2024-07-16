import React from "react"
import { notFound } from "next/navigation"
import Blog, { Blog as BlogType } from "@/models/Blog"

import "react-quill/dist/quill.snow.css"

import { Metadata } from "next"

import dbConnect from "@/lib/db"

type MetadataProps = {
  params: { blogID: string }
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  // read route params
  const blogID = params.blogID

  await dbConnect()

  const blog = (await Blog.findById(blogID).exec()) as BlogType

  return {
    title: blog.title,
    description: blog.preview,
    openGraph: {
      images: [blog.coverImage || ""],
    },
  }
}

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
