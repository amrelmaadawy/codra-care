import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { Smartphone } from 'lucide-react';

export default function MobileAppSection() {
  const { title, description, apps } = homeContent.mobileApp;

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-5xl mx-auto">
          {apps.map((app, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Phone Mockup */}
              <div className="relative w-64 h-[500px] bg-[#0f172a] rounded-[3rem] border-[8px] border-[#1e293b] shadow-2xl mb-8 overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-6 bg-[#1e293b] rounded-b-3xl w-1/2 mx-auto z-20" />
                <div className="absolute inset-0 bg-neutral flex flex-col items-center justify-center p-6 text-primary">
                  <Smartphone className="w-12 h-12 mb-4 text-accent" />
                  <p className="font-bold text-lg text-center opacity-50">[شاشة {app.title}]</p>
                  <p className="text-sm mt-2 opacity-50">{app.mock}</p>
                </div>
                {/* Decorative glow on hover */}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
              <p className="text-white/70 leading-relaxed max-w-[250px]">{app.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
