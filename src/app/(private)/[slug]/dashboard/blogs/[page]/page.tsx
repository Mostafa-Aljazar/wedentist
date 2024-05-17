import Link from "next/link"
import Blog from "@/models/Blog"
import Doctor from "@/models/Doctor"

import dbConnect from "@/lib/db"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/private/blog-card"

export default async function Home({
  params: { slug, page },
}: {
  params: { slug: string; page: string }
}) {
  await dbConnect()

  const doctor = await Doctor.findOne({ slug }).exec()
  const blogs = await Blog.find({
    doctor: doctor._id,
  })
    .skip((parseInt(page) - 1) * 20)
    .limit(20)
    .populate("doctor")
    .exec()

  const count = await Blog.countDocuments({ doctor: doctor._id }).exec()
  const pages = Math.ceil(count / 20)
  if (count === 0)
    return (
      <section>
        <div className=" mb-10 flex  items-center justify-between ">
          <h1 className="text-xl font-semibold  lg:text-3xl">جميع المقالات</h1>
          <Button variant="outline" className="px-10 ">
            <Link href={`/${slug}/dashboard/blogs/add`}>اضف مقال جديد</Link>
          </Button>
        </div>
        <p className="text-center text-lg">لا يوجد اي مقالات</p>
      </section>
    )
  return (
    <section>
      <div className=" mb-10 flex  items-center justify-between ">
        <h1 className="text-xl font-semibold  lg:text-3xl">جميع المقالات</h1>
        <Button variant="outline" className="px-10 ">
          <Link href={`/${slug}/dashboard/blogs/add`}>اضف مقال جديد</Link>
        </Button>
      </div>
      <div className=" space-y-6">
        {blogs.map((element, index) => {
          return (
            <BlogCard
              slug={slug}
              {...JSON.parse(JSON.stringify(element))}
              key={index}
            />
          )
        })}
      </div>
    </section>
  )
}
