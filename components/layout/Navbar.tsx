"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Stethoscope, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navLinks = [
  { name: 'المميزات', href: '/#features' },
  { name: 'الحلول', href: '/#solutions' },
  { name: 'الأسعار', href: '/pricing' },
  { name: 'التوثيق', href: '/docs' },
  { name: 'المدونة', href: '/blog' },
  { name: 'عن الشركة', href: '/about' },
  { name: 'تواصل معنا', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight">Codra Care</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              تسجيل الدخول
            </Link>
            <Link href="/book-demo">
              <Button variant="primary">
                ابدأ تجربتك المجانية
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Fullscreen Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ease-in-out lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-neutral-dark/30">
            <Link 
              href="/login" 
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              تسجيل الدخول
            </Link>
            <Link href="/book-demo" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full text-lg py-4 mt-2">
                ابدأ تجربتك المجانية
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
