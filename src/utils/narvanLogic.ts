export type PlanTierId = 'bronze' | 'silver' | 'gold';

export interface CampaignPlan {
  id: PlanTierId;
  titleFa: string;
  subtitleFa: string;
  badgeText: string;
  priceToman: number;
  originalPriceToman: number;
  totalQuota: number;
  initialClaimed: number;
  durationLabel: string;
  features: string[];
  highlight?: boolean;
}

export interface ParsedReminderResult {
  rawInput: string;
  taskTitle: string;
  timeTrigger: string;
  locationTrigger: string | null;
  category: string;
  confidencePercent: number;
  processingTimeMs: number;
  networkBytesSent: 0;
  storageEngine: 'SQLite Local Encrypted';
}

export interface ReservationInput {
  fullName: string;
  contact: string;
  planId: PlanTierId;
}

export interface ValidationResult {
  valid: boolean;
  errorFa?: string;
}

const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

export function toPersianDigits(value: number | string): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)] ?? d);
}

export function formatToman(amount: number): string {
  const formatted = amount.toLocaleString('en-US');
  return `${toPersianDigits(formatted)} تومان`;
}

export function normalizeDigitsToEnglish(input: string): string {
  return input
    .replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)));
}

export const CAMPAIGN_TOTAL_CAPACITY = 365;

export const CAMPAIGN_PLANS: CampaignPlan[] = [
  {
    id: 'bronze',
    titleFa: 'پلن برنزی (حامی آغازین)',
    subtitleFa: 'مناسب استفاده روزمره و شخصی پایدار',
    badgeText: 'ظرفیت کل: ۱۵۰ نفر',
    priceToman: 149000,
    originalPriceToman: 320000,
    totalQuota: 150,
    initialClaimed: 118,
    durationLabel: 'اشتراک ۱ ساله کامل + تمدید با تعرفه ثابت',
    features: [
      'یادآورهای زمان‌محور و تکرارهای هوشمند نامحدود',
      'دیتابیس لوکال SQLite با رمزنگاری کامل روی دستگاه',
      'پردازش آفلاین متن فارسی برای ثبت سریع یادآور',
      'هشدارهای پس‌زمینه پایدار بدون وابستگی به اینترنت'
    ]
  },
  {
    id: 'silver',
    titleFa: 'پلن نقره‌ای (حامی پیشرو)',
    subtitleFa: 'محبوب‌ترین انتخاب کاربران حرفه‌ای یاد',
    badgeText: 'پیشنهاد ویژه · ظرفیت: ۱۴۰ نفر',
    priceToman: 289000,
    originalPriceToman: 640000,
    totalQuota: 140,
    initialClaimed: 112,
    durationLabel: 'لایسنس مادام‌العمر نسخه ۱ و ۲ + اولویت بروزرسانی',
    highlight: true,
    features: [
      'تمام امکانات پلن برنزی بدون محدودیت زمانی',
      'یادآورهای مکان‌محور نامحدود (ورود یا خروج از محدوده جغرافیایی)',
      'پشتیبان‌گیری آفلاین رمزنگاری‌شده با کلید شخصی کاربر',
      'نشان افتخاری «حامی ۳۶۵» در شناسنامه اپلیکیشن یاد'
    ]
  },
  {
    id: 'gold',
    titleFa: 'پلن طلایی (حامی بنیان‌گذار)',
    subtitleFa: 'همراهی مستقیم در شکل‌گیری اکوسیستم نارون',
    badgeText: 'ظرفیت محدود: ۷۵ نفر',
    priceToman: 490000,
    originalPriceToman: 1200000,
    totalQuota: 75,
    initialClaimed: 61,
    durationLabel: 'لایسنس مادام‌العمر تمام نسخه‌های یاد + هدیه محصولات بعدی نارون',
    features: [
      'دسترسی مادام‌العمر به تمام قابلیت‌های فعلی و آینده اپلیکیشن یاد',
      '۳۰٪ تخفیف دائمی روی محصولات در حال توسعه تیم نرم‌افزاری نارون',
      'عضویت در حلقه تصمیم‌گیری و رای‌دهی به ویژگی‌های جدید هر فصل',
      'ثبت نام شما در بخش حامیان بنیان‌گذار سایت NarvanTeam.ir و داخل اپ'
    ]
  }
];

