import React, { useState } from 'react';
import { Star, Eye, EyeOff, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';
import { QADR_VERSES } from '../../data/qadrData';
import { soundFx } from '../../utils/soundEffects';

interface Slide5HafazanProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
}

export const Slide5Hafazan: React.FC<Slide5HafazanProps> = ({ onEarnStar, hasEarnedStar }) => {
  const [activeTab, setActiveTab] = useState<'fill_blanks' | 'connect_half' | 'flashcard'>('fill_blanks');
  
  // Fill in blanks state
  const fillQuestions = [
    {
      id: 1,
      verseNum: 1,
      before: 'إِنَّآ أَنزَلْنَـٰهُ فِى',
      after: 'ٱلْقَدْرِ',
      correctWord: 'لَيْلَةِ',
      options: ['لَيْلَةِ', 'شَهْرٍ', 'ٱلْمَلَـٰٓئِكَةُ'],
      selectedWord: null as string | null
    },
    {
      id: 2,
      verseNum: 2,
      before: 'وَمَآ أَدْرَىٰكَ مَا',
      after: 'ٱلْقَدْرِ',
      correctWord: 'لَيْلَةُ',
      options: ['أَلْفِ', 'لَيْلَةُ', 'مَطْلَعِ'],
      selectedWord: null as string | null
    },
    {
      id: 3,
      verseNum: 3,
      before: 'لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ',
      after: 'شَهْرٍ',
      correctWord: 'أَلْفِ',
      options: ['كُلِّ', 'أَلْفِ', 'رَبِّهِم'],
      selectedWord: null as string | null
    },
    {
      id: 4,
      verseNum: 4,
      before: 'تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن',
      after: 'أَمْرٍ',
      correctWord: 'كُلِّ',
      options: ['سَلَـٰمٌ', 'فِى', 'كُلِّ'],
      selectedWord: null as string | null
    },
    {
      id: 5,
      verseNum: 5,
      before: 'سَلَـٰمٌ هِىَ حَتَّىٰ',
      after: 'ٱلْفَجْرِ',
      correctWord: 'مَطْلَعِ',
      options: ['مَطْلَعِ', 'لَيْلَةِ', 'أَلْفِ'],
      selectedWord: null as string | null
    }
  ];

  const [questions, setQuestions] = useState(fillQuestions);
  const [isCheckMode, setIsCheckMode] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hiddenVerses, setHiddenVerses] = useState<number[]>([]);

  const handleSelectOption = (qId: number, opt: string) => {
    soundFx.playClick();
    setQuestions((prev) =>
      prev.map((q) => (q.id === qId ? { ...q, selectedWord: opt } : q))
    );
  };

  const handleCheckAnswers = () => {
    setIsCheckMode(true);
    const allCorrect = questions.every((q) => q.selectedWord === q.correctWord);
    if (allCorrect) {
      soundFx.playSuccess();
      if (!hasEarnedStar) {
        onEarnStar();
      }
    } else {
      soundFx.playTryAgain();
    }
  };

  const handleReset = () => {
    soundFx.playClick();
    setQuestions(fillQuestions);
    setIsCheckMode(false);
    setShowHint(false);
  };

  const toggleHideVerse = (num: number) => {
    soundFx.playClick();
    if (hiddenVerses.includes(num)) {
      setHiddenVerses(hiddenVerses.filter((n) => n !== num));
    } else {
      setHiddenVerses([...hiddenVerses, num]);
    }
  };

  const correctCount = questions.filter((q) => q.selectedWord === q.correctWord).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>سلايد 5 · ميسي حفظن سورة القدر</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          ميسي حفظن مغيکوت اوروتن
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          لڠکڤکن کليمه يغ دکوسوغکن اتاو اوجي حفظن اندا سچارا کنديري!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('fill_blanks');
          }}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'fill_blanks'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          1. لڠکڤکن تمڤت کوسوغ
        </button>
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTab('flashcard');
          }}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'flashcard'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
          }`}
        >
          2. اوجين حفظن کنديري (سمبويي دان ليهت)
        </button>
      </div>

      {/* TAB 1: FILL IN THE BLANKS */}
      {activeTab === 'fill_blanks' && (
        <div className="space-y-4">
          
          {/* Controls Bar */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-md">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCheckAnswers}
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>سيمق جواڤن</span>
              </button>

              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>چوبا لاݢي</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setShowHint(!showHint);
                }}
                className="px-3.5 py-2 rounded-lg bg-amber-950/60 hover:bg-amber-900 border border-amber-600/40 text-amber-300 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <span>{showHint ? 'سمبوييکن ڤتونجوق' : 'بنتوان ڤتونجوق'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">کماجوان:</span>
              <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-amber-300 font-mono font-bold">
                {questions.filter((q) => q.selectedWord !== null).length} / 5 دجواب
              </span>
              {isCheckMode && (
                <span className={`px-2.5 py-1 rounded font-bold font-mono ${correctCount === 5 ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-500' : 'bg-amber-900/40 text-amber-300'}`}>
                  {correctCount} / 5 بتول
                </span>
              )}
            </div>
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-700/50 text-xs sm:text-sm text-amber-200 space-y-1">
              <strong>ڤتونجوق حفظن:</strong>
              <p>
                کليمه 1: <span className="font-quran text-base">لَيْلَةِ</span> (اية 1) · کليمه 2: <span className="font-quran text-base">لَيْلَةُ</span> (اية 2) · کليمه 3: <span className="font-quran text-base">أَلْفِ</span> (اية 3) · کليمه 4: <span className="font-quran text-base">كُلِّ</span> (اية 4) · کليمه 5: <span className="font-quran text-base">مَطْلَعِ</span> (اية 5).
              </p>
            </div>
          )}

          {/* 5 Questions */}
          <div className="space-y-3">
            {questions.map((q) => {
              const isCorrect = isCheckMode && q.selectedWord === q.correctWord;
              const isWrong = isCheckMode && q.selectedWord !== null && q.selectedWord !== q.correctWord;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect
                      ? 'bg-emerald-950/40 border-emerald-500'
                      : isWrong
                      ? 'bg-rose-950/30 border-rose-600'
                      : 'bg-slate-900/70 border-slate-800'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Verse display with blank box */}
                    <div className="flex items-center gap-2 font-quran text-xl sm:text-2xl text-slate-100 flex-wrap" dir="rtl">
                      <span className="w-7 h-7 rounded-full bg-slate-800 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {q.verseNum}
                      </span>
                      <span>{q.before}</span>
                      
                      {/* Blank container */}
                      <span
                        className={`inline-block min-w-[100px] px-3 py-1 rounded-lg border-2 border-dashed text-center font-bold text-xl sm:text-2xl ${
                          q.selectedWord
                            ? isCorrect
                              ? 'border-emerald-400 bg-emerald-900/60 text-emerald-200'
                              : isWrong
                              ? 'border-rose-400 bg-rose-900/60 text-rose-200'
                              : 'border-amber-400 bg-slate-950 text-amber-300'
                            : 'border-slate-600 bg-slate-950/60 text-slate-500'
                        }`}
                      >
                        {q.selectedWord ? q.selectedWord : '.......'}
                      </span>

                      <span>{q.after}</span>
                    </div>

                    {/* Multiple-choice Word Chips */}
                    <div className="flex items-center gap-2 self-end md:self-center" dir="rtl">
                      {q.options.map((opt) => {
                        const isSelected = q.selectedWord === opt;
                        return (
                          <button
                            key={opt}
                            onClick={() => handleSelectOption(q.id, opt)}
                            className={`px-3.5 py-1.5 rounded-xl font-quran text-lg transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-400 text-slate-950 font-bold shadow-md scale-105 ring-2 ring-amber-300'
                                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Success Banner */}
          {isCheckMode && correctCount === 5 && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-900/80 via-teal-900/80 to-emerald-900/80 border border-emerald-400 text-center space-y-2 shadow-xl animate-fade-in">
              <div className="text-2xl font-bold text-amber-300">
                تهنيءه! سموا جواڤن اندا بتول!
              </div>
              <p className="text-xs sm:text-sm text-emerald-100">
                اندا تله مغحفظ کليمه کونچي سورة القدر دغن چمرلغ! اندا ممڤراوليه 1 بينتغ کجاءين!
              </p>
            </div>
          )}

        </div>
      )}

      {/* TAB 2: SELF TEST FLASHCARDS (HIDE / REVEAL) */}
      {activeTab === 'flashcard' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs sm:text-sm text-slate-300">
              تکن ايکون مات اونتوق مڽمبوييکن اية، کمدين باچ درڤد ايغاتن دان سيمق!
            </span>
            <button
              onClick={() => {
                soundFx.playClick();
                setHiddenVerses(hiddenVerses.length === 5 ? [] : [1, 2, 3, 4, 5]);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-amber-300 font-bold transition-colors cursor-pointer"
            >
              {hiddenVerses.length === 5 ? 'تونجوق سموا اية' : 'سمبوييکن سموا اية'}
            </button>
          </div>

          <div className="space-y-3">
            {QADR_VERSES.map((verse) => {
              const isHidden = hiddenVerses.includes(verse.number);
              return (
                <div
                  key={verse.number}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="w-8 h-8 rounded-full bg-slate-800 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {verse.number}
                    </span>

                    {isHidden ? (
                      <div className="text-sm sm:text-base text-slate-400 flex-1">
                        [ اية دسمبوييکن — سيلا باچ درڤد حفظن ]
                      </div>
                    ) : (
                      <div className="font-quran text-2xl sm:text-3xl text-slate-100 flex-1" dir="rtl">
                        {verse.arabicText}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleHideVerse(verse.number)}
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer shrink-0"
                    title={isHidden ? 'تونجوق اية' : 'سمبوييکن اية'}
                  >
                    {isHidden ? <Eye className="w-5 h-5 text-amber-400" /> : <EyeOff className="w-5 h-5 text-slate-400" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
