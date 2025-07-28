// 'use client';

// import { Star } from 'lucide-react';
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


// export default function TestimonialsSection() {
//   const testimonials = [
//     {
//       name: "Alex P.",
//       title: "Startup Founder",
//       quote: "His ability to think creatively, strategically and identify new opportunities for   revenue has been a tremendous asset to our team.",
//       initial: "A",
//       rating: 5
//     },
//     {
//       name: "Jamie R.",
//       title: "Marketing Lead",
//       quote: "Actionable insights and a clear plan - exactly what I needed. Their guidance helped us streamline our customer acquisition strategy and cut costs significantly.",
//       initial: "J",
//       rating: 5
//     },
//     {
//       name: "Jamie R.",
//       title: "Marketing Lead",
//       quote: "Actionable insights and a clear plan - exactly what I needed. Their guidance helped us streamline our customer acquisition strategy and cut costs significantly.",
//       initial: "J",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="py-16 md:py24 bg-background">
//       <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
//         <div className="text-center max-w-3xl mx-auto mb-16 reveal">
//           <span className="inline-block text-sm font-medium px-4 py-2 bg-[#3399ff]/5 text-[#3399ff] border border-[#3399ff] rounded-full mb-4">
//             Success Stories
//           </span>
//           <h2 className="text-3xl text-gray-700 md:text-5xl font-bold mb-6">
//             What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-[#3399ff]/60">Clients</span> Say
//           </h2>
//           <p className="text-gray-500 text-lg">
//             Don&apos;t just take our word for it - hear from businesses we&apos;ve helped
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="border border-gray-800 p-8 rounded-2xl reveal testimonial-card 
//                       relative backdrop-blur-sm overflow-hidden"
//             >


//               {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-violet-100"></div> */}

//               {/* <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-[#3399ff]/10 to-[#660099]/10 blur-2xl rounded-full"></div>
//               <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-gradient-to-br from-[#660099]/10 to-[#3399ff]/10 blur-2xl rounded-full"></div> */}

//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                 <div className="flex items-center">

//                   {/* <div className="relative">
//                     <div className="absolute -inset-1 bg-[#3399ff]/80 rounded-full blur-sm opacity-70"></div>
//                     <div className="w-10 h-10 rounded-full overflow-hidden relative bgsecondary">
//                       <div className="w-full h-full flex items-center justify-center">
//                         <span className="text-xl font-bold">
//                           {testimonial.initial}
//                         </span>
//                       </div>
//                     </div>
//                   </div> */}

//                   <Avatar className="w-12 h-12">
//                     <AvatarImage src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png" alt="User avatar" />
//                     {/* <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" /> */}
//                     <AvatarFallback>AV</AvatarFallback>
//                   </Avatar>


//                   <div className="ml-4">
//                     <h4 className="font-semibold text-gray-700">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-400">{testimonial.title}</p>
//                   </div>
//                 </div>

//                 <div className="flex mt-4 md:mt-0">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
//                   ))}
//                 </div>
//               </div>

//               <p className="text-gray-500 text-lg relative z-10">
//                 &quot;{testimonial.quote}&quot;
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';