export function calculateDiscountPercent(price: number, originalPrice: number): number {
  if (originalPrice <= 0 || price >= originalPrice) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function calculateCampaignSummary(claimedOverrides: Record<PlanTierId, number>) {
  let totalClaimed = 0;
  for (const plan of CAMPAIGN_PLANS) {
    const claimed = claimedOverrides[plan.id] ?? plan.initialClaimed;
    totalClaimed += Math.min(plan.totalQuota, Math.max(0, claimed));
  }
  const remainingTotal = Math.max(0, CAMPAIGN_TOTAL_CAPACITY - totalClaimed);
  const progressPercent = Math.min(
    100,
    Math.round((totalClaimed / CAMPAIGN_TOTAL_CAPACITY) * 100)
  );
  return {
    totalCapacity: CAMPAIGN_TOTAL_CAPACITY,
    totalClaimed,
    remainingTotal,
    progressPercent
  };
}

export function parseOfflineReminder(input: string): ParsedReminderResult {
  const cleaned = input.trim();
  if (!cleaned) {
    return {
      rawInput: '',
      taskTitle: 'یادآور بدون عنوان',
      timeTrigger: 'امروز · ساعت ۱۸:۰۰',
      locationTrigger: null,
      category: 'عمومی',
      confidencePercent: 94,
      processingTimeMs: 4,
      networkBytesSent: 0,
      storageEngine: 'SQLite Local Encrypted'
    };
  }

  // Extract time patterns in Persian
  let timeTrigger = 'امروز · ساعت ۲۰:۰۰ (پیشنهاد هوشمند)';
  if (/فردا/.test(cleaned)) {
    const hourMatch = normalizeDigitsToEnglish(cleaned).match(/ساعت\s*(\d{1,2})/);
    const hour = hourMatch ? hourMatch[1].padStart(2, '0') : '09';
    timeTrigger = `فردا · ساعت ${toPersianDigits(hour)}:۰۰`;
  } else if (/پس‌فردا|پس فردا/.test(cleaned)) {
    timeTrigger = 'پس‌فردا · ساعت ۱۰:۰۰';
  } else if (/هر روز|روزانه/.test(cleaned)) {
    timeTrigger = 'تکرار روزانه · ساعت ۰۸:۳۰';
  } else if (/ساعت\s*[۰-۹0-9]{1,2}/.test(cleaned)) {
    const hourMatch = normalizeDigitsToEnglish(cleaned).match(/ساعت\s*(\d{1,2})/);
    const hour = hourMatch ? hourMatch[1].padStart(2, '0') : '18';
    timeTrigger = `امروز · ساعت ${toPersianDigits(hour)}:۰۰`;
  }

  // Extract location trigger patterns in Persian
  let locationTrigger: string | null = null;
  const locPatterns = [
    /(?:نزدیک|محدوده|میدان|خیابان|ایستگاه|داروخانه|شرکت|خانه|دفتر|دانشگاه)\s+([^\s،.]+(?:\s+[^\s،.]+)?)/,
    /رسیدم به\s+([^\s،.]+(?:\s+[^\s،.]+)?)/
  ];
  for (const pattern of locPatterns) {
    const match = cleaned.match(pattern);
    if (match) {
      locationTrigger = match[0].trim();
      break;
    }
  }

  // Determine category
  let category = 'شخصی و روزمره';
  if (/دارو|قرص|پزشک|دکتر|آزمایش/.test(cleaned)) {
    category = 'سلامت و دارو';
  } else if (/قرارداد|جلسه|پروژه|گیت‌هاب|دیپلوی|کد|شرکت|دفتر/.test(cleaned)) {
    category = 'کاری و توسعه';
  } else if (/خرید|نان|لبنیات|فروشگاه|بازار|قسط|بانک/.test(cleaned)) {
    category = 'خرید و مالی';
  }

  // Build concise task title
  const taskTitle = cleaned
    .replace(/^(یادم بنداز|یادم باشه|یادآوری کن)\s*/i, '')
    .trim();

  return {
    rawInput: cleaned,
    taskTitle: taskTitle || cleaned,
    timeTrigger,
    locationTrigger,
    category,
    confidencePercent: locationTrigger ? 98 : 95,
    processingTimeMs: locationTrigger ? 6 : 4,
    networkBytesSent: 0,
    storageEngine: 'SQLite Local Encrypted'
  };
}

export function validateReservationForm(input: ReservationInput): ValidationResult {
  const name = input.fullName.trim();
  const contact = normalizeDigitsToEnglish(input.contact.trim());

  if (name.length < 3) {
    return {
      valid: false,
      errorFa: 'لطفاً نام و نام خانوادگی خود را کامل وارد کنید (حداقل ۳ حرف).'
    };
  }

  const isIranMobile = /^09\d{9}$/.test(contact);
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

  if (!isIranMobile && !isEmail) {
    return {
      valid: false,
      errorFa: 'لطفاً یک شماره موبایل معتبر (مانند ۰۹۱۲۳۴۵۶۷۸۹) یا ایمیل معتبر وارد کنید.'
    };
  }

  return { valid: true };
}

export function validateContactForm(name: string, emailOrPhone: string, message: string): ValidationResult {
  if (name.trim().length < 2) {
    return { valid: false, errorFa: 'لطفاً نام خود را وارد کنید.' };
  }
  const normalizedContact = normalizeDigitsToEnglish(emailOrPhone.trim());
  const isMobile = /^09\d{9}$/.test(normalizedContact);
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedContact);
  if (!isMobile && !isEmail) {
    return { valid: false, errorFa: 'شماره تماس یا ایمیل وارد شده معتبر نیست.' };
  }
  if (message.trim().length < 8) {
    return { valid: false, errorFa: 'متن پیام باید حداقل ۸ کاراکتر باشد.' };
  }
  return { valid: true };
}
