export const company = 'الشامخ للرفوف والديكورات';
export const phone = '+966 54 691 6315';
export const phoneClean = '+966546916315';
export const whatsappNumber = '966546916315';

export const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsapp = buildWhatsappUrl;

export const messages = {
  home: 'السلام عليكم، وصلت لكم من موقع الشامخ وأرغب بالاستفسار عن رفوف لمشروعي. المدينة: [اكتب المدينة]، نوع النشاط: [اكتب النشاط]، المساحة التقريبية: [اكتب المساحة].',
  solutions: 'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة حلولنا، وأرغب بالاستفسار عن الحل المناسب لمشروعي.',
  warehouse: 'السلام عليكم، وصلت لكم من صفحة رفوف المستودعات. المدينة: [اكتب المدينة]، أبعاد الموقع التقريبية: [اكتب الأبعاد]، نوع البضائع وطريقة المناولة: [اكتب التفاصيل].',
  retail: 'السلام عليكم، وصلت لكم من صفحة رفوف المتاجر. المدينة: [اكتب المدينة]، نوع النشاط: [اكتب النشاط]، المساحة التقريبية والمنتجات: [اكتب التفاصيل].',
  jeddah: 'السلام عليكم، وصلت لكم من صفحة جدة وأرغب بالاستفسار عن رفوف لمشروعي في جدة. نوع الموقع: [مستودع/متجر]، المساحة التقريبية: [اكتب المساحة].',
  riyadh: 'السلام عليكم، وصلت لكم من صفحة الرياض وأرغب بالاستفسار عن رفوف لمشروعي في الرياض. نوع الموقع: [مستودع/متجر]، المساحة التقريبية: [اكتب المساحة].',
  projects: 'السلام عليكم، شاهدت مشاريعكم في موقع الشامخ وأرغب بتنفيذ مشروع مشابه.',
  contact: 'السلام عليكم، وصلت لكم من نموذج التواصل في موقع الشامخ وأرغب بمناقشة مشروع رفوف وتخزين.',
};

export const nav = [
  { href: '/', label: 'الرئيسية' },
  { href: '/solutions', label: 'حلولنا' },
  { href: '/sectors', label: 'القطاعات' },
  { href: '/projects', label: 'مشاريعنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/jeddah', label: 'جدة' },
  { href: '/riyadh', label: 'الرياض' },
  { href: '/contact', label: 'تواصل معنا' },
];

export type Solution = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export const solutions: Solution[] = [
  { title: 'رفوف مستودعات مركزية', description: 'حلول تخزين قوية لجميع الاحتياجات للمستودعات والمخازن.', href: '/warehouse-racking', image: '/photos/hero.webp' },
  { title: 'رفوف بقالات', description: 'استغلال مثالي للمساحات مع متانة عالية وسهولة الوصول.', href: '/retail-shelving', image: '/photos/store.webp' },
  { title: 'رفوف سوبر ماركت', description: 'تصاميم عصرية للمتاجر والمراكز التجارية الكبرى.', href: '/retail-shelving', image: '/photos/market.webp' },
  { title: 'رفوف صيدليات', description: 'حلول مخصصة لتنظيم الأدوية والمنتجات بدقة ونظافة.', href: '/retail-shelving', image: '/photos/pharmacy.jpeg' },
  { title: 'رفوف تخزين منازل', description: 'تصاميم عملية وأنيقة لكل المساحات والغرف المنزلية.', href: '/solutions', image: '/photos/home.webp' },
  { title: 'رفوف التخزين الثقيل', description: 'أنظمة متينة للمنتجات الكبيرة والصناعات الثقيلة.', href: '/warehouse-racking', image: '/photos/warehouse-2.jpeg' },
  { title: 'رفوف التخزين المتوسط', description: 'توازن مثالي بين القوة والمرونة لتخزين الصناديق.', href: '/warehouse-racking', image: '/photos/warehouse-3.webp' },
  { title: 'رفوف التخزين الخفيف', description: 'حلول اقتصادية مرنة للأوزان والمساحات الصغيرة.', href: '/warehouse-racking', image: '/photos/white.webp' },
  { title: 'تجهيزات المحلات التجارية', description: 'حلول عرض متطورة لمختلف الأنشطة التجارية.', href: '/retail-shelving', image: '/photos/black.webp' },
  { title: 'أنظمة متعددة المستويات', description: 'خيارات تستفيد من الارتفاع عندما تسمح أبعاد الموقع وطريقة الاستخدام.', href: '/warehouse-racking', image: '/photos/warehouse-5.webp' },
];

