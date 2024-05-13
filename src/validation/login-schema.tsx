import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().nonempty("اسم المستخدم او الايميل مطلوب *"),
  password: z.string().nonempty("كلمة المرور مطلوبة *"),
});
