import { contactSchema } from "@/validation/contact-schema"
import { z } from "zod"
import { sendMail } from "@/lib/nodemailer/mail"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const body = contactSchema.parse(data)

    await sendMail(body)
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
