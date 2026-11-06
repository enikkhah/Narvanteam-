import React, { useState } from 'react';
import {
  ShieldCheck,
  MapPin,
  BellRing,
  Cpu,
  Download,
  Terminal,
  ArrowUpLeft
} from 'lucide-react';
import {
  parseOfflineReminder,
  toPersianDigits,
  type ParsedReminderResult
} from '../utils/narvanLogic';

interface YaadSectionProps {
  showcaseImgSrc: string;
  onOpenStoreModal: (store: 'bazaar' | 'myket') => void;
  onJumpToCampaign: () => void;
}

const SAMPLE_PROMPTS = [
  'فردا ساعت ۱۷ نزدیک میدان ولیعصر قرص ویتامین بخرم',
  'ساعت ۱۰ نزدیک شرکت قرارداد پروژه لیارا را تحویل دهم',
  'هر روز ساعت ۸ بررسی پایپ‌لاین گیت‌هاب اکشنز'
];

export const YaadSection: React.FC<YaadSectionProps> = ({
  showcaseImgSrc,
  onOpenStoreModal,
  onJumpToCampaign
}) => {
  const [inputPhrase, setInputPhrase] = useState<string>(SAMPLE_PROMPTS[0]);
  const [parsedResult, setParsedResult] = useState<ParsedReminderResult>(() =>
    parseOfflineReminder(SAMPLE_PROMPTS[0])
  );
  const [imgFailed, setImgFailed] = useState(false);
  const [upcomingVotes, setUpcomingVotes] = useState<Record<string, number>>({
    barg: 142,
    nabz: 98
  });
  const [votedItem, setVotedItem] = useState<string | null>(null);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    setParsedResult(parseOfflineReminder(inputPhrase));
  };

  const handleSelectSample = (sample: string) => {
    setInputPhrase(sample);
    setParsedResult(parseOfflineReminder(sample));
  };

  const handleVoteUpcoming = (id: string) => {
    if (votedItem === id) return;
    setUpcomingVotes((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 0) + 1
    }));
    setVotedItem(id);
  };

  return (
    <section id="products" className="py-20 border-b border-[#DCE2D9]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-bold text-[#14532D] mb-2">
              ۰۱. محصولات تیم نرم‌افزاری نارون · پرچمدار فعلی
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111C15] headline-balance leading-tight">
              اپلیکیشن «یاد»؛ یادآور آنچه مهم است.
            </h2>
          </div>
          <p className="text-base text-[#4A5A50] max-w-xl leading-relaxed">
            «یاد» یک دستیار یادآوری مینیمال و بومی است که بدون نیاز به حساب ابری یا ارسال اطلاعات به سرور، یادآورهای زمانی و مکانی شما را با پردازش آفلاین مدیریت می‌کند.
          </p>
        </div>

        {/* Asymmetric Bento Grid for Yaad Core Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Col-span-7: Main Feature Card + Download Store Actions */}
          <div className="lg:col-span-7 bg-white border border-[#DCE2D9] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#4A5A50] mb-4">
                <span>نسخه پایدار ۱.۴.۰ اندروید</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>مبتنی بر Capacitor و SQLite بومی</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>۱۰۰٪ آفلاین</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#14532D] mb-4">
                ۰۱. حفظ کامل حریم خصوصی با دیتابیس لوکال و هوش مصنوعی آفلاین
              </h3>
              <p className="text-[#4A5A50] text-base leading-relaxed mb-6">
                برخلاف اپلیکیشن‌های یادآور ابری که عادت‌ها، موقعیت مکانی و برنامه‌های شخصی شما را روی سرورهای تبلیغاتی تحلیل می‌کنند، در «یاد» تمام داده‌ها در دیتابیس محلی دستگاه ذخیره می‌شوند و موتور پردازش زبان طبیعی فارسی به صورت کاملاً آفلاین روی گوشی اجرا می‌گردد.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EEF2EC]">
                <div className="py-2">
                  <div className="flex items-center gap-2 text-[#14532D] font-bold text-base mb-1">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>۰۲. یادآورهای مکان‌محور دقیق</span>
                  </div>
                  <p className="text-sm text-[#4A5A50] leading-relaxed">
                    هشدار هوشمند هنگام ورود یا خروج از محدوده جغرافیایی مشخص‌شده (داروخانه، محل کار، ایستگاه مترو) با مصرف بهینه باتری.
                  </p>
                </div>

                <div className="py-2">
                  <div className="flex items-center gap-2 text-[#14532D] font-bold text-base mb-1">
                    <BellRing className="w-4 h-4 shrink-0" />
                    <span>۰۳. هشدارهای پس‌زمینه پایدار</span>
                  </div>
                  <p className="text-sm text-[#4A5A50] leading-relaxed">
                    استفاده از سرویس بومی اندروید و Exact Alarm برای اجرای تضمینی هشدارها حتی در زمان بسته بودن کامل برنامه.
                  </p>
                </div>
              </div>
            </div>

            {/* Store Download Buttons */}
            <div className="mt-8 pt-6 border-t border-[#DCE2D9] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenStoreModal('bazaar')}
                  className="px-5 py-3 bg-[#14532D] hover:bg-[#0D381E] text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>دریافت از کافه‌بازار</span>
                </button>
                <button
                  type="button"
                  onClick={() => onOpenStoreModal('myket')}
                  className="px-5 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>دریافت از مایکت</span>
                </button>
              </div>

              <button
                type="button"
                onClick={onJumpToCampaign}
                className="text-sm font-bold text-[#14532D] hover:text-[#D97706] transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>مشاهده پویش رونمایی ۳۶۵ نفره</span>
                <ArrowUpLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col-span-5: Visual Showcase & Interactive Offline AI Reminder Simulator */}
          <div className="lg:col-span-5 bg-[#112619] text-white rounded-2xl p-7 flex flex-col justify-between border border-[#1E3F2B]">
            <div>
              {/* Visual Showcase Header */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6 bg-[#14532D]">
                {!imgFailed ? (
                  <img
                    src={showcaseImgSrc}
                    alt="نمایش معماری سخت‌افزاری و آفلاین اپلیکیشن یاد"
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#14532D] to-[#0B2916] p-6 text-center">
                    <ShieldCheck className="w-10 h-10 text-[#F59E0B] mx-auto mb-2" />
                    <span className="text-sm font-bold text-white">معماری ۱۰۰٪ آفلاین یاد</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#112619] via-[#112619]/35 to-transparent flex items-end p-4">
                  <div className="text-xs text-[#E2E8F0] font-medium">
                    <span>شبیه‌ساز زنده موتور پردازش آفلاین «یاد»</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span className="text-[#FBBF24] font-bold">ارسال به سرور: ۰ بایت</span>
                  </div>
                </div>
              </div>

              {/* Interactive Offline NLP Form */}
              <form onSubmit={handleAnalyze} className="space-y-3">
                <label
                  htmlFor="yaad-offline-input"
                  className="block text-xs font-bold text-[#A7F3D0]"
                >
                  یک یادآور به زبان طبیعی فارسی بنویسید (پردازش آنی در مرورگر شما):
                </label>
                <div className="flex gap-2">
                  <input
                    id="yaad-offline-input"
                    type="text"
                    value={inputPhrase}
                    onChange={(e) => setInputPhrase(e.target.value)}
                    placeholder="مثلاً: فردا ساعت ۱۸ نزدیک داروخانه..."
                    className="w-full rounded-lg bg-[#0B1910] border border-[#274E37] px-3.5 py-2.5 text-sm text-white placeholder-[#6B8E78] focus:outline-none focus:border-[#F59E0B]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    تحلیل آفلاین
                  </button>
                </div>
              </form>

              {/* Sample Quick Buttons */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {SAMPLE_PROMPTS.map((sample, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectSample(sample)}
                    className="text-right text-[11px] bg-[#193524] hover:bg-[#224731] text-[#D1FAE5] px-2.5 py-1 rounded-md transition-colors cursor-pointer truncate max-w-full"
                  >
                    نمونه {toPersianDigits(idx + 1)}: {sample}
                  </button>
                ))}
              </div>
            </div>

            {/* Parsed Output Readout */}
            <div
              data-testid="offline-parser-output"
              className="mt-5 pt-4 border-t border-[#234832] space-y-2 text-xs"
            >
              <div className="flex items-center justify-between text-[#A7F3D0]">
                <span className="font-semibold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>خروجی ساختاریافته دیتابیس لوکال:</span>
                </span>
                <span className="font-mono-tabular text-[#FBBF24]">
                  {toPersianDigits(parsedResult.processingTimeMs)} میلی‌ثانیه · ترافیک شبکه: ۰ بایت
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 bg-[#0B1910] p-3.5 rounded-xl border border-[#1E3F2B]">
                <div>
                  <span className="text-[#86A893] block mb-0.5">عنوان استخراج‌شده:</span>
                  <strong className="text-white font-bold">{parsedResult.taskTitle}</strong>
                </div>
                <div>
                  <span className="text-[#86A893] block mb-0.5">زمان هشدار:</span>
                  <strong className="text-[#FBBF24] font-bold">{parsedResult.timeTrigger}</strong>
                </div>
                <div>
                  <span className="text-[#86A893] block mb-0.5">شرط مکانی (Geofence):</span>
                  <strong className="text-[#6EE7B7] font-bold">
                    {parsedResult.locationTrigger ?? 'بدون محدودیت مکانی'}
                  </strong>
                </div>
                <div>
                  <span className="text-[#86A893] block mb-0.5">دسته‌بندی و موتور:</span>
                  <strong className="text-white font-bold">
                    {parsedResult.category} · SQLite
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Products Card: "در حال توسعه..." */}
        <div className="bg-[#EEF2EC] border border-[#DCE2D9] rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#14532D] mb-2">
                <Terminal className="w-4 h-4" />
                <span>آزمایشگاه محصول نارون · نقشه راه زنده</span>
              </div>
              <h3 className="text-2xl font-black text-[#111C15] mb-2">
                در حال توسعه... (محصولات بعدی تیم نرم‌افزاری نارون)
              </h3>
              <p className="text-sm sm:text-base text-[#4A5A50] leading-relaxed">
                روند توسعه در نارون هرگز متوقف نمی‌شود. ما همزمان با ارتقای مداوم اپلیکیشن «یاد»، دو محصول جدید با همان فلسفه «مینیمال، آفلاین و امن» را مستقیماً از طریق پایپ‌لاین موبایلی و GitHub Actions در دست ساخت داریم. شما می‌توانید به اولویت انتشار محصول بعدی رای دهید:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
              <div className="bg-white border border-[#DCE2D9] rounded-xl p-4 flex flex-col justify-between min-w-[230px]">
                <div>
                  <p className="text-xs font-bold text-[#14532D] mb-1">پروژه ۰۲ · در حال توسعه</p>
                  <h4 className="text-base font-extrabold text-[#111C15]">اپلیکیشن «برگ»</h4>
                  <p className="text-xs text-[#4A5A50] mt-1">
                    حسابداری و بودجه‌بندی شخصی ۱۰۰٪ آفلاین بدون دسترسی به پیامک‌های بانکی
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EEF2EC] flex items-center justify-between">
                  <span className="text-xs font-mono-tabular text-[#4A5A50]">
                    {toPersianDigits(upcomingVotes.barg)} رای کاربران
                  </span>
                  <button
                    type="button"
                    onClick={() => handleVoteUpcoming('barg')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      votedItem === 'barg'
                        ? 'bg-[#14532D] text-white'
                        : 'bg-[#EEF2EC] text-[#14532D] hover:bg-[#DCE2D9]'
                    }`}
                  >
                    {votedItem === 'barg' ? 'رای شما ثبت شد' : 'رای به اولویت ساخت'}
                  </button>
                </div>
              </div>

              <div className="bg-white border border-[#DCE2D9] rounded-xl p-4 flex flex-col justify-between min-w-[230px]">
                <div>
                  <p className="text-xs font-bold text-[#D97706] mb-1">پروژه ۰۳ · مرحله طراحی</p>
                  <h4 className="text-base font-extrabold text-[#111C15]">اپلیکیشن «نبض»</h4>
                  <p className="text-xs text-[#4A5A50] mt-1">
                    ردیاب عادت‌های روزانه و تمرکز عمیق با نمودارهای لوکال و خروجی Markdown
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#EEF2EC] flex items-center justify-between">
                  <span className="text-xs font-mono-tabular text-[#4A5A50]">
                    {toPersianDigits(upcomingVotes.nabz)} رای کاربران
                  </span>
                  <button
                    type="button"
                    onClick={() => handleVoteUpcoming('nabz')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      votedItem === 'nabz'
                        ? 'bg-[#14532D] text-white'
                        : 'bg-[#EEF2EC] text-[#14532D] hover:bg-[#DCE2D9]'
                    }`}
                  >
                    {votedItem === 'nabz' ? 'رای شما ثبت شد' : 'رای به اولویت ساخت'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
