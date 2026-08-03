import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { getFeatureBySlug, featuresData } from '@/content/features';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

interface FeaturePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return featuresData.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const feature = getFeatureBySlug(resolvedParams.slug);
  
  if (!feature) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${feature.title} | Codra Care`,
    description: feature.page.hero.description,
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const resolvedParams = await params;
  const feature = getFeatureBySlug(resolvedParams.slug);
  
  if (!feature) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-neutral">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-bl-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <span>المميزات التفصيلية</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl leading-tight">
              {feature.page.hero.title}
            </h1>
            <p className="mb-10 text-lg text-foreground/70 sm:text-xl leading-relaxed max-w-2xl">
              {feature.page.hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/book-demo">
                <Button className="px-8 py-4 text-base">ابدأ تجربتك المجانية</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Details Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">اكتشف الإمكانيات الكاملة لـ {feature.title}</h2>
            <p className="text-foreground/70">
              صممنا هذه الميزة بعناية فائقة لتغطي كافة التفاصيل التي تحتاجها لإدارة سلسة وناجحة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feature.page.details.map((detail, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-neutral-dark/20 bg-neutral/50">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{detail.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{detail.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
