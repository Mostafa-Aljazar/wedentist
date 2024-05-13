import { redirect } from "next/navigation"

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  return redirect(`/${slug}/dashboard/blogs/1`)
}
