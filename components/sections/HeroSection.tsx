import React from 'react';
import { ArrowLeft, CheckCircle, Calendar, Users, Activity } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { homeContent } from '@/content/home';

export default function HeroSection() {
  const { title, description, ctaPrimary, ctaSecondary } = homeContent.hero;

  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Very simple background decorative blur */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary blur-[120px]" />
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content (Right side logically due to RTL) */}
          <div className="flex-1 flex flex-col items-start text-start max-w-2xl">
            <Badge className="mb-6">Clinic Management System</Badge>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-primary leading-[1.15] sm:text-6xl lg:text-7xl">
              {title.split('One Platform')[0]} 
              <span className="text-accent block mt-2">One Platform</span>
            </h1>
            <p className="mb-10 text-lg text-foreground/70 sm:text-xl leading-relaxed max-w-xl">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
              <Button variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg group">
                {ctaPrimary}
                <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg">
                {ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Mockup / Dashboard UI (Left side logically) */}
          <div className="flex-1 w-full relative">
            {/* Fake Dashboard UI */}
            <div className="relative rounded-2xl border border-neutral-dark/30 bg-white shadow-card overflow-hidden">
              {/* Fake Header */}
              <div className="flex items-center justify-between border-b border-neutral-dark/20 px-6 py-4 bg-neutral">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="h-4 w-32 bg-neutral-dark/50 rounded" />
              </div>
              
              {/* Fake Content */}
              <div className="p-6 flex flex-col gap-6">
                {/* Top stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-neutral-dark/20 bg-neutral/50 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-semibold">Patients</span>
                    </div>
                    <span className="text-2xl font-bold">1,248</span>
                  </div>
                  <div className="p-4 rounded-xl border border-neutral-dark/20 bg-neutral/50 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-semibold">Today&apos;s Appts</span>
                    </div>
                    <span className="text-2xl font-bold">42</span>
                  </div>
                </div>

                {/* Main chart/area */}
                <div className="flex gap-6">
                  <div className="flex-1 rounded-xl border border-neutral-dark/20 p-4">
                    <div className="flex items-center gap-2 mb-4 text-primary">
                      <Activity className="w-4 h-4" />
                      <span className="text-sm font-semibold">Weekly Activity</span>
                    </div>
                    {/* Fake Chart bars */}
                    <div className="flex items-end gap-2 h-24 pt-4">
                      {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative group">
                          <div 
                            className="absolute bottom-0 w-full bg-primary rounded-t-sm transition-all duration-500"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-white shadow-soft border border-neutral-dark/20 flex items-center gap-4 z-20">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">AI Assistant</span>
                <span className="text-xs text-foreground/60">Diagnosis Ready</span>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
