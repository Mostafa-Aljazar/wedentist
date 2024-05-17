import mongoose, { model, Schema } from "mongoose"

export type Blog = {
  doctor: string
  id: number
  title: string
  date: Date
  content: string
  preview: string
  keyWords: string[]
  coverImage?: string
  slug: string
}

export const blogSchema = new Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
    slug: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    content: { type: String, required: true },
    preview: { type: String, required: true },
    keyWords: { type: [String], required: true },
    coverImage: { type: String, required: true },
  },
  { timestamps: true },
)

const Blog = mongoose.models.Blog || model<Blog>("Blog", blogSchema)

export default Blog
