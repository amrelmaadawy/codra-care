import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { 
  Lock, ShieldAlert, FileKey, CloudUpload, Server, 
  ShieldCheck, Globe, SmartphoneNfc, Activity, Database 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Lock, ShieldAlert, FileKey, CloudUpload, Server, 
  CheckShield: ShieldCheck, GlobeLock: Globe, SmartphoneNfc, Activity, Database
};

export default function SecuritySection() {
  const { title, description, features } = homeContent.security;

  return (
    <section className="py-24 bg-neutral border-y border-neutral-dark/10 overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Lock;
            
            return (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-neutral-dark/10 bg-white hover:border-accent/30 hover:shadow-card transition-all duration-300 flex flex-col gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-dark/5 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-bold text-primary mt-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
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
