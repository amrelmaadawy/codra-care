import React from 'react';
import Link from 'next/link';
import { Stethoscope, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
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
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
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
