import { notFound } from "next/navigation"
import React from "react"
import blogs from "@/content/data/blogs.json"

type Props = { params: { slug: string; blogID: string } }

const Page = async ({ params }: Props) => {
  const { slug, blogID } = params

  const blog = blogs[slug as keyof typeof blogs].find(
    (e) => e.id + "" === blogID
  )
  if (!blog) notFound()

  return (
    <div
      className="bg-white w-full border rounded-lg px-6 py-8  min-h-[calc(100vh-120px)] text-sm text-[#333] h-fit"
      dangerouslySetInnerHTML={{ __html: blog.content }}></div>
  )
}

export default Page
