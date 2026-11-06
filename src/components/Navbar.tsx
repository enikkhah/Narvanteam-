import React from 'react';

interface NavbarProps {
  activePage: 'home' | 'privacy';
  onSelectPage: (page: 'home' | 'privacy') => void;
  onOpenStaticExport: () => void;
  onOpenStoreModal: (store: 'bazaar' | 'myket') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onSelectPage,
  onOpenStaticExport,
  onOpenStoreModal
}) => {
  const handleNavJump = (sectionId: string) => {
    if (activePage !== 'home') {
      onSelectPage('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#DCE2D9] bg-[#F7F8F5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg font-extrabold tracking-tight text-[#14532D] whitespace-nowrap shrink-0"
        >
          تیم نرم‌افزاری نارون
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="ناوبری اصلی"
          className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#4A5A50]"
        >
          <button
            type="button"
            onClick={() => handleNavJump('products')}
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            محصولات
          </button>
          <button
            type="button"
            onClick={() => handleNavJump('campaign-365')}
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            پویش ۳۶۵
          </button>
          <button
            type="button"
            onClick={() => handleNavJump('workflow')}
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            معماری چابک
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectPage(activePage === 'privacy' ? 'home' : 'privacy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activePage === 'privacy'
                ? 'text-[#14532D] underline underline-offset-8 decoration-2'
                : 'hover:text-[#14532D]'
            }`}
          >
            حریم خصوصی
          </button>
          <button
            type="button"
            onClick={onOpenStaticExport}
            className="hover:text-[#14532D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            خروجی استاتیک
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => onOpenStoreModal('bazaar')}
            className="px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#D97706] hover:bg-[#B45309] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            دانلود اپلیکیشن یاد
          </button>
        </div>
      </div>
    </header>
  );
};
