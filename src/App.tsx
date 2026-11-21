/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { SlideController } from './components/SlideController';
import { TeacherGuideModal } from './components/TeacherGuideModal';
import { StudentHelpModal } from './components/StudentHelpModal';
import { AccessibilityDrawer } from './components/AccessibilityDrawer';
import { AccessibilityBadgeIcon } from './components/AccessibilityBadgeIcon';

import { Slide1Hero } from './components/slides/Slide1Hero';
import { Slide2Objectives } from './components/slides/Slide2Objectives';
import { Slide3Intro } from './components/slides/Slide3Intro';
import { Slide4Tilawah } from './components/slides/Slide4Tilawah';
import { Slide5Hafazan } from './components/slides/Slide5Hafazan';
import { Slide6Tajwid } from './components/slides/Slide6Tajwid';
import { Slide7SusunAyat } from './components/slides/Slide7SusunAyat';
import { Slide8Kuiz } from './components/slides/Slide8Kuiz';
import { Slide9Penghayatan } from './components/slides/Slide9Penghayatan';
import { Slide10Penutup } from './components/slides/Slide10Penutup';
import { soundFx, SoundCueType } from './utils/soundEffects';
import { AccessibilitySettings, DEFAULT_A11Y_SETTINGS } from './types/accessibility';

