import Blog from "@/models/Blog"

import dbConnect from "@/lib/db"
import BlogForm from "@/components/private/blog-form"

export default async function Page({
  params: { blogId },
}: {
  params: { blogId: string }
}) {
  await dbConnect()
  const blog = await Blog.findById(blogId).exec()
  return <BlogForm blog={{ ...JSON.parse(JSON.stringify(blog)) }} />
}
