import { NextResponse } from "next/server"
import Blog from "@/models/Blog"
import Doctor from "@/models/Doctor"
import { getServerSession } from "next-auth"

import dbConnect from "@/lib/db"
import { authOptions } from "@/lib/next-auth"

export async function DELETE(
  req: Request,
  { params: { slug, blogId } }: { params: { slug: string; blogId: string } },
) {
  try {
    console.log(blogId, slug)
    // handled authorization
    const session = await getServerSession(authOptions)
    if (!session || session.user.username !== slug)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    // connecting to DB and adding doctors
    await dbConnect()
    const [doctor, blog] = await Promise.all([
      Doctor.findOne({ slug }).exec(),
      Blog.findById(blogId),
    ])

    if (doctor!._id.toString() !== blog.doctor.toString())
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const result = await Blog.deleteOne({ _id: blogId })
    if (result.deletedCount === 0)
      return NextResponse.json({ error: "blog not deleted" }, { status: 500 })

    return NextResponse.json(result)
  } catch (error) {
    return new Response("Internal server error", { status: 500 })
  }
}
