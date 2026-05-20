import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Stay', path: '/stay' },
  { name: 'Café', path: '/cafe' },
  { name: 'Experiences', path: '/experiences' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled ? "py-4 glass-panel" : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-gutter flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-display-lg text-primary text-3xl md:text-4xl hover:text-lantern-glow transition-colors">
            Vedara
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-label-caps uppercase tracking-widest transition-colors hover:text-primary-container",
                  location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden md:block text-label-caps uppercase tracking-widest text-on-surface hover:text-primary transition-colors">
              Login
            </Link>
            <Button size="sm" className="hidden md:flex">Book Now</Button>
            
            <button 
              className="md:hidden text-on-surface p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <ThemeToggle className="top-24 md:top-32" />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 glass-panel flex flex-col justify-center items-center">
          <button 
            className="absolute top-6 right-gutter text-on-surface p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-display-lg-mobile text-primary hover:text-lantern-glow transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-headline-md text-on-surface-variant mt-8"
            >
              Login Portal
            </Link>
            <Button className="mt-8" onClick={() => setMobileMenuOpen(false)}>
              Book Your Stay
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
