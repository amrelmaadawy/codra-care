import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { homeContent } from '@/content/home';
import { BarChart3, TrendingUp, Users, Calendar, AlertCircle, DollarSign, CreditCard } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  "إيرادات اليوم": DollarSign,
  "المواعيد": Calendar,
  "الملغاة": AlertCircle,
  "أداء الأطباء": Users,
  "تنبيهات المخزون": AlertCircle,
  "الأرباح": TrendingUp,
  "المصروفات": CreditCard,
};

export default function AnalyticsSection() {
  const { title, description, kpis } = homeContent.analytics;

  return (
    <section className="py-24 bg-neutral border-y border-neutral-dark/10 overflow-hidden">
      <Container>
        <SectionHeading title={title} description={description} centered />
        
        {/* Mock Dashboard */}
        <div className="mt-16 bg-white rounded-3xl border border-neutral-dark/20 shadow-xl overflow-hidden p-6 lg:p-10 max-w-6xl mx-auto">
          {/* Top Bar Mock */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-dark/10">
            <h4 className="text-xl font-bold text-primary">نظرة عامة على الأداء</h4>
            <div className="flex gap-2">
              <div className="h-8 w-24 bg-neutral rounded-md" />
              <div className="h-8 w-8 bg-neutral rounded-md" />
            </div>
          </div>
          
          {/* KPI Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {kpis.map((kpi, idx) => {
              const Icon = iconMap[kpi.label] || BarChart3;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-neutral-dark/5 border border-neutral-dark/10 flex flex-col gap-3 hover:bg-neutral transition-colors">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium">{kpi.label}</span>
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-primary">
                    {kpi.value}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart Mock */}
          <div className="h-64 md:h-80 w-full bg-neutral-dark/5 rounded-2xl border border-neutral-dark/10 flex items-center justify-center relative overflow-hidden">
             {/* Simple visual representation of a chart */}
             <div className="absolute inset-0 flex items-end justify-between px-4 lg:px-8 pt-10 pb-4 gap-1 lg:gap-2 opacity-50">
               {[40, 70, 45, 90, 65, 85, 100, 60, 80, 50, 75, 95].map((h, i) => (
                 <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}>
                   <div className="w-full bg-accent/40 rounded-t-sm" style={{ height: `${h * 0.7}%` }} />
                 </div>
               ))}
             </div>
             <p className="text-foreground/50 font-medium z-10">[رسم بياني تفاعلي]</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
