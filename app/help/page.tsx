import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'مركز المساعدة | Codra Care',
  description: 'ابحث عن شروحات، أدلة استخدام، وإجابات على أسئلتك.',
};

export default function Page() {
  return (
    <SimplePageLayout title="مركز المساعدة" description="ابحث عن شروحات، أدلة استخدام، وإجابات على أسئلتك.">
      <h2 className="text-2xl font-bold text-primary mb-4">كيف يمكننا مساعدتك؟</h2>
      <p>اكتب سؤالك في شريط البحث وسنساعدك في إيجاد الحل.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
