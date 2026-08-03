import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import SystemPreviewSection from '@/components/sections/SystemPreviewSection';
import AiSection from '@/components/sections/AiSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import SolutionsSection from '@/components/sections/SolutionsSection';

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
      {/* TODO: Add TestimonialsSection, PricingSection */}
    </div>
  );
}
