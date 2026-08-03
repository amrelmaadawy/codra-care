import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'من نحن | Codra Care',
  description: 'تعرف على فريق Codra Care ورؤيتنا في تحويل الرعاية الصحية إلى تجربة سلسة.',
};

export default function Page() {
  return (
    <SimplePageLayout title="من نحن" description="تعرف على فريق Codra Care ورؤيتنا في تحويل الرعاية الصحية إلى تجربة سلسة.">
      <h2 className="text-2xl font-bold text-primary mb-4">قصتنا</h2>
      <p>نحن نبني مستقبل الرعاية الصحية.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
