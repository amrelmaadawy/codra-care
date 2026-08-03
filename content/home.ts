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
  }
};
