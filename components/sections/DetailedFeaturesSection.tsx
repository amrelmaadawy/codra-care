import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { getZigZagFeatures } from '@/content/features';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function DetailedFeaturesSection() {
  const features = getZigZagFeatures();

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-neutral-dark/10">
      <Container>
        <SectionHeading 
          title="مميزات نظام Codra Care" 
          description="كل ما تحتاجه لإدارة عيادتك بكفاءة، مصمم بأحدث التقنيات ليوفر وقتك وجهدك."
          centered 
        />
        
        <div className="mt-20 space-y-32">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            const zigZagData = feature.zigzag;
            
            if (!zigZagData) return null;

            return (
              <div key={feature.slug} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm">
                    <span>{feature.title}</span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                    {zigZagData.title}
                </h3>
                  
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                    {zigZagData.description}
                  </p>
                  
                  <ul className="space-y-4">
                    {zigZagData.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4">
                    <Link href={`/features/${feature.slug}`}>
                      <Button variant="outline" className="gap-2 px-6">
                        <span>اكتشف المزيد عن {feature.title}</span>
                        <ArrowLeft className="w-4 h-4 -scale-x-100 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image/Mockup Side */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl bg-neutral-dark/5 border border-neutral-dark/20 shadow-sm overflow-hidden flex items-center justify-center group">
                    {/* Placeholder */}
                    <div className="text-center p-8 z-10">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-bold text-xl">{index + 1}</span>
                      </div>
                      <p className="text-foreground/50 font-medium">[صورة واجهة {feature.title}]</p>
                      <p className="text-xs text-foreground/40 mt-2">سيتم استبدالها بصورة حقيقية للنظام</p>
                    </div>
                    
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-tr-[100px] transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
