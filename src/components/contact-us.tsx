"use client"

import React from "react"
import Image from "next/image"
import { logo } from "@/assets"
import { cn } from "@/utils/cn"
import { contactSchema } from "@/validation/contact-schema"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "./ui/button"

type FormValues = z.infer<typeof contactSchema>

type Props = {}

const ContactUS = (props: Props) => {
  const {
    watch,
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    setError,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {},
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("data: ", data)
      reset()
      toast.success("تمت العملية بنجاح")
    } catch (error: any) {
      setError("root", error?.message || "حصل مشكلة ما")
      toast.error("فشلت العملية")
    }
  }
  return (
    <section className="container">
      <div className="mx-auto flex grow flex-col items-center  justify-center py-20 ">
        <Image className=" mx-auto size-24" src={logo} alt="wedentis" />
        <p className="text-center text-3xl font-medium lg:text-5xl">تواصل معنا</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-10 flex w-full flex-col gap-y-8 lg:w-[50%]">
          <input
            className="w-full grow  border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="الاسم"
            {...register("name")}
          />
          {errors.name ? (
            <span className=" text-sm text-red-500">{errors.name.message}</span>
          ) : null}

          <div className="flex w-full grow flex-col gap-x-2 gap-y-8 md:flex-row">
            <div className=" flex grow flex-col  gap-4">
              <input
                className="w-full grow  border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="البريد الالكتروني"
                {...register("email", { required: true })}
              />
              {errors.email ? (
                <span className=" text-sm text-red-500">{errors.email.message}</span>
              ) : null}
            </div>

            <div className=" flex grow flex-col gap-4 ">
              <input
                placeholder="رقم التواصل"
                className="w-full grow  border-gray-200 p-4 pe-12 text-sm shadow-sm"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber ? (
                <span className=" text-sm text-red-500">
                  {errors.phoneNumber.message}
                </span>
              ) : null}
            </div>
          </div>

          <textarea
            placeholder="المشكلة"
            className="h-32 w-full grow  border-gray-200 p-4 pe-12 text-sm shadow-sm"
            {...register("message")}
          />
          {errors.message ? (
            <span className=" text-sm text-red-500">{errors.message.message}</span>
          ) : null}

          <button
            disabled={isSubmitting}
            type="submit"
            className={cn(
              " flex  w-full items-center justify-center gap-2 bg-primary px-5 py-3 text-sm  font-medium text-white",
              isSubmitting && " opacity-70",
            )}>
            {isSubmitting ? <Loader2 className=" size-5 animate-spin  " /> : null}
            ارسال
          </button>

          {errors.root ? (
            <span className="block py-2 text-sm text-red-500">
              {errors.root.message}
            </span>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default ContactUS
