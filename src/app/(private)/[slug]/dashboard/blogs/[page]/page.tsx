import Link from "next/link"
import Blog from "@/models/Blog"
import Doctor from "@/models/Doctor"

import dbConnect from "@/lib/db"
import { Button } from "@/components/ui/button"
import ArticleCard from "@/components/articale-card"
import ArticlesView from "@/components/articles-view"

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
  const count = await Blog.countDocuments({ user: slug }).exec()
  console.log("🚀 ~ count:", count)
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
      <Button variant="outline" className="px-10 ">
        اضف مقال جديد
      </Button>
      <div className=" space-y-6">
        {blogs.map((element, index) => {
          return <ArticleCard slug={slug} {...element} key={index} />
        })}
      </div>
    </section>
  )
}
