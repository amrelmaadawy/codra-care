import HeroSection from '@/components/sections/HeroSection';

export const metadata = {
  title: 'ClinicFlow - إدارة عيادتك بسهولة',
  description: 'نظام متكامل لإدارة العيادات الطبية، المواعيد، والسجلات المرضية بكفاءة عالية.',
};

export default function MarketingPage() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      {/* TODO: Add FeaturesSection, TestimonialsSection, PricingSection */}
    </div>
  );
}
