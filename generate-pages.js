const fs = require('fs');
const path = require('path');

const pages = [
  { route: 'about', title: 'من نحن', desc: 'تعرف على فريق Codra Care ورؤيتنا في تحويل الرعاية الصحية إلى تجربة سلسة.', heading: 'قصتنا', content: 'نحن نبني مستقبل الرعاية الصحية.' },
  { route: 'contact', title: 'اتصل بنا', desc: 'فريقنا جاهز للإجابة على استفساراتك وتقديم الدعم في أي وقت.', heading: 'تواصل معنا', content: 'يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف.' },
  { route: 'help', title: 'مركز المساعدة', desc: 'ابحث عن شروحات، أدلة استخدام، وإجابات على أسئلتك.', heading: 'كيف يمكننا مساعدتك؟', content: 'اكتب سؤالك في شريط البحث وسنساعدك في إيجاد الحل.' },
  { route: 'docs', title: 'التوثيق', desc: 'أدلة شاملة لكل ميزات النظام وكيفية استخدامها باحترافية.', heading: 'أدلة الاستخدام', content: 'مرحباً بك في دليل مستخدمي Codra Care.' },
  { route: 'api-docs', title: 'توثيق الـ API', desc: 'تفاصيل الربط البرمجي للمطورين.', heading: 'مقدمة للـ API', content: 'يوفر Codra Care واجهة برمجية RESTful.' },
  { route: 'blog', title: 'المدونة', desc: 'أحدث الأخبار، المقالات الطبية، وتحديثات النظام.', heading: 'أحدث المقالات', content: 'استكشف أفكاراً ونصائح لإدارة عيادتك.' },
  { route: 'blog/[slug]', title: 'مقال تفصيلي', desc: 'قراءة ممتعة لمقالنا الجديد.', heading: 'تفاصيل المقال', content: 'محتوى المقال التوضيحي يعرض هنا.' },
  { route: 'changelog', title: 'التحديثات', desc: 'سجل التغييرات والميزات الجديدة التي نضيفها للنظام.', heading: 'ما الجديد؟', content: 'تابع أحدث إضافات وتحسينات Codra Care.' },
  { route: 'roadmap', title: 'خريطة الطريق', desc: 'الميزات التي نعمل عليها حالياً وما سنطلقه قريباً.', heading: 'القادم قريباً', content: 'نحن في تطوير مستمر.' },
  { route: 'status', title: 'حالة النظام', desc: 'حالة خوادم وخدمات Codra Care لحظة بلحظة.', heading: 'جميع الأنظمة تعمل', content: 'Uptime 99.9%' },
];

pages.forEach(p => {
  const dir = path.join(__dirname, 'app', p.route);
  fs.mkdirSync(dir, { recursive: true });
  const code = `import React from 'react';
import { Metadata } from 'next';
import SimplePageLayout from '@/components/layout/SimplePageLayout';

export const metadata: Metadata = {
  title: '${p.title} | Codra Care',
  description: '${p.desc}',
};

export default function Page() {
  return (
    <SimplePageLayout title="${p.title}" description="${p.desc}">
      <h2 className="text-2xl font-bold text-primary mb-4">${p.heading}</h2>
      <p>${p.content}</p>
      <div className="h-64 bg-neutral mt-8 rounded-2xl flex items-center justify-center text-neutral-dark/40 border border-neutral-dark/10">
        محتوى تجريبي (Placeholder)
      </div>
    </SimplePageLayout>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.tsx'), code);
});

// Pricing is special, uses PricingSection
const pricingDir = path.join(__dirname, 'app', 'pricing');
fs.mkdirSync(pricingDir, { recursive: true });
fs.writeFileSync(path.join(pricingDir, 'page.tsx'), `import React from 'react';
import { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'الأسعار | Codra Care',
  description: 'خطط أسعار تناسب حجم عيادتك.',
};

export default function PricingPage() {
  return (
    <div className="pt-32">
      <PricingSection />
      <CtaSection />
    </div>
  );
}
`);

console.log('Pages generated successfully!');
