import React from 'react';
import { Container } from '@/components/ui/Container';
import { homeContent } from '@/content/home';

export default function SocialProofSection() {
  const { stats } = homeContent.socialProof;

  return (
    <section className="border-y border-neutral-dark/30 bg-neutral py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-2">
              <p className="text-4xl font-extrabold text-primary">
                {/* PLACEHOLDER: Remove when connected to live data */}
                {stat.value}
              </p>
              <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
