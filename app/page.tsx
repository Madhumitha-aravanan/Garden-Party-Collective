import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Method } from "@/components/landing/method"
import { PlantPalette } from "@/components/landing/plant-palette"
import { Expectations } from "@/components/landing/expectations"
import { GetStarted } from "@/components/landing/get-started"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Method />
      <PlantPalette />
      <Expectations />
      <GetStarted />
      <Footer />
    </main>
  )
}
