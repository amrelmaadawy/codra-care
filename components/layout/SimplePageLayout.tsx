import React from 'react';
import { Container } from '@/components/ui/Container';

interface SimplePageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function SimplePageLayout({ title, description, children }: SimplePageLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral pt-24 pb-24">
      {/* Hero */}
      <section className="relative pt-16 pb-24 overflow-hidden bg-primary text-white rounded-b-[3rem] mx-4 lg:mx-8">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-bl-[100px] z-0" />
        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">{description}</p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 -mt-16 relative z-20">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-neutral-dark/10 p-8 md:p-16">
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              {children}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
