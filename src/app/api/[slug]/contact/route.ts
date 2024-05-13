import data from "@/content/data/data.json"
import { contactSchema } from "@/validation/contact-schema"
import { z } from "zod"

import { sendMail } from "@/lib/nodemailer/mail"

export async function POST(
  req: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    const body = await req.json()
    const parsedBody = contactSchema.parse(body)

    const doctor = data.doctors.find((d) => d.slug === slug)!
    if (!doctor) return new Response("doctor not found", { status: 404 })

    await sendMail({
      ...parsedBody,
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
