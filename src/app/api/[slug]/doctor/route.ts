import { NextRequest, NextResponse } from "next/server"
import Doctor from "@/models/Doctor"

export const dynamic = "force-dynamic"
export async function GET(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } },
) {
  try {
    const doctor = await Doctor.findOne({ slug }).exec()
    if (!doctor)
      return NextResponse.json({ message: "doctor not found" }, { status: 404 })
    return NextResponse.json(doctor)
  } catch (error) {
    return new Response("failed", { status: 500 })
    // console.log("🚀 ~ GET ~ error:", error)
  }
}
