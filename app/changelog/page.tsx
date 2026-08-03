import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'التحديثات | Codra Care',
  description: 'سجل التغييرات والميزات الجديدة التي نضيفها للنظام.',
};

export default function Page() {
  return (
    <SimplePageLayout title="التحديثات" description="سجل التغييرات والميزات الجديدة التي نضيفها للنظام.">
      <h2 className="text-2xl font-bold text-primary mb-4">ما الجديد؟</h2>
      <p>تابع أحدث إضافات وتحسينات Codra Care.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
