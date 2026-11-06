import React from 'react';
import { Shield, Database, Cpu, MapPin, Lock, ArrowRight, FileCode } from 'lucide-react';

interface PrivacyViewProps {
  onBackHome: () => void;
  onOpenStaticExport: () => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({
  onBackHome,
  onOpenStaticExport
}) => {
  return (
    <div className="py-14 bg-[#F7F8F5] min-h-screen">
      <div className="mx-auto max-w-[960px] px-6">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#DCE2D9]">
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#14532D] hover:text-[#D97706] transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی (index.html)</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href="/privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-bold text-[#14532D] bg-white border border-[#DCE2D9] rounded-lg hover:border-[#14532D] transition-colors whitespace-nowrap shrink-0"
            >
              مشاهده فایل مستقل privacy.html
            </a>
            <button
              type="button"
              onClick={onOpenStaticExport}
              className="px-3.5 py-2 text-xs font-bold text-white bg-[#D97706] hover:bg-[#B45309] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>دریافت کدهای استاتیک</span>
            </button>
          </div>
        </div>

        {/* Hero Statement */}
        <div className="mb-12">
          <p className="text-xs font-bold text-[#14532D] mb-2">
            سند حقوقی و تعهدنامه رسمی حریم خصوصی · تیم نرم‌افزاری نارون (NarvanTeam.ir)
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-[#111C15] leading-tight mb-4 headline-balance">
            حریم خصوصی در «یاد» یک تنظیم نیست؛ معماریِ پایه است.
          </h1>
          <p className="text-base sm:text-lg text-[#4A5A50] leading-relaxed">
            در تیم نرم‌افزاری نارون، ما بر این باوریم که یادآورهای شخصی، موقعیت‌های مکانی و برنامه‌های روزمره شما، خصوصی‌ترین دارایی دیجیتال شما هستند. اپلیکیشن «یاد» به گونه‌ای مهندسی شده که تمام پردازش‌ها ۱۰۰٪ آفلاین و روی خود دستگاه انجام شود.
          </p>
        </div>

        {/* 3 Core Offline Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white border border-[#DCE2D9] rounded-2xl p-6">
            <Database className="w-6 h-6 text-[#14532D] mb-3" />
            <h2 className="text-base font-extrabold text-[#111C15] mb-2">
              ۰۱. دیتابیس ۱۰۰٪ لوکال (SQLite)
            </h2>
            <p className="text-sm text-[#4A5A50] leading-relaxed">
              تمامی یادآورها، یادداشت‌ها و دسته‌بندی‌ها مستقیماً روی حافظه داخلی گوشی شما ذخیره می‌شوند و هیچ سرور ابری واسطی برای نگهداری اطلاعات شما وجود ندارد.
            </p>
          </div>

          <div className="bg-white border border-[#DCE2D9] rounded-2xl p-6">
            <Cpu className="w-6 h-6 text-[#D97706] mb-3" />
            <h2 className="text-base font-extrabold text-[#111C15] mb-2">
              ۰۲. هوش مصنوعی کاملاً آفلاین
            </h2>
            <p className="text-sm text-[#4A5A50] leading-relaxed">
              موتور تحلیل زبان طبیعی فارسی و استخراج هوشمند زمان و مکان در «یاد» به صورت بومی روی پردازنده موبایل اجرا می‌شود؛ بدون ارسال حتی یک بایت به اینترنت.
            </p>
          </div>

          <div className="bg-white border border-[#DCE2D9] rounded-2xl p-6">
            <MapPin className="w-6 h-6 text-[#14532D] mb-3" />
            <h2 className="text-base font-extrabold text-[#111C15] mb-2">
              ۰۳. یادآور مکانی بدون ردیابی
            </h2>
            <p className="text-sm text-[#4A5A50] leading-relaxed">
              مختصات جغرافیایی یادآورهای مکان‌محور صرفاً توسط سرویس Geofencing سیستم‌عامل روی خود دستگاه بررسی شده و هرگز به سرورهای خارجی مخابره نمی‌شود.
            </p>
          </div>
        </div>

        {/* Legal Clauses */}
        <div className="space-y-6">
          <article className="bg-white border border-[#DCE2D9] rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-[#14532D] mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>ماده ۱: عدم جمع‌آوری اطلاعات شخصی و محتوایی</span>
            </h3>
            <p className="text-[#4A5A50] text-sm sm:text-base leading-relaxed mb-4">
              اپلیکیشن «یاد» برای شروع به کار نیازی به ثبت‌نام، وارد کردن شماره موبایل، ایمیل یا ساخت حساب کاربری ابری ندارد. تمام یادآورهایی که ثبت می‌کنید (اعم از متون، زمان‌ها، تکرارها و نقاط مکانی) منحصراً در فضای ذخیره‌سازی اختصاصی اپلیکیشن در سیستم‌عامل اندروید نگهداری می‌شوند.
            </p>
            <ul className="list-disc pr-5 space-y-2 text-sm text-[#4A5A50]">
              <li>هیچ‌گونه لاگ متنی از عنوان یا محتوای یادآورهای شما به سرورهای NarvanTeam.ir ارسال نمی‌شود.</li>
              <li>هیچ اسکریپت تبلیغاتی، ردیاب رفتار کاربر (Tracker) یا کیت تحلیل تجاری شخص ثالث در هسته اپلیکیشن وجود ندارد.</li>
            </ul>
          </article>

          <article className="bg-white border border-[#DCE2D9] rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-[#14532D] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>ماده ۲: مجوزهای دسترسی سیستم‌عامل (Permissions)</span>
            </h3>
            <p className="text-[#4A5A50] text-sm sm:text-base leading-relaxed mb-4">
              اپلیکیشن یاد بر پایه Capacitor و پل‌های بومی اندروید ساخته شده و تنها مجوزهایی را درخواست می‌کند که مستقیماً برای اجرای وظایف خودِ کاربر روی دستگاه ضروری هستند:
            </p>
            <ul className="list-disc pr-5 space-y-2.5 text-sm text-[#4A5A50]">
              <li>
                <strong className="text-[#111C15]">موقعیت مکانی (Geofencing):</strong> صرفاً در صورت فعال‌سازی «یادآور مکان‌محور» توسط کاربر، جهت تشخیص ورود یا خروج از محدوده تعیین‌شده روی خود گوشی.
              </li>
              <li>
                <strong className="text-[#111C15]">سرویس پس‌زمینه و هشدار دقیق (Exact Alarm):</strong> جهت تضمین پخش به‌موقع زنگ و اعلان یادآورها حتی در صورت بسته بودن برنامه یا فعال بودن بهینه‌سازی باتری.
              </li>
              <li>
                <strong className="text-[#111C15]">پشتیبان‌گیری محلی رمزنگاری‌شده:</strong> فقط زمانی که کاربر به صورت دستی فایل بکاپ رمزنگاری‌شده را روی حافظه دستگاه خود ذخیره یا بازیابی کند.
              </li>
            </ul>
          </article>

          <article className="bg-white border border-[#DCE2D9] rounded-2xl p-8">
            <h3 className="text-xl font-extrabold text-[#14532D] mb-3">
              ماده ۳: تراکنش‌های مالی و پویش رونمایی ۳۶۵ نفره
            </h3>
            <p className="text-[#4A5A50] text-sm sm:text-base leading-relaxed">
              تمامی پرداخت‌های درون‌برنامه‌ای جهت ارتقا به پلن‌های برنزی، نقره‌ای و طلایی مستقیماً از طریق زیرساخت رسمی کافه‌بازار و مایکت انجام می‌شود. تیم نرم‌افزاری نارون به هیچ عنوان به اطلاعات بانکی یا رمز کارت کاربران دسترسی ندارد و تنها رسید دیجیتال مارکت را روی دستگاه اعتبارسنجی می‌کند.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};
