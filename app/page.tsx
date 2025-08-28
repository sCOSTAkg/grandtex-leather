"use client"

import { useState, useEffect } from "react"
import { Search, Menu, X, ArrowRight, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PrimeAsiaHome() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingAnimation />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <div className="bg-slate-800 text-white px-4 py-2 flex justify-between items-center text-sm">
        <span>7:33</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
          <span className="ml-2">LTE</span>
          <div className="bg-white text-slate-800 px-1 rounded text-xs">36</div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-100 z-50 p-6">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
              className="bg-orange-400 hover:bg-orange-500 rounded-full w-12 h-12"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          <nav className="space-y-6">
            <a href="#" className="block text-2xl text-slate-700 font-light">
              Leathers
            </a>
            <a href="#" className="block text-2xl text-slate-700 font-light">
              Company
            </a>
            <a href="#" className="block text-2xl text-slate-700 font-light">
              Sustainability
            </a>
            <a href="#" className="block text-2xl text-slate-700 font-light">
              Highlights
            </a>
            <div className="pt-8 space-y-4">
              <div className="flex justify-between">
                <div>
                  <a href="#" className="block text-lg text-slate-700">
                    Education
                  </a>
                  <a href="#" className="block text-lg text-slate-700">
                    Resources
                  </a>
                </div>
                <div>
                  <a href="#" className="block text-lg text-slate-700">
                    Locations
                  </a>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" size="icon" className="bg-gray-300 rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-gray-300 rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="pt-8">
              <div className="bg-slate-800 rounded-2xl p-6 text-white">
                <h3 className="text-xl mb-4">Contact</h3>
                <div className="flex justify-end">
                  <Button variant="ghost" size="icon" className="bg-white text-slate-800 rounded-full">
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-100 z-40 p-6">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(false)}
              className="bg-orange-400 hover:bg-orange-500 rounded-full w-12 h-12"
            >
              <X className="h-6 w-6 text-white" />
            </Button>
            <h2 className="text-xl font-medium">Search leathers</h2>
          </div>
          <div className="relative mb-8">
            <Input placeholder="Nubuck" className="pl-4 pr-12 py-3 rounded-full bg-white border-0 text-lg" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-center">Latests Collections</h3>
            <div className="space-y-4">
              <CollectionCard
                title="Spring-Summer 27 Collection"
                subtitle="Consciously Crafted • Breakthrough Design • Operational Excellence • Global Support"
                image="/industrial-leather-manufacturing.png"
              />
              <CollectionCard
                title="Fall-Winter 26 Collection"
                subtitle="66°North"
                image="/outdoor-leather-landscape.png"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white/90 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full bg-white shadow-sm"
          >
            <Search className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-slate-800">primeasia</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(true)}
            className="rounded-full bg-white shadow-sm"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Hero Section */}
        <div
          className="relative h-96 bg-cover bg-center flex items-center justify-start px-6"
          style={{
            backgroundImage: `url('/premium-leather-texture-close-up.png')`,
          }}
        >
          <div className="bg-black/20 absolute inset-0"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-light text-white leading-tight">
              Accelerate
              <br />
              Ahead.
            </h2>
          </div>
        </div>

        {/* Action Cards */}
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <ActionCard title="About PrimeAsia" image="/leather-craftsmanship-hands.png" />
            <ActionCard title="Our Tanneries" image="/industrial-tannery-factory.png" />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-t-3xl p-6 mt-4">
          <h3 className="text-2xl font-light text-slate-800 mb-6">Your Future-Forward Tannery Partner.</h3>

          <div className="mb-8">
            <h4 className="text-lg font-medium text-slate-800 mb-4">Our Leathers</h4>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-medium text-slate-800 mb-4">Latest Collection</h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6">
                <h5 className="text-xl font-medium text-white mb-2">Collections</h5>
                <div className="text-white/90 space-y-1">
                  <p>Spring-Summer 27 Collection</p>
                  <p>Fall-Winter 26 Collection</p>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="ghost" size="icon" className="bg-white/20 rounded-full">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="space-y-4">
            <ProductCard title="Leathers" image="/various-leather-samples-hanging.png" />
            <ProductCard title="Emboss & Perforation" image="/embossed-perforated-leather-texture.png" />
            <div className="grid grid-cols-2 gap-4">
              <ProductCard title="Why PrimeAsia?" image="/premium-leather-close-up.png" />
              <ProductCard title="About PrimeAsia" image="/leather-factory-machinery.png" />
            </div>
            <ProductCard title="Tanneries" image="/worker-in-leather-tannery.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

function LoadingAnimation() {
  const text = "PRIMEASIA"

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center space-x-1 mb-4">
          {text.split("").map((letter, index) => (
            <span
              key={index}
              className="text-4xl font-light text-white animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="w-32 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-white rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}

function ActionCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      className="relative h-32 rounded-2xl bg-cover bg-center flex items-end p-4"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
      <div className="relative z-10 flex items-center justify-between w-full">
        <h3 className="text-white font-medium">{title}</h3>
        <Button variant="ghost" size="icon" className="bg-white rounded-full w-8 h-8">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function ProductCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      className="relative h-32 rounded-2xl bg-cover bg-center flex items-end p-4"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
      <div className="relative z-10 flex items-center justify-between w-full">
        <h3 className="text-white font-medium">{title}</h3>
        <Button variant="ghost" size="icon" className="bg-white rounded-full w-8 h-8">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function CollectionCard({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <div
      className="relative h-48 rounded-2xl bg-cover bg-center flex flex-col justify-between p-4"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
      <div className="relative z-10">
        <h3 className="text-white font-medium text-lg">{title}</h3>
        <p className="text-white/80 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="relative z-10 flex justify-end">
        <Button variant="ghost" size="icon" className="bg-white rounded-full w-10 h-10">
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
