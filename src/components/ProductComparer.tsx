import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

interface ComparisonProduct {
  name: string
  price: number
  image: string
  features: {
    cooling: boolean
    support: 'soft' | 'medium' | 'firm'
    material: string
    warranty: string
    trial: string
  }
}

const pillows: ComparisonProduct[] = [
  {
    name: 'Cloud Memory Foam',
    price: 89,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop',
    features: {
      cooling: true,
      support: 'medium',
      material: 'Memory Foam',
      warranty: '3 years',
      trial: '100 nights'
    }
  },
  {
    name: 'Serenity Down Alternative',
    price: 65,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
    features: {
      cooling: false,
      support: 'soft',
      material: 'Down Alternative',
      warranty: '2 years',
      trial: '60 nights'
    }
  },
  {
    name: 'Cervical Support',
    price: 95,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop',
    features: {
      cooling: true,
      support: 'firm',
      material: 'Orthopedic Foam',
      warranty: '5 years',
      trial: '120 nights'
    }
  }
]

const toppers: ComparisonProduct[] = [
  {
    name: 'Cooling Gel Topper',
    price: 199,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop',
    features: {
      cooling: true,
      support: 'medium',
      material: 'Gel Memory Foam',
      warranty: '3 years',
      trial: '100 nights'
    }
  },
  {
    name: 'Plush Comfort Topper',
    price: 149,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop',
    features: {
      cooling: false,
      support: 'soft',
      material: 'Fiber Fill',
      warranty: '2 years',
      trial: '60 nights'
    }
  }
]

export const ProductComparer = () => {
  const [activeTab, setActiveTab] = useState<'pillows' | 'toppers'>('pillows')
  const products = activeTab === 'pillows' ? pillows : toppers

  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            compare and choose the best for you
          </h2>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Find the perfect pillow or topper for your sleep style
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-sky/20 p-1 bg-white">
            <Button
              variant={activeTab === 'pillows' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('pillows')}
              className="rounded-md"
            >
              Pillows
            </Button>
            <Button
              variant={activeTab === 'toppers' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('toppers')}
              className="rounded-md"
            >
              Mattress Toppers
            </Button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {product.name}
                  </h3>
                  <p className="text-2xl font-bold text-sky mb-4">
                    ${product.price}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-navy/70">Cooling</span>
                      {product.features.cooling ? (
                        <Check className="h-5 w-5 text-sky" />
                      ) : (
                        <X className="h-5 w-5 text-navy/30" />
                      )}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-navy/70">Support</span>
                      <span className="font-medium text-navy capitalize">
                        {product.features.support}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-navy/70">Material</span>
                      <span className="font-medium text-navy">
                        {product.features.material}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-navy/70">Warranty</span>
                      <span className="font-medium text-navy">
                        {product.features.warranty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-navy/70">Sleep Trial</span>
                      <span className="font-medium text-navy">
                        {product.features.trial}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    View Product
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}