export const sectors = [
  { title: 'المستودعات والمخازن', description: 'تنظيم المخزون ومسارات العمل عبر نظام رفوف يناسب الموقع وطريقة المناولة.', image: '/photos/hero.webp', types: 'رفوف تخزين ثقيل ومتوسط وخفيف', href: '/warehouse-racking' },
  { title: 'السوبر ماركت والهايبر ماركت', description: 'عرض منظم للأصناف يراعي حركة المتسوقين وطبيعة المنتجات.', image: '/photos/market.webp', types: 'رفوف سوبر ماركت وتجهيزات عرض', href: '/retail-shelving' },
  { title: 'البقالات والمتاجر الغذائية', description: 'استغلال المساحة المتاحة مع إبقاء المنتجات واضحة وسهلة الوصول.', image: '/photos/store.webp', types: 'رفوف بقالات ورفوف عرض', href: '/retail-shelving' },
  { title: 'الصيدليات', description: 'ترتيب أقسام العرض والتخزين لسهولة الاستخدام اليومي والوصول السريع.', image: '/photos/pharmacy.jpeg', types: 'رفوف صيدليات وتجهيزات عرض', href: '/retail-shelving' },
  { title: 'المحلات التجارية والمعارض', description: 'تجهيز مساحة العرض بما يلائم نوع المنتج وتجربة الزائر.', image: '/photos/black.webp', types: 'رفوف محلات وتجهيزات تجارية', href: '/retail-shelving' },
  { title: 'المنازل وغرف التخزين', description: 'حلول مرتبة للأغراض اليومية والمساحات المحدودة.', image: '/photos/home.webp', types: 'رفوف تخزين منزلية', href: '/solutions' },
];

export const gallery = [
  { title: 'تجهيز رفوف مستودع مركزي', image: '/photos/hero.webp', type: 'مستودعات' },
  { title: 'رفوف سوبر ماركت حديثة', image: '/photos/market.webp', type: 'متاجر' },
  { title: 'رفوف صيدليات منظمة', image: '/photos/pharmacy.jpeg', type: 'صيدليات' },
  { title: 'تجهيزات عرض تجارية متكاملة', image: '/photos/store.webp', type: 'متاجر' },
  { title: 'أنظمة تخزين صناعية متطورة', image: '/photos/warehouse-2.jpeg', type: 'مستودعات' },
  { title: 'رفوف عرض معدنية سوداء', image: '/photos/black.webp', type: 'متاجر' },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'رفوف مستودعات ومتاجر | الشامخ للرفوف والديكورات',
    description: 'تعرّف على رفوف المستودعات والمتاجر وحلول العرض والتخزين. اختر الصفحة المناسبة لنوع مشروعك وشارك تفاصيل الموقع لمناقشة الخيارات.',
  },
  '/solutions': {
    title: 'حلول الرفوف والتخزين للمستودعات والمتاجر | الشامخ',
    description: 'تعرّف على حلول الرفوف والتخزين للمستودعات والمتاجر والصيدليات والمنازل، واختر النظام وفق مساحة الموقع وطبيعة الاستخدام.',
  },
  '/sectors': {
    title: 'حلول رفوف للمستودعات والمتاجر والصيدليات | الشامخ',
    description: 'استكشف حلول الرفوف للمستودعات والسوبر ماركت والبقالات والصيدليات والمحلات والمنازل، مع روابط مباشرة لكل نوع من التجهيز.',
  },
  '/warehouse-racking': {
    title: 'رفوف مستودعات وأنظمة تخزين | الشامخ',
    description: 'تعرّف على رفوف المستودعات للتخزين الثقيل والمتوسط والخفيف. يعتمد اختيار النظام على مساحة الموقع وطبيعة البضائع وطريقة المناولة.',
  },
  '/retail-shelving': {
    title: 'رفوف محلات وسوبر ماركت وبقالات | الشامخ',
    description: 'استكشف رفوف العرض للمحلات والسوبر ماركت والبقالات. شارك مساحة المتجر وطبيعة المنتجات لمناقشة توزيع يناسب احتياج النشاط.',
  },
  '/projects': {
    title: 'نماذج حلول رفوف المستودعات والمتاجر | الشامخ',
    description: 'استكشف صوراً توضيحية لأنواع رفوف المستودعات والمتاجر والصيدليات وأنظمة التخزين، ثم تواصل لمناقشة احتياج مشروعك.',
  },
  '/about': {
    title: 'من نحن | الشامخ للرفوف والديكورات',
    description: 'تعرّف على حلول الشامخ للرفوف والتخزين وتجهيز المستودعات والمتاجر والصيدليات، وكيفية بدء مناقشة متطلبات مشروعك.',
  },
  '/jeddah': {
    title: 'رفوف مستودعات ومحلات في جدة | الشامخ',
    description: 'تبحث عن رفوف في جدة؟ حدّد إن كان المشروع مستودعاً أو متجراً، وشارك المساحة والمنتجات لمناقشة خيارات التخزين أو العرض.',
  },
  '/riyadh': {
    title: 'رفوف مستودعات ومحلات في الرياض | الشامخ',
    description: 'لمشروع رفوف في الرياض، أرسل نوع النشاط وأبعاد الموقع وطبيعة المنتجات. تعرّف على خيارات التخزين للمستودعات والعرض للمتاجر.',
  },
  '/contact': {
    title: 'تواصل مع الشامخ للرفوف والديكورات | جدة والرياض',
    description: 'تواصل مع الشامخ للاستفسار عن رفوف المستودعات والسوبر ماركت والبقالات والصيدليات وتجهيز المحلات في جدة والرياض عبر واتساب.',
  },
};

