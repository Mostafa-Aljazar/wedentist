import { getServerSession } from "next-auth"
import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError, UTApi } from "uploadthing/server"

import { authOptions } from "../next-auth"

const f = createUploadthing()

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const session = await getServerSession(authOptions)

      // If you throw, the user will not be able to upload
      if (!session) throw new UploadThingError("Unauthorized")

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { slug: session.user.username }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.slug, file }
    }),
  blogImage: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const session = await getServerSession(authOptions)

      // If you throw, the user will not be able to upload
      if (!session) throw new UploadThingError("Unauthorized")

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { slug: session.user.username }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.slug, file }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

export const utapi = new UTApi()
