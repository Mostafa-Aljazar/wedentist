import { NextResponse } from "next/server"
import Blog from "@/models/Blog"
import Doctor from "@/models/Doctor"
import { blogFormSchema } from "@/validation/blog"
import DOMPurify from "dompurify"
import { JSDOM } from "jsdom"
import { getServerSession } from "next-auth"
import { z } from "zod"

import dbConnect from "@/lib/db"
import { authOptions } from "@/lib/next-auth"

export async function POST(
  req: Request,
  { params: { slug, blogId } }: { params: { slug: string; blogId: string } },
) {
  try {
    // handled authorization
    const session = await getServerSession(authOptions)
    if (!session || session.user.username !== slug)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    //   request body
    const body = await req.json()
    const parsedBody = blogFormSchema.parse(body)

    // connecting to DB and adding doctors
    await dbConnect()
    const doctor = await Doctor.findOne({ slug }).exec()

    const window = new JSDOM("").window
    const purify = DOMPurify(window)

    const cleanBlog = purify.sanitize(parsedBody.content)

    const blog = await Blog.updateOne(
      { _id: blogId },
      {
        $set: {
          ...parsedBody,
          content: cleanBlog,
          doctor: doctor!._id,
          coverImage:
            parsedBody.coverImage ||
            "https://wedentis.netlify.app/_next/static/media/WEDENTIS-LOGO-ORIGINAL.4102257e.png",
        },
      },
    )

    return NextResponse.json(blog, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      }))
      return Response.json(errors, { status: 422 })
    }
    return new Response("Internal server error", { status: 500 })
  }
}
