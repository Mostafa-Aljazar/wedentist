import mongoose, { Schema, model } from "mongoose"

export type User = {
  username: string
  email: string
  password: string
  createdAt: Date
  role: 1 | 2
}

export const blogSchema = new Schema<User>(
  {
    role: {
      type: Number,
      required: true,
      default: 2, // admin=1 , doctor=2
    },

    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      immutable: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const User = mongoose.models.User || model("User", blogSchema)

export default User
