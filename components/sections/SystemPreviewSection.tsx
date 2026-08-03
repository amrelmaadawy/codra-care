"use client";

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Users, Calendar, FileText, Activity, Package } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  dashboard: LayoutDashboard,
  patients: Users,
  calendar: Calendar,
  invoices: FileText,
  emr: Activity,
  inventory: Package,
};

export default function SystemPreviewSection() {
  const { title, description, tabs } = homeContent.preview;
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 bg-neutral border-y border-neutral-dark/20 overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />

        {/* Tabs Navigation */}
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = iconMap[tab.id];
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap",
                  isActive 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-foreground/70 hover:bg-white/80 hover:text-primary border border-neutral-dark/20"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Mockup Preview Area */}
        <div className="relative mx-auto max-w-5xl rounded-2xl border border-neutral-dark/30 bg-white shadow-card aspect-[16/10] md:aspect-[16/9] overflow-hidden flex items-center justify-center p-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = iconMap[tab.id];
            
            return (
              <div 
                key={tab.id}
                className={cn(
                  "absolute inset-0 p-8 flex flex-col transition-all duration-500 ease-in-out",
                  isActive ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-8 z-0 pointer-events-none"
                )}
              >
                {/* Fake App Header */}
                <div className="flex items-center justify-between border-b border-neutral-dark/20 pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {Icon && <Icon className="w-5 h-5 text-primary" />}
                    </div>
                    <h3 className="text-2xl font-bold text-primary">{tab.label}</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-dark/20" />
                    <div className="w-8 h-8 rounded-full bg-neutral-dark/20" />
                  </div>
                </div>

                {/* Fake App Content based on Tab */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 rounded-xl bg-neutral/50 border border-neutral-dark/20 p-6">
                    <div className="h-6 w-1/3 bg-neutral-dark/30 rounded mb-6" />
                    <div className="space-y-4">
                      <div className="h-4 w-full bg-neutral-dark/20 rounded" />
                      <div className="h-4 w-full bg-neutral-dark/20 rounded" />
                      <div className="h-4 w-3/4 bg-neutral-dark/20 rounded" />
                    </div>
                  </div>
                  <div className="rounded-xl bg-neutral/50 border border-neutral-dark/20 p-6 flex flex-col gap-4">
                     <div className="h-24 w-full bg-primary/10 rounded-lg border border-primary/20" />
                     <div className="h-24 w-full bg-accent/10 rounded-lg border border-accent/20" />
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
