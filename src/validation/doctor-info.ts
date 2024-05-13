import { z } from "zod"

export const doctorInfoSchema = z.object({
  name: z.string().min(1, "مطلوب"),
  specialization: z.string().min(1, "مطلوب"),
  location: z.string().min(1, "مطلوب"),
  contact: z.object({
    phoneNumber: z.string().min(1, "مطلوب").regex(/^\d+$/, "رقم غير صالح"),
    email: z.string().email("ايميل غير صالح"),
    socialMedia: z.array(
      z.object({
        platform: z.string().min(1, "مطلوب"),
        user: z.string().min(1, "مطلوب"),
        link: z.string().url(),
      }),
    ),
  }),
})
