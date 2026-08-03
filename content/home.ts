export const homeContent = {
  hero: {
    title: "تفرّغ لرعاية مرضاك، وأدِر عيادتك بذكاء",
    description: "نظام شامل يضم إدارة المواعيد، السجلات الطبية (EMR)، الفواتير، المخزون، التحاليل، المساعد الذكي، بوابة المرضى، والتحليلات المتقدمة. مصمم خصيصاً لتسهيل سير العمل في عيادتك.",
    ctaPrimary: "ابدأ تجربتك المجانية",
    ctaSecondary: "احجز عرضاً توضيحياً",
  },
  socialProof: {
    // PLACEHOLDER DATA: Update with real numbers when available
    stats: [
      { id: 'clinics', label: 'عيادات تستخدمنا', value: '500+' }, // PLACEHOLDER
      { id: 'specialties', label: 'تخصص طبي', value: '45+' }, // PLACEHOLDER
      { id: 'appointments', label: 'موعد مُدار', value: '2M+' }, // PLACEHOLDER
      { id: 'uptime', label: 'نسبة التواجد', value: '99.9%' }, // PLACEHOLDER
      { id: 'trusted', label: 'طبيب يثق بنا', value: '10k+' } // PLACEHOLDER
    ]
  },
  features: {
    title: "كل ما تحتاجه عيادتك في مكان واحد",
    description: "مجموعة متكاملة من الأدوات المصممة خصيصاً لتلبية احتياجات العيادات الحديثة.",
    items: [
      { id: 'appointments', title: 'إدارة المواعيد', description: 'جدولة سهلة للمواعيد مع نظام تنبيهات ذكي للمرضى والأطباء.', icon: 'Calendar' },
      { id: 'emr', title: 'السجلات الطبية (EMR)', description: 'سجلات إلكترونية متكاملة وآمنة للوصول السريع لتاريخ المريض.', icon: 'FileText' },
      { id: 'billing', title: 'الفواتير والمحاسبة', description: 'نظام مالي متكامل لإدارة الإيرادات، المصروفات، وتأمين المرضى.', icon: 'CreditCard' },
      { id: 'inventory', title: 'إدارة المخزون', description: 'تتبع دقيق للمستلزمات الطبية وتنبيهات عند انخفاض الكميات.', icon: 'Package' },
      { id: 'lab', title: 'إدارة المختبر', description: 'ربط مباشر مع المختبرات لاستلام وإدارة نتائج التحاليل بسلاسة.', icon: 'TestTube' },
      { id: 'radiology', title: 'الأشعة', description: 'نظام أرشفة وعرض صور الأشعة متوافق مع معايير DICOM.', icon: 'Activity' },
      { id: 'pharmacy', title: 'الصيدلية', description: 'إدارة الوصفات الطبية والمخزون الدوائي بدقة عالية.', icon: 'Pill' },
      { id: 'patient-portal', title: 'بوابة المرضى', description: 'تطبيق مخصص للمرضى لمتابعة ملفاتهم وحجز المواعيد.', icon: 'Smartphone' },
      { id: 'online-booking', title: 'الحجز الإلكتروني', description: 'استقبال الحجوزات على مدار الساعة من خلال موقعك الإلكتروني.', icon: 'Globe' },
      { id: 'telemedicine', title: 'الاستشارات عن بُعد', description: 'مكالمات فيديو آمنة ومدمجة لتقديم الرعاية عن بُعد.', icon: 'Video' },
      { id: 'ai-assistant', title: 'المساعد الذكي', description: 'تحليلات واقتراحات مدعومة بالذكاء الاصطناعي لرفع الكفاءة.', icon: 'Bot' },
      { id: 'reports', title: 'التقارير الشاملة', description: 'لوحات معلومات تفصيلية لمتابعة أداء ونمو العيادة.', icon: 'BarChart3' },
    ]
  },
  preview: {
    title: "نظرة حية على النظام",
    description: "استكشف واجهة الاستخدام المصممة لتكون بسيطة، سريعة، وفعالة.",
    tabs: [
      { id: 'dashboard', label: 'لوحة التحكم' },
      { id: 'patients', label: 'المرضى' },
      { id: 'calendar', label: 'التقويم' },
      { id: 'invoices', label: 'الفواتير' },
      { id: 'emr', label: 'السجلات الطبية' },
      { id: 'inventory', label: 'المخزون' },
    ]
  },
  aiAssistant: {
    title: "تعرف على مساعدك الذكي",
    description: "دع الذكاء الاصطناعي يتولى المهام الروتينية لتركز أكثر على تقديم أفضل رعاية طبية.",
    chatExamples: [
      "إنشاء ملاحظات SOAP",
      "تلخيص زيارة المريض",
      "إصدار وصفة طبية",
      "اقتراح ترميز الأمراض (ICD)",
      "إنشاء فاتورة",
      "ترجمة الملاحظات الطبية",
      "تحويل الصوت إلى سجلات طبية"
    ]
  },
  workflow: {
    title: "كيف يعمل النظام؟",
    description: "خطوات بسيطة لإعداد عيادتك والانطلاق نحو نمو مستدام.",
    steps: [
      { id: 'step-1', title: 'إنشاء العيادة', description: 'سجل عيادتك في دقائق معدودة وابدأ بإعداد ملفك.', icon: 'PlusCircle' },
      { id: 'step-2', title: 'دعوة فريق العمل', description: 'أضف الأطباء والموظفين وحدد صلاحيات كل شخص بسهولة.', icon: 'Users' },
      { id: 'step-3', title: 'ضبط الخدمات', description: 'أضف خدماتك الطبية، أسعارها، وأوقات العمل.', icon: 'Settings' },
      { id: 'step-4', title: 'استقبال الحجوزات', description: 'ابدأ بتلقي مواعيد المرضى وإدارة زياراتهم بفعالية.', icon: 'CalendarCheck' },
      { id: 'step-5', title: 'تنمية عيادتك', description: 'استفد من التقارير لرفع الكفاءة وزيادة الأرباح.', icon: 'TrendingUp' }
    ]
  },
  analytics: {
    title: "التحليلات الشاملة",
    description: "راقب أداء عيادتك واتخذ قرارات مبنية على بيانات دقيقة لحظة بلحظة.",
    kpis: [
      { label: "إيرادات اليوم", value: "$2,450" },
      { label: "المواعيد", value: "42" },
      { label: "الملغاة", value: "3" },
      { label: "أداء الأطباء", value: "مكتمل" },
      { label: "تنبيهات المخزون", value: "5" },
      { label: "الأرباح", value: "+18%" },
      { label: "المصروفات", value: "$450" }
    ]
  },
  mobileApp: {
    title: "عيادتك بين يديك دائماً",
    description: "تطبيقات مخصصة للهواتف الذكية تناسب كافة المستخدمين لتجربة أكثر مرونة.",
    apps: [
      { title: "تطبيق المريض", description: "حجز المواعيد، عرض الوصفات، واستلام التنبيهات.", mock: "patient-app-mockup" },
      { title: "تطبيق الطبيب", description: "إدارة الجدول، كتابة الملاحظات، والوصول السريع لملف المريض.", mock: "doctor-app-mockup" },
      { title: "تطبيق الاستقبال", description: "إدارة المواعيد السريعة، الدفع، وتأكيد الحضور.", mock: "reception-app-mockup" }
    ]
  },
  integrations: {
    title: "تكامل لا متناهي",
    description: "اربط النظام بأدواتك المفضلة لتجربة عمل متناغمة دون الحاجة للانتقال بين التطبيقات.",
    items: [
      { name: "Stripe", icon: "stripe" },
      { name: "Twilio", icon: "twilio" },
      { name: "WhatsApp", icon: "whatsapp" },
      { name: "Google Calendar", icon: "calendar" },
      { name: "Outlook", icon: "mail" },
      { name: "SMS", icon: "message" },
      { name: "Email", icon: "at-sign" },
      { name: "Zoom", icon: "video" },
      { name: "Microsoft Teams", icon: "users" },
      { name: "API", icon: "code" },
      { name: "Webhooks", icon: "webhook" }
    ]
  },
  security: {
    title: "الأمان أولاً (Security First)",
    description: "نحن نضع سرية وأمان بيانات مرضاك على رأس أولوياتنا، مع تطبيق أحدث معايير التشفير العالمية.",
    features: [
      { title: "بيانات مشفرة", description: "تشفير عالي الجودة للبيانات (End-to-End).", icon: "Lock" },
      { title: "صلاحيات دقيقة", description: "تحديد صارم لصلاحيات الوصول لكل مستخدم.", icon: "ShieldAlert" },
      { title: "سجلات التدقيق", description: "تتبع كل حركة داخل النظام (Audit Logs).", icon: "FileKey" },
      { title: "نسخ احتياطي آلي", description: "نسخ احتياطي يومي آمن على خوادم سحابية.", icon: "CloudUpload" },
      { title: "استضافة سحابية", description: "خوادم عالية الموثوقية وموزعة جغرافياً.", icon: "Server" },
      { title: "متوافق مع HIPAA", description: "يلبي متطلبات حماية البيانات الصحية الأمريكية.", icon: "CheckShield" },
      { title: "متوافق مع GDPR", description: "يحترم معايير الخصوصية وحماية البيانات الأوروبية.", icon: "GlobeLock" },
      { title: "مصادقة ثنائية", description: "دخول آمن عبر التحقق بخطوتين (2FA).", icon: "SmartphoneNfc" },
      { title: "سجلات النشاط", description: "مراقبة نشاطات الموظفين وتسجيل الأخطاء.", icon: "Activity" },
      { title: "عزل البيانات", description: "بيانات كل عيادة معزولة تماماً (Multi-Tenant).", icon: "Database" }
    ]
  },
  testimonials: {
    title: "ماذا يقول الأطباء عنا؟",
    description: "انضم إلى آلاف العيادات التي تعتمد على Codra Care يومياً.",
    reviews: [
      { name: "د. أحمد محمد", role: "طبيب أسنان", text: "نظام متكامل ساعدني في تنظيم المواعيد وتقليل وقت الانتظار لمرضاي.", image: "placeholder" },
      { name: "د. سارة خالد", role: "طبيبة أطفال", text: "سهولة الوصول للسجلات الطبية من أي مكان جعلت عملي أكثر مرونة.", image: "placeholder" },
      { name: "عيادة الأمل", role: "مجمع طبي متعدد التخصصات", text: "أفضل استثمار قمنا به. الربط بين الصيدلية والمختبر والأطباء ممتاز.", image: "placeholder" }
    ]
  },
  pricing: {
    title: "خطط أسعار تناسب الجميع",
    description: "اختر الخطة المناسبة لحجم عيادتك. يمكنك الترقية في أي وقت.",
    plans: [
      { id: 'starter', name: "الأساسية (Starter)", price: "$49", period: "/شهر", description: "مثالية للعيادات الفردية والأطباء المستقلين.", features: ["طبيب واحد", "مواعيد غير محدودة", "سجلات المرضى", "بوابة الدفع"], button: "ابدأ تجربتك المجانية", featured: false },
      { id: 'pro', name: "الاحترافية (Professional)", price: "$99", period: "/شهر", description: "للمجمعات الطبية الصغيرة التي تبحث عن أتمتة كاملة.", features: ["حتى 5 أطباء", "نظام المخزون", "تقارير متقدمة", "تطبيق المرضى", "المساعد الذكي (AI)"], button: "ابدأ تجربتك المجانية", featured: true },
      { id: 'enterprise', name: "المؤسسات (Enterprise)", price: "مخصص", period: "", description: "للمستشفيات وفروع العيادات المتعددة.", features: ["أطباء غير محدودين", "فروع متعددة", "ربط API مخصص", "مدير حساب شخصي", "دعم فني 24/7"], button: "تواصل معنا", featured: false }
    ],
    comparison: {
      title: "مقارنة المميزات بالتفصيل",
      features: [
        { name: "إدارة المواعيد", starter: true, pro: true, enterprise: true },
        { name: "السجلات الطبية (EMR)", starter: true, pro: true, enterprise: true },
        { name: "تطبيق الجوال للمرضى", starter: false, pro: true, enterprise: true },
        { name: "إدارة المخزون والصيدلية", starter: false, pro: true, enterprise: true },
        { name: "المساعد الذكي (AI)", starter: false, pro: true, enterprise: true },
        { name: "الفروع المتعددة (Multi-Branch)", starter: false, pro: false, enterprise: true },
        { name: "دعم فني على مدار الساعة", starter: false, pro: false, enterprise: true }
      ]
    }
  },
  faq: {
    title: "الأسئلة الشائعة",
    description: "إجابات سريعة على أهم استفساراتك.",
    questions: [
      { q: "هل يوجد تطبيق للهواتف الذكية؟", a: "نعم، نوفر تطبيقات مخصصة للأطباء، المرضى، وموظفي الاستقبال متوافقة مع أنظمة iOS و Android." },
      { q: "هل يدعم النظام الفروع المتعددة؟", a: "نعم، خطة المؤسسات (Enterprise) تدعم إدارة الفروع المتعددة بحساب مركزي واحد." },
      { q: "هل يدعم ربط أجهزة الأشعة (PACS)؟", a: "نعم، يدعم النظام استعراض وأرشفة صور الأشعة بتوافق كامل مع معايير DICOM." },
      { q: "هل يدعم ربط أجهزة المعامل (LIS)؟", a: "نعم، نوفر ربطاً مباشراً مع العديد من أجهزة التحليل لاستقبال النتائج تلقائياً في ملف المريض." },
      { q: "هل يوجد API للربط مع أنظمة أخرى؟", a: "نعم، نوفر واجهة برمجية (API) كاملة وموثقة للمؤسسات لتسهيل الربط مع الأنظمة المحاسبية أو التأمينية الخارجية." },
      { q: "هل يتم أخذ نسخ احتياطية للبيانات (Backup)؟", a: "نعم، نقوم بعمل نسخ احتياطي تلقائي ومشفّر يومياً لضمان عدم ضياع أي بيانات." },
      { q: "هل يمكنني نقل بياناتي من نظامي القديم؟", a: "بالتأكيد، فريقنا التقني سيساعدك في ترحيل (Migration) كافة بياناتك من نظامك السابق إلى Codra Care." },
      { q: "هل يوجد دعم فني؟", a: "نعم، نوفر دعماً فنياً عبر المحادثة الفورية والبريد الإلكتروني، ودعماً على مدار الساعة لعملاء خطة المؤسسات." }
    ]
  },
  cta: {
    title: "مستعد لتحديث عيادتك؟",
    description: "انضم إلى آلاف الأطباء الذين يثقون في Codra Care لإدارة عياداتهم يومياً. ابدأ تجربتك المجانية الآن ولاحظ الفرق.",
    button: "ابدأ تجربتك المجانية"
  }
};
