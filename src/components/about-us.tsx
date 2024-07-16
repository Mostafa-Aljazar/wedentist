import React from "react"

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section>
      <div className="container flex min-h-screen items-center">
        <div className="grow">
          <h2 className="relative text-[#3d4444] before:absolute before:h-32 before:w-32 before:-translate-y-1/3 before:rounded-full before:bg-primary ">
            <span className="relative inline-block -translate-x-[25%] text-5xl  font-semibold">
              من نحن؟
            </span>
          </h2>
          <p className="py-28 text-center text-4xl font-semibold text-[#3d4444]">
            مؤسسة تسويقية سعودية الهوية بقدرات عالمية
            <br />
            نقدملك خدمات تسويقية بأفكار رهيبة تناسب أهدافك
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
