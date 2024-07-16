import React from "react"

type Props = {}

const OurServices = (props: Props) => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center py-20">
          <div className="grow">
            <div className="flex aspect-square w-fit items-center rounded-full bg-primary p-2 text-white">
              <h2 className=" w-fit text-4xl   font-semibold lg:text-5xl ">
                خدماتنا
              </h2>
            </div>
            <ul className="mt-16 grid grid-cols-1 gap-8 text-lg font-semibold  md:grid-cols-2 lg:grid-cols-2 lg:text-2xl">
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                فيديوهات UGC
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                إدارة وتنسيق إعلانات المؤثرين
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                كتابة المحتوى الاعلاني
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                إدارة الحملات الإعلانية عن طريق المؤثرين
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                إدارة الحملات الإعلانية عن طريق الإعلانات الممولة
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                إدارة الحملات الإعلانية عن طريق الUGC
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                تصميم مواقع وصفحات الهبوط
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                توفير حلول تسويقية تقنية
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                دراسة وتحليل المشروع
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                تصميم واجهات المستخدم
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                تطوير النظام
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                اختبار النظام
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                إطلاق المشروع
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                صيانة المشروع
              </li>
              <li className="relative flex items-center gap-2">
                <span className="right-0  block aspect-square w-5  shrink-0 rounded-full bg-primary"></span>
                تطوير الالعاب
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
