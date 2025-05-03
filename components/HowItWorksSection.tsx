import { CalendarCheck, Video, FileSpreadsheet } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: <CalendarCheck className="w-6 h-6" />,
      title: "Book Your Session",
      description: "Choose a time that works for you."
    },
    {
      number: 2,
      icon: <Video className="w-6 h-6" />,
      title: "Meet Your Advisor",
      description: "Join a focused, 60-minute video call."
    },
    {
      number: 3,
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: "Get Your Roadmap",
      description: "Receive a custom action plan to accelerate your growth."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-sm md:text-base font-medium px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Works</span>
          </h2>
          <p className="text-muted text-lg">
            Our streamlined approach ensures you get maximum value with minimum hassle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="absolute top-24 left-0 right-0 hidden md:block">
            <div className="h-1 w-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-full"></div>
          </div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center reveal relative z-10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-primary to-accent p-0.5 rounded-full mb-6 relative">
                <div className="bg-background w-20 h-20 rounded-full flex items-center justify-center">
                  <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex flex-col items-center justify-center">
                    <span className="text-white font-bold">{step.icon}</span>
                    <span className="text-white text-xs mt-1">Step {step.number}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
