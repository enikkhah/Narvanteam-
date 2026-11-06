import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode } from 'lucide-react';
import { STATIC_INDEX_HTML, STATIC_PRIVACY_HTML } from '../utils/staticTemplates';

interface StaticExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaticExportModal: React.FC<StaticExportModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeFile, setActiveFile] = useState<'index.html' | 'privacy.html'>('index.html');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentCode =
    activeFile === 'index.html' ? STATIC_INDEX_HTML : STATIC_PRIVACY_HTML;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCode);
      setCopiedFile(activeFile);
      setTimeout(() => setCopiedFile(null), 2000);
    } catch {
      // Fallback copy
      const textarea = document.createElement('textarea');
      textarea.value = currentCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedFile(activeFile);
      setTimeout(() => setCopiedFile(null), 2000);
    }
  };

  const handleDownload = (filename: 'index.html' | 'privacy.html') => {
    const content = filename === 'index.html' ? STATIC_INDEX_HTML : STATIC_PRIVACY_HTML;
    const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="static-export-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
    >
      <div className="bg-white border border-[#DCE2D9] rounded-2xl max-w-4xl w-full max-h-[88vh] flex flex-col overflow-hidden shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-[#DCE2D9] bg-[#F7F8F5]">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-5 h-5 text-[#14532D]" />
            <h2 id="static-export-title" className="text-base font-extrabold text-[#111C15]">
              فایل‌های نهایی استاتیک آماده استقرار روی گیت‌هاب و لیارا (NarvanTeam.ir)
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن پنجره کدهای استاتیک"
            className="p-1.5 rounded-lg text-[#4A5A50] hover:text-[#111C15] hover:bg-[#DCE2D9]/50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Selector Tabs & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3 bg-[#EEF2EC] border-b border-[#DCE2D9]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFile('index.html')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeFile === 'index.html'
                  ? 'bg-[#14532D] text-white'
                  : 'bg-white text-[#4A5A50] hover:text-[#111C15]'
              }`}
            >
              ۱. فایل index.html (صفحه اصلی با استایل درون‌خطی)
            </button>
            <button
              type="button"
              onClick={() => setActiveFile('privacy.html')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activeFile === 'privacy.html'
                  ? 'bg-[#14532D] text-white'
                  : 'bg-white text-[#4A5A50] hover:text-[#111C15]'
              }`}
            >
              ۲. فایل privacy.html (سند حقوقی حریم خصوصی آفلاین یاد)
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white border border-[#DCE2D9] text-[#14532D] hover:border-[#14532D] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              {copiedFile === activeFile ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>کپی شد!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>کپی کد {activeFile}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleDownload(activeFile)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#D97706] hover:bg-[#B45309] text-white flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>دانلود {activeFile}</span>
            </button>
          </div>
        </div>

        {/* Code Content Viewer */}
        <div className="p-4 bg-[#0D1912] text-[#D1FAE5] overflow-y-auto flex-1 font-mono text-xs leading-relaxed" dir="ltr">
          <pre className="whitespace-pre-wrap break-words">{currentCode}</pre>
        </div>

        {/* Deployment Guide Footer */}
        <div className="px-6 py-3.5 bg-[#F7F8F5] border-t border-[#DCE2D9] flex flex-wrap items-center justify-between gap-2 text-xs text-[#4A5A50]">
          <span>
            هر دو فایل بدون نیاز به باندلر بوده و مستقیماً روی پلتفرم Static لیارا و GitHub Pages قابل بارگذاری هستند.
          </span>
          <a
            href="/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#14532D] hover:underline"
          >
            مشاهده نسخه زنده /privacy.html ←
          </a>
        </div>
      </div>
    </div>
  );
};
