import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: 'اتصل بنا | Codra Care',
  description: 'فريقنا جاهز للإجابة على استفساراتك وتقديم الدعم في أي وقت.',
};

export default function Page() {
  return (
    <SimplePageLayout title="اتصل بنا" description="فريقنا جاهز للإجابة على استفساراتك وتقديم الدعم في أي وقت.">
      <h2 className="text-2xl font-bold text-primary mb-4">تواصل معنا</h2>
      <p>يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف.</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
