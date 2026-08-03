import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getSolutionBySlug, solutionsData } from '@/content/solutions';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all 9 specialties
export function generateStaticParams() {
  return solutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

// Generate independent metadata for SEO
export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const solution = getSolutionBySlug(resolvedParams.slug);
  
  if (!solution) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${solution.title} | Codra Care`,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const resolvedParams = await params;
  const solution = getSolutionBySlug(resolvedParams.slug);
  
  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section Specific to the specialty */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-neutral">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-bl-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <span>الحلول المتخصصة</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl leading-tight">
              {solution.hero.title}
            </h1>
            <p className="mb-10 text-lg text-foreground/70 sm:text-xl leading-relaxed max-w-2xl">
              {solution.hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button className="px-8 py-4 text-base">ابدأ تجربتك المجانية</Button>
              <Button variant="outline" className="px-8 py-4 text-base bg-transparent">احجز عرضاً توضيحياً</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Relevant Features Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">لماذا تختار Codra Care لـ {solution.title}؟</h2>
            <p className="text-foreground/70">
              قمنا ببناء أدوات مخصصة تناسب متطلبات تخصصك الدقيقة لضمان أقصى درجات الكفاءة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-neutral-dark/20 bg-neutral/50">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">جاهز للارتقاء بـ {solution.title}؟</h2>
            <p className="text-white/80 mb-10 text-lg">
              انضم إلى مئات الأطباء الذين يثقون في منصتنا لإدارة عياداتهم بكفاءة.
            </p>
            <Button className="px-10 py-4 text-base text-primary bg-white hover:bg-neutral-dark border-transparent">
              احجز عرضاً توضيحياً
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
