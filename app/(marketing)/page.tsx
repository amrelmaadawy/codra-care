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

export const metadata = {
  title: 'Codra Care - إدارة عيادتك بسهولة',
  description: 'نظام متكامل لإدارة العيادات الطبية، المواعيد، والسجلات المرضية بكفاءة عالية.',
};

export default function MarketingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <SystemPreviewSection />
      <AiSection />
      <WorkflowSection />
      <SolutionsSection />
      <DetailedFeaturesSection />
      <AnalyticsSection />
      <MobileAppSection />
      <IntegrationsSection />
      <SecuritySection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
