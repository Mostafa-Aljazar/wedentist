import { contactTemplate } from "@/email/contact-template"
import { contactSchema } from "@/validation/contact-schema"
import * as handlebars from "handlebars"
import { z } from "zod"

export async function compileTemplate(args: z.infer<typeof contactSchema>) {
  const template = handlebars.compile(contactTemplate)
  const htmlBody = template(args)
  return htmlBody
}
