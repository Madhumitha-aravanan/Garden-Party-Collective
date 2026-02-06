import { Card, CardContent } from "@/components/ui/card"
import { Layers, Moon, TrendingUp, Rocket } from "lucide-react"

const steps = [
  {
    icon: Layers,
    phase: "The Setup",
    title: "Sheet Mulch Magic",
    description: "We smother your lawn with cardboard and mulch—no tilling, no chemicals. The existing grass becomes compost while we plant right through it.",
    details: ["Cardboard base layer", "4-6\" wood chip mulch", "Strategic plant placement"]
  },
  {
    icon: Moon,
    phase: "Year 1",
    title: "Sleep",
    description: "Plants put down roots. Not much to see up top, but underground? A whole network is forming. Trust the process.",
    details: ["Root establishment", "Soil building", "Patience required"]
  },
  {
    icon: TrendingUp,
    phase: "Year 2",
    title: "Creep",
    description: "Now we're talking. Plants start spreading, filling gaps, and showing off. You'll start seeing who your neighbors are (pollinators, that is).",
    details: ["Visible growth", "First blooms", "Wildlife arrives"]
  },
  {
    icon: Rocket,
    phase: "Year 3+",
    title: "Leap",
    description: "Boom! Your yard is a full-on ecosystem. Native meadow vibes, rain garden power, and you're basically a local conservation hero.",
    details: ["Full establishment", "Self-maintaining", "Peak biodiversity"]
  }
]

export function Method() {
  return (
    <section id="method" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Method</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Sleep, Creep, Leap
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rome wasn&apos;t built in a day, and neither is a native ecosystem. Here&apos;s our proven approach to turning lawns into legends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="bg-card border-border relative overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-secondary font-semibold text-sm">{step.phase}</span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
