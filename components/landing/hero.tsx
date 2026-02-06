"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Sprout } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-background blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-secondary blur-2xl" />
      </div>

      {/* Floating leaves decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-[15%] left-[10%] w-8 h-8 text-primary-foreground/20 rotate-45 animate-pulse" />
        <Sprout className="absolute top-[25%] right-[15%] w-10 h-10 text-primary-foreground/15 -rotate-12" />
        <Leaf className="absolute bottom-[30%] left-[20%] w-6 h-6 text-primary-foreground/20 rotate-90" />
        <Sprout className="absolute bottom-[20%] right-[25%] w-8 h-8 text-primary-foreground/15 rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
          <Sprout className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-primary-foreground">Detroit&apos;s Native Landscaping Crew</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight text-balance max-w-4xl mx-auto mb-6">
          Your Yard is Ready to{" "}
          <span className="text-secondary">Run Wild</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          We&apos;re the new kids on the block turning Detroit lawns into thriving native ecosystems. 
          Better drainage. Fewer weed tickets. Way more butterflies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-full"
            onClick={() => scrollToSection("get-started")}
          >
            Get a Free Quote
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg rounded-full bg-transparent"
            onClick={() => scrollToSection("method")}
          >
            How It Works
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Rain Gardens</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Native Meadows</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Drainage Solutions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>Weed Ticket Defense</span>
          </div>
        </div>
      </div>
    </section>
  )
}
