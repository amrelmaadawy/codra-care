import React from 'react';
import Link from 'next/link';
import { Stethoscope } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const footerLinks = {
  product: [
    { name: 'المميزات', href: '#features' },
    { name: 'الحلول', href: '#solutions' },
    { name: 'الأسعار', href: '#pricing' },
    { name: 'واجهة برمجة التطبيقات (API)', href: '#api' },
  ],
  resources: [
    { name: 'التوثيق (Docs)', href: '#docs' },
    { name: 'المدونة', href: '#blog' },
    { name: 'الدعم الفني', href: '#support' },
  ],
  company: [
    { name: 'عن الشركة', href: '#about' },
    { name: 'شروط الاستخدام', href: '#terms' },
    { name: 'سياسة الخصوصية', href: '#privacy' },
  ],
};

const socialLinks = [
  { 
    name: 'Twitter', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: '#', 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral py-20 border-t border-neutral-dark/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Social */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Stethoscope className="h-8 w-8 text-primary" />
              <span className="text-3xl font-bold text-primary tracking-tight">ClinicFlow</span>
            </Link>
            <p className="text-lg text-foreground/70 max-w-sm">
              نظام متكامل لإدارة العيادات الطبية بكفاءة عالية، مما يتيح لك التفرغ التام لرعاية مرضاك.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-white border border-neutral-dark/30 text-foreground/70 hover:text-primary hover:border-primary transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-primary">المنتج</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-primary">المصادر</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-primary">الشركة</h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-neutral-dark/20 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} ClinicFlow. جميع الحقوق محفوظة.</p>
        </div>
      </Container>
    </footer>
  );
}
