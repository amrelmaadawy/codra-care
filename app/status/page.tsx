import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'حالة النظام | Codra Care',
  description: 'حالة خوادم وخدمات Codra Care لحظة بلحظة.',
};

export default function Page() {
  return (
    <SimplePageLayout title="حالة النظام" description="حالة خوادم وخدمات Codra Care لحظة بلحظة.">
      <h2 className="text-2xl font-bold text-primary mb-4">جميع الأنظمة تعمل</h2>
      <p>Uptime 99.9%</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
