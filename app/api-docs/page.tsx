import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'توثيق الـ API | Codra Care',
  description: 'تفاصيل الربط البرمجي للمطورين.',
};

export default function Page() {
  return (
    <SimplePageLayout title="توثيق الـ API" description="تفاصيل الربط البرمجي للمطورين.">
      <h2 className="text-2xl font-bold text-primary mb-4">مقدمة للـ API</h2>
      <p>يوفر Codra Care واجهة برمجية RESTful.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
