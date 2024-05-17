import mongoose, { model, Schema } from "mongoose"

export type Blog = {
  doctor: string
  title: string
  content: string
  preview: string
  coverImage?: string
}

export const blogSchema = new Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    preview: { type: String, required: true },
    coverImage: { type: String, required: true },
  },
  { timestamps: true },
)

const Blog = mongoose.models.Blog || model<Blog>("Blog", blogSchema)

export default Blog
