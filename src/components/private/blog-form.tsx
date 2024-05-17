"use client"

import React from "react"
import { blogFormSchema } from "@/validation/blog"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import ReactQuill from "react-quill"

import "react-quill/dist/quill.snow.css"

import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

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

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import { useParams } from "next/navigation"
import axios from "axios"

import { modules } from "@/lib/react-quill"

type Props = {}

type FormValues = z.infer<typeof blogFormSchema>

const BlogForm = (props: Props) => {
  // handled blog state using react hook form
  const {
    watch,
    register,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(blogFormSchema),
  })

  const { slug } = useParams() as { slug: string }
  console.log("🚀 ~ BlogForm ~ slug:", slug)
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(`/api/${slug}/add-blog`, data)

      reset()
    } catch (error) {
      console.log("🚀 ~ constonSubmit:SubmitHandler<FormValues>= ~ error:", error)
    }
  }

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle>كتابة مقال</CardTitle>
          <CardDescription>يمكنك كتابة مقال جديد</CardDescription>
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
              اضافة
            </Button>
          </form>
        </CardContent>
      </Card>
      <DevTool placement="top-left" control={control} />
    </>
  )
}

export default BlogForm
