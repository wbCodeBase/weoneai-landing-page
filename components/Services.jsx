import { Button } from '@/components/ui/button';
import ankit from "@/public/team/ankit.jpeg"

export default function Services() {
  return (<>


    <section className="md:py-20 py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
        {/* Hero content */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          {/* Left side - Main content */}
          <div className="w-full md:w-[40%] animate-slide-in-left text-left order-1">

            <h2 className="text-3xl md:text-4xl font-semibold md:mb-6 mb-4 text-gray-700">
              Enhance Customer Interactions With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-blue-400">AI Chatbots</span>
            </h2>


            <div className="text-lg text-gray-500">
              <p className="text-gray-600 mb-4 ">
                Help your customers elevate their support & engagement with AI chatbots. They can customize conversations, handle inquiries 24/7 in any language, and boost sales through a range of interactive features.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>Connect WhatsApp via QR Code or Cloud API</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>Unlimited chatbots, subscribers & messages: </span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>Program ChatGPT to answer WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>WooCommerce & API Rest integrations</span>
                </li>
              </ul>
            </div>



            <div className="mt-6">
              <Link href="/">
                <Button
                  variant="default" className="px-5 cursor-pointer rounded-full sm:px-8 py-8 bg-green-600 hover:bg-green-550 text-white font-medium text-sm md:text-base">
                  <span className="flex items-center gap-6">
                    <Medal className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12" />
                    <div className='flex flex-col'>
                      <span className="whitespace-nowrap text-xl font-semibold tracking-wide">Become A Pioneer</span>
                      <span className='text-sm text-left'>Get Your Own AI Platform</span>
                    </div>
                  </span>
                </Button>
              </Link>
            </div>


          </div>

          {/* Right side - Video and what to expect */}
          <div className="w-full md:w-[60%] animate-slide-in-right hero-image order-2">
            {/* Video container */}
            <div className="flex justify-center items-center">

              <Image src="https://planifyx.b-cdn.net/wp-content/uploads/2023/04/Phone-12.png.avif" width={500} height={600} alt="serviceImage" />

            </div>

            {/* What to Expect section below video */}
            <div className="flex justify-center itemscenter gap-6 mt-10 p-5 rounded-xl border bg-white text-gray-500 border-gray-200">
              <div className=''>
                <Image src={ankit} alt='clientImage' className='rounded-full' width={400} height={400} />
              </div>

              <div>
                <p className="mb-3 text-sm italic">
                  "Utilizing Planify X, I've successfully created my own AI chatbot service, and the response from clients has been absolutely phenomenal. I firmly believe that AI is the future, and I'm capitalizing on it in a big way, setting the stage for long-term success."
                </p>

                <div className='text-sm'>
                  <div className='font-semibold'>Ankit Pankit</div>
                  <div>India</div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Additional content section */}

        {/* <StrategySessionCard /> */}

      </div>
    </section>






    <section className="md:py-20 py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
        {/* Hero content */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">


          {/* Left side - Main content */}
          <div className="w-full md:w-[40%] animate-slide-in-left text-left order-2">

            <h2 className="text-3xl md:text-4xl font-semibold md:mb-6 mb-4 text-gray-700">
              Enhance Customer Interactions With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-blue-400">AI Chatbots</span>
            </h2>


            <div className="text-lg text-gray-500">
              <p className="text-gray-600 mb-4 ">
                Help your customers elevate their support & engagement with AI chatbots. They can customize conversations, handle inquiries 24/7 in any language, and boost sales through a range of interactive features.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>Connect WhatsApp via QR Code or Cloud API</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>Unlimited chatbots, subscribers & messages: </span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>Program ChatGPT to answer WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 text-xl text-green-600">✓</span>
                  <span>WooCommerce & API Rest integrations</span>
                </li>
              </ul>
            </div>



            <div className="mt-6">
              <Link href="/">
                <Button
                  variant="default" className="px-5 cursor-pointer rounded-full sm:px-8 py-8 bg-green-600 hover:bg-green-550 text-white font-medium text-sm md:text-base">
                  <span className="flex items-center gap-6">
                    <Medal className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12" />
                    <div className='flex flex-col'>
                      <span className="whitespace-nowrap text-xl font-semibold tracking-wide">Become A Pioneer</span>
                      <span className='text-sm text-left'>Get Your Own AI Platform</span>
                    </div>
                  </span>
                </Button>
              </Link>
            </div>
          </div>



          {/* Right side - Video and what to expect */}
          <div className="w-full md:w-[60%] animate-slide-in-right hero-image order-1">
            {/* Video container */}
            <div className="flex justify-center items-center">

              <Image src="https://planifyx.b-cdn.net/wp-content/uploads/2023/04/Phone-12.png.avif" width={500} height={600} alt="serviceImage" />

            </div>

            {/* What to Expect section below video */}
            <div className="flex justify-center itemscenter gap-6 mt-10 p-5 rounded-xl border bg-white text-gray-500 border-gray-200">
              <div className=''>
                <Image src={ankit} alt='clientImage' className='rounded-full' width={400} height={400} />
              </div>

              <div>
                <p className="mb-3 text-sm italic">
                  "Utilizing Planify X, I've successfully created my own AI chatbot service, and the response from clients has been absolutely phenomenal. I firmly believe that AI is the future, and I'm capitalizing on it in a big way, setting the stage for long-term success."
                </p>

                <div className='text-sm'>
                  <div className='font-semibold'>Ankit Pankit</div>
                  <div>India</div>
                </div>

              </div>
            </div>
          </div>


        </div>


      </div>
    </section>




  </>
  );
}






import { useState, useEffect } from "react"
import { Calendar, CheckCircle, Medal, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from 'next/link';
import Image from 'next/image';

export function StrategySessionCard() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 p-8 md:p-10 rounded-3xl relative overflow-hidden"
    >
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-indigo-900 to-violet-900 opacity-95">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
        >
          Transform Your Business Strategy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-5 text-white flex items-center">
              <span className="inline-block mr-3 p-1.5 rounded-full bg-indigo-500/20">
                <Calendar className="w-5 h-5 text-indigo-300" />
              </span>
              During Our Call
            </h3>

            <motion.ul className="space-y-4">
              {[
                "Analyze your current business model",
                "Identify growth bottlenecks",
                "Discuss immediate action steps",
              ].map((item, index) => (
                <motion.li key={index} variants={item} className="flex items-start group">
                  <span className="text-indigo-300 mr-3 mt-0.5 flex-shrink-0 group-hover:text-indigo-200 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <span className="text-indigo-100 group-hover:text-white transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <h3 className="text-xl font-bold mb-5 text-white flex items-center">
              <span className="inline-block mr-3 p-1.5 rounded-full bg-indigo-500/20">
                <Sparkles className="w-5 h-5 text-indigo-300" />
              </span>
              You'll Receive
            </h3>

            <motion.ul className="space-y-4">
              {[
                "Initial growth strategy outline",
                "Revenue optimization recommendations",
                "Custom action plan proposal",
              ].map((item, index) => (
                <motion.li key={index} variants={item} className="flex items-start group">
                  <span className="text-indigo-300 mr-3 mt-0.5 flex-shrink-0 group-hover:text-indigo-200 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5" />
                  </span>
                  <span className="text-indigo-100 group-hover:text-white transition-colors duration-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-block max-w-full">

            <Button
              variant="default"
              className="px-5 sm:px-6 py-3 md:py-4 bggradient-to-r fromindigo-400 tovoilet-400 bg-indigo-400 text-white rounded-full font-semibold text-sm md:text-base btn-cta group w-full"
            >
              <span className="flex items-center justify-center gap-3 btn-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 flex-shrink-0 btn-cta-icon"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="whitespace-nowrap text-sm">Schedule Your Free Strategy Session</span>
              </span>
            </Button>


          </a>

          <p className="mt-5 text-sm text-indigo-200 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-300" />
            <span>Limited slots available. Book now to secure your spot.</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}


