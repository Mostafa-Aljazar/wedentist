import mongoose, { model, Schema } from "mongoose"

export type Blog = {
  id: number
  title: string
  date: Date
  content: string
  preview: string
  coverImage?: string
}

export const blogSchema = new Schema<Blog>(
  {
    title: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    content: { type: String, required: true },
    preview: { type: String, required: true },
    coverImage: { type: String, required: true },
  },
  { timestamps: true },
)

const Blog = mongoose.models.Blog || model("Blog", blogSchema)

export default Blog
