import { z } from "zod"

export const LoginFormSchema = z.object({
  username: z.string().min(1, "اسم المستخدم او الايميل مطلوب "),
  password: z.string().min(1, "كلمة المرور مطلوبة "),
})
