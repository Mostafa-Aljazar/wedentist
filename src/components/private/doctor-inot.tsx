"use client"

import { type Doctor } from "@/models/Doctor"
import { doctorInfoSchema } from "@/validation/doctor-info"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Trash2 } from "lucide-react"
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type FormValues = z.infer<typeof doctorInfoSchema>
export default function DoctorInfo({
  doctor: {
    personalInformation: { name, specialization, location, contact },
  },
}: {
  doctor: Doctor
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(doctorInfoSchema),
    defaultValues: {
      name,
      specialization,
      location,
      contact,
    },
  })
  console.log("🚀 ~ errors:", errors)
  const { fields, append, remove } = useFieldArray({
    name: "contact.socialMedia", // unique name for your Field Array
    control,
  })

  const handleAdd = () => {
    append({
      platform: "",
      user: "",
      link: "",
    })
  }
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await new Promise((res) => {
        setTimeout(() => {
          res("ok")
        }, 3000)
      })
      console.log("🚀 ~ constonSubmit:SubmitHandler<FormValues>= ~ data:", data)
    } catch (error) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<FormValues>= ~ error:", error)
    }
  }

  return (
    <>
      <Card className=" mx-auto max-w-xl">
        <CardHeader>
          <CardTitle>بيانات شخصية</CardTitle>
          <CardDescription>يمكنك تعديل بياناتك الشخصية</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate dir="ltr" lang="en">
            <div className=" mb-4 space-y-4">
              <Input {...register("name")} placeholder="الاسم" />
              <Input {...register("specialization")} placeholder="التخصص" />
              <Input {...register("location")} placeholder="العنوان" />
              <Input
                {...register("contact.email")}
                type="email"
                placeholder="العنوان"
              />
              <Input {...register("contact.phoneNumber")} placeholder="العنوان" />
            </div>
            <div className=" my-6 border-t">
              <p className="py-5 text-right">مواقع التواصل الاجتماعي</p>
              <div className="  space-y-4">
                {fields.map((field, index) => {
                  return (
                    <div key={field.id} className="flex gap-3 ">
                      <Input
                        {...register(`contact.socialMedia.${index}.platform`)}
                        placeholder="المنصة"
                      />
                      <Input
                        {...register(`contact.socialMedia.${index}.user`)}
                        placeholder="اليوزر"
                      />
                      <Input
                        {...register(`contact.socialMedia.${index}.link`)}
                        placeholder="رابط الحساب"
                      />
                      <Button
                        onClick={() => {
                          remove(index)
                        }}
                        size="icon"
                        className=" shrink-0 "
                        variant="ghost">
                        <Trash2 className=" text-red-500" />
                      </Button>
                    </div>
                  )
                })}
                <Button
                  type="button"
                  onClick={handleAdd}
                  variant="outline"
                  className=" ml-auto mr-0 block">
                  اضافة
                </Button>
              </div>
            </div>
            <Button
              isLoading={isSubmitting}
              type="submit"
              className=" ml-auto mr-0 w-full bg-black hover:bg-black/90">
              حفظ
            </Button>
          </form>
        </CardContent>
      </Card>
      <DevTool placement="top-left" control={control} />
    </>
  )
}
