import { NextResponse } from "next/server"
import Doctor from "@/models/Doctor"
import { doctorInfoSchema } from "@/validation/doctor-info"
import { getServerSession } from "next-auth"
import { z } from "zod"

import dbConnect from "@/lib/db"
import { authOptions } from "@/lib/next-auth"

export async function POST(
  req: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    const body = await req.json()
    const session = await getServerSession(authOptions)
    console.log("🚀 ~ session:", session)
    console.log("🚀 ~ body:", body)
    if (!session)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    const parsedBody = doctorInfoSchema.parse(body)

    await dbConnect()
    const doctor = await Doctor.findOne({ slug }).exec()
    if (!doctor) return new Response("doctor not found", { status: 404 })
    if (doctor.slug !== session.user.username)
      return new Response("unauthorized", { status: 401 })

    doctor.personalInformation = parsedBody

    await doctor.save()

    return new Response("ok")
  } catch (error) {
    console.log("🚀 ~ error:", error)
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
