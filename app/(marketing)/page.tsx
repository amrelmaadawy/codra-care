import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import SystemPreviewSection from '@/components/sections/SystemPreviewSection';
import AiSection from '@/components/sections/AiSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import DetailedFeaturesSection from '@/components/sections/DetailedFeaturesSection';
import AnalyticsSection from '@/components/sections/AnalyticsSection';
import MobileAppSection from '@/components/sections/MobileAppSection';
import IntegrationsSection from '@/components/sections/IntegrationsSection';
import SecuritySection from '@/components/sections/SecuritySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import { FadeIn } from '@/components/ui/FadeIn';
import Script from 'next/script';

export const metadata = {
  title: 'Codra Care - إدارة عيادتك بسهولة',
  description: 'نظام متكامل لإدارة العيادات الطبية، المواعيد، والسجلات المرضية بكفاءة عالية.',
};

export default function MarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codra Care",
    "url": "https://codracare.com",
    "logo": "https://codracare.com/logo.png",
    "sameAs": [
      "https://twitter.com/codracare",
      "https://linkedin.com/company/codracare"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "هل يوجد تطبيق للهواتف الذكية؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نوفر تطبيقات مخصصة للأطباء، المرضى، وموظفي الاستقبال متوافقة مع أنظمة iOS و Android."
        }
      },
      {
        "@type": "Question",
        "name": "هل يتم أخذ نسخ احتياطية للبيانات؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقوم بعمل نسخ احتياطي تلقائي ومشفّر يومياً لضمان عدم ضياع أي بيانات."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col">
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
      <FadeIn delay={0}>
        <HeroSection />
      </FadeIn>
      <FadeIn delay={100}>
        <SocialProofSection />
      </FadeIn>
      <FadeIn>
        <FeaturesSection />
      </FadeIn>
      <FadeIn>
        <SystemPreviewSection />
      </FadeIn>
      <FadeIn>
        <AiSection />
      </FadeIn>
      <FadeIn>
        <WorkflowSection />
      </FadeIn>
      <FadeIn>
        <SolutionsSection />
      </FadeIn>
      <FadeIn>
        <DetailedFeaturesSection />
      </FadeIn>
      <FadeIn>
        <AnalyticsSection />
      </FadeIn>
      <FadeIn>
        <MobileAppSection />
      </FadeIn>
      <FadeIn>
        <IntegrationsSection />
      </FadeIn>
      <FadeIn>
        <SecuritySection />
      </FadeIn>
      <FadeIn>
        <TestimonialsSection />
      </FadeIn>
      <FadeIn>
        <PricingSection />
      </FadeIn>
      <FadeIn>
        <FaqSection />
      </FadeIn>
      <FadeIn>
        <CtaSection />
      </FadeIn>
    </div>
  );
}
