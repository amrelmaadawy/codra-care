import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'المدونة | Codra Care',
  description: 'أحدث الأخبار، المقالات الطبية، وتحديثات النظام.',
};

export default function Page() {
  return (
    <SimplePageLayout title="المدونة" description="أحدث الأخبار، المقالات الطبية، وتحديثات النظام.">
      <h2 className="text-2xl font-bold text-primary mb-4">أحدث المقالات</h2>
      <p>استكشف أفكاراً ونصائح لإدارة عيادتك.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
