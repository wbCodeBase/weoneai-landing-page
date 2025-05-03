'use client';

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex P.",
      title: "Startup Founder",
      quote: "The session gave me clarity and confidence to take my business to the next level. The actionable strategies have already increased our conversion rate by 37%.",
      initial: "A",
      rating: 5
    },
    {
      name: "Jamie R.",
      title: "Marketing Lead",
      quote: "Actionable insights and a clear plan - exactly what I needed. Their guidance helped us streamline our customer acquisition strategy and cut costs significantly.",
      initial: "J",
      rating: 5
    },
    {
      name: "Jamie R.",
      title: "Marketing Lead",
      quote: "Actionable insights and a clear plan - exactly what I needed. Their guidance helped us streamline our customer acquisition strategy and cut costs significantly.",
      initial: "J",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-sm font-medium px-4 py-2 bg-[#3399ff]/5 text-[#3399ff] border border-[#3399ff] rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl text-gray-700 md:text-5xl font-bold mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-[#3399ff]/60">Clients</span> Say
          </h2>
          <p className="text-gray-500 text-lg">
            Don&apos;t just take our word for it - hear from businesses we&apos;ve helped
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-800 p-8 rounded-2xl reveal testimonial-card 
                      relative backdrop-blur-sm overflow-hidden"
            >


              {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-violet-100"></div> */}

              {/* <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-[#3399ff]/10 to-accent/10 blur-2xl rounded-full"></div>
              <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-br from-accent/10 to-[#3399ff]/10 blur-2xl rounded-full"></div> */}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center">

                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#3399ff]/80 rounded-full blur-sm opacity-70"></div>
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bgsecondary">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xl font-bold">
                          {testimonial.initial}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>

                <div className="flex mt-4 md:mt-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>

              <p className="text-gray-500 text-lg relative z-10">
              &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
