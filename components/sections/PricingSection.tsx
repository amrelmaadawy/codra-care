import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { Check, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PricingSection() {
  const { title, description, plans, comparison } = homeContent.pricing;

  return (
    <section className="py-24 bg-neutral border-y border-neutral-dark/10 overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-3xl p-8 ${
                plan.featured 
                  ? 'bg-primary text-white shadow-2xl scale-100 lg:scale-105 border-none' 
                  : 'bg-white text-foreground border border-neutral-dark/20'
              } flex flex-col`}
            >
              <h3 className={`text-xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-primary'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.featured ? 'text-white/70' : 'text-foreground/70'}`}>
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-4xl font-extrabold ${plan.featured ? 'text-white' : 'text-primary'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.featured ? 'text-white/60' : 'text-foreground/50'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.featured ? 'text-accent' : 'text-primary'}`} />
                    <span className={plan.featured ? 'text-white/90' : 'text-foreground/80'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/book-demo" className="w-full">
                <Button 
                  variant={plan.featured ? 'secondary' : 'outline'} 
                  className={`w-full py-6 rounded-xl ${
                    plan.featured 
                      ? '' 
                      : 'border-neutral-dark/20 hover:bg-neutral'
                  }`}
                >
                  {plan.button}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24 max-w-4xl mx-auto overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            <h4 className="text-2xl font-bold text-primary text-center mb-8">{comparison.title}</h4>
            <div className="bg-white rounded-2xl border border-neutral-dark/20 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="grid grid-cols-4 bg-neutral-dark/5 p-4 border-b border-neutral-dark/10 font-bold text-primary">
                <div className="col-span-1">الميزة</div>
                <div className="text-center">الأساسية</div>
                <div className="text-center">الاحترافية</div>
                <div className="text-center">المؤسسات</div>
              </div>
              {/* Rows */}
              {comparison.features.map((feature, idx) => (
                <div key={idx} className="grid grid-cols-4 p-4 border-b border-neutral-dark/5 hover:bg-neutral-dark/5 transition-colors items-center">
                  <div className="col-span-1 text-foreground/80 font-medium">{feature.name}</div>
                  <div className="flex justify-center">
                    {feature.starter ? <Check className="w-5 h-5 text-accent" /> : <span className="text-neutral-dark/40">-</span>}
                  </div>
                  <div className="flex justify-center">
                    {feature.pro ? <Check className="w-5 h-5 text-accent" /> : <span className="text-neutral-dark/40">-</span>}
                  </div>
                  <div className="flex justify-center">
                    {feature.enterprise ? <Check className="w-5 h-5 text-accent" /> : <span className="text-neutral-dark/40">-</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
