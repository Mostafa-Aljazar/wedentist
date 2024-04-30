import { contactSchema } from "@/validation/contact-schema"
import { z } from "zod"
import nodemailer from "nodemailer"
import { compileTemplate } from "../handlebars/complieTemplate"

export async function sendMail(
  args: z.infer<typeof contactSchema> & { to: string }
) {
  // env
  const { SMIP_MAIL, SMIP_PASSWORD } = process.env
  if (!SMIP_MAIL) throw new Error("Missing SMIP_MAIL env")
  if (!SMIP_PASSWORD) throw new Error("Missing SMIP_PASSWORD env")

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMIP_MAIL,
      pass: SMIP_PASSWORD,
    },
  })

  // verify email and password
  await transport.verify()

  const htmlBody = await compileTemplate(args)
  // sending mails
  const sendMail = await transport.sendMail({
    from: SMIP_MAIL,
    to: args.to,
    subject: `${args.name} يريد التواصل معك`,
    html: htmlBody,
  })
  console.log("🚀 ~ sendMail:", sendMail)
}
