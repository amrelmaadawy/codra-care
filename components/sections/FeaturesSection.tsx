import React from 'react';
import { Calendar, FileText, CreditCard, Package, TestTube, Activity, Pill, Smartphone, Globe, Video, Bot, BarChart3 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  FileText,
  CreditCard,
  Package,
  TestTube,
  Activity,
  Pill,
  Smartphone,
  Globe,
  Video,
  Bot,
  BarChart3,
};

export default function FeaturesSection() {
  const { title, description, items } = homeContent.features;

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading title={title} description={description} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={feature.id} 
                className="group p-6 rounded-2xl border border-neutral-dark/20 bg-neutral hover:bg-white transition-colors duration-300 hover:shadow-soft"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-neutral-dark/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
