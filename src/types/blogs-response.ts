export type BlogsResponse = {
  [key: string]: Blog[]
}

export type Blog = {
  id: number
  title: string
  date: string
  content: string
  preview: string
}
