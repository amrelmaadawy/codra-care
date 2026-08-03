<!-- BEGIN:nextjs-agent-rules -->
## CLINIC SAAS WEBSITE RULES (Next.js)

## 1. Architecture
- Next.js App Router فقط (لا Pages Router).
- بنية: `app/` للـ Routes, `components/` للـ UI, `lib/` للـ Utils/Hooks, `content/` للـ Data ثابتة (JSON/MDX), `styles/` للـ Design Tokens.
- كل Route له `page.tsx` + `loading.tsx` + `layout.tsx` عند الحاجة فقط.
- لا Business Logic داخل المكونات المرئية (Presentational Components نظيفة).
- Server Components افتراضيًا؛ Client Components فقط عند الحاجة لـ Interactivity (`"use client"`).

## 2. Development
- Feature-driven: كل Section (Hero, Features, Pricing...) مكون مستقل قابل لإعادة الاستخدام.
- إعادة استخدام Design System (Colors, Spacing, Typography, Icons) قبل إنشاء أي Style جديد.
- ممنوع تكرار المكونات (مثال: أكثر من CTA Button بتصميم مختلف).

## 3. File Structure
- `components/ui/` → Buttons, Cards, Badges, Tabs (عناصر أساسية قابلة لإعادة الاستخدام).
- `components/sections/` → HeroSection, FeaturesSection, PricingSection... إلخ.
- `components/layout/` → Navbar, Footer.
- `app/(marketing)/...` → لكل صفحة تسويقية.
- لا تدمج أكثر من Section في مكون واحد.

## 4. File Size
- Max 200 سطر لكل مكون.
- أي Section أكبر من كدا يتقسم لمكونات فرعية (مثال: `FeatureCard`, `FeatureGrid`).

## 5. Code Quality
- TypeScript إلزامي في كل مكان، بدون `any`.
- Clean, DRY, مكونات قابلة لإعادة الاستخدام (Props واضحة ومحددة الأنواع).
- لا Magic Numbers/Strings — استخدم Constants أو Design Tokens.
- لا Dead Code أو Imports غير مستخدمة.

## 6. Naming
- Component: PascalCase → `HeroSection.tsx`, `PricingCard.tsx`.
- Hook: `useSomething.ts`.
- Types: `SomethingProps`, `SomethingType`.
- Route folders: kebab-case → `app/solutions/dental-clinics/page.tsx`.

## 7. Design System (إلزامي)
- Colors من `tailwind.config` فقط: `primary` (Dark Blue), `accent` (Emerald), `neutral` (White/Gray). ممنوع Hex Codes داخل المكونات.
- Typography: Font واحد حديث (مثل Inter / Geist) بأوزان محددة (400/500/600/700) فقط.
- Spacing: استخدم مقياس Tailwind الموحّد (4/8/12/16/24/32/48/64...) — لا قيم عشوائية.
- Radius/Shadows موحّدة عبر `tailwind.config` (لا Border Radius عشوائي لكل Card).
- Icons من مكتبة واحدة فقط (مثل `lucide-react`) — لا خلط مكتبات Icons.

## 8. UI/UX Principles
- Minimal, White Space كبير، لا Boxes مزدحمة.
- لا أكثر من 2-3 ألوان أساسية في أي Section.
- Animations بسيطة وخفيفة (Fade/Slide عند الـ Scroll) — لا Animations مبالغ فيها تبطئ التحميل.
- كل Section ينتهي بمساحة تنفس واضحة قبل التالي (لا يوجد اتصال مباشر بدون Padding).
- Sticky Navbar بخلفية شفافة تتحول لـ Solid عند الـ Scroll.
- Screenshots/Mockups كبيرة وواضحة، ليست Icons صغيرة.

## 9. Responsiveness & Accessibility
- Mobile-first: يبدأ التصميم من 320px فصاعدًا.
- كل صورة لها `alt` وصفي.
- Contrast يحقق WCAG AA كحد أدنى.
- Touch targets لا تقل عن 44x44px.
- دعم Keyboard Navigation لكل Interactive Element (Tabs, Accordion, Modals).

## 10. Internationalization (لو مطلوب لاحقًا)
- بنية جاهزة لدعم RTL/LTR حتى لو البداية إنجليزي فقط.
- لا نصوص Hardcoded داخل JSX — تُجمع في ملفات Content منفصلة (`content/en.json`).

## 11. Performance
- كل الصور عبر `next/image` فقط (لا `<img>` عادي).
- Lazy-load لأي Section أسفل الشاشة الأولى (`loading="lazy"` أو Dynamic Import).
- Fonts عبر `next/font` لتجنب Layout Shift.
- Lighthouse Score مستهدف: 90+ في Performance/Accessibility/SEO.

## 12. SEO & Metadata
- `generateMetadata` لكل صفحة (Title, Description, OG Image).
- Structured Data (JSON-LD) للصفحات الرئيسية (Organization, Product, FAQ).
- Sitemap + Robots.txt تلقائيين عبر Next.js.
- كل صفحة Feature/Solution لها Slug وSEO مستقل (لا صفحة عامة واحدة).

## 13. Content & Data
- كل بيانات الـ Features/Pricing/FAQ/Testimonials تُخزن في `content/` كملفات منظمة (JSON/TS) — لا Hardcoded داخل المكونات مباشرة.
- أي أرقام غير حقيقية (مثل "500+ Clinics") تُعلَّم بـ Comment وضوح أنها Placeholder لحين توفر بيانات حقيقية.

## 14. Forms
- نموذج Book Demo يُبنى بـ React Hook Form + Zod للتحقق (Validation).
- Validation رسائله واضحة وقصيرة.
- لا إرسال بيانات لأي Backend وهمي — استخدم API Route وسيط (`app/api/...`) حتى لو Mock مبدئيًا.

## 15. Navigation
- Navbar موحّد عبر كل الصفحات (Layout مشترك).
- كل Link داخلي عبر `next/link` فقط.
- Breadcrumbs في صفحات Solutions/Features الفرعية.

## 16. Testing & QA
- فحص بصري لكل Section عبر أحجام شاشات مختلفة قبل الاعتماد.
- فحص عدم وجود Console Errors/Warnings.
- فحص كل CTA يؤدي فعليًا لمكانه الصحيح (Pricing, Demo Form, Signup).

## 17. Git & Workflow
- Commits بادئات: `feat`, `fix`, `style`, `refactor`, `docs`.
- لا Commit مباشر على main — Branch لكل Section/Page.

## 18. Prohibited
- ممنوع Hardcoded Colors/Fonts/Spacing خارج Design System.
- ممنوع Sections مزدحمة بـ Boxes كثيرة (يخالف روح Minimal المطلوبة).
- ممنوع استخدام `<img>` بدل `next/image`.
- ممنوع خلط أكثر من مكتبة Animation في نفس الصفحة.
- ممنوع عرض بيانات/أرقام غير حقيقية كأنها حقيقية.
<!-- END:nextjs-agent-rules -->
