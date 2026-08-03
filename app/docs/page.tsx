import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'التوثيق | Codra Care',
  description: 'أدلة شاملة لكل ميزات النظام وكيفية استخدامها باحترافية.',
};

export default function Page() {
  return (
    <SimplePageLayout title="التوثيق" description="أدلة شاملة لكل ميزات النظام وكيفية استخدامها باحترافية.">
      <h2 className="text-2xl font-bold text-primary mb-4">أدلة الاستخدام</h2>
      <p>مرحباً بك في دليل مستخدمي Codra Care.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
