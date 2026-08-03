import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { Network } from 'lucide-react';

export default function IntegrationsSection() {
  const { title, description, items } = homeContent.integrations;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-neutral-dark/10 bg-neutral/30 hover:bg-white hover:border-accent/30 hover:shadow-card transition-all duration-300 flex flex-col items-center justify-center gap-3 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-dark/10 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-6 h-6 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-semibold text-primary">{item.name}</span>
              </div>
            ))}
            
            {/* More Coming Soon */}
            <div className="p-6 rounded-2xl border border-dashed border-neutral-dark/30 bg-neutral/10 flex items-center justify-center col-span-2 md:col-span-1">
              <span className="text-foreground/50 font-medium text-sm text-center">والمزيد قريباً...</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
