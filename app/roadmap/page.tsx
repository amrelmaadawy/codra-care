import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'خريطة الطريق | Codra Care',
  description: 'الميزات التي نعمل عليها حالياً وما سنطلقه قريباً.',
};

export default function Page() {
  return (
    <SimplePageLayout title="خريطة الطريق" description="الميزات التي نعمل عليها حالياً وما سنطلقه قريباً.">
      <h2 className="text-2xl font-bold text-primary mb-4">القادم قريباً</h2>
      <p>نحن في تطوير مستمر.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
