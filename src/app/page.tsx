import Image from "next/image"
import ArticlesView from "./components/articles-view"
import DoctorCard from "./components/doctor-card"

export default function Home() {
  return (
    <main className=" py-10  ">
      <div className="container">
        <div className=" md:flex gap-8">
          <div className="w-1/3 max-md:hidden">
            <DoctorCard />
          </div>
          <ArticlesView />
        </div>
      </div>
    </main>
  )
}
