import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`py-4 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-md' : ''}`}>
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] flex justify-end items-center">
        {/* <Logo /> */}

        <Link href="https://calendly.com/stanford-s">

          <Button
            variant="default"
            className="px-5 sm:px-6 py-6 cursor-pointer bg-indigo-400 hover:bg-blue-400 text-white font-medium text-sm md:text-base btn-cta group w-full"
          >
            <span className="flex items-center justify-center gap-3 btn-content">
              <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              <span className="whitespace-nowrap text-lg tracking-wide">Let&apos;s Talk</span>
            </span>
          </Button>

          {/* <Button 
            variant="outline" 
            className="px-5 py-2 rounded-full bg-indigo-400 text-white font-medium border-2 border-transparent 
            hover:bg-blue-300 hover:border-blue-500 transition-all duration-300 group"
            // className="px-5 py-2 rounded-full bg-indigo-400 text-white font-medium border-2 border-transparent hover:bg-gray-50 hover:text-indigo-500 hover:border-indigo-500 transition-all duration-300 group"
            style={{
              boxShadow: '0 0 0 rgba(255, 255, 255, 0)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 255, 255, 0)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Let's Talk</span>
            </span>
          </Button> */}
        </Link>
      </div>
    </header>
  );
}
