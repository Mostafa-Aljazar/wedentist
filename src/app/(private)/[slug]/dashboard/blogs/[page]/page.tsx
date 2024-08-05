import Link from "next/link"
import Blog from "@/models/Blog"
import Doctor from "@/models/Doctor"

import dbConnect from "@/lib/db"
import { Button } from "@/components/ui/button"
import Pagination from "@/components/ui/pagination"
import BlogCard from "@/components/private/blog-card"
import { notFound } from "next/navigation"

export default async function Home({
  params: { slug, page },
}: {
  params: { slug: string; page: string }
}) {
  await dbConnect()

  const doctor = await Doctor.findOne({ slug }).exec()
  if(!doctor) notFound()
  const blogs = await Blog.find({
    doctor: doctor._id,
  })
    .sort({ createdAt: -1 })
    .skip((parseInt(page) - 1) * 10)
    .limit(10)
    .exec()

  const count = await Blog.countDocuments({ doctor: doctor._id }).exec()
  const pages = Math.ceil(count / 10)
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
        <Pagination pageCount={pages} url={`/${slug}/blogs/`} page={Number(page)} />
      </div>
    </section>
  )
}
