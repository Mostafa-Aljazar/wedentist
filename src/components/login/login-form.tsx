"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { logo } from "@/assets"
import { cn } from "@/utils/cn"
import { LoginFormSchema } from "@/validation/login-schema"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

type FormValues = z.infer<typeof LoginFormSchema>
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(LoginFormSchema),
  })

  const router = useRouter()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await signIn("credentials", { ...data, redirect: false })
      if (!response?.ok)
        throw new Error(
          response?.status === 401
            ? "البيانات التي قمت بادخالها خاطئة"
            : "حصل خطأ ما",
        )
      reset()
      router.refresh()
    } catch (error: any) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<FormValues>= ~ error:", error)
      setError("root", { message: error.message || "خطأ غير معروف" })
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto flex min-h-screen items-center px-4 py-16 sm:px-6 lg:px-8 ">
      <div className="mx-auto w-full max-w-md bg-white   pt-6">
        <Image className=" mx-auto size-24" src={logo} alt="wedentis" />

        <form
          className="mb-0  space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <p className="text-center text-lg font-medium">
            سجل دخولك لمنصة Wedentis الان
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              الايميل
            </label>

            <div className="relative">
              <input
                className="w-full border-gray-200 p-4 pe-12 text-sm shadow-sm "
                placeholder="الايميل او اسم المستخدم"
                {...register("username", { required: true })}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>

            {errors.username && (
              <span className="text-left text-[12px] text-red-500">
                {errors.username?.message}
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              كلمة المرور
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full  border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="ادخل كلمة المرور"
                {...register("password", { required: true })}
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <button
                  type="button"
                  aria-label={!showPassword ? "hide password" : "show password"}
                  onClick={() => setShowPassword((pre) => !pre)}>
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </span>
            </div>

            {errors.password && (
              <span className="text-[12px] text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className={cn(
              " flex  w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-sm  font-medium text-white",
              isSubmitting && " opacity-70",
            )}>
            {isSubmitting ? <Loader2 className=" size-5 animate-spin  " /> : null}{" "}
            تسجيل الدخول
          </button>
          {errors.root && (
            <span className="py-1 text-[12px] text-red-500">
              {errors.root?.message}
            </span>
          )}
        </form>
        <DevTool control={control} />
      </div>
    </div>
  )
}

export default LoginForm
