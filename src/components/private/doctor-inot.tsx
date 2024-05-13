"use client"

import { type Doctor } from "@/models/Doctor"
import { doctorInfoSchema } from "@/validation/doctor-info"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
    } catch (error) {}
  }

  return (
    <>
      <Card className=" max-w-xl">
        <CardHeader>
          <CardTitle>بيانات شخصية</CardTitle>
          <CardDescription>يمكنك تعديل بياناتك الشخصية</CardDescription>
        </CardHeader>
        <CardContent>
          <form noValidate>
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
            <Button type="submit" className=" bg-black hover:bg-black/90 ">
              حفظ
            </Button>
          </form>
        </CardContent>
      </Card>
      <DevTool placement="top-left" control={control} />
    </>
  )
}
