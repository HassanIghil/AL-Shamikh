export const company = 'الشامخ للرفوف والديكورات';
export const phone = '+966 54 691 6315';
export const phoneClean = '+966546916315';
export const whatsappNumber = '966546916315';

export const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsapp = buildWhatsappUrl;

export const messages = {
  home: 'السلام عليكم، أريد الاستفسار عن رفوف لمشروعي.',
  solutions: 'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة حلولنا، وأرغب بالاستفسار عن الحل المناسب لمشروعي.',
  warehouse: 'السلام عليكم، أريد الاستفسار عن رفوف مستودعات لمشروعي.',
  retail: 'السلام عليكم، أريد الاستفسار عن رفوف لمتجري.',
  jeddah: 'السلام عليكم، أريد عرض سعر لرفوف مشروع في جدة.',
  riyadh: 'السلام عليكم، أريد عرض سعر لرفوف مشروع في الرياض.',
  projects: 'السلام عليكم، أريد الاستفسار عن رفوف لمشروعي.',
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
  { title: 'رفوف حسب طبيعة التخزين', description: 'يُناقش نوع الرفوف وفق البضائع والأبعاد وطريقة المناولة.', href: '/warehouse-racking', image: '/photos/warehouse-5.webp' },
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
  { title: 'رفوف مستودعات — صورة توضيحية', image: '/photos/hero.webp', type: 'مستودعات' },
  { title: 'رفوف سوبر ماركت — صورة توضيحية', image: '/photos/market.webp', type: 'متاجر' },
  { title: 'رفوف صيدليات — صورة توضيحية', image: '/photos/pharmacy.jpeg', type: 'صيدليات' },
  { title: 'رفوف متجر غذائي — صورة توضيحية', image: '/photos/store.webp', type: 'متاجر' },
  { title: 'رفوف تخزين — صورة توضيحية', image: '/photos/warehouse-2.jpeg', type: 'مستودعات' },
  { title: 'رفوف عرض — صورة توضيحية', image: '/photos/black.webp', type: 'متاجر' },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'رفوف مستودعات ومحلات في جدة والرياض | الشامخ',
    description: 'يوفر الشامخ رفوف مستودعات ومحلات وسوبر ماركت وبقالات وصيدليات في جدة والرياض. شاركنا نوع نشاطك لمناقشة الفئة المناسبة.',
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

