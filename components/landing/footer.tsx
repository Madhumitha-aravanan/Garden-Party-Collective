import { Sprout } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-secondary" />
            <span className="font-bold text-primary-foreground text-lg">Grit & Green Co.</span>
          </div>
          <p className="text-primary-foreground/60 text-sm text-center md:text-right">
            Rewilding Detroit, one yard at a time.
            <br />
            <span className="text-primary-foreground/40">Made with native plants and local love.</span>
          </p>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            &copy; {new Date().getFullYear()} Grit & Green Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
