import React from 'react';
import { BookOpen, Star, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';
import { AccessibilityBadgeIcon } from './AccessibilityBadgeIcon';

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slideNumber: number) => void;
  totalStars: number;
  onOpenTeacherGuide: () => void;
  onOpenStudentGuide: () => void;
  onOpenA11y: () => void;
  activeA11yCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  totalStars,
  onOpenTeacherGuide,
  onOpenA11y,
  activeA11yCount,
  soundEnabled,
  onToggleSound
}) => {
  const quickLinks = [
    { slide: 1, label: 'اوتام' },
    { slide: 2, label: 'ڤتا ميسي' },
    { slide: 4, label: 'تلاوة' },
    { slide: 5, label: 'حفظن' },
    { slide: 6, label: 'تجويد' },
    { slide: 8, label: 'کويز' },
    { slide: 10, label: 'سيجيل' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-emerald-900/40 text-slate-100 no-print">
      <a href="#main-content" className="skip-to-content font-jawi">
        ڤينتس ک کاندوغن اوتام
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-6">
        
        {/* Zone 1: Single text wordmark */}
        <button
          onClick={() => {
            soundFx.playClick();
            onSelectSlide(1);
          }}
          className="flex items-center gap-2.5 text-right whitespace-nowrap shrink-0 group focus:outline-none cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors">
            <BookOpen className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="flex flex-col text-right">
            <span className="font-jawi font-bold text-base sm:text-lg text-emerald-300 tracking-wide group-hover:text-emerald-200 transition-colors">
              ميسي منجلاجه سورة القدر
            </span>
            <span className="text-[11px] text-slate-400 font-jawi hidden sm:inline">
              ڤنديديقن إسلام تاهون 5 · EDUP3133
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="ناۏيݢاسي اوتام" className="hidden lg:flex items-center gap-1.5 text-sm font-medium font-jawi">
          {quickLinks.map((item) => {
            const isActive = currentSlide === item.slide;
            return (
              <button
                key={item.slide}
                onClick={() => {
                  soundFx.playClick();
                  onSelectSlide(item.slide);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600/30 text-emerald-300 font-bold border border-emerald-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-900/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: OKU Accessibility, Sound, Stars & Teacher Guide */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* OKU Accessibility Navigation Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenA11y();
            }}
            aria-label="بوک ناۏيݢاسي دان الت اکسيسيبيليتي او.ک.او. (Alt + A)"
            title="ناۏيݢاسي دان الت اکسيسيبيليتي او.ک.او. (Alt + A)"
            className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-100 font-jawi font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition-colors cursor-pointer shrink-0"
          >
            <AccessibilityBadgeIcon className="w-6 h-6 shrink-0" />
            <span>مسرا او.ک.او.</span>
            {activeA11yCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono text-[10px] leading-none">
                {activeA11yCount}
              </span>
            )}
          </button>

          {/* Sound toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) soundFx.playClick();
            }}
            aria-label={soundEnabled ? 'سڽڤکن بويي کسن خاص' : 'اکتيفکن بويي کسن خاص'}
            title={soundEnabled ? 'بويي دأکتيفکن' : 'بويي دسڽڤکن'}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Star Counter */}
          <div
            aria-label={`جمله بينتغ ترکومڤول: ${totalStars}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-950/40 border border-amber-600/30 text-amber-300 text-sm font-medium"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-mono tabular-nums font-bold">{totalStars}</span>
            <span className="font-jawi text-xs text-amber-200/80 hidden sm:inline">بينتغ</span>
          </div>

          {/* Teacher Guide / EDUP3133 Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenTeacherGuide();
            }}
            className="px-3 py-1.5 text-xs font-semibold font-jawi text-emerald-200 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 rounded-lg transition-colors whitespace-nowrap shrink-0 hidden md:flex items-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>نوتا ݢورو دان EDUP3133</span>
          </button>
        </div>

      </div>

      {/* Slide Navigation Progress Bar */}
      <div className="w-full bg-slate-900 h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-l from-emerald-500 via-teal-400 to-amber-400 transition-all duration-300"
          style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
        />
      </div>
    </header>
  );
};
