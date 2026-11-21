import React from 'react';
import { ChevronRight, ChevronLeft, RotateCcw, HelpCircle } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';
import { AccessibilityBadgeIcon } from './AccessibilityBadgeIcon';

interface SlideControllerProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (slide: number) => void;
  onReset: () => void;
  onOpenHelp: () => void;
  onOpenA11y: () => void;
}

export const SlideController: React.FC<SlideControllerProps> = ({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onSelectSlide,
  onReset,
  onOpenHelp,
  onOpenA11y
}) => {
  const slideTitlesJawi = [
    '1. هلامن اوتام',
    '2. اوبجيکتيف دان ڤتا ميسي',
    '3. کنالي سورة',
    '4. ميسي تلاوة',
    '5. ميسي حفظن',
    '6. ڤمبورو تجويد',
    '7. سوسون اية',
    '8. کويز ديݢيتل',
    '9. ڤغهايتن',
    '10. سيجيل ڤنچاڤاين'
  ];

  return (
    <footer className="sticky bottom-0 z-30 bg-slate-950/95 border-t border-emerald-950/80 px-4 py-3 backdrop-blur-md text-slate-200 no-print">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Start controls in RTL: OKU Tools, Help and Reset */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenA11y();
            }}
            aria-label="الت اکسيسيبيليتي دان ناۏيݢاسي او.ک.او."
            title="الت اکسيسيبيليتي دان ناۏيݢاسي او.ک.او."
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 text-xs font-jawi font-bold transition-colors cursor-pointer"
          >
            <AccessibilityBadgeIcon className="w-5 h-5 shrink-0" />
            <span>مسرا او.ک.او.</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenHelp();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-jawi transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">ڤندوان ڤمبلاجرن</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onReset();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 border border-slate-800 text-xs font-jawi transition-colors cursor-pointer"
            title="مولا سمولا ميسي"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">مولا سمولا</span>
          </button>
        </div>

        {/* Center: Slide indicator & mini dot / numbered stepper */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 max-w-full">
          {Array.from({ length: totalSlides }, (_, i) => i + 1).map((s) => {
            const isCurrent = s === currentSlide;
            return (
              <button
                key={s}
                onClick={() => {
                  soundFx.playClick();
                  onSelectSlide(s);
                }}
                title={slideTitlesJawi[s - 1]}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-600 text-white shadow-md ring-2 ring-emerald-400 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Prev-Next buttons in RTL (Right arrow = Previous, Left arrow = Next) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundFx.playClick();
              onPrev();
            }}
            disabled={currentSlide === 1}
            className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-jawi font-medium transition-all ${
              currentSlide === 1
                ? 'opacity-40 cursor-not-allowed bg-slate-900 text-slate-600 border border-slate-800'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 cursor-pointer'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
            <span>سبلومڽ</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onNext();
            }}
            disabled={currentSlide === totalSlides}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-jawi font-bold transition-all ${
              currentSlide === totalSlides
                ? 'opacity-40 cursor-not-allowed bg-slate-900 text-slate-600 border border-slate-800'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm hover:shadow-emerald-600/30 cursor-pointer'
            }`}
          >
            <span>ستروسڽ</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
