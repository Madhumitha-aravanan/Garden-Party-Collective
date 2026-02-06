import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { error } = await supabase
      .from("newsletter_signups")
      .insert({ email })

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "Already subscribed" }, { status: 409 })
      }
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter signup error:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