const A11Y_STORAGE_KEY = 'qadr_a11y_settings';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalStars, setTotalStars] = useState(1); // 1 starter star for launching mission
  const [completedSlides, setCompletedSlides] = useState<number[]>([1]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isA11yOpen, setIsA11yOpen] = useState(false);

  // OKU Accessibility Settings
  const [a11ySettings, setA11ySettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem(A11Y_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_A11Y_SETTINGS, ...JSON.parse(saved) };
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_A11Y_SETTINGS;
  });

  const [readingGuideY, setReadingGuideY] = useState<number>(240);
  const [visualCueMessage, setVisualCueMessage] = useState<{ text: string; tone: 'success' | 'tryAgain' } | null>(null);

  // Student data
  const [studentName, setStudentName] = useState('احمد حاذق');
  const [quizScore, setQuizScore] = useState(5);
  const [reflectionChoice, setReflectionChoice] = useState('ساي سوده فهم');
  const [reflectionNote, setReflectionNote] = useState('');

  const totalSlides = 10;

  // Sync sound setting
  useEffect(() => {
    soundFx.setEnabled(soundEnabled);
  }, [soundEnabled]);

  // Apply accessibility classes and persist preferences
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-text-scale', String(a11ySettings.textScaleStep));
    root.setAttribute('data-text-spacing', String(a11ySettings.spacingStep));
    root.classList.toggle('a11y-invert', a11ySettings.invertColours);
    root.classList.toggle('a11y-grey-hues', a11ySettings.greyHues);
    root.classList.toggle('a11y-underline-links', a11ySettings.underlineLinks);
    root.classList.toggle('a11y-big-cursor', a11ySettings.bigCursor);

    try {
      localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(a11ySettings));
    } catch {
      // ignore storage errors
    }
  }, [a11ySettings]);

  // Reading guide pointer tracker
  useEffect(() => {
    if (!a11ySettings.readingGuide) return;
    const handlePointerMove = (e: PointerEvent) => {
      setReadingGuideY(e.clientY);
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [a11ySettings.readingGuide]);

  // Visual sound cues for hearing-impaired OKU learners
  useEffect(() => {
    if (!a11ySettings.visualAlerts) return;
    let timeoutId: number | undefined;

    const handleCue = (e: Event) => {
      const customEvent = e as CustomEvent<{ type: SoundCueType }>;
      const type = customEvent.detail?.type;
      if (type === 'success') {
        setVisualCueMessage({ text: '✓ تهنيءه! جواڤن بتول دان کماجوان دچاتت.', tone: 'success' });
      } else if (type === 'fanfare') {
        setVisualCueMessage({ text: '★ تهنيءه! ميسي سلساي دغن چمرلغ!', tone: 'success' });
      } else if (type === 'tryAgain') {
        setVisualCueMessage({ text: '↻ چوبا لاݢي! اندا بوليه ملاکوکنڽ.', tone: 'tryAgain' });
      }
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setVisualCueMessage(null), 3200);
    };

    window.addEventListener('a11y-sound-cue', handleCue);
    return () => {
      window.removeEventListener('a11y-sound-cue', handleCue);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [a11ySettings.visualAlerts]);

  const markSlideCompleted = useCallback((slideNum: number) => {
    setCompletedSlides((prev) => (prev.includes(slideNum) ? prev : [...prev, slideNum]));
  }, []);

  const handleEarnStar = () => {
    setTotalStars((prev) => prev + 1);
    markSlideCompleted(currentSlide);
  };

  const handleNavigateSlide = useCallback(
    (slideNum: number) => {
      if (slideNum >= 1 && slideNum <= totalSlides) {
        setCurrentSlide(slideNum);
        markSlideCompleted(slideNum);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [markSlideCompleted]
  );

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      handleNavigateSlide(currentSlide + 1);
    }
  }, [currentSlide, handleNavigateSlide]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 1) {
      handleNavigateSlide(currentSlide - 1);
    }
  }, [currentSlide, handleNavigateSlide]);

  // Keyboard Accessibility Shortcuts: Alt+A opens OKU tools; ArrowLeft/Right navigates RTL slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsA11yOpen((prev) => !prev);
        return;
      }

      if (!a11ySettings.keyboardNav) return;
      if (isTeacherModalOpen || isStudentModalOpen || isA11yOpen) return;

      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      // In RTL layout: Left arrow moves forward (next), Right arrow moves backward (prev)
      if (e.key === 'ArrowLeft') {
        handleNext();
      } else if (e.key === 'ArrowRight') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [a11ySettings.keyboardNav, isTeacherModalOpen, isStudentModalOpen, isA11yOpen, handleNext, handlePrev]);

  const handleReset = () => {
    if (window.confirm('مولا سمولا ميسي؟ ادکه اندا ايغين مغولغ سمولا کسلوروهن ميسي؟')) {
      setCurrentSlide(1);
      setTotalStars(1);
      setCompletedSlides([1]);
      setQuizScore(0);
      soundFx.playClick();
    }
  };

  // Count active visual/motor/hearing accessibility options (excluding default keyboardNav)
  const activeA11yCount =
    (a11ySettings.textScaleStep !== 0 ? 1 : 0) +
    (a11ySettings.spacingStep !== 0 ? 1 : 0) +
    (a11ySettings.invertColours ? 1 : 0) +
    (a11ySettings.greyHues ? 1 : 0) +
    (a11ySettings.underlineLinks ? 1 : 0) +
    (a11ySettings.bigCursor ? 1 : 0) +
    (a11ySettings.readingGuide ? 1 : 0) +
    (a11ySettings.visualAlerts ? 1 : 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-jawi selection:bg-emerald-500 selection:text-white" dir="rtl">
      
      {/* Screen-reader live region for slide updates */}
      <div className="sr-only" aria-live="polite">
        سلايد {currentSlide} درڤد {totalSlides}
      </div>

      {/* Horizontal Reading Guide Ruler (for Dyslexia / Low-Vision Focus) */}
      {a11ySettings.readingGuide && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 z-40 h-14 border-y-2 border-amber-400/70 bg-amber-400/10 no-print"
          style={{ top: Math.max(0, readingGuideY - 28) }}
        />
      )}

      {/* Visual Sound Cue Banner (for Hearing-Impaired OKU) */}
      {a11ySettings.visualAlerts && visualCueMessage && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border-2 shadow-2xl font-jawi font-bold text-sm sm:text-base no-print ${
            visualCueMessage.tone === 'success'
              ? 'bg-emerald-950 border-emerald-400 text-emerald-200'
              : 'bg-amber-950 border-amber-400 text-amber-200'
          }`}
        >
          {visualCueMessage.text}
        </div>
      )}

      {/* Top Bar Contract Compliant Navigation */}
      <Navbar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={handleNavigateSlide}
        totalStars={totalStars}
        onOpenTeacherGuide={() => setIsTeacherModalOpen(true)}
        onOpenStudentGuide={() => setIsStudentModalOpen(true)}
        onOpenA11y={() => setIsA11yOpen(true)}
        activeA11yCount={activeA11yCount}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      {/* Main Slide Interactive Stage */}
      <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col justify-center focus:outline-none">
        {currentSlide === 1 && (
          <Slide1Hero
            onStartMission={() => handleNavigateSlide(2)}
            onOpenHelp={() => setIsStudentModalOpen(true)}
            onOpenTeacher={() => setIsTeacherModalOpen(true)}
          />
        )}

        {currentSlide === 2 && (
          <Slide2Objectives
            onNavigateSlide={handleNavigateSlide}
            completedSlides={completedSlides}
          />
        )}

        {currentSlide === 3 && (
          <Slide3Intro
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(3)}
          />
        )}

        {currentSlide === 4 && (
          <Slide4Tilawah
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(4)}
          />
        )}

        {currentSlide === 5 && (
          <Slide5Hafazan
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(5)}
          />
        )}

        {currentSlide === 6 && (
          <Slide6Tajwid
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(6)}
          />
        )}

        {currentSlide === 7 && (
          <Slide7SusunAyat
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(7)}
            onNextSlide={() => handleNavigateSlide(8)}
          />
        )}

        {currentSlide === 8 && (
          <Slide8Kuiz
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(8)}
            onUpdateQuizScore={(score) => setQuizScore(score)}
            onNextSlide={() => handleNavigateSlide(9)}
          />
        )}

        {currentSlide === 9 && (
          <Slide9Penghayatan
            onEarnStar={handleEarnStar}
            hasEarnedStar={completedSlides.includes(9)}
            onSaveReflection={(choice, note) => {
              setReflectionChoice(choice);
              setReflectionNote(note);
            }}
            onNextSlide={() => handleNavigateSlide(10)}
          />
        )}

        {currentSlide === 10 && (
          <Slide10Penutup
            totalStars={totalStars}
            quizScore={quizScore}
            completedSlides={completedSlides}
            studentName={studentName}
            onUpdateStudentName={(name) => setStudentName(name)}
            onRestartAll={handleReset}
            onGoHome={() => handleNavigateSlide(1)}
            reflectionChoice={reflectionChoice}
          />
        )}
      </main>

      {/* Presentation Bottom Stepper Controls */}
      <SlideController
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectSlide={handleNavigateSlide}
        onReset={handleReset}
        onOpenHelp={() => setIsStudentModalOpen(true)}
        onOpenA11y={() => setIsA11yOpen(true)}
      />

      {/* Floating Circular OKU Accessibility Widget Button */}
      <button
        onClick={() => {
          soundFx.playClick();
          setIsA11yOpen(true);
        }}
        aria-label="بوک الت اکسيسيبيليتي او.ک.او. (Alt + A)"
        title="ڤيليهن اکسيسيبيليتي او.ک.او. (Alt + A)"
        className="fixed bottom-20 left-5 z-40 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer no-print focus:outline-none focus:ring-4 focus:ring-amber-400"
      >
        <AccessibilityBadgeIcon className="w-14 h-14 drop-shadow-lg" />
        {activeA11yCount > 0 && (
          <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-mono text-xs font-black flex items-center justify-center border-2 border-slate-950 shadow">
            {activeA11yCount}
          </span>
        )}
      </button>

      {/* OKU Accessibility & Easy Navigation Drawer */}
      <AccessibilityDrawer
        isOpen={isA11yOpen}
        onClose={() => setIsA11yOpen(false)}
        settings={a11ySettings}
        onUpdateSettings={setA11ySettings}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onSelectSlide={handleNavigateSlide}
        onPrevSlide={handlePrev}
        onNextSlide={handleNext}
      />

      {/* Teacher's Guide & EDUP3133 Pedagogical Documentation Modal */}
      <TeacherGuideModal
        isOpen={isTeacherModalOpen}
        onClose={() => setIsTeacherModalOpen(false)}
      />

      {/* Student Guide / Tutorial Modal */}
      <StudentHelpModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
      />

    </div>
  );
}
