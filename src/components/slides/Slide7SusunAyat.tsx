import React, { useState } from 'react';
import { ArrowUp, ArrowDown, CheckCircle2, RotateCcw, HelpCircle, Star, Sparkles, ArrowLeft } from 'lucide-react';
import { QADR_VERSES } from '../../data/qadrData';
import { soundFx } from '../../utils/soundEffects';

interface Slide7SusunAyatProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
  onNextSlide: () => void;
}

export const Slide7SusunAyat: React.FC<Slide7SusunAyatProps> = ({
  onEarnStar,
  hasEarnedStar,
  onNextSlide
}) => {
  // Scramble the initial order: e.g. 3, 1, 5, 2, 4
  const initialItems = [
    QADR_VERSES[2], // Ayat 3
    QADR_VERSES[0], // Ayat 1
    QADR_VERSES[4], // Ayat 5
    QADR_VERSES[1], // Ayat 2
    QADR_VERSES[3]  // Ayat 4
  ];

  const [items, setItems] = useState(initialItems);
  const [isChecked, setIsChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    soundFx.playClick();
    const newItems = [...items];
    const temp = newItems[index - 1];
    newItems[index - 1] = newItems[index];
    newItems[index] = temp;
    setItems(newItems);
    setIsChecked(false);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    soundFx.playClick();
    const newItems = [...items];
    const temp = newItems[index + 1];
    newItems[index + 1] = newItems[index];
    newItems[index] = temp;
    setItems(newItems);
    setIsChecked(false);
  };

  const handleCheck = () => {
    setIsChecked(true);
    const isAllCorrect = items.every((verse, idx) => verse.number === idx + 1);
    if (isAllCorrect) {
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
    setItems(initialItems);
    setIsChecked(false);
    setShowHint(false);
  };

  const isAllCorrect = items.every((verse, idx) => verse.number === idx + 1);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>سلايد 7 · ميسي سوسون اية</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          سوسون اية سورة القدر مغيکوت اوروتن
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          ݢوناکن انق ڤانه اونتوق مڽوسون 5 اية مغيکوت اوروتن يغ بتول (اية 1 هيغݢ 5).
        </p>
      </div>

      {/* Control Buttons Bar */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-wrap items-center justify-between gap-3 mb-6 shadow-md">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleCheck}
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>سيمق جواڤن</span>
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>چوبا لاݢي</span>
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setShowHint(!showHint);
            }}
            className="px-4 py-2.5 rounded-lg bg-amber-950/60 hover:bg-amber-900 border border-amber-600/40 text-amber-300 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>بنتوان</span>
          </button>
        </div>

        {isAllCorrect && isChecked && (
          <button
            onClick={() => {
              soundFx.playClick();
              onNextSlide();
            }}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>ستروسڽ (ميسي کويز)</span>
            <ArrowLeft className="w-4 h-4 text-slate-950" />
          </button>
        )}
      </div>

      {/* Hint Alert */}
      {showHint && (
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-700/50 text-xs sm:text-sm text-amber-200 mb-4 space-y-1">
          <strong>ڤتونجوق اوروتن:</strong>
          <p>
            اية ڤرتام دمولاءي دغن <span className="font-quran text-base" dir="rtl">«إِنَّآ أَنزَلْنَـٰهُ...»</span>، دان اية کليم دأخيرکن دغن <span className="font-quran text-base" dir="rtl">«...حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ»</span>.
          </p>
        </div>
      )}

      {/* 5 Slots */}
      <div className="space-y-3">
        {items.map((verse, idx) => {
          const expectedNum = idx + 1;
          const isSlotCorrect = isChecked && verse.number === expectedNum;
          const isSlotWrong = isChecked && verse.number !== expectedNum;

          return (
            <div
              key={verse.number}
              className={`p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                isSlotCorrect
                  ? 'bg-emerald-950/50 border-emerald-500 ring-1 ring-emerald-500/50 shadow-md'
                  : isSlotWrong
                  ? 'bg-rose-950/30 border-rose-600'
                  : 'bg-slate-900/80 border-slate-800'
              }`}
            >
              
              {/* Slot Number & Verse Text */}
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold font-mono text-sm shrink-0 border ${
                    isSlotCorrect
                      ? 'bg-emerald-600 text-white border-emerald-400'
                      : isSlotWrong
                      ? 'bg-rose-800 text-white border-rose-500'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  {expectedNum}
                </div>

                <div className="font-quran text-2xl sm:text-3xl text-slate-100 flex-1" dir="rtl">
                  {verse.arabicText}
                </div>
              </div>

              {/* Status + Move Controls */}
              <div className="flex items-center gap-3 shrink-0">
                {isChecked && (
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-md hidden sm:inline ${
                      isSlotCorrect
                        ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/60'
                        : 'bg-rose-900/60 text-rose-300 border border-rose-700/60'
                    }`}
                  >
                    {isSlotCorrect ? 'جواڤن يغ بتول' : 'چوبا لاݢي'}
                  </span>
                )}

                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => moveUp(idx)}
                    disabled={idx === 0}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      idx === 0
                        ? 'opacity-30 cursor-not-allowed bg-slate-950 text-slate-600 border-slate-800'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 cursor-pointer'
                    }`}
                    title="ڤينده ک اتس"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => moveDown(idx)}
                    disabled={idx === items.length - 1}
                    className={`p-1.5 rounded-lg border transition-colors ${
                      idx === items.length - 1
                        ? 'opacity-30 cursor-not-allowed bg-slate-950 text-slate-600 border-slate-800'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700 cursor-pointer'
                    }`}
                    title="ڤينده ک باوه"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Success Celebration Box */}
      {isChecked && isAllCorrect && (
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 border border-amber-400 text-center space-y-2 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-center gap-2 text-amber-300">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <span className="text-2xl sm:text-3xl font-black">
              تهنيءه! اندا سماکين ماهير.
            </span>
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <p className="text-sm text-emerald-100 max-w-lg mx-auto">
            سموا 5 اية سورة القدر تله دسوسون دغن سمڤورنا مغيکوت اوروتن مصحف! اندا تله ممبوقتيکن ڤغواساءن حفظن يغ کوکوه!
          </p>
        </div>
      )}

    </div>
  );
};
