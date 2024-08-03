import { contactSchema as ZodContactSchema } from "@/validation/contact-schema"
import mongoose, { model, Schema } from "mongoose"
import { z } from "zod"

export type Contact = z.infer<typeof ZodContactSchema>

export const contactSchema = new Schema<Contact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true },
)

const Contact = mongoose.models.Contact || model<Contact>("Contact", contactSchema)

export default Contact
