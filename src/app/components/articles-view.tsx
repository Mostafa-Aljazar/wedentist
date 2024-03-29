import React from "react"
import ArticleCard from "./articale-card"

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

const ArticlesView = (props: Props) => {
  return (
    <div className=" space-y-6">
      {dummyArticles.map((element, index) => {
        return <ArticleCard {...element} key={index} />
      })}
    </div>
  )
}

export default ArticlesView
