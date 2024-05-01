import mongoose, { Schema, model } from "mongoose"

export type User = {
  username: string
  email: string
  password: string
}

export const blogSchema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const User = mongoose.models.user || model("user", blogSchema)

export default User
