export type BlogsResponse = {
  [key: string]: Blog[]
}

export type Blog = {
  _id: string
  title: string
  createdAt: Date | string
  content: string
  preview: string
  coverImage?: string
}
