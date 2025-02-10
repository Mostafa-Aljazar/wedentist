import { contactSchema } from "@/validation/contact-schema"
import nodemailer from "nodemailer"
import { z } from "zod"

import { compileTemplate } from "../handlebars/complieTemplate"

export async function sendMail(
  args: z.infer<typeof contactSchema> & { to: string },
) {
  // Extracting environment variables
  const { SMIP_MAIL, SMIP_PASSWORD } = process.env

  // Validating the existence of environment variables
  if (!SMIP_MAIL) throw new Error("Missing SMIP_MAIL env")
  if (!SMIP_PASSWORD) throw new Error("Missing SMIP_PASSWORD env")

  try {
    // Create transport object using SMTP settings
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com", // تحديد الخادم بشكل صريح
      port: 587, // المنفذ 587 للاتصال الآمن
      secure: false, // لا حاجة لتفعيل secure على 587
      auth: {
        user: SMIP_MAIL,
        pass: SMIP_PASSWORD,
      },
    })

    // Verify the connection configuration
    const success = await transport.verify()
    if (success) {
      console.log(
        "🚀🚀🚀 ~ success:",
        success,
        " Server is ready to send emails! 🚀🚀🚀🚀",
      )
    }

    // Compile the email content from the provided args
    const htmlBody = await compileTemplate(args)

    // sending mails
    const sendMail = await transport.sendMail({
      from: SMIP_MAIL,
      to: "mostafaibrahim20032020@gmail.com", // Recipient address
      // to: args.to,
      subject: `${args.name} يريد التواصل معك`,
      html: htmlBody,
    })
    console.log("Email sent successfully:", sendMail.messageId)
  } catch (error) {
    console.log("🚀🚀🚀 ~ error:", error, " 🚀🚀🚀🚀")

    console.error("Error sending email:", error)
    throw new Error(
      "Failed to send email. Please check your SMTP configuration and try again.",
    )
  }
}
