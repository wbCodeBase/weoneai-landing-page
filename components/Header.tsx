// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { MessageSquare } from 'lucide-react';
// import Link from 'next/link';

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`py-4 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-md' : ''}`}>
//       <div className="container mx-auto px-6 md:px-8 max-w-[1280px] flex justify-between items-center">

//         {/* <Logo /> */}
//         <Link href="/" className="flex items-center gap-2">
//           <span className="md:text-4xl text-3xl font-bold tracking-tight text-gray-900 flex gap-5">
//             <div> WeOne<span className="text-blue-500">AI</span> </div>
//           </span>
//         </Link>

//         <Link href="/">

//           <Button
//             variant="default"
//             className="px-5 sm:px-6 py-6 cursor-pointer bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm md:text-base btn-cta group w-full"
//           >
//             <span className="flex items-center justify-center gap-3 btn-content">
//               <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
//               <span className="whitespace-nowrap text-lg tracking-wide">Let&apos;s Talk</span>
//             </span>
//           </Button>


//         </Link>


//       </div>
//     </header>
//   );
// }




'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`py-4 fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 max-w-[1280px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="md:text-4xl text-3xl font-bold tracking-tight text-gray-900 flex gap-5">
            <div>
              WeOne<span className="text-blue-500">AI</span>
            </div>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button
              variant="default"
              className="px-5 sm:px-6 py-6 bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm md:text-base cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span className="whitespace-nowrap text-lg tracking-wide">Let&apos;s Talk</span>
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4 px-6 space-y-4">
          <Link href="/" className="block text-gray-800 hover:text-blue-500" onClick={toggleMenu}>Home</Link>
          <Link href="/services" className="block text-gray-800 hover:text-blue-500" onClick={toggleMenu}>Services</Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-500" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="block text-gray-800 hover:text-blue-500" onClick={toggleMenu}>Contact</Link>
          <Link href="/contact" onClick={toggleMenu}>
            <Button
              variant="default"
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Let&apos;s Talk
              </span>
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
