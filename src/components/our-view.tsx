import React from "react"

type Props = {}

const OurView = (props: Props) => {
  return (
    <section>
      <div className="container flex min-h-screen items-center text-[#3d4444]">
        <div className="grow space-y-20 py-28  text-center">
          <p className=" text-3xl/relaxed font-semibold lg:text-4xl/relaxed  ">
            نؤمن بقوة الفكر السعودي وابداعاته
            <br />
            ونسعى ان نكون بدورنا محركاً لنجاح هذا الفكر الواعد
          </p>
          <p className="text-light text-3xl font-light">هويتنا سعودية وقلبنا اخضر</p>
        </div>
      </div>
    </section>
  )
}

export default OurView
