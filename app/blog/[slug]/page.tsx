import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'مقال تفصيلي | Codra Care',
  description: 'قراءة ممتعة لمقالنا الجديد.',
};

export default function Page() {
  return (
    <SimplePageLayout title="مقال تفصيلي" description="قراءة ممتعة لمقالنا الجديد.">
      <h2 className="text-2xl font-bold text-primary mb-4">تفاصيل المقال</h2>
      <p>محتوى المقال التوضيحي يعرض هنا.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
