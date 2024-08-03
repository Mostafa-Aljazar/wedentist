import { z } from "zod"

export const phoneNumberSchema = z
  .string()
  .regex(/^\+?(966)?5\d{8}$/, "الرجاء استخدام رقم سعودي")
  .refine(
    (number) => {
      if (
        (number.length === 9 && number.startsWith("966")) ||
        (number.startsWith("+966") && number.length === 10)
      ) {
        return false
      }
      return true
    },
    {
      message: "الرجاء استخدام رقم سعودي",
    },
  )

export const contactSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("الرجاء كتابة ايميل صالح"),
  phoneNumber: phoneNumberSchema,
  message: z.string().min(1, "الرسالة مطلوبة"),
})
