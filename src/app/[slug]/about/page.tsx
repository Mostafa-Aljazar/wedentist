import React from "react"
import Button from "@/components/button"

type Props = {
  params: { slug: string }
}

const page = ({ params }: Props) => {
  const { slug } = params
  return (
    <div className="bg-white border rounded-lg px-6 py-8  text-sm text-[#333] h-fit">
      <h1 className="text-[30px] lg:text-[35px] mb-7">نبذة تعريفية</h1>
      <p>
        The rich text element allows you to create and format headings,
        paragraphs, blockquotes, images, and video all in one place instead of
        having to add and format them individually. Just double-click and easily
        create content
      </p>
      <h2 className="py-7 text-[28px] lg:text-[32px]">عنوان اخر هنا</h2>

      <div className=" space-y-4">
        <p>
          Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
          porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum id ligula porta felis euismod semper.
        </p>

        <p>
          Vestibulum id ligula porta felis euismod semper. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec id elit non mi porta gravida at eget metus. Donec ullamcorper
          nulla non metus auctor fringilla.
        </p>
        <Button href={`/${slug}/contact`}>تواصل معي</Button>
      </div>
    </div>
  )
}

export default page
