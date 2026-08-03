import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';

export const metadata = {
  title: 'ClinicFlow - إدارة عيادتك بسهولة',
  description: 'نظام متكامل لإدارة العيادات الطبية، المواعيد، والسجلات المرضية بكفاءة عالية.',
};

export default function MarketingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SocialProofSection />
      {/* TODO: Add FeaturesSection, TestimonialsSection, PricingSection */}
    </div>
  );
}
