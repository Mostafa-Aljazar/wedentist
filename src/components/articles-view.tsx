import React from "react"
import { notFound } from "next/navigation"
import data from "@/content/data/blogs.json"

import ArticleCard from "./articale-card"

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
