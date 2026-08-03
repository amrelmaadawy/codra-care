import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { PlusCircle, Users, Settings, CalendarCheck, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  PlusCircle,
  Users,
  Settings,
  CalendarCheck,
  TrendingUp
};

export default function WorkflowSection() {
  const { title, description, steps } = homeContent.workflow;

  return (
    <section className="py-24 bg-neutral overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-neutral-dark/40" />
          
          {/* Vertical Line for Mobile */}
          <div className="block lg:hidden absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0.5 bg-neutral-dark/40" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div key={step.id} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-white border border-neutral-dark/20 shadow-sm flex items-center justify-center mb-6 relative group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                    {Icon && <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
