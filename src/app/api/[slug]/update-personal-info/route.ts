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
    // handled authorization
    const session = await getServerSession(authOptions)
    if (!session || slug !== session.user.username)
      return NextResponse.json({ error: "unauthorized" }, { status: 401 })

    // request boyd
    const body = await req.json()
    const parsedBody = doctorInfoSchema.parse(body)

    // connecting to db and getting doctor data
    await dbConnect()
    const doctor = await Doctor.findOne({ slug }).exec()
    if (!doctor) return new Response("doctor not found", { status: 404 })

    // updating doctor data
    doctor.image = parsedBody.image

    doctor.personalInformation = parsedBody
    await doctor.save()

    return NextResponse.json(doctor)
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
