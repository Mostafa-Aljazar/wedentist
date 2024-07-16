import React from "react"

type Props = {}

const OurServices = (props: Props) => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center py-20">
          <div className="grow">
            <div className="flex aspect-square w-fit items-center rounded-full bg-primary text-white">
              <h2 className=" w-fit   text-5xl font-semibold ">خدماتنا</h2>
            </div>
            <ul className="mt-16 grid grid-cols-1 gap-8  text-2xl  font-semibold md:grid-cols-2 lg:grid-cols-2">
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                فيديوهات UGC
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                إدارة وتنسيق إعلانات المؤثرين
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                كتابة المحتوى الاعلاني
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                إدارة الحملات الإعلانية عن طريق المؤثرين
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                إدارة الحملات الإعلانية عن طريق الإعلانات الممولة
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                إدارة الحملات الإعلانية عن طريق الUGC
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                تصميم مواقع وصفحات الهبوط
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                توفير حلول تسويقية تقنية
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                دراسة وتحليل المشروع
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                تصميم واجهات المستخدم
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                تطوير النظام
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                اختبار النظام
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                إطلاق المشروع
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
                صيانة المشروع
              </li>
              <li className="relative before:right-0 before:ml-3 before:inline-block before:aspect-square before:w-5 before:translate-y-1 before:rounded-full before:bg-primary">
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
