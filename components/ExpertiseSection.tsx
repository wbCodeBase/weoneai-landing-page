'use client';

import { GiRocket } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si"; 
import { FaChartLine, FaLightbulb, FaRegChartBar } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  num: number;
  description: string;
  bulletPoints: string[];
  accentColor: string;
}

const ExpertiseCard = ({ icon, num, title, description, accentColor }: ExpertiseCardProps) => {
// const ExpertiseCard = ({ icon, num, title, description, bulletPoints, accentColor }: ExpertiseCardProps) => {
  // Icons for bullet points
  // const bulletIcons = [
  //   <FaLightbulb key={num} className="w-4 h-4" />,
  //   <FaRegChartBar key={num} className="w-4 h-4" />,
  //   <HiOutlineCurrencyDollar key={num} className="w-4 h-4" />,
  // ];
  
  return (
    <div className="backdrop-blur-sm border border-gray-300 rounded-2xl p-8 
                    hover:shadow-xl hover:bg-indigo-50  hover:-translate-y-2 
                    transition-all duration-500 group relative overflow-hidden">
      {/* Background glow effect */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-r ${accentColor.replace('opacity-', '')} rounded-full filter blur-3xl opacity-10 
                      group-hover:opacity-30 transition-all duration-700 -translate-x-1/2 -translate-y-1/2 group-hover:scale-125`}></div>
      
      {/* Icon with animated background */}
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${accentColor.replace('opacity-', '')} blur-lg opacity-40 rounded-full 
                        group-hover:opacity-70 transition-all duration-700 animate-pulse`}></div>
        <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-6 bg-gradient-to-r ${accentColor.replace('opacity-', '')} p-0.5 
                       relative shadow-lg group-hover:shadow-xl transition-all duration-500 z-10`}>
          <div className="bgsecondary/90 bg-white w-full h-full rounded-full flex items-center justify-center group-hover:bgsecondary/70 transition-all duration-300">
            <div className={`text-transparent bg-clip-text bg-gradient-to-r ${accentColor.replace('opacity-', '')} 
                           transition-all duration-300 group-hover:scale-110`}>
              {icon}
            </div>
          </div>
        </div>
      </div>
      
      {/* Title with gradient */}
      <h3 className="text-xl font-semibold my-3 text-gray-700 hover:bg-clip-text 
                     hover:bg-gradient-to-r hover:from-white hover:to-white/90 transition-all duration-300">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-500 text-md md:text-lg mb-1 transition-colors duration-300">{description}</p>
      
      {/* Bullet points with icons */}
      {/* <ul className="space-y-4">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-center gap-3 group/item">
            <div className={`flex items-center justify-center p-1.5 rounded-full bg-gradient-to-r ${accentColor.replace('opacity-', '')} 
                            opacity-80 group-hover/item:opacity-100 text-white transition-all duration-300 transform group-hover/item:scale-110`}>
              {bulletIcons[index % bulletIcons.length]}
            </div>
            <span className="text-sm text-gray-500 transition-colors duration-300">{point}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};



 




export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: <FaChartLine className="w-6 h-6 animate-pulse" />,
      title: "Revenue Innovation",
      description: "Identifying/ designing new income streams, ancillary services, and product offerings and many more.",
      bulletPoints: [
        "Market analysis & positioning",
        "Revenue stream diversification",
        "Pricing optimization"
      ],
      accentColor: "from-indigo-500 to-pink-500 opacity-",
    },
    {
      icon: <GiRocket className="w-6 h-6 animate-pulse" />,
      title: "Profit Optimization",
      description: "Maximizing returns and efficiency from existing operations, pricing models, customer base, assets and more.",
      bulletPoints: [
        "KPI optimization",
        "Process automation",
        "Cost reduction"
      ],
      accentColor: "from-[#3399ff] to-[#660099] opacity-",
    },
    {
      icon: <SiSimpleanalytics className="w-6 h-6 animate-pulse" />,
      title: "Sales Innovation",
      description: "Designing new strategies and channels to effectively sell existing offerings and drive the adoption of new revenue streams.",
      bulletPoints: [
        "Operational efficiency",
        "Market expansion",
        "Resource optimization"
      ],
      accentColor: "from-[#660099] to-[#3399ff] opacity-",
    }
  ];

  return (
    <section className="py-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#3399ff]/5 to-black/0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-[#3399ff]/5 rounded-full filter blur-3xl animate-pulse opacity-30"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#660099]/5 rounded-full filter blur-3xl animate-pulse opacity-30 animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl text-gray-700 font-bold mb-4">
            Areas of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-[#3399ff]/60">Expertise</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Specialized consulting services tailored for SMBs, digital businesses, and content creators looking to 
            scale their operations and increase revenue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className={`reveal ${index === 0 ? 'animate-slide-in-left delay-100' : index === 1 ? 'animate-slide-up delay-300' : 'animate-slide-in-right delay-500'}`}>
              <ExpertiseCard
                num={index} 
                icon={area.icon}
                title={area.title}
                description={area.description}
                bulletPoints={area.bulletPoints}
                accentColor={area.accentColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}