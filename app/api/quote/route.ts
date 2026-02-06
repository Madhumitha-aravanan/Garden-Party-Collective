import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, address, message } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { error } = await supabase
      .from("quote_requests")
      .insert({ name, email, phone, address, message })

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Quote request error:", error)
    return NextResponse.json({ error: "Failed to submit quote" }, { status: 500 })
  }
}
