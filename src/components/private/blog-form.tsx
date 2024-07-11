/* eslint-disable @next/next/no-img-element */
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

import { UploadDropzone } from "@/utils/uploadthing"
import { X } from "lucide-react"
import { toast } from "sonner"

import { Toaster } from "../ui/sonner"

type FormValues = z.infer<typeof blogFormSchema>
type Props = {
  blog?: FormValues
}

const BlogForm = ({ blog }: Props) => {
  // handled blog state using react hook form
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
    resolver: zodResolver(blogFormSchema),
    defaultValues: blog ? { ...blog } : {},
  })

  const { slug, blogId } = useParams() as { slug: string; blogId: string }
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (!blog) {
        const response = await axios.post(`/api/${slug}/blogs/add`, data)
        reset()
        toast.success("تمت العملية بنجاح")
        return
      }
      const response = await axios.post(`/api/${slug}/blogs/edit/${blogId}`, data)
      toast.success("تمت العملية بنجاح")
    } catch (error: any) {
      setError("root", error?.message || "حصل مشكلة ما")
      toast.error("فشلت العملية")
    }
  }

  return (
    <>
      <Card className="">
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col items-center justify-between p-4 ">
              {watch("coverImage") ? (
                <div className=" relative  flex aspect-square w-[190px] shrink-0 items-center justify-center  overflow-hidden rounded bg-slate-50 max-[550px]:w-full">
                  <Button
                    onClick={() => {
                      setValue("coverImage", "")
                    }}
                    variant="outline"
                    className=" absolute right-0 top-0 size-6 rounded-full p-0"
                    size="sm">
                    <X className=" size-4" />
                  </Button>
                  <img
                    src={watch("coverImage")}
                    alt="cover"
                    className=" h-full w-full object-cover"
                  />
                </div>
              ) : (
                <UploadDropzone
                  className="w-full"
                  endpoint="blogImage"
                  onClientUploadComplete={(res) => {
                    setValue("coverImage", res[0].url)
                  }}
                  onUploadError={(error: Error) => {
                    setError("coverImage", { message: "file not uploaded" })
                  }}
                  config={{
                    mode: "auto",
                  }}
                />
              )}
              {errors.coverImage ? (
                <span className=" text-sm text-red-500">
                  {errors.coverImage.message}
                </span>
              ) : null}
            </div>

            <div className="mb-6 space-y-5">
              <div>
                <Label htmlFor="blog-title" className="mb-2 block">
                  عنوان المقال
                </Label>
                <Input
                  error={errors.title?.message}
                  id="blog-title"
                  {...register("title")}
                />
              </div>
              <div>
                <Label htmlFor="blog-preview" className="mb-2 block">
                  نبذة عن المقال
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
