import data from "@/content/data/data.json"
import Contact from "@/models/Contact"
import Doctor, { Doctor as DoctorType } from "@/models/Doctor"
import { contactSchema } from "@/validation/contact-schema"
import { z } from "zod"

import dbConnect from "@/lib/db"
import { sendMail } from "@/lib/nodemailer/mail"

export async function POST(
  req: Request,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    // request body
    const body = await req.json()
    const parsedBody = contactSchema.parse(body)

    await dbConnect()

    if (slug === "main") {
      await Contact.create({
        ...parsedBody,
      })
      const to =
        process.env.NODE_ENV === "development"
          ? // ? "xv.neer.business@gmail.com"
            "mostafaibrahim20032020@gmail.com"
          : process.env.SMIP_MAIL!

      await sendMail({
        ...parsedBody,
        to,
      })

      return new Response("ok")
    }

    const doctor = (await Doctor.findOne({ slug }).exec()) as DoctorType
    if (!doctor) return new Response("doctor not found", { status: 404 })

    const to =
      process.env.NODE_ENV === "development"
        ? // ? "xv.neer.business@gmail.com"
          "mostafaibrahim20032020@gmail.com"
        : doctor.personalInformation.contact.email

    await sendMail({
      ...parsedBody,
      to,
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
