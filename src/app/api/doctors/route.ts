import { NextRequest, NextResponse } from "next/server"
import Doctor from "@/models/Doctor"

import dbConnect from "@/lib/db"

export const dynamic = "force-dynamic"
export async function GET(req: NextRequest) {
  try {
    await dbConnect()
    const doctors = await Doctor.find().exec()
    if (!doctors)
      return NextResponse.json({ message: "doctors not found" }, { status: 404 })
    return NextResponse.json(doctors)
  } catch (error) {
    return new Response("failed", { status: 500 })
  }
}
