import { z } from "zod"

export const blogFormSchema = z.object({
  title: z.string().min(1, ""),
  content: z.string().min(1, ""),
  preview: z.string().min(1),
  coverImage: z.string().optional(),
})
