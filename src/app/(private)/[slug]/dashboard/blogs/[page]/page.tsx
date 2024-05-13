import Blog from "@/models/Blog"
import Doctor from "@/models/Doctor"

import dbConnect from "@/lib/db"
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
  const pages = Math.ceil(count / 20)
  if (count === 0) return <div>لا يوجد اي مقالات</div>
  return (
    <div className=" space-y-6">
      {blogs.map((element, index) => {
        return <ArticleCard slug={slug} {...element} key={index} />
      })}
    </div>
  )
}
