import { Card, CardContent } from "@/components/ui/card"
import { TreeDeciduous, Trees, Flower2, Shrub, Leaf } from "lucide-react"

const layers = [
  {
    icon: TreeDeciduous,
    name: "Canopy",
    height: "40-80 ft",
    description: "The big players that provide shade and anchor the ecosystem.",
    plants: ["Bur Oak", "Sugar Maple", "American Sycamore", "Tulip Tree"],
    color: "bg-primary"
  },
  {
    icon: Trees,
    name: "Understory",
    height: "15-40 ft",
    description: "Smaller trees that thrive in dappled light and provide berries.",
    plants: ["Serviceberry", "Redbud", "Pagoda Dogwood", "Witch Hazel"],
    color: "bg-primary/80"
  },
  {
    icon: Shrub,
    name: "Shrub",
    height: "3-15 ft",
    description: "The workhorses—privacy, berries, and pollinator magnets.",
    plants: ["Ninebark", "Arrowwood Viburnum", "New Jersey Tea", "Buttonbush"],
    color: "bg-primary/60"
  },
  {
    icon: Flower2,
    name: "Herbaceous",
    height: "1-6 ft",
    description: "Wildflowers and grasses that bring the color and the bees.",
    plants: ["Black-eyed Susan", "Butterfly Weed", "Purple Coneflower", "Little Bluestem"],
    color: "bg-secondary"
  },
  {
    icon: Leaf,
    name: "Groundcover",
    height: "0-1 ft",
    description: "The living mulch that protects soil and fills every gap.",
    plants: ["Wild Ginger", "Pennsylvania Sedge", "Wild Strawberry", "Creeping Phlox"],
    color: "bg-secondary/70"
  }
]

export function PlantPalette() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Palette</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Five Layers of Native Goodness
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We design in layers—just like nature does. Each level supports the others, creating a resilient, self-maintaining system.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((layer, index) => (
            <Card key={layer.name} className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className={`${layer.color} p-6 md:w-48 flex flex-col items-center justify-center text-primary-foreground`}>
                    <layer.icon className="w-10 h-10 mb-2" />
                    <span className="font-bold text-lg">{layer.name}</span>
                    <span className="text-sm opacity-80">{layer.height}</span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-4">{layer.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {layer.plants.map((plant) => (
                            <span 
                              key={plant} 
                              className="px-3 py-1 bg-muted rounded-full text-sm text-foreground font-medium"
                            >
                              {plant}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-6xl font-bold text-muted/50 hidden lg:block">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
