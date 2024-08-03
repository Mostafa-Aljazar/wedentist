import Image from "next/image"
import { logo } from "@/assets"

import AboutUs from "@/components/about-us"
import ContactUS from "@/components/contact-us"
import OurServices from "@/components/our-services"
import OurView from "@/components/our-view"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#edf3f3]">
      <section>
        <div className="container flex h-screen items-center py-10">
          <Image alt="wedentis" className="mx-auto w-full max-w-xl " src={logo} />
        </div>
      </section>
      <AboutUs />
      <OurView />
      <OurServices />
      <ContactUS />
      <Footer/>
    </main>
  )
}