import { Book, Brain, Globe, HandCoins, Headset, Palette, Receipt, RefreshCw, Sparkles, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function GetYourApp() {
  const datacards = [
    {
      title: "Ready-To-Use",
      quote: "Once you join, you’ll receive a fully functional platform, ready to just add your logo and set your prices. No coding needed!",
      icon: <Sparkles className='h-12 w-12' />,
    },
    {
      title: "Fully Customizable",
      quote: "Actionable insights and a clear plan - exactly what I needed. Their guidance helped us streamline our customer acquisition strategy and cut costs significantly.",
      icon: <Palette className='h-12 w-12' />,
    },
    {
      title: "Recurring Revenue",
      quote: "Charge your clients a monthly or yearly fee to access your AI app, driving continuous success and growth for your business. ",
      icon: <RefreshCw className='h-12 w-12' />,
    },
    {
      title: "All Profit Is Yours",
      quote: "Bill your clients directly via PayPal, Stripe, Mercado Pago, Paddle, Paystack, PayU, Mollie, Razorpay, Cardcom & CoinPayments.",
      icon: <HandCoins className='h-12 w-12' />,
    },
    {
      title: "Sell Worldwide",
      quote: "Easily auto-translate the app with a few clicks and edit text as needed. Tap into a global market and drive sales everywhere.",
      icon: <Globe className='h-12 w-12' />,
    },
    {
      title: "Proven Success",
      quote: "In today’s AI-driven world, your app will thrive with minimal effort. Join entrepreneurs already seeing real results with this proven model.",
      icon: <Trophy className='h-12 w-12' />,
    },

  ];

  return (
    <section className="py-16 md:py24 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]">
        <div className="text-center max-w-5xl mx-auto mb-16 reveal">
          {/* <span className="inline-block text-sm font-medium px-4 py-2 bg-[#3399ff]/5 text-[#3399ff] border border-[#3399ff] rounded-full mb-4">
            Launch your app
          </span> */}
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug md:leading-tight tracking-wide">
            Get Your Own App Running in Less Than 24 Hours
          </h2>

          {/* <p className="text-gray-500 text-lg">
            Don&apos;t just take our word for it - hear from businesses we&apos;ve helped
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datacards.map((data, index) => (

            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-500 mb-4">
                {data?.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{data?.title}</h3>
              <p className="text-gray-500 text-md mb-4">
                {data?.quote}
              </p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}


export function MaxiSuccess() {
  const datacards = [
    {
      title: "Help Center",
      quote: "Access hundreds of free tutorials and recommendations, including step-by-step guides and answers to common questions.",
      icon: <Book className='h-12 w-12' />,
    },
    {
      title: "AI Assistant",
      quote: "Get support from our AI Assistant found at our Help Center chat ‘  ‘. Specify the app you need help with, and our AI will guide you.",
      icon: <Brain className='h-12 w-12' />,
    },
    {
      title: "Expert Assistance",
      quote: "Hire our experts to set up your platform, train your AIs, or provide you with 1:1 guidance and training through paid video sessions.",
      icon: <Headset className='h-12 w-12' />,
    },

  ];

  return (
    <section className="py-16 md:py24 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          {/* <span className="inline-block text-sm font-medium px-4 py-2 bg-[#3399ff]/5 text-[#3399ff] border border-[#3399ff] rounded-full mb-4">
            Launch your app
          </span> */}
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-wide ">
            Maximize Your Success With Our Support
          </h2>
          {/* <p className="text-gray-500 text-lg">
            Don&apos;t just take our word for it - hear from businesses we&apos;ve helped
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datacards.map((data, index) => (

            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-500 mb-4">
                {data?.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{data?.title}</h3>
              <p className="text-gray-500 text-md mb-4">
                {data?.quote}
              </p>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}



export function EarnMoney() {
  const datacards = [
    {
      title: "Reseller Program",
      quote: "Resell one of our apps with your logo & domain. Craft plans, set pricing, sell to unlimited clients, and bill them through your payment gateways. All profits are yours.",
      ctatext: "Get Your Own AI Platform",
      icon: <Trophy className='h-12 w-12' />,
    },
    {
      title: "Affiliate Program",
      quote: "Work once, earn forever! Recommend Planify X and earn up to 100% commission on first payments & up to 50% lifetime commission on renewals.",
      ctatext: "Start Crafting Your Revenue Flow",
      icon: <Receipt className='h-12 w-12' />,
    },


  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-[1180px]">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          {/* <span className="inline-block text-sm font-medium px-4 py-2 bg-[#3399ff]/5 text-[#3399ff] border border-[#3399ff] rounded-full mb-4">
            Launch your app
          </span> */}
          <h2 className="text-3xl text-gray-700 md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3399ff] to-[#3399ff]/60">Earn Money</span> With Us!
          </h2>
          {/* <p className="text-gray-500 text-lg">
            Don&apos;t just take our word for it - hear from businesses we&apos;ve helped
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {datacards.map((data, index) => (

            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="text-blue-500 mb-4">
                {data?.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{data?.title}</h3>
              <p className="text-gray-500 text-md mb-4">
                {data?.quote}
              </p>
              <Link href="#" className='text-semibold text-blue-500'>{data.ctatext}</Link>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
