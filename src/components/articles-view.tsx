import React from "react"
import ArticleCard from "./articale-card"
import { notFound } from "next/navigation"
import data from "@/content/data/blogs.json"

type Props = {}

const ArticlesView = async ({ slug }: { slug: string }) => {
  const blogs = data[slug as keyof typeof data]
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
