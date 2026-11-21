import React, { useState } from 'react';
import { Moon, Star, BookOpen, Sparkles, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface Slide3IntroProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
}

export const Slide3Intro: React.FC<Slide3IntroProps> = ({ onEarnStar, hasEarnedStar }) => {
  const [openedCards, setOpenedCards] = useState<number[]>([1]);
  const [showReflection, setShowReflection] = useState(false);

  const toggleCard = (id: number) => {
    soundFx.playClick();
    if (openedCards.includes(id)) {
      setOpenedCards(openedCards.filter((c) => c !== id));
    } else {
      const updated = [...openedCards, id];
      setOpenedCards(updated);
      if (updated.length === 4 && !hasEarnedStar) {
        soundFx.playSuccess();
        onEarnStar();
      }
    }
  };

  const facts = [
    {
      id: 1,
      title: 'بيلاغن اية دان تمڤت تورون',
      short: '5 اية · سورة مكية',
      detail: 'سورة القدر مروڤاکن سورة ک-97 دالم القرءان. سورة اين مغاندوغي 5 اية دان دتورونکن د مكة المكرمة.',
      icon: BookOpen,
      border: 'border-emerald-500/50',
      bg: 'bg-emerald-950/40'
    },
    {
      id: 2,
      title: 'كمولياءن ليلة القدر',
      short: 'لبيه باءيق درڤد 1,000 بولن',
      detail: 'عبادة ڤد مالم ليلة القدر دبري ݢنجرن ڤهالا يغ لبيه باءيق درڤد عبادة سلاما 1,000 بولن (کيرا-کيرا 83 تاهون 4 بولن).',
      icon: Star,
      border: 'border-amber-500/50',
      bg: 'bg-amber-950/40'
    },
    {
      id: 3,
      title: 'ڤنورونن القرءان الكريم',
      short: 'تورون ک بيت العزة',
      detail: 'الله SWT منورونکن القرءان درڤد لوح محفوظ ک بيت العزة د لاغيت دنيا ڤد مالم يغ ڤنوه کبرکتن اين.',
      icon: Sparkles,
      border: 'border-cyan-500/50',
      bg: 'bg-cyan-950/40'
    },
    {
      id: 4,
      title: 'تورونڽ ملاءيکة دان کسجهتراءن',
      short: 'رحمة هيغݢ تربيت فجر',
      detail: 'ڤارا ملاءيکة دان ملاءيکة جبريل (الروح) تورون دغن ايذين الله SWT، ممباوا کبرکتن، رحمة دان کسجهتراءن سهيغݢ تربيت فجر.',
      icon: Moon,
      border: 'border-purple-500/50',
      bg: 'bg-purple-950/40'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Moon className="w-3.5 h-3.5 text-amber-400" />
          <span>سلايد 3 · ڤغنلن سورة</span>
        </div>
        <div className="font-quran text-4xl sm:text-5xl font-bold text-amber-300 mb-2" dir="rtl">
          سُورَةُ الْقَدْرِ
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300">
          کنالي کمولياءن سورة القدر
        </h2>
        <p className="text-slate-300 text-sm max-w-lg mx-auto mt-1">
          تکن ستياڤ کاد اونتوق ممبوک معلومات. تروک کسموا 4 کاد اونتوق منداڤت بينتغ!
        </p>
      </div>

      {/* 4 Interactive Discovery Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {facts.map((fact) => {
          const Icon = fact.icon;
          const isOpen = openedCards.includes(fact.id);
          return (
            <div
              key={fact.id}
              onClick={() => toggleCard(fact.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
                fact.bg
              } ${fact.border} ${
                isOpen ? 'ring-1 ring-amber-400/50 shadow-lg' : 'hover:border-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-100">{fact.title}</h3>
                    <div className="text-xs text-amber-300">{fact.short}</div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-900/60 flex items-center justify-center text-slate-300">
                  {isOpen ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {isOpen && (
                <div className="pt-3 border-t border-slate-700/40 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {fact.detail}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Thought-Provoking Question */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-600/50 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
            <HelpCircle className="w-6 h-6 text-amber-400" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="text-xs text-amber-300 font-semibold">
              سوءالن ڤنچتوس ڤميکيرن
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              مغاڤکه مالم ليلة القدر ممڤوڽاءي کإيستيميواءن؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              فيکيرکن: مغاڤکه الله SWT ممبري کلبيهن سريبو بولن ڤد مالم اين، دان باݢايمانکه کيت سباݢاي موريد بوليه ممنفعتکنڽ؟
            </p>

            <button
              onClick={() => {
                soundFx.playClick();
                setShowReflection(!showReflection);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <span>{showReflection ? 'توتوڤ رهسيا حکمة' : 'تونجوق رهسيا حکمة ←'}</span>
            </button>

            {showReflection && (
              <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-xs sm:text-sm text-emerald-200 leading-relaxed mt-2 space-y-2">
                <p>
                  <strong>موتيارا حکمة:</strong> مالم ليلة القدر ممڤوڽاءي کإيستيميواءن کران ڤداڽ دتورونکن معجزة تربسر اومة إسلام، ياءيت <strong>القرءان الكريم</strong>.
                </p>
                <p>
                  الله SWT مغورنياکن مالم اين سباݢاي هديه کاسيه سايغ کڤد اومة نبي محمد SAW سوڤاي کيت داڤت مغومڤول ڤهالا يغ باپق والاوڤون عمور کيت لبيه ڤينديق.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
