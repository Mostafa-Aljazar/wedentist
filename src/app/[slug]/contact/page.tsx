import Button from "@/components/button"
import React from "react"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="bg-white border rounded-lg px-6 py-8  text-sm text-[#333] h-fit">
      <h1 className="text-[30px] lg:text-[35px] mb-7">تواصل معي</h1>
      <p className="pb-4">
        نحن في انتظار رسائلكم واستفساراتكم. سواء كنتم بحاجة إلى مزيد من
        المعلومات عن خدماتنا أو ترغبون في تحديد موعد لزيارتنا، فلا تترددوا في
        الاتصال بنا. نحن هنا لخدمتكم بكل اهتمام واحترافية لضمان راحتكم ورضاكم
        التام. يمكنكم التواصل معنا عبر الهاتف أو البريد الإلكتروني المدرج أدناه،
        أو بزيارتنا شخصيا في العيادة. نحن في انتظاركم لنقدم لكم أفضل الخدمات
        والرعاية الطبية في مجال طب الأسنان
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
            htmlFor="phone_number"
            className="block text-xs font-medium text-gray-700">
            رقم الجوال
          </label>

          <input
            type="text"
            id="phone_number"
            placeholder="05* *** ****"
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
