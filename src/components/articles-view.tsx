import React from "react"
import ArticleCard from "./articale-card"
import { BlogsResponse } from "@/types/blogs-response"
import { notFound } from "next/navigation"

type Props = {}
const dummyArticles = [
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
  {
    title: "عنوان للمقال",
    data: "مارس 14, 2024",
    preview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut facere deserunt quas odit, asperiores blanditiis iusto voluptatem, atque maiores ducimus omnis doloribus molestias voluptatum ex nulla iure necessitatibus repudiandae!",
  },
]

const ArticlesView = async ({ slug }: { slug: string }) => {
  const response = await fetch("http://localhost:3000/data/blogs.json")
  const data = (await response.json()) as BlogsResponse
  const blogs = data[slug]
  if (!blogs) notFound()
  return (
    <div className=" space-y-6">
      {blogs.map((element, index) => {
        return <ArticleCard {...element} key={index} />
      })}
    </div>
  )
}

export default ArticlesView
