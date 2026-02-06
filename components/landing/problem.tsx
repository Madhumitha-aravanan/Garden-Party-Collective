import { Card, CardContent } from "@/components/ui/card"
import { Droplets, AlertTriangle, FileWarning, Leaf } from "lucide-react"

const problems = [
  {
    icon: Droplets,
    title: "The CSO Crisis",
    description: "Detroit dumps 10+ billion gallons of sewage into rivers yearly. Your lawn can be part of the solution—or the problem.",
    stat: "10B+",
    statLabel: "gallons/year"
  },
  {
    icon: AlertTriangle,
    title: "Clay Soil Chaos",
    description: "Our heavy clay soil doesn't drain. Water pools, grass dies, and mosquitoes throw pool parties. Native plants? They love it.",
    stat: "80%",
    statLabel: "clay content"
  },
  {
    icon: FileWarning,
    title: "Weed Ticket Worries",
    description: "Detroit's 8-inch rule means tall plants get tickets. We design compliant native gardens that won't get you fined.",
    stat: "$250",
    statLabel: "avg ticket"
  },
  {
    icon: Leaf,
    title: "Biodiversity Drought",
    description: "Turf grass supports almost nothing. Native plants bring back the pollinators, birds, and beneficial bugs.",
    stat: "400%",
    statLabel: "more wildlife"
  }
]

export function Problem() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Detroit&apos;s Lawns Have a Dirty Secret
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            That perfect green carpet? It&apos;s actually causing problems. Here&apos;s what&apos;s really going on under the surface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title} className="bg-card border-border hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{problem.description}</p>
                <div className="pt-4 border-t border-border">
                  <span className="text-2xl font-bold text-secondary">{problem.stat}</span>
                  <span className="text-muted-foreground text-sm ml-2">{problem.statLabel}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
