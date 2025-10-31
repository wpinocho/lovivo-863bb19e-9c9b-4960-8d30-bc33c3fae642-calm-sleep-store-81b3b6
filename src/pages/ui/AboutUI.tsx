import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Moon, Heart, Shield, Sparkles } from 'lucide-react'

/**
 * EDITABLE UI COMPONENT - AboutUI
 * TIPO B - El agente de IA puede editar libremente este componente
 */

const AboutUI = () => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center sleep-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-sky rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">
              About Us
            </h1>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              We're on a mission to help everyone experience the transformative power of quality sleep
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-navy/70">
            <p className="text-lg leading-relaxed mb-6">
              We started with a simple belief: everyone deserves a great night's sleep. After years of research and countless sleepless nights, we discovered that the right combination of premium pillows, supportive toppers, quality bedding, and natural supplements could transform the way people rest.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Today, we're proud to offer carefully curated sleep solutions that have helped thousands of people wake up feeling refreshed, energized, and ready to take on the day. Every product we offer has been tested, refined, and chosen with one goal in mind: to help you sleep better.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-lg text-navy/70 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4">
                <Moon className="h-8 w-8 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Quality First
              </h3>
              <p className="text-navy/70">
                We never compromise on the quality of our products. Every item is carefully selected and tested.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Customer Care
              </h3>
              <p className="text-navy/70">
                Your satisfaction is our priority. We're here to help you find the perfect sleep solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Trust & Transparency
              </h3>
              <p className="text-navy/70">
                We believe in honest communication and standing behind every product we sell.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sky/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-sky" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">
                Innovation
              </h3>
              <p className="text-navy/70">
                We continuously seek out the latest sleep science and technology to improve your rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Promise to You
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We stand behind every product with our 100-night sleep trial. If you're not completely satisfied, we'll make it right. Your journey to better sleep starts here, and we're with you every step of the way.
          </p>
        </div>
      </section>
    </EcommerceTemplate>
  )
}

export default AboutUI