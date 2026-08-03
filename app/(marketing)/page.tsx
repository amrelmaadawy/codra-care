import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import SystemPreviewSection from '@/components/sections/SystemPreviewSection';
import AiSection from '@/components/sections/AiSection';
import WorkflowSection from '@/components/sections/WorkflowSection';

export const metadata = {
  title: 'ClinicFlow - إدارة عيادتك بسهولة',
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
      {/* TODO: Add TestimonialsSection, PricingSection */}
    </div>
  );
}
