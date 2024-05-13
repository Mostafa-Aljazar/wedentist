"use client"

import React from "react"
import { cn } from "@/utils/cn"
import { contactSchema } from "@/validation/contact-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Button from "@/components/button"

type Props = {
  params: {
    slug: string
  }
}

const Page = ({ params: { slug } }: Props) => {
  const {
    setError,
    register,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  })

  // handling login
  const onSubmit: SubmitHandler<z.infer<typeof contactSchema>> = async (data) => {
    try {
      const response = await axios.post(`/api/${slug}/contact`, data)
      reset()
      console.log("🚀 ~ Page ~ response:", response)
    } catch (error: any) {
      setError("root", {
        message: error.message || "حصل خطأ ما الرجاء المحاولة مجددا",
      })
    }
  }

  return (
    <div className="h-fit rounded-lg border bg-white px-6  py-8 text-sm text-[#333]">
      <h1 className="mb-7 text-[30px] lg:text-[35px]">تواصل معي</h1>
      <p className="pb-4">
        نحن في انتظار رسائلكم واستفساراتكم. سواء كنتم بحاجة إلى مزيد من المعلومات عن
        خدماتنا أو ترغبون في تحديد موعد لزيارتنا، فلا تترددوا في الاتصال بنا. نحن هنا
        لخدمتكم بكل اهتمام واحترافية لضمان راحتكم ورضاكم التام. يمكنكم التواصل معنا
        عبر الهاتف أو البريد الإلكتروني المدرج أدناه، أو بزيارتنا شخصيا في العيادة.
        نحن في انتظاركم لنقدم لكم أفضل الخدمات والرعاية الطبية في مجال طب الأسنان
      </p>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className=" space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-medium text-gray-700">
            الاسم
          </label>

          <Input
            {...register("name")}
            type="text"
            id="name"
            placeholder="اسمك بالكامل"
            className={cn(
              "mt-1 w-full rounded-sm  border-gray-200 shadow-sm focus:ring-[none]  sm:text-sm",
              errors.name?.message &&
                " border-red-600  focus-within:border-red-500 focus:border-red-500",
            )}
          />
          {errors.name?.message ? (
            <span className=" text-sm text-red-500">{errors.name.message}</span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium text-gray-700">
            الإيميل
          </label>

          <Input
            {...register("email")}
            type="email"
            id="email"
            placeholder="john@example.com"
            className={cn(
              "mt-1 w-full rounded-sm  border-gray-200 shadow-sm focus:ring-[none]  sm:text-sm",
              errors.email?.message &&
                " border-red-600  focus-within:border-red-500 focus:border-red-500",
            )}
          />
          {errors.email?.message ? (
            <span className=" text-sm text-red-500">{errors.email.message}</span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="phone_number"
            className="mb-2 block text-xs font-medium text-gray-700">
            رقم الجوال
          </label>

          <Input
            {...register("phoneNumber")}
            type="text"
            id="phone_number"
            placeholder="5* *** ****"
            className={cn(
              "mt-1 w-full rounded-sm  border-gray-200 shadow-sm focus:ring-[none]  sm:text-sm",
              errors.phoneNumber &&
                " border-red-600  focus-within:border-red-500 focus:border-red-500",
            )}
          />
          {errors.phoneNumber ? (
            <span className=" text-sm text-red-500">
              {errors.phoneNumber.message}
            </span>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-medium text-gray-700">
            الرسالة
          </label>

          <Textarea
            {...register("message")}
            id="message"
            name="message"
            placeholder="رسالتك"
            className={cn(
              "mt-1 w-full rounded-sm  border-gray-200 shadow-sm focus:ring-[none]  sm:text-sm",
              errors.message &&
                " border-red-600  focus-within:border-red-500 focus:border-red-500",
            )}
          />
          {errors.message ? (
            <span className=" text-sm text-red-500">{errors.message?.message}</span>
          ) : null}
        </div>
        <Button
          disabled={isSubmitting}
          className={
            isSubmitting ? " pointer-events-none cursor-none opacity-70" : ""
          }>
          ارسال
        </Button>
        {errors.root ? (
          <span className=" text-sm text-red-500">{errors.root?.message}</span>
        ) : null}
      </form>
    </div>
  )
}

export default Page
