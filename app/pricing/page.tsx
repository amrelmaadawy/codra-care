import React from 'react';
import { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'الأسعار | Codra Care',
  description: 'خطط أسعار تناسب حجم عيادتك.',
};

export default function PricingPage() {
  return (
    <div className="pt-32">
      <FadeIn delay={0}>
        <PricingSection />
      </FadeIn>
      <FadeIn>
        <CtaSection />
      </FadeIn>
    </div>
  );
}
