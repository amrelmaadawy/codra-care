import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { homeContent } from '@/content/home';
import { Button } from '@/components/ui/Button';

export default function CtaSection() {
  const { title, description, button } = homeContent.cta;

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <Link href="/book-demo">
            <Button variant="secondary" className="px-10 py-5 text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              {button}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
