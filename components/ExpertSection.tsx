'use client'

import { FaMedal, FaLinkedin } from "react-icons/fa";

export default function ExpertSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#1f2937] bg-opacity-95"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
        <div className="text-center mb-10 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Why Trust My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-blue-200">Expertise?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Backed by education, experience, and a proven track record of driving business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          {/* Professional Background Card */}
          <div className="bg-[#2a3648] backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#3399ff]/20 to-transparent rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <FaMedal className="mr-3 text-[#3399ff]" /> Our Method
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div className="flex items-center">
                  {/* <FaGraduationCap className="text-gray-400 mr-2" /> */}
                  <span className="text-gray-200">We clarify your biggest revenue or profit challenge</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div className="flex items-center">
                  {/* <FaBriefcase className="text-gray-400 mr-2" /> */}
                  <span className="text-gray-200">I audit the hidden blockers and underused opportunities</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div className="flex items-center">
                  {/* <FaUsers className="text-gray-400 mr-2" /> */}
                  <span className="text-gray-200">Using my 10+ growth levers, I draft your custom strategy</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div className="flex items-center">
                  {/* <FaStar className="text-gray-400 mr-2" /> */}
                  <span className="text-gray-200">You get a clear roadmap—built for action</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Industry Recognition Card */}
          <div className="bg-[#2a3648] backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-white">Industry Recognition</h3>
            <p className="text-gray-300 mb-6">
              Featured in leading business publications and trusted by companies across various industries 
              for strategic growth consulting.
            </p>
            
            <div className="mb-6">
              <a 
                href="https://www.linkedin.com/in/stanfordsequeira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-white hover:text-white/90 transition-colors bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-4 rounded-sm w-max btn-cta shadow-lg"
              >
                <FaLinkedin className="mr-3 text-xl" /> <span className="text-lg">Connect on LinkedIn</span>
              </a>
            </div>
            
            <p className="text-sm text-gray-400">
              View detailed experience and recommendations from past clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}