import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { solutionsData } from '@/content/solutions';
import { 
  Stethoscope, ShieldPlus, Dog, BrainCircuit, ActivitySquare, Sparkles, Baby, HeartPulse, Building2, ArrowLeft 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, ShieldPlus, Dog, BrainCircuit, ActivitySquare, Sparkles, Baby, HeartPulse, Building2
};

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <SectionHeading 
          title="حلول مخصصة لكل تخصص طبي" 
          description="نحن ندرك أن كل تخصص طبي له احتياجاته الفريدة، لذلك صممنا نظامنا ليتكيف مع طبيعة عملك."
          centered 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {solutionsData.map((solution) => {
            const Icon = iconMap[solution.icon];
            
            return (
              <Link 
                href={`/solutions/${solution.slug}`} 
                key={solution.slug}
                className="group block p-8 rounded-2xl border border-neutral-dark/20 bg-neutral/50 hover:bg-white hover:border-accent/30 transition-all duration-300 hover:shadow-card"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-neutral-dark/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  {Icon && <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />}
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-sm text-foreground/70 leading-relaxed mb-6 h-10 line-clamp-2">
                  {solution.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  <span>اكتشف المزيد</span>
                  <ArrowLeft className="w-4 h-4 -scale-x-100 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
