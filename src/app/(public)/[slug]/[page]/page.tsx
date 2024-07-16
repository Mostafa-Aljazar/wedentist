import { Metadata, ResolvingMetadata } from "next"
import Blog from "@/models/Blog"
import Doctor, { type Doctor as DoctorType } from "@/models/Doctor"

import dbConnect from "@/lib/db"
import Pagination from "@/components/ui/pagination"
import ArticleCard from "@/components/articale-card"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug

  await dbConnect()

  const doctor = (await Doctor.findOne({ slug }).exec()) as DoctorType

  return {
    title: doctor.personalInformation.name,
    description: doctor.introduction,
    openGraph: {
      images: [doctor.image],
    },
  }
}
export default async function ArticlesView({
  params: { slug, page },
}: {
  params: { slug: string; page: string }
}) {
  await dbConnect()

  const doctor = await Doctor.findOne({ slug }).exec()

  const blogs = await Blog.find({
    doctor: doctor._id,
  })
    .sort({ createdAt: -1 })
    .skip((parseInt(page) - 1) * 10)
    .limit(10)
    .populate("doctor")
    .exec()

  const count = await Blog.countDocuments({ doctor: doctor._id }).exec()
  const pages = Math.ceil(count / 10)
  if (count === 0)
    return (
      <section>
        <p className="text-center text-lg">لا يوجد اي مقالات</p>
      </section>
    )
  return (
    <section>
      <div className=" space-y-6">
        {blogs.map((element, index) => {
          return (
            <ArticleCard
              slug={slug}
              {...JSON.parse(JSON.stringify(element))}
              key={index}
            />
          )
        })}
        <Pagination pageCount={pages} url={`/${slug}/`} page={Number(page)} />
      </div>
    </section>
  )
}
