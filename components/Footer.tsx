'use client';

import {  ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="pb-8 relative overflow-hidden bg-white">
      {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3399ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div> */}

      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">

        <div className="mb-12 py-16 border bg-gray-800 border-gray-800 p-8 rounded-2xl text-center md:text-left flex flex-col justify-center items-center gap-8">

          <span className="inline-block text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-100 via-indigo-100 to-white text-[#3399ff] rounded-full">
            Business Growth Expert
          </span>

          <div className='text-center'>
            <h3 className="text-xl md:text-5xl font-bold mb-6 text-white">Ready to Accelerate Your <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-100 to-indigo-200'> Business Growth? </span></h3>
            <p className="text-gray-300">Book your free 30-minute strategy session today.</p>
          </div>


          <Button
            variant="default"
            className="px-5 sm:px-6 py-4 md:py-6 cursor-pointer bggradient-to-r fromindigo-400 tovoilet-400 bg-indigo-400 text-white rounded-full font-semibold text-sm md:text-base btn-cta"
          >
            <span className="flex items-center justify-center gap-3 btn-content">

              <span className="whitespace-nowrap text-sm">Book Your Free Strategy Call</span>

              <ArrowRight className="w-5 h-5 btn-cta-icon" />
            </span>
          </Button>



        </div>

      </div>
    </footer>
  );
}
