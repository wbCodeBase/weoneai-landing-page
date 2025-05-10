"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-indigo-200/30 to-violet-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-300/30 to-violet-300/30 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1280px] relative z-10">
        <Card className="border border-slate-200 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-400 to-[#3399ff]"></div>

          <CardContent className="p-6 sm:p-8 md:p-12">
            {/* Limited Time Offer */}
            <Badge
              variant="outline"
              className="mb-6 text-sm px-4 py-1.5 bg-amber-50 text-amber-700 border-amber-200 font-medium"
            >
              Limited Time Offer
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Book Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-[#3399ff]/60">
                Free Strategy Session
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-10 max-w-2xl">
              Transform your business growth trajectory with a complimentary
              30-minute consultation worth $250
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:mb-12 mb-8">
              {/* What You'll Get */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-semibold text-lg sm:text-xl mb-6 text-slate-800">
                  What You&apos;ll Get:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Personalized growth strategy tailored to your business",
                    "Actionable insights you can implement immediately",
                    "Clear roadmap for scaling your revenue",
                    "No obligation, 100% free consultation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mt-0.5 mr-3 text-indigo-600 flex-shrink-0">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-slate-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perfect For */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-semibold text-lg sm:text-xl mb-6 text-slate-800">
                  Perfect For:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Small and Medium Businesses",
                    "Content Creators & YouTubers",
                    "Digital Entrepreneurs",
                    "E-commerce Businesses",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center px-4 py-3 bg-white rounded-lg shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow transition-all"
                    >
                      <div className="h-2 w-2 rounded-full bg-indigo-500 mr-3"></div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <div className="flex justify-center items-center flex-wrap gap-6 mb-6">
                <Link
                  href="https://www.linkedin.com/in/stanfordsequeira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="default"
                    className="cursor-pointer text-white hover:text-white/90 transition-colors bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-5 sm:px-7 py-6 md:py-7 w-max btn-cta shadow-lg"
                  >
                    <span className="flex items-center justify-center">
                      <FaLinkedin className="mr-3 text-xl" />
                      <span className="whitespace-nowrap md:text-lg text-lg">
                        Connect on LinkedIn
                      </span>
                    </span>
                  </Button>
                </Link>

                <Link
                  href="https://calendly.com/stanford-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="default"
                    className="cursor-pointer px-5 sm:px-7 py-6 md:py-7 hover:bg-blue-400 bg-indigo-400 text-white group w-full"
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
                        className="w-6 h-6 flex-shrink-0 btn-cta-icon"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="whitespace-nowrap md:text-xl text-lg">
                        Schedule Free Session
                      </span>
                    </span>
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                <span className="text-amber-500">✦</span> Limited slots
                available. Book now to secure your spot.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

// import { Button } from "@/components/ui/button";
// import { FaCalendarAlt, FaCheck } from "react-icons/fa";
// import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import { MdOutlineDirections } from "react-icons/md";

// export default function CtaSection() {
//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0f1118] to-[#151828] relative overflow-hidden">
//       {/* Background pattern */}
//       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

//       {/* Glow effects */}
//       <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#3399ff]/20 to-accent/20 rounded-full filter blur-3xl"></div>
//       <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl"></div>

//       <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
//         <div className="bg-[#161a2c]/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-gray-700 relative">
//           <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#3399ff] to-accent"></div>

//           <div className="p-8 md:p-12">
//             {/* Limited Time Offer */}
//             <span className="inline-block text-amber-400 font-medium mb-4 px-4 py-1 bg-amber-900/30 rounded-full text-sm">Limited Time Offer</span>

//             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//               Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-accent">Free Strategy Session</span>
//             </h2>

//             <p className="text-gray-300 text-lg mb-10 max-w-2xl">
//               Transform your business growth trajectory with a complimentary 30-minute consultation worth $250
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
//               {/* What You'll Get */}
//               <div>
//                 <h3 className="font-semibold text-xl mb-6 text-white">What You'll Get:</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start group">
//                     <div className="mt-1 mr-3 text-amber-400 text-xl flex-shrink-0 p-1 bg-amber-400/10 rounded-full group-hover:bg-amber-400/20 transition-all">
//                       <IoMdCheckmarkCircleOutline />
//                     </div>
//                     <div>
//                       <p className="text-gray-200">Personalized growth strategy tailored to your business</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="mt-1 mr-3 text-amber-400 text-xl flex-shrink-0 p-1 bg-amber-400/10 rounded-full group-hover:bg-amber-400/20 transition-all">
//                       <IoMdCheckmarkCircleOutline />
//                     </div>
//                     <div>
//                       <p className="text-gray-200">Actionable insights you can implement immediately</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="mt-1 mr-3 text-amber-400 text-xl flex-shrink-0 p-1 bg-amber-400/10 rounded-full group-hover:bg-amber-400/20 transition-all">
//                       <IoMdCheckmarkCircleOutline />
//                     </div>
//                     <div>
//                       <p className="text-gray-200">Clear roadmap for scaling your revenue</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="mt-1 mr-3 text-amber-400 text-xl flex-shrink-0 p-1 bg-amber-400/10 rounded-full group-hover:bg-amber-400/20 transition-all">
//                       <IoMdCheckmarkCircleOutline />
//                     </div>
//                     <div>
//                       <p className="text-gray-200">No obligation, 100% free consultation</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               {/* Perfect For */}
//               <div>
//                 <h3 className="font-semibold text-xl mb-6 text-white">Perfect For:</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-center px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                     <span className="text-[#3399ff] mr-3 text-xl">•</span>
//                     <span className="text-gray-200">Small and Medium Businesses</span>
//                   </li>
//                   <li className="flex items-center px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                     <span className="text-[#3399ff] mr-3 text-xl">•</span>
//                     <span className="text-gray-200">Content Creators & YouTubers</span>
//                   </li>
//                   <li className="flex items-center px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                     <span className="text-[#3399ff] mr-3 text-xl">•</span>
//                     <span className="text-gray-200">Digital Entrepreneurs</span>
//                   </li>
//                   <li className="flex items-center px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
//                     <span className="text-[#3399ff] mr-3 text-xl">•</span>
//                     <span className="text-gray-200">E-commerce Businesses</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="text-center">
//               <a
//                 href="https://calendly.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block max-w-full"
//               >
//                 <Button className="px-4 sm:px-6 md:px-8 py-4 md:py-5 text-white bg-gradient-to-r from-violet-500 to-purple-500 transition-all rounded-full font-semibold btn-cta group shadow-xl">
//                   <span className="flex items-center justify-center gap-2 btn-content">
//                     <FaCalendarAlt className="text-xl flex-shrink-0" />
//                     <span className="text-xs sm:text-sm md:text-base">Schedule Free Session</span>
//                   </span>
//                 </Button>
//               </a>

//               <p className="mt-6 text-sm text-gray-400">
//                 <span className="text-amber-400">✦</span> Limited slots available. Book now to secure your spot.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
