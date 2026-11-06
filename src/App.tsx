import React, { useState } from 'react';
import {
  Smartphone,
  GitBranch,
  Layers,
  ShieldCheck,
  Download,
  FileCode,
  Send,
  ExternalLink,
  X,
  CheckCircle2
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { YaadSection } from './components/YaadSection';
import { Campaign365Section } from './components/Campaign365Section';
import { PrivacyView } from './components/PrivacyView';
import { StaticExportModal } from './components/StaticExportModal';
import { validateContactForm, toPersianDigits } from './utils/narvanLogic';

import heroVisualImg from './assets/images/narvan_hero_visual_1793962534200.jpg';
import yaadShowcaseImg from './assets/images/yaad_app_showcase_1793962535657.jpg';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'privacy'>('home');
  const [isStaticModalOpen, setIsStaticModalOpen] = useState(false);
  const [storeModal, setStoreModal] = useState<'bazaar' | 'myket' | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactError, setContactError] = useState<string | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    const validation = validateContactForm(contactName, contactInfo, contactMessage);
    if (!validation.valid) {
      setContactError(validation.errorFa ?? 'لطفاً فیلدهای فرم را بررسی کنید.');
      return;
    }
    setContactSubmitted(true);
    setContactName('');
    setContactInfo('');
    setContactMessage('');
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F7F8F5] text-[#111C15]">
      <Navbar
        activePage={activePage}
        onSelectPage={setActivePage}
        onOpenStaticExport={() => setIsStaticModalOpen(true)}
        onOpenStoreModal={(store) => setStoreModal(store)}
      />

      {activePage === 'privacy' ? (
        <main className="flex-1">
          <PrivacyView
            onBackHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenStaticExport={() => setIsStaticModalOpen(true)}
          />
        </main>
      ) : (
        <main className="flex-1">
          {/* 1. HERO SECTION */}
          <section className="py-16 lg:py-24 border-b border-[#DCE2D9]">
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Right Column (RTL): Editorial Value Proposition */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#14532D] mb-4">
                      <span>استودیوی مهندسی نرم‌افزار · NarvanTeam.ir</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span>توسعه چابک موبایل‌محور</span>
                    </div>

                    <h1
                      style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
                      className="font-black text-[#111C15] leading-[1.22] mb-6 headline-balance"
                    >
                      محصولات مینیمال، امن و کاربردی؛ بدون پیچیدگی‌های اضافه.
                    </h1>

                    <p className="text-base sm:text-lg text-[#4A5A50] leading-relaxed mb-8 max-w-2xl">
                      ما در <strong className="text-[#14532D] font-extrabold">تیم نرم‌افزاری نارون</strong> اپلیکیشن‌های بومی و هیبریدی را با <strong className="text-[#111C15]">Capacitor</strong> و تکنولوژی‌های مدرن وب می‌سازیم. تمام چرخه کدنویسی، تست و انتشار ما به صورت چابک، مستقیماً از طریق مرورگر موبایل و پایپ‌لاین‌های خودکار <strong className="text-[#111C15]">GitHub Actions</strong> بدون نیاز به سیستم‌های سنگین انجام می‌شود.
                    </p>
                  </div>

                  {/* Single Primary CTA + Supporting Secondary Action */}
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href="#products"
                        className="px-6 py-3.5 bg-[#D97706] hover:bg-[#B45309] text-white font-extrabold text-sm sm:text-base rounded-xl transition-colors whitespace-nowrap shrink-0 shadow-xs"
                      >
                        معرفی و دانلود اپلیکیشن «یاد»
                      </a>
                      <button
                        type="button"
                        onClick={() => setIsStaticModalOpen(true)}
                        className="px-5 py-3.5 bg-white hover:bg-[#EEF2EC] text-[#14532D] border border-[#DCE2D9] font-bold text-sm sm:text-base rounded-xl transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <FileCode className="w-4 h-4 shrink-0" />
                        <span>دریافت فایل‌های index.html و privacy.html</span>
                      </button>
                    </div>

                    <div className="text-xs text-[#4A5A50] pt-4 border-t border-[#DCE2D9]">
                      <span>سازنده اپلیکیشن «یاد»</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span>معماری ۱۰۰٪ آفلاین و محلی</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span>آماده استقرار روی گیت‌هاب و لیارا</span>
                    </div>
                  </div>
                </div>

                {/* Left Column (RTL): High-Impact Visual Anchor */}
                <div className="lg:col-span-5 flex">
                  <div className="relative w-full rounded-2xl overflow-hidden border border-[#DCE2D9] bg-[#14532D] min-h-[340px] flex flex-col justify-end">
                    {!heroImgFailed ? (
                      <img
                        src={heroVisualImg}
                        alt="تیم نرم‌افزاری نارون — طراحی مینیمال و مهندسی امن"
                        referrerPolicy="no-referrer"
                        onError={() => setHeroImgFailed(true)}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#14532D] via-[#0D381E] to-[#111C15]" />
                    )}

                    {/* Measured Scrim Overlay for guaranteed >=4.5:1 contrast */}
                    <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-7 pt-20 text-white">
                      <p className="text-xs font-bold text-[#FBBF24] mb-1">
                        محصول اول تیم نرم‌افزاری نارون
                      </p>
                      <h2 className="text-2xl font-black mb-2">
                        «یاد؛ یادآور آنچه مهم است.»
                      </h2>
                      <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed mb-4">
                        ترکیب دیتابیس لوکال، هوش مصنوعی آفلاین، یادآورهای مکان‌محور و هشدارهای پس‌زمینه پایدار در یک رابط کاربری مینیمال.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tabular text-[#A7F3D0]">
                        <span>ظرفیت پویش رونمایی: {toPersianDigits(365)} نفر</span>
                        <span aria-hidden="true">·</span>
                        <span>ترافیک ابری: ۰ بایت</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full-Width 4-Column Quantitative Proof Strip Below Hero Split */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#DCE2D9]">
                <div className="bg-white border border-[#DCE2D9] rounded-xl p-5">
                  <p className="text-2xl sm:text-3xl font-black text-[#14532D] font-mono-tabular">
                    ۱۰۰٪ آفلاین
                  </p>
                  <p className="text-xs text-[#4A5A50] mt-1 font-medium">
                    پردازش هوش مصنوعی و ذخیره دیتابیس SQLite روی دستگاه کاربر
                  </p>
                </div>
                <div className="bg-white border border-[#DCE2D9] rounded-xl p-5">
                  <p className="text-2xl sm:text-3xl font-black text-[#D97706] font-mono-tabular">
                    ۳۶۵ حامی
                  </p>
                  <p className="text-xs text-[#4A5A50] mt-1 font-medium">
                    پویش محدود رونمایی با پلن‌های برنزی، نقره‌ای و طلایی
                  </p>
                </div>
                <div className="bg-white border border-[#DCE2D9] rounded-xl p-5">
                  <p className="text-2xl sm:text-3xl font-black text-[#14532D] font-mono-tabular">
                    ۰ سرور واسط
                  </p>
                  <p className="text-xs text-[#4A5A50] mt-1 font-medium">
                    بدون ردیابی موقعیت مکانی و بدون نیاز به ساخت حساب کاربری
                  </p>
                </div>
                <div className="bg-white border border-[#DCE2D9] rounded-xl p-5">
                  <p className="text-2xl sm:text-3xl font-black text-[#111C15] font-mono-tabular">
                    CI/CD موبایلی
                  </p>
                  <p className="text-xs text-[#4A5A50] mt-1 font-medium">
                    توسعه در مرورگر موبایل و بیلد خودکار با GitHub Actions
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PRODUCTS SECTION: YAAD + IN DEVELOPMENT */}
          <YaadSection
            showcaseImgSrc={yaadShowcaseImg}
            onOpenStoreModal={(store) => setStoreModal(store)}
            onJumpToCampaign={() => {
              document
                .getElementById('campaign-365')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 3. 365 LAUNCH CAMPAIGN SECTION */}
          <Campaign365Section />

          {/* 4. AGILE MOBILE-FIRST WORKFLOW SECTION */}
          <section id="workflow" className="py-20 border-b border-[#DCE2D9] bg-[#F7F8F5]">
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="max-w-3xl mb-12">
                <p className="text-sm font-bold text-[#14532D] mb-2">
                  ۰۳. درباره ما و سبک مهندسی نارون
                </p>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111C15] headline-balance leading-tight mb-4">
                  مهندسی چابک از مرورگر موبایل؛ بدون وابستگی به سیستم‌های سنگین.
                </h2>
                <p className="text-base text-[#4A5A50] leading-relaxed">
                  در تیم نرم‌افزاری نارون، ما باور داریم که برای خلق نرم‌افزارهای عالی نیازی به ایستگاه‌های کاری پیچیده نیست. کل خط تولید نرم‌افزار ما به صورت ابری، سبک و خودکار طراحی شده است:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="bg-white border border-[#DCE2D9] rounded-2xl p-7">
                  <Smartphone className="w-6 h-6 text-[#14532D] mb-4" />
                  <h3 className="text-lg font-extrabold text-[#111C15] mb-2">
                    ۰۱. توسعه مستقیم در مرورگر موبایل
                  </h3>
                  <p className="text-sm text-[#4A5A50] leading-relaxed">
                    طراحی رابط کاربری، پیاده‌سازی منطق برنامه و بازبینی کدها مستقیماً از طریق مرورگر موبایل انجام می‌شود؛ این یعنی ما محصول را دقیقاً روی همان بستری می‌سازیم که کاربر نهایی تجربه می‌کند.
                  </p>
                </article>

                <article className="bg-white border border-[#DCE2D9] rounded-2xl p-7">
                  <Layers className="w-6 h-6 text-[#D97706] mb-4" />
                  <h3 className="text-lg font-extrabold text-[#111C15] mb-2">
                    ۰۲. قدرت Capacitor و تکنولوژی‌های وب
                  </h3>
                  <p className="text-sm text-[#4A5A50] leading-relaxed">
                    با بهره‌گیری از استانداردهای مدرن وب و پل ارتباطی Capacitor، ما سرعت توسعه وب را با دسترسی عمیق به APIهای بومی اندروید (سرویس‌های پس‌زمینه، Geofencing و SQLite) ترکیب کرده‌ایم.
                  </p>
                </article>

                <article className="bg-white border border-[#DCE2D9] rounded-2xl p-7">
                  <GitBranch className="w-6 h-6 text-[#14532D] mb-4" />
                  <h3 className="text-lg font-extrabold text-[#111C15] mb-2">
                    ۰۳. بیلد و استقرار با GitHub Actions
                  </h3>
                  <p className="text-sm text-[#4A5A50] leading-relaxed">
                    به محض ثبت تغییرات (Git Push) از روی موبایل، ورک‌فلوهای GitHub Actions به صورت خودکار تست‌ها را اجرا کرده، خروجی امضاشده اندروید را کامپایل می‌کنند و سایت را روی گیت‌هاب و لیارا مستقر می‌سازند.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* 5. CONTACT & STATIC DELIVERABLE CALLOUT */}
          <section id="contact" className="py-20 bg-white border-b border-[#DCE2D9]">
            <div className="mx-auto max-w-[1200px] px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#14532D] mb-2">
                      ۰۴. ارتباط با تیم نرم‌افزاری نارون
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#111C15] mb-4 headline-balance">
                      پیشنهاد، گزارش فنی یا همکاری در پروژه‌های بعدی.
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5A50] leading-relaxed mb-6">
                      اگر درباره اپلیکیشن «یاد»، کمپین رونمایی ۳۶۵ نفره یا معماری توسعه چابک ما با Capacitor و GitHub Actions سوالی دارید، پیام خود را ثبت کنید.
                    </p>

                    <div className="space-y-3 text-sm text-[#4A5A50]">
                      <div>
                        <strong className="text-[#111C15]">دامنه رسمی: </strong>
                        <span className="font-mono-tabular">NarvanTeam.ir</span>
                      </div>
                      <div>
                        <strong className="text-[#111C15]">پست الکترونیک: </strong>
                        <span className="font-mono-tabular">info@narvanteam.ir</span>
                      </div>
                      <div>
                        <strong className="text-[#111C15]">سند حریم خصوصی: </strong>
                        <button
                          type="button"
                          onClick={() => {
                            setActivePage('privacy');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-[#14532D] font-bold hover:underline cursor-pointer"
                        >
                          مشاهده متن حقوقی حریم خصوصی (privacy.html)
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-5 rounded-2xl bg-[#F7F8F5] border border-[#DCE2D9]">
                    <p className="text-xs font-bold text-[#14532D] mb-1">
                      آماده استقرار روی گیت‌هاب و لیارا
                    </p>
                    <p className="text-xs text-[#4A5A50] mb-3">
                      می‌توانید همین حالا کد کامل و یکپارچه دو فایل <code className="font-mono font-bold">index.html</code> و <code className="font-mono font-bold">privacy.html</code> را دریافت کنید.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsStaticModalOpen(true)}
                      className="px-4 py-2 bg-[#14532D] hover:bg-[#0D381E] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      مشاهده و دانلود دو فایل استاتیک
                    </button>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-7">
                  <form
                    onSubmit={handleContactSubmit}
                    noValidate
                    className="bg-[#F7F8F5] border border-[#DCE2D9] rounded-2xl p-8 space-y-4"
                  >
                    <h3 className="text-lg font-extrabold text-[#111C15] mb-2">
                      ارسال پیام مستقیم به تیم نارون
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-bold text-[#111C15] mb-1.5"
                        >
                          نام شما
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="نام و نام خانوادگی"
                          className="w-full rounded-xl bg-white border border-[#DCE2D9] px-3.5 py-2.5 text-sm text-[#111C15] focus:outline-none focus:border-[#14532D]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-info"
                          className="block text-xs font-bold text-[#111C15] mb-1.5"
                        >
                          شماره تماس یا ایمیل
                        </label>
                        <input
                          id="contact-info"
                          type="text"
                          value={contactInfo}
                          onChange={(e) => setContactInfo(e.target.value)}
                          placeholder="09123456789 یا ایمیل"
                          className="w-full rounded-xl bg-white border border-[#DCE2D9] px-3.5 py-2.5 text-sm text-[#111C15] focus:outline-none focus:border-[#14532D]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-bold text-[#111C15] mb-1.5"
                      >
                        متن پیام یا دیدگاه شما
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        placeholder="پیام خود را درباره اپلیکیشن یاد یا همکاری با تیم نارون بنویسید..."
                        className="w-full rounded-xl bg-white border border-[#DCE2D9] px-3.5 py-2.5 text-sm text-[#111C15] focus:outline-none focus:border-[#14532D]"
                      />
                    </div>

                    {contactError && (
                      <p
                        role="alert"
                        className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2"
                      >
                        {contactError}
                      </p>
                    )}

                    {contactSubmitted && (
                      <div
                        role="status"
                        className="text-xs font-bold text-[#14532D] bg-[#ECFDF5] border border-[#A7F3D0] rounded-lg px-3.5 py-2.5 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>پیام شما با موفقیت ثبت شد. تیم نرم‌افزاری نارون در اسرع وقت پاسخگو خواهد بود.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>ارسال پیام به تیم نارون</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* QUIET FOOTER */}
      <footer className="bg-[#112619] text-[#D1FAE5] py-12 border-t border-[#1E3F2B]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#234832]">
            <div>
              <p className="text-lg font-black text-white">
                تیم نرم‌افزاری نارون · NarvanTeam.ir
              </p>
              <p className="text-xs text-[#A7F3D0] mt-1">
                توسعه چابک اپلیکیشن‌های مینیمال، امن و آفلاین با Capacitor و تکنولوژی‌های وب.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-semibold">
              <button
                type="button"
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                صفحه اصلی (index.html)
              </button>
              <button
                type="button"
                onClick={() => {
                  setActivePage('privacy');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                حریم خصوصی (privacy.html)
              </button>
              <a
                href="/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FBBF24] transition-colors inline-flex items-center gap-1"
              >
                <span>فایل استاتیک حریم خصوصی</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsStaticModalOpen(true)}
                className="text-[#FBBF24] hover:underline cursor-pointer"
              >
                دریافت کدهای استاتیک گیت‌هاب و لیارا
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[#86A893]">
            <span>
              © {toPersianDigits(1405)} تمامی حقوق مادی و معنوی برای تیم نرم‌افزاری نارون (NarvanTeam.ir) محفوظ است.
            </span>
            <span>ارتباط مستقیم: info@narvanteam.ir · github.com/NarvanTeam</span>
          </div>
        </div>
      </footer>

      {/* Store Download Modal (Cafe Bazaar / Myket) */}
      {storeModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="store-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
        >
          <div className="bg-white border border-[#DCE2D9] rounded-2xl max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-[#14532D] font-extrabold text-base">
                <ShieldCheck className="w-5 h-5 text-[#D97706]" />
                <h2 id="store-modal-title">
                  دانلود رسمی اپلیکیشن «یاد» از{' '}
                  {storeModal === 'bazaar' ? 'کافه‌بازار' : 'مایکت'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setStoreModal(null)}
                aria-label="بستن پنجره دانلود"
                className="p-1 rounded-lg text-[#4A5A50] hover:text-[#111C15] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#4A5A50] leading-relaxed mb-4">
              نسخه امضاشده و رسمی اپلیکیشن <strong className="text-[#111C15]">«یاد؛ یادآور آنچه مهم است»</strong> (ساخته شده با Capacitor و دیتابیس آفلاین SQLite) از طریق مارکت{' '}
              {storeModal === 'bazaar' ? 'کافه‌بازار' : 'مایکت'} قابل نصب و بروزرسانی است.
            </p>

            <div className="bg-[#F7F8F5] border border-[#DCE2D9] rounded-xl p-4 text-xs space-y-1.5 mb-5 text-[#4A5A50]">
              <div className="flex justify-between">
                <span>شناسه بسته (Package ID):</span>
                <strong className="font-mono text-[#111C15]">ir.narvanteam.yaad</strong>
              </div>
              <div className="flex justify-between">
                <span>نسخه فعلی:</span>
                <strong className="font-mono-tabular text-[#14532D]">۱.۴.۰ (بیلد GitHub Actions)</strong>
              </div>
              <div className="flex justify-between">
                <span>حجم بسته نصبی:</span>
                <strong className="font-mono-tabular text-[#111C15]">۶.۸ مگابایت</strong>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={
                  storeModal === 'bazaar'
                    ? 'https://cafebazaar.ir/app/ir.narvanteam.yaad'
                    : 'https://myket.ir/app/ir.narvanteam.yaad'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs sm:text-sm rounded-xl text-center transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>
                  ورود به صفحه {storeModal === 'bazaar' ? 'کافه‌بازار' : 'مایکت'}
                </span>
              </a>
              <button
                type="button"
                onClick={() => setStoreModal(null)}
                className="py-2.5 px-4 bg-[#EEF2EC] hover:bg-[#DCE2D9] text-[#111C15] font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Static Export Modal (index.html & privacy.html) */}
      <StaticExportModal
        isOpen={isStaticModalOpen}
        onClose={() => setIsStaticModalOpen(false)}
      />
    </div>
  );
}
