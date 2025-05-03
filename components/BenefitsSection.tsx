import { LightbulbIcon, MapIcon, UsersIcon } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <LightbulbIcon className="w-8 h-8" />,
      title: "Personalized Advice",
      description: "Sessions tailored to your unique business needs and goals.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <MapIcon className="w-8 h-8" />,
      title: "Actionable Roadmap",
      description: "Walk away with a clear, step-by-step plan you can implement immediately.",
      gradient: "from-primary to-accent"
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Work 1:1 with a seasoned growth advisor with a proven track record.",
      gradient: "from-purple-500 to-accent"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-sm md:text-base font-medium px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Growth Clarity</span> Sessions?
          </h2>
          <p className="text-muted text-lg">
            Our expert-led sessions are designed to provide maximum value in minimum time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group border border-gray-800 bg-secondary/50 backdrop-blur-sm p-8 rounded-2xl 
                        hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 reveal 
                        hover:border-primary/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500"></div>
              
              <div className={`inline-flex p-3 rounded-xl mb-6 bg-gradient-to-br ${benefit.gradient} bg-opacity-10`}>
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${benefit.gradient}`}>
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
