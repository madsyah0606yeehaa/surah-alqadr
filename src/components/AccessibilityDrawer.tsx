import React, { useEffect, useState } from 'react';
import {
  X,
  RotateCw,
  ZoomIn,
  ZoomOut,
  ArrowUpDown,
  Minimize2,
  Contrast,
  Pipette,
  Underline,
  MousePointer,
  Equal,
  Volume2,
  Pause,
  Ear,
  Keyboard,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { AccessibilitySettings, DEFAULT_A11Y_SETTINGS } from '../types/accessibility';
import { soundFx } from '../utils/soundEffects';

interface AccessibilityDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onUpdateSettings: (next: AccessibilitySettings) => void;
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slide: number) => void;
  onPrevSlide: () => void;
  onNextSlide: () => void;
}

export const AccessibilityDrawer: React.FC<AccessibilityDrawerProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  currentSlide,
  totalSlides,
  onSelectSlide,
  onPrevSlide,
  onNextSlide
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!isOpen) return null;

  const handleReset = () => {
    soundFx.playClick();
    if (speechSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    onUpdateSettings(DEFAULT_A11Y_SETTINGS);
  };

  const adjustTextScale = (delta: number) => {
    soundFx.playClick();
    const next = Math.max(-1, Math.min(3, settings.textScaleStep + delta));
    onUpdateSettings({ ...settings, textScaleStep: next });
  };

  const adjustSpacing = (delta: number) => {
    soundFx.playClick();
    const next = Math.max(-1, Math.min(2, settings.spacingStep + delta));
    onUpdateSettings({ ...settings, spacingStep: next });
  };

  const toggleBool = (key: 'invertColours' | 'greyHues' | 'underlineLinks' | 'bigCursor' | 'readingGuide' | 'visualAlerts' | 'keyboardNav') => {
    soundFx.playClick();
    onUpdateSettings({ ...settings, [key]: !settings[key] });
  };

  const handleReadSlideAloud = () => {
    if (!speechSupported) return;
    soundFx.playClick();

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const mainEl = document.getElementById('main-content');
    const rawText = mainEl ? mainEl.innerText : '';
    const cleanedText = rawText.replace(/\s+/g, ' ').trim();
    if (!cleanedText) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(cleanedText.slice(0, 1200));
    const voices = window.speechSynthesis.getVoices();
    const malayVoice =
      voices.find((v) => v.lang.toLowerCase().startsWith('ms')) ||
      voices.find((v) => v.lang.toLowerCase().startsWith('id'));
    if (malayVoice) {
      utterance.voice = malayVoice;
      utterance.lang = malayVoice.lang;
    } else {
      utterance.lang = 'ms-MY';
    }
    utterance.rate = 0.92;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const textPercentMap: Record<number, string> = {
    '-1': '90%',
    0: '100%',
    1: '115%',
    2: '130%',
    3: '145%'
  };

  const menuRows = [
    {
      id: 'inc-text',
      label: `بسركن سايز توليسن (${textPercentMap[settings.textScaleStep] || '100%'})`,
      icon: ZoomIn,
      active: settings.textScaleStep > 0,
      onClick: () => adjustTextScale(1)
    },
    {
      id: 'dec-text',
      label: 'کچيلكن سايز توليسن',
      icon: ZoomOut,
      active: settings.textScaleStep < 0,
      onClick: () => adjustTextScale(-1)
    },
    {
      id: 'inc-space',
      label: 'لواسكن جارق تيكس',
      icon: ArrowUpDown,
      active: settings.spacingStep > 0,
      onClick: () => adjustSpacing(1)
    },
    {
      id: 'dec-space',
      label: 'راڤتكن جارق تيكس',
      icon: Minimize2,
      active: settings.spacingStep < 0,
      onClick: () => adjustSpacing(-1)
    },
    {
      id: 'invert',
      label: 'سوغسغكن ورنا',
      icon: Contrast,
      active: settings.invertColours,
      onClick: () => toggleBool('invertColours')
    },
    {
      id: 'grey',
      label: 'رونا کلابو',
      icon: Pipette,
      active: settings.greyHues,
      onClick: () => toggleBool('greyHues')
    },
    {
      id: 'underline',
      label: 'ݢاريس باوه ڤاوتن',
      icon: Underline,
      active: settings.underlineLinks,
      onClick: () => toggleBool('underlineLinks')
    },
    {
      id: 'cursor',
      label: 'کورسور بسر',
      icon: MousePointer,
      active: settings.bigCursor,
      onClick: () => toggleBool('bigCursor')
    },
    {
      id: 'guide',
      label: 'ڤندوان ممباچ',
      icon: Equal,
      active: settings.readingGuide,
      onClick: () => toggleBool('readingGuide')
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-end bg-black/60 backdrop-blur-[2px] no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="a11y-options-title"
    >
      {/* Backdrop */}
      <div className="flex-1 h-full" onClick={onClose} aria-hidden="true" />

      {/* Crisp Vertical Accessibility Options Panel */}
      <div
        className="w-80 sm:w-96 h-full bg-white text-slate-800 shadow-2xl flex flex-col overflow-hidden border-r border-slate-200 font-jawi"
        dir="rtl"
      >
        {/* Top Header: Close (Red X), Title, Reset (Blue Refresh) */}
        <div className="px-5 py-4 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            aria-label="توتوڤ ڤيليهن اکسيسيبيليتي"
            title="توتوڤ"
            className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          <h2 id="a11y-options-title" className="font-bold text-lg text-slate-900">
            ڤيليهن اکسيسيبيليتي
          </h2>

          <button
            onClick={handleReset}
            aria-label="سيت سمولا ڤيليهن اکسيسيبيليتي"
            title="سيت سمولا"
            className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors cursor-pointer"
          >
            <RotateCw className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Scrollable List of Tools */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-slate-200 border-b border-slate-200">
            {menuRows.map((row) => {
              const IconComp = row.icon;
              return (
                <button
                  key={row.id}
                  onClick={row.onClick}
                  aria-pressed={row.active}
                  className={`w-full px-6 py-4 flex items-center gap-4 text-right transition-colors cursor-pointer ${
                    row.active
                      ? 'bg-[#1a3668] text-white font-semibold'
                      : 'bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <IconComp
                    className={`w-5 h-5 shrink-0 ${
                      row.active ? 'text-yellow-400' : 'text-slate-600'
                    }`}
                  />
                  <span className="text-base">{row.label}</span>
                </button>
              );
            })}
          </div>

          {/* Compact OKU Navigation, Voice & Hearing Controls */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>ناۏيݢاسي دان سوارا او.ک.او.</span>
              <span className="text-[11px] text-slate-500 font-mono">
                سلايد {currentSlide}/{totalSlides}
              </span>
            </div>

            {/* Prev / Next Big Slide Buttons (RTL) */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onPrevSlide();
                }}
                disabled={currentSlide === 1}
                className={`py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 border transition-colors ${
                  currentSlide === 1
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-xs cursor-pointer'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
                <span>سلايد سبلومڽ</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onNextSlide();
                }}
                disabled={currentSlide === totalSlides}
                className={`py-2.5 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 border transition-colors ${
                  currentSlide === totalSlides
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400 border-slate-200'
                    : 'bg-[#1a3668] hover:bg-[#142a52] text-white border-[#1a3668] shadow-xs cursor-pointer'
                }`}
              >
                <span>سلايد ستروسڽ</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Slide Number Buttons */}
            <div className="grid grid-cols-5 gap-1.5">
              {Array.from({ length: totalSlides }, (_, idx) => idx + 1).map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    soundFx.playClick();
                    onSelectSlide(s);
                  }}
                  aria-label={`ڤرݢي ک سلايد ${s}`}
                  className={`py-1.5 rounded-md font-mono text-xs font-bold border transition-colors cursor-pointer ${
                    currentSlide === s
                      ? 'bg-[#1a3668] text-yellow-300 border-[#1a3668]'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Read Aloud, Visual Alerts, Keyboard Nav */}
            <div className="space-y-1.5 pt-1">
              {speechSupported && (
                <button
                  onClick={handleReadSlideAloud}
                  className={`w-full px-3.5 py-2.5 rounded-lg border font-semibold text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    isSpeaking
                      ? 'bg-[#1a3668] text-white border-[#1a3668]'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {isSpeaking ? (
                      <Pause className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-slate-600" />
                    )}
                    <span>{isSpeaking ? 'هنتيكن سوارا' : 'باچ تيكس سلايد اين'}</span>
                  </div>
                  <span className="text-[10px] opacity-75">سوارا</span>
                </button>
              )}

              <button
                onClick={() => toggleBool('visualAlerts')}
                aria-pressed={settings.visualAlerts}
                className={`w-full px-3.5 py-2.5 rounded-lg border font-semibold text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  settings.visualAlerts
                    ? 'bg-[#1a3668] text-white border-[#1a3668]'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Ear className={`w-4 h-4 ${settings.visualAlerts ? 'text-yellow-400' : 'text-slate-600'}`} />
                  <span>اشارت ۏيسوال بويي</span>
                </div>
                <span className="text-[10px] opacity-75">ساري کات</span>
              </button>

              <button
                onClick={() => toggleBool('keyboardNav')}
                aria-pressed={settings.keyboardNav}
                className={`w-full px-3.5 py-2.5 rounded-lg border font-semibold text-xs flex items-center justify-between transition-colors cursor-pointer ${
                  settings.keyboardNav
                    ? 'bg-[#1a3668] text-white border-[#1a3668]'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Keyboard className={`w-4 h-4 ${settings.keyboardNav ? 'text-yellow-400' : 'text-slate-600'}`} />
                  <span>ناۏيݢاسي ڤاڤن کكونچي (← / →)</span>
                </div>
                <span className="text-[10px] opacity-75">کكونچي</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
