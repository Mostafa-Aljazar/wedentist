import { LoginFormSchema } from "@/validation/login-schema"
import { z } from "zod"

export type loginFormValues = z.infer<typeof LoginFormSchema>
