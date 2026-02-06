import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { error } = await supabase
      .from("brochure_requests")
      .insert({ name, email })

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Brochure request error:", error)
    return NextResponse.json({ error: "Failed to request brochure" }, { status: 500 })
  }
}
