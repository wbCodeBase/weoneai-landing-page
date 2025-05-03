import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, TrendingUp, BarChart3 } from 'lucide-react';

export default function GrowthVisualizationSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/5 to-black/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-70"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1553484771-08351a69e8f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Business growth concept" 
                  className="w-full h-auto rounded-2xl" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-secondary/50 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
                <LineChart className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm text-center">Data-Driven</span>
              </div>
              <div className="bg-secondary/50 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent mb-2" />
                <span className="text-sm text-center">Scalable</span>
              </div>
              <div className="bg-secondary/50 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm text-center">Measurable</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 reveal mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Business Growth</span>
            </h2>
            
            <p className="text-muted text-lg mb-6">
              Our strategic sessions are designed to break through plateaus and create a clear path to sustainable growth. 
              We focus on actionable strategies that you can implement right away.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-success mr-2 text-xl">✓</span>
                <span>Increase conversion rates and customer loyalty</span>
              </li>
              <li className="flex items-start">
                <span className="text-success mr-2 text-xl">✓</span>
                <span>Optimize marketing ROI with targeted strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-success mr-2 text-xl">✓</span>
                <span>Scale your operations without scaling complexity</span>
              </li>
            </ul>
            
            <Button 
              variant="default" 
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold btn-cta group"
            >
              <span className="flex items-center gap-2">
                Book Your Free Strategy Call
                <ArrowRight className="w-5 h-5 btn-cta-icon" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
