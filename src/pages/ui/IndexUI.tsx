import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { NewsletterSection } from '@/components/NewsletterSection'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { ProductComparer } from '@/components/ProductComparer'
import { RestQuiz } from '@/components/RestQuiz'
import { CategoryShowcase } from '@/components/CategoryShowcase'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'
import { Moon, Sparkles, Shield, Truck } from 'lucide-react'

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    filteredProducts,
    loading,
  } = logic

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center sleep-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-sky rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 calm-shadow">
                <Moon className="h-4 w-4 text-sky" />
                <span className="text-sm font-medium text-navy">Premium Sleep Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
                Sleep Better,
                <br />
                <span className="text-sky">Live Better</span>
              </h1>
              
              <p className="text-xl text-navy/70 mb-8 max-w-xl">
                Transform your nights with premium pillows, toppers, bedding, and natural supplements designed for deep, restorative sleep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                  Find Your Setup
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Shop All Products
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden calm-shadow">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
                  alt="Premium bedding"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 calm-shadow hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-sky" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">100-Night Trial</p>
                    <p className="text-sm text-navy/60">Risk-free guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y border-sky/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-sky" />
              </div>
              <div>
                <p className="font-semibold text-navy">Free Shipping</p>
                <p className="text-sm text-navy/60">On orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-6 w-6 text-sky" />
              </div>
              <div>
                <p className="font-semibold text-navy">100-Night Trial</p>
                <p className="text-sm text-navy/60">Sleep on it risk-free</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0">
                <Moon className="h-6 w-6 text-sky" />
              </div>
              <div>
                <p className="font-semibold text-navy">Sleep Experts</p>
                <p className="text-sm text-navy/60">Free consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparer */}
      <ProductComparer />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              Handpicked essentials for your best sleep yet
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-secondary/30 rounded-lg h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-navy/60">No products available yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Rest Quiz */}
      <RestQuiz />

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands who've discovered the power of quality sleep. Start your journey to better rest tonight.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl">
            Find Your Setup
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}