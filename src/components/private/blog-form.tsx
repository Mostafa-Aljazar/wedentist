"use client"

import React from "react"
import { useParams } from "next/navigation"
import { blogFormSchema } from "@/validation/blog"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import ReactQuill from "react-quill"
import { z } from "zod"

import { modules } from "@/lib/react-quill"

import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

import "react-quill/dist/quill.snow.css"

import { toast } from "sonner"

import { Toaster } from "../ui/sonner"

type FormValues = z.infer<typeof blogFormSchema>
type Props = {
  blog?: FormValues
}

const BlogForm = ({ blog }: Props) => {
  // handled blog state using react hook form
  const {
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    setError,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(blogFormSchema),
    defaultValues: blog ? { ...blog } : {},
  })

  const { slug, blogId } = useParams() as { slug: string; blogId: string }
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (!blog) {
        const response = await axios.post(`/api/${slug}/add-blog`, data)
        reset()
        toast.success("تمت العملية بنجاح")
        return
      }
      const response = await axios.post(`/api/${slug}/edit-blog/${blogId}`, data)
      toast.success("تمت العملية بنجاح")
    } catch (error: any) {
      setError("root", error?.message || "حصل مشكلة ما")
      toast.error("فشلت العملية")
    }
  }

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle>{blog ? "تعديل المقال" : " كتابة مقال"}</CardTitle>
          <CardDescription>
            {blog ? "يمكنك تعديل المفال " : "يمكنك كتابة مقال جديد"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-6 space-y-5">
              <div>
                <Label htmlFor="blog-title" className="mb-2 block">
                  عنوان المقال
                </Label>
                <Input id="blog-title" {...register("title")} />
              </div>
              <div>
                <Label htmlFor="blog-preview" className="mb-2 block">
                  لمحة عن المقال
                </Label>
                <Textarea id="blog-preview" {...register("preview")} />
              </div>
              <div>
                <Label htmlFor="blog-content" className="mb-2 block">
                  نص المقال
                </Label>

                <Controller
                  control={control}
                  name="content"
                  render={({ field }) => (
                    <div dir="ltr" className=" ">
                      <ReactQuill
                        id="blog-content"
                        modules={modules}
                        theme="snow"
                        {...field}></ReactQuill>
                    </div>
                  )}
                />
              </div>
            </div>

            <Button
              isLoading={isSubmitting}
              type="submit"
              className=" bg-black px-10 hover:bg-black/90">
              {blog ? "تعديل" : "اضافة"}
            </Button>
            {errors.root ? (
              <span className="block py-2 text-sm text-red-500">
                {errors.root.message}
              </span>
            ) : null}
          </form>
        </CardContent>
      </Card>
      <DevTool placement="top-left" control={control} />
    </>
  )
}

export default BlogForm
