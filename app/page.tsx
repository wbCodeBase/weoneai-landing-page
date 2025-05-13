'use client'

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExpertSection from '@/components/ExpertSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import Calendly from '@/components/Calendly';

export default function Home() {
  // const [scrollY, setScrollY] = useState(0);
 
  useEffect(() => {
    // Improved reveal animations on scroll with more dynamic behavior
    const checkReveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      const animateElements = document.querySelectorAll('[data-animate]');
      const windowHeight = window.innerHeight;
      const revealPoint = 100;

      // Standard reveal animation
      revealElements.forEach(element => {
        const revealTop = (element as HTMLElement).getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('active');
        } else if (revealTop > windowHeight) {
          // Reset animation when element goes out of view (optional)
          // element.classList.remove('active');
        }
      });

      // Custom animations based on data-animate attribute
      animateElements.forEach(element => {
        const elementTop = (element as HTMLElement).getBoundingClientRect().top;
        const animationType = element.getAttribute('data-animate');
        const delay = element.getAttribute('data-delay') || '0';

        if (elementTop < windowHeight - revealPoint) {
          if (!element.classList.contains('animated')) {
            element.classList.add('animated');
            (element as HTMLElement).style.animationDelay = `${delay}ms`;

            if (animationType === 'fade-in') {
              element.classList.add('animate-fade-in');
            } else if (animationType === 'slide-up') {
              element.classList.add('animate-slide-up');
            } else if (animationType === 'slide-left') {
              element.classList.add('animate-slide-in-left');
            } else if (animationType === 'slide-right') {
              element.classList.add('animate-slide-in-right');
            } else if (animationType === 'scale') {
              element.classList.add('animate-scale-in');
            }
          }
        }
      });

      // Update scroll position for parallax effects
      // setScrollY(window.scrollY);
    };

    // Smooth scroll behavior for anchor links
    const setupSmoothScroll = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e: Event) => {
          e.preventDefault();

          const element = e.currentTarget as HTMLAnchorElement;
          const targetId = element.getAttribute('href')?.substring(1);
          if (!targetId) return;

          const targetElement = document.getElementById(targetId);
          if (!targetElement) return;

          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        });
      });
    };

    // Initial checks
    checkReveal();
    setupSmoothScroll();

    // Add scroll event listener
    window.addEventListener('scroll', checkReveal);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkReveal);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header /> 
      <main className="overflow-x-hidden">
        <HeroSection />

        {/* <Calendly /> */}

  <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Book a Meeting</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a convenient time slot from my calendar. I&apos;m available for consultations, discussions, or any
            questions you might have.
          </p>
        </div>

        <Calendly />
      </div>
    </div>

        
        <TestimonialsSection />
        <ExpertiseSection />
        <ExpertSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
