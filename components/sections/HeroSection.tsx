import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
            إدارة عيادتك أصبحت <span className="text-primary">أسهل من أي وقت مضى</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/70 sm:text-xl">
            نظام متكامل لإدارة العيادات، المواعيد، والسجلات الطبية. مصمم خصيصاً لتسهيل عمل الأطباء وتحسين تجربة المرضى.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-medium text-white transition-all hover:bg-primary/90 hover:scale-105 sm:w-auto"
            >
              ابدأ تجربتك المجانية
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="flex h-14 w-full items-center justify-center rounded-full border border-neutral/20 bg-background px-8 text-lg font-medium text-foreground transition-all hover:bg-neutral/50 sm:w-auto"
            >
              اكتشف المميزات
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
