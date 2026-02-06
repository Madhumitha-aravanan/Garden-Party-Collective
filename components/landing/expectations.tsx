import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Banknote, Heart, CheckCircle2 } from "lucide-react"

const expectations = [
  {
    icon: Clock,
    title: "Timeline Reality",
    items: [
      "Year 1: Mostly mulch and tiny plants (patience!)",
      "Year 2: Noticeable growth, first blooms",
      "Year 3: Full establishment, wow factor kicks in",
      "Maintenance decreases each year"
    ]
  },
  {
    icon: Shield,
    title: "Weed Ticket Defense",
    items: [
      "We design to Detroit's 8-inch rule compliance",
      "Strategic edging shows intentional design",
      "Documentation for city inspectors included",
      "We'll advocate for you if issues arise"
    ]
  },
  {
    icon: Banknote,
    title: "Investment & ROI",
    items: [
      "Higher upfront cost than sod (worth it)",
      "Near-zero maintenance costs by year 3",
      "Potential drainage credits from city",
      "Increased property value"
    ]
  },
  {
    icon: Heart,
    title: "What You'll Love",
    items: [
      "Butterflies, bees, and birds galore",
      "No more mowing (or way less)",
      "Unique yard that tells a story",
      "Being part of Detroit's green future"
    ]
  }
]

export function Expectations() {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What to Expect</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Real Talk: Here&apos;s the Deal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe in transparency. Native landscaping is amazing, but it&apos;s not magic. Here&apos;s exactly what you&apos;re signing up for.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expectations.map((section) => (
            <Card key={section.title} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-xl">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">
            We get it—this is different from traditional landscaping. Grab our free brochure or sign up for our newsletter to learn more before committing.
          </p>
        </div>
      </div>
    </section>
  )
}
