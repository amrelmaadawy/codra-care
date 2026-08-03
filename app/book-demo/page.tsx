import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import BookDemoForm from '@/components/forms/BookDemoForm';

export const metadata: Metadata = {
  title: 'احجز عرضاً توضيحياً | Codra Care',
  description: 'احجز موعداً لعرض توضيحي مجاني لنظام Codra Care وتعرف على كيف يمكننا مساعدة عيادتك.',
};

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-neutral pt-32 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Content Side */}
          <div className="flex-1 bg-primary p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
            <div className="relative z-10">
              <h1 className="text-3xl lg:text-4xl font-extrabold mb-6">
                اكتشف كيف يمكن لـ Codra Care تحويل عيادتك
              </h1>
              <p className="text-white/80 leading-relaxed mb-10">
                دعنا نأخذك في جولة مخصصة داخل النظام لنستعرض معاً كيف يمكن لأدواتنا أن توفر وقتك، تزيد من كفاءة فريقك، وترفع من مستوى رضا مرضاك.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">جلسة مخصصة لك</h4>
                    <p className="text-white/60 text-sm">سنركز على احتياجات تخصصك الدقيقة.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">إجابة على كل أسئلتك</h4>
                    <p className="text-white/60 text-sm">فريق خبرائنا جاهز للرد على أي استفسار تقني أو طبي.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">مجاناً وبدون التزام</h4>
                    <p className="text-white/60 text-sm">العرض التوضيحي مجاني بالكامل ولا يلزمك بالاشتراك.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className="flex-1 p-10 lg:p-16">
            <h2 className="text-2xl font-bold text-primary mb-2">احجز موعدك الآن</h2>
            <p className="text-foreground/60 mb-8">يرجى ملء البيانات أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت.</p>
            
            <BookDemoForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
