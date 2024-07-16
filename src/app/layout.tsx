import type { Metadata } from "next"
import { Tajawal } from "next/font/google"

import "./globals.css"

const tajawl = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Wedentis",
    default: "Wedentis",
  },
  description: `مؤسسة تسويقية سعودية الهوية بقدرات عالمية نقدملك خدمات تسويقية بأفكار رهيبة تناسب أهدافك`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawl.className}>{children}</body>
    </html>
  )
}
