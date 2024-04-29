import React from "react"
import ArticleCard from "./articale-card"
import { BlogsResponse } from "@/types/blogs-response"
import { notFound } from "next/navigation"

type Props = {}

const ArticlesView = async ({ slug }: { slug: string }) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/data/blogs.json"
  )
  const data = (await response.json()) as BlogsResponse
  const blogs = data[slug]
  if (!blogs) notFound()
  return (
    <div className=" space-y-6">
      {blogs.map((element, index) => {
        return <ArticleCard slug={slug} {...element} key={index} />
      })}
    </div>
  )
}

export default ArticlesView
