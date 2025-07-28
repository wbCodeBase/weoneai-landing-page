import { Button } from '@/components/ui/button';
import { Gift, Book, LockKeyholeOpen, MessageSquare, Medal } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection2() {
  return (
    <section id='videoTour' className="py-10 md:py-18 overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
        {/* Hero content */}
        <div className="flex flex-col items-start text-center gap-10 md:gap-16">

          {/* Left side - Main content */}
          <div className="w-full flex flex-col justify-center items-center animate-slide-in-left order-1">
            {/* <span className="inline-block text-sm font-medium px-4 py-2 bg-indigo-400 text-white rounded-full md:mb-6 mb-4 shadow-lg">
              Business Growth Expert
            </span> */}


            <h1 className="text-3xl text-gray-700 md:text-5xl font-bold mb-6">
              Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400">AI-Powered</span>  Vehicle For Success
              {/* <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-300">Business Growth</span> */}
            </h1>

            <div className="text-md text-gray-500">
              <p className="text-gray-500 mb-4 max-w-5xl">
                There’s a reason why SocialPoster is a best-seller. Equipped with cutting-edge AI tools like WhatsApp chatbots and social media automation, this superior product empowers entrepreneurs. Harness the power of AI to deliver exceptional value and turn your clients into loyal customers.
              </p>
            </div>

          </div>

          {/* Right side - Video and what to expect */}
          <div className="animate-slide-in-right flex justify-center items-center w-full hero-image order-2">

            <div className="max-w-5xl bg-background rounded-2xl overflow-hidden shadow-xl">

              <video
                className="w-full h-auto rounded-2xl"
                controls
                loop
                muted
                playsInline
              >
                <source src="/money.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>


            </div>

          </div>
        </div>





      </div>
    </section>
  );
}






// import { useState, useEffect } from "react"
// import { Calendar, CalendarRange, CheckCircle, Sparkles } from "lucide-react"
// import { motion } from "framer-motion"
// import Link from 'next/link';

// export function StrategySessionCard() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 300)
//     return () => clearTimeout(timer)
//   }, [])

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }


//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="mt-20 p-8 md:p-10 rounded-3xl relative overflow-hidden"
//     >
//       {/* Background with gradient and pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-indigo-900 to-violet-900 opacity-95">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
//         >
//           Transform Your Business Strategy
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate={isVisible ? "show" : "hidden"}
//             className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
//           >
//             <h3 className="text-xl font-bold mb-5 text-white flex items-center">
//               <span className="inline-block mr-3 p-1.5 rounded-full bg-indigo-500/20">
//                 <Calendar className="w-5 h-5 text-indigo-300" />
//               </span>
//               During Our Call
//             </h3>

//             <motion.ul className="space-y-4">
//               {[
//                 "Analyze your current business model",
//                 "Identify growth bottlenecks",
//                 "Discuss immediate action steps",
//               ].map((item, index) => (
//                 <motion.li key={index} variants={item} className="flex items-start group">
//                   <span className="text-indigo-300 mr-3 mt-0.5 flex-shrink-0 group-hover:text-indigo-200 transition-colors duration-300">
//                     <CheckCircle className="w-5 h-5" />
//                   </span>
//                   <span className="text-indigo-100 group-hover:text-white transition-colors duration-300">{item}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate={isVisible ? "show" : "hidden"}
//             className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
//           >
//             <h3 className="text-xl font-bold mb-5 text-white flex items-center">
//               <span className="inline-block mr-3 p-1.5 rounded-full bg-indigo-500/20">
//                 <Sparkles className="w-5 h-5 text-indigo-300" />
//               </span>
//               You'll Receive
//             </h3>

//             <motion.ul className="space-y-4">
//               {[
//                 "Initial growth strategy outline",
//                 "Revenue optimization recommendations",
//                 "Custom action plan proposal",
//               ].map((item, index) => (
//                 <motion.li key={index} variants={item} className="flex items-start group">
//                   <span className="text-indigo-300 mr-3 mt-0.5 flex-shrink-0 group-hover:text-indigo-200 transition-colors duration-300">
//                     <CheckCircle className="w-5 h-5" />
//                   </span>
//                   <span className="text-indigo-100 group-hover:text-white transition-colors duration-300">{item}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="mt-10 text-center"
//         >
//           <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-block max-w-full">

//             <Button
//               variant="default"
//               className="px-5 sm:px-6 py-3 md:py-4 bggradient-to-r fromindigo-400 tovoilet-400 bg-indigo-400 text-white rounded-full font-semibold text-sm md:text-base btn-cta group w-full"
//             >
//               <span className="flex items-center justify-center gap-3 btn-content">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-5 h-5 flex-shrink-0 btn-cta-icon"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 <span className="whitespace-nowrap text-sm">Schedule Your Free Strategy Session</span>
//               </span>
//             </Button>


//           </a>

//           <p className="mt-5 text-sm text-indigo-200 flex items-center justify-center gap-2">
//             <Sparkles className="w-4 h-4 text-violet-300" />
//             <span>Limited slots available. Book now to secure your spot.</span>
//           </p>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }



