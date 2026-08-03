import React from 'react';
import { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'الأسعار | Codra Care',
  description: 'خطط أسعار تناسب حجم عيادتك.',
};

export default function PricingPage() {
  return (
    <div className="pt-32">
      <PricingSection />
      <CtaSection />
    </div>
  );
}
