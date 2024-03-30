import Button from "@/components/button"
import React from "react"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="bg-white border rounded-lg px-6 py-8  text-sm text-[#333] h-fit">
      <h1 className="text-[30px] lg:text-[35px] mb-7">تواصل معي</h1>
      <p className="pb-4">
        The rich text element allows you to create and format headings,
        paragraphs, blockquotes, images, and video all in one place instead of
        having to add and format them individually. Just double-click and easily
        create content
      </p>
      <form action="" className=" space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-700">
            الاسم
          </label>

          <input
            type="text"
            id="name"
            placeholder="اسمك بالكامل"
            className="mt-1 w-full focus:ring-[none]  border-gray-200 shadow-sm sm:text-sm  rounded-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700">
            الإيميل
          </label>

          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            className="mt-1 w-full focus:ring-[none]  border-gray-200 shadow-sm sm:text-sm  rounded-sm"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-gray-700">
            الرسالة
          </label>

          <textarea
            id="message"
            placeholder="رسالتك"
            className="mt-1 w-full focus:ring-[none]  border-gray-200 shadow-sm sm:text-sm  rounded-sm"
          />
        </div>
        <Button>ارسال</Button>
      </form>
    </div>
  )
}

export default page