// export function StrategySessionCardLight() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 300)
//     return () => clearTimeout(timer)
//   }, [])

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="mt-20 p-6 sm:p-8 md:p-10 rounded-3xl relative overflow-hidden w-full max-w-5xl mx-auto"
//     >
//       {/* Background with light gradient and pattern */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-violet-100">
//         {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0MzM4REIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div> */}
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
//       <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[hsl(210,100%,60%)] rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>

//       {/* Content */}
//       <div className="relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-indigo-500"
//         >
//           Transform Your Business Strategy
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate={isVisible ? "show" : "hidden"}
//             className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5 text-violet-700 flex items-center">
//               <span className="inline-block mr-3 p-1.5 rounded-full bg-violet-100">
//                 <Calendar className="w-5 h-5 text-violet-600" />
//               </span>
//               During Our Call
//             </h3>

//             <motion.ul className="space-y-3 md:space-y-4">
//               {[
//                 "Analyze your current business model",
//                 "Identify growth bottlenecks",
//                 "Discuss immediate action steps",
//               ].map((item, index) => (
//                 <motion.li key={index} variants={item} className="flex items-start group">
//                   <span className="text-violet-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-indigo-600 transition-colors duration-300">
//                     <CheckCircle className="w-5 h-5" />
//                   </span>
//                   <span className="text-violet-700 group-hover:text-indigo-900 transition-colors duration-300">{item}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>

//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate={isVisible ? "show" : "hidden"}
//             className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-violet-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-5 text-violet-700 flex items-center">
//               <span className="inline-block mr-3 p-1.5 rounded-full bg-violet-100">
//                 <Sparkles className="w-5 h-5 text-violet-600" />
//               </span>
//               You&apos;ll Receive
//             </h3>

//             <motion.ul className="space-y-3 md:space-y-4">
//               {[
//                 "Initial growth strategy outline",
//                 "Revenue optimization recommendations",
//                 "Custom action plan proposal",
//               ].map((item, index) => (
//                 <motion.li key={index} variants={item} className="flex items-start group">
//                   <span className="text-violet-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-violet-600 transition-colors duration-300">
//                     <CheckCircle className="w-5 h-5" />
//                   </span>
//                   <span className="text-violet-700 group-hover:text-violet-900 transition-colors duration-300">{item}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="mt-8 md:mt-10 text-center"
//         >
//           <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
//             <Button
//               variant="default"
//               className="px-5 sm:px-6 py-3 md:py-4 tovoilet-400 bg-indigo-400 text-white rounded-full font-semibold text-sm md:text-base btn-cta group w-full"
//             >
//               <span className="flex items-center justify-center gap-3 btn-content">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-5 h-5 flex-shrink-0 btn-cta-icon"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 <span className="whitespace-nowrap md:text-sm text-xs">Schedule Your Free Strategy Session</span>
//               </span>
//             </Button>
//           </a>

//           <p className="mt-4 md:mt-5 text-xs sm:text-sm text-indigo-600 flex items-center justify-center gap-2">
//             <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-violet-500" />
//             <span>Limited slots available. Book now to secure your spot.</span>
//           </p>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }


// export function StrategySessionCardInitial() {


//   return (
//     <>
//       <div className="mt-10 p-6 md:p-8 bg-secondary/95 backdrop-blur-sm shadow-md rounded-2xl reveal border border-gray-800">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           <div className=''>
//             <h3 className="text-xl font-semibold mb-4 text-white">During Our Call:</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-success mr-2 text-xl">✓</span>
//                 <span>Analyze your current business model</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-success mr-2 text-xl">✓</span>
//                 <span>Identify growth bottlenecks</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-success mr-2 text-xl">✓</span>
//                 <span>Discuss immediate action steps</span>
//               </li>
//             </ul>
//           </div>
//           <div className=''>
//             <h3 className="text-xl font-semibold mb-4 text-white">You&apos;ll Receive:</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-success mr-2 text-xl">✓</span>
//                 <span>Initial growth strategy outline</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-success mr-2 text-xl">✓</span>
//                 <span>Revenue optimization recommendations</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-success mr-2 text-xl">✓</span>
//                 <span>Custom action plan proposal</span>
//               </li>
//             </ul>
//           </div>


//         </div>
//         <div className="mt-14 text-center">
//           <a
//             href="https://calendly.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block max-w-full"
//           >
//             <Button
//               variant="default"
//               className="px-5 sm:px-6 py-3 md:py-4 tovoilet-400 bg-indigo-400 text-white rounded-full font-semibold text-sm md:text-base btn-cta group w-full"
//             >
//               <span className="flex items-center justify-center gap-3 btn-content">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-5 h-5 flex-shrink-0 btn-cta-icon"
//                 >
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//                 <span className="whitespace-nowrap md:text-sm text-xs">Schedule Your Free Strategy Session</span>
//               </span>
//             </Button>
//           </a>
//           <p className="mt-4 text-sm text-indigo-200">
//             <span className="text-violet-200">✦</span> Limited slots available. Book now to secure your spot.
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }
