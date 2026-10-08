export const company = 'الشامخ للرفوف والديكورات';
export const phone = '+966 54 691 6315';
export const phoneClean = '+966546916315';
export const whatsappNumber = '966546916315';

export const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const whatsapp = buildWhatsappUrl;

export const messages = {
  home: 'السلام عليكم، وصلت لكم من موقع الشامخ وأرغب بالاستفسار عن حلول الرفوف والتخزين.',
  solutions: 'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة حلولنا، وأرغب بالاستفسار عن الحل المناسب لمشروعي.',
  warehouse: 'السلام عليكم، وصلت لكم من موقع الشامخ – صفحة رفوف المستودعات، وأرغب بالاستفسار عن نظام تخزين مناسب لمستودعي.',
  retail: 'السلام عليكم، وصلت لكم من صفحة رفوف المحلات والسوبر ماركت في موقع الشامخ، وأرغب بالاستفسار عن تجهيز متجري.',
  jeddah: 'السلام عليكم، وصلت لكم من صفحة خدمات الشامخ في جدة، وأرغب بالاستفسار عن مشروع رفوف وتخزين في جدة.',
  riyadh: 'السلام عليكم، وصلت لكم من صفحة خدمات الشامخ في الرياض، وأرغب بالاستفسار عن مشروع رفوف وتخزين في الرياض.',
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
  { title: 'رفوف مستودعات مركزية', description: 'حلول تخزين قوية لجميع الاحتياجات للمستودعات والمخازن.', href: '/warehouse-racking', image: '/photos/hero.jpeg' },
  { title: 'رفوف بقالات', description: 'استغلال مثالي للمساحات مع متانة عالية وسهولة الوصول.', href: '/retail-shelving', image: '/photos/store.jpeg' },
  { title: 'رفوف سوبر ماركت', description: 'تصاميم عصرية للمتاجر والمراكز التجارية الكبرى.', href: '/retail-shelving', image: '/photos/market.jpeg' },
  { title: 'رفوف صيدليات', description: 'حلول مخصصة لتنظيم الأدوية والمنتجات بدقة ونظافة.', href: '/retail-shelving', image: '/photos/pharmacy.jpeg' },
  { title: 'رفوف تخزين منازل', description: 'تصاميم عملية وأنيقة لكل المساحات والغرف المنزلية.', href: '/solutions', image: '/photos/home.jpeg' },
  { title: 'رفوف التخزين الثقيل', description: 'أنظمة متينة للمنتجات الكبيرة والصناعات الثقيلة.', href: '/warehouse-racking', image: '/photos/warehouse-2.jpeg' },
  { title: 'رفوف التخزين المتوسط', description: 'توازن مثالي بين القوة والمرونة لتخزين الصناديق.', href: '/warehouse-racking', image: '/photos/warehouse-3.jpeg' },
  { title: 'رفوف التخزين الخفيف', description: 'حلول اقتصادية مرنة للأوزان والمساحات الصغيرة.', href: '/warehouse-racking', image: '/photos/white.jpeg' },
  { title: 'تجهيزات المحلات التجارية', description: 'حلول عرض متطورة لمختلف الأنشطة التجارية.', href: '/retail-shelving', image: '/photos/black.jpeg' },
  { title: 'أنظمة متعددة المستويات', description: 'استغلال رأسي كامل للارتفاعات وزيادة السعة التخزينية.', href: '/warehouse-racking', image: '/photos/warehouse-5.jpeg' },
];

export const sectors = [
  { title: 'المستودعات والمخازن', description: 'تنظيم المخزون ومسارات العمل عبر نظام رفوف يناسب الموقع وطريقة المناولة.', image: '/photos/hero.jpeg', types: 'رفوف تخزين ثقيل ومتوسط وخفيف', href: '/warehouse-racking' },
  { title: 'السوبر ماركت والهايبر ماركت', description: 'عرض منظم للأصناف يراعي حركة المتسوقين وطبيعة المنتجات.', image: '/photos/market.jpeg', types: 'رفوف سوبر ماركت وتجهيزات عرض', href: '/retail-shelving' },
  { title: 'البقالات والمتاجر الغذائية', description: 'استغلال المساحة المتاحة مع إبقاء المنتجات واضحة وسهلة الوصول.', image: '/photos/store.jpeg', types: 'رفوف بقالات ورفوف عرض', href: '/retail-shelving' },
  { title: 'الصيدليات', description: 'ترتيب أقسام العرض والتخزين لسهولة الاستخدام اليومي والوصول السريع.', image: '/photos/pharmacy.jpeg', types: 'رفوف صيدليات وتجهيزات عرض', href: '/retail-shelving' },
  { title: 'المحلات التجارية والمعارض', description: 'تجهيز مساحة العرض بما يلائم نوع المنتج وتجربة الزائر.', image: '/photos/black.jpeg', types: 'رفوف محلات وتجهيزات تجارية', href: '/retail-shelving' },
  { title: 'المنازل وغرف التخزين', description: 'حلول مرتبة للأغراض اليومية والمساحات المحدودة.', image: '/photos/home.jpeg', types: 'رفوف تخزين منزلية', href: '/solutions' },
];

export const gallery = [
  { title: 'تجهيز رفوف مستودع مركزي', image: '/photos/hero.jpeg', type: 'مستودعات' },
  { title: 'رفوف سوبر ماركت حديثة', image: '/photos/market.jpeg', type: 'متاجر' },
  { title: 'رفوف صيدليات منظمة', image: '/photos/pharmacy.jpeg', type: 'صيدليات' },
  { title: 'تجهيزات عرض تجارية متكاملة', image: '/photos/store.jpeg', type: 'متاجر' },
  { title: 'أنظمة تخزين صناعية متطورة', image: '/photos/warehouse-2.jpeg', type: 'مستودعات' },
  { title: 'رفوف عرض معدنية سوداء', image: '/photos/black.jpeg', type: 'متاجر' },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'الشامخ للرفوف والديكورات | رفوف مستودعات ومتاجر في جدة والرياض',
    description: 'رفوف مستودعات وسوبر ماركت وبقالات وصيدليات وتجهيز محلات في جدة والرياض. ناقش احتياج مشروعك وخيارات التوريد والتركيب مع الشامخ.',
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
    title: 'رفوف مستودعات في جدة والرياض | الشامخ للرفوف والديكورات',
    description: 'حلول رفوف للمستودعات تشمل التخزين الثقيل والمتوسط والخفيف والأنظمة متعددة المستويات. يُختار التوزيع وفق مساحة الموقع والبضائع وطريقة المناولة.',
  },
  '/retail-shelving': {
    title: 'رفوف المحلات والسوبر ماركت في جدة والرياض | الشامخ',
    description: 'رفوف عرض للمحلات والسوبر ماركت والبقالات والصيدليات، مع خيارات جدارية ووسطية وتوزيع يراعي المنتجات ومساحة المتجر.',
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
    title: 'رفوف مستودعات ومحلات في جدة | الشامخ للرفوف والديكورات',
    description: 'حلول رفوف مستودعات ومتاجر في جدة، تشمل السوبر ماركت والبقالات والصيدليات. يُناقش النظام والتوزيع وفق مساحة المشروع وطبيعة المنتجات.',
  },
  '/riyadh': {
    title: 'رفوف مستودعات ومحلات في الرياض | الشامخ للرفوف والديكورات',
    description: 'حلول رفوف مستودعات ومتاجر في الرياض، تشمل السوبر ماركت والبقالات والصيدليات وتجهيز المحلات. يُحدد التوزيع حسب النشاط والمساحة.',
  },
  '/contact': {
    title: 'تواصل مع الشامخ للرفوف والديكورات | جدة والرياض',
    description: 'تواصل مع الشامخ للاستفسار عن رفوف المستودعات والسوبر ماركت والبقالات والصيدليات وتجهيز المحلات في جدة والرياض عبر واتساب.',
  },
};

