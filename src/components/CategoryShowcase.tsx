import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface Category {
  name: string
  description: string
  image: string
  productCount: number
  href: string
}

const categories: Category[] = [
  {
    name: 'Premium Bedding',
    description: 'Luxurious sheets, blankets, and comfort essentials',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    productCount: 5,
    href: '#bedding'
  },
  {
    name: 'Sleep Supplements',
    description: 'Natural support for relaxation and recovery',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=400&fit=crop',
    productCount: 4,
    href: '#supplements'
  }
]

export const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Everything you need for your best night's sleep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 calm-shadow"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">
                        {category.productCount} products
                      </span>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="group-hover:bg-sky group-hover:text-white transition-colors"
                      >
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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