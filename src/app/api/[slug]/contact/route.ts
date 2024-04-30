import { contactSchema } from "@/validation/contact-schema"
import { z } from "zod"
import { sendMail } from "@/lib/nodemailer/mail"
import { DoctorResponse } from "@/types/doctors-response"

export async function POST(
  req: Request,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    const data = await req.json()
    const body = contactSchema.parse(data)

    const response = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/data/data.json"
    )
    const doctors = (await response.json()) as DoctorResponse
    const doctor = doctors.doctors.find((d) => d.slug === slug)!
    if (!doctor) return new Response("doctor not found", { status: 404 })

    await sendMail({
      ...body,
      to:
        process.env.NODE_ENV === "production"
          ? "Iconsaad89@gmail.com"
          : "xv.neer.business@gmail.com",
    })

    return new Response("ok")
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
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
