import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle2, Star, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface Slide2ObjectivesProps {
  onNavigateSlide: (slide: number) => void;
  completedSlides: number[];
}

export const Slide2Objectives: React.FC<Slide2ObjectivesProps> = ({
  onNavigateSlide,
  completedSlides
}) => {
  const [selectedMission, setSelectedMission] = useState<number | null>(null);

  const missionCards = [
    {
      id: 1,
      targetSlide: 4,
      title: 'ميسي تلاوة',
      sub: 'تلاوة فصيح دان برتجويد',
      desc: 'ممباچ اية 1 هيغݢ 5 سورة القدر دغن بتول، لنچر دان مماتوهي حكوم تجويد.',
      icon: BookOpen,
      color: 'emerald',
      bgClass: 'bg-emerald-950/40 border-emerald-600/40 text-emerald-300'
    },
    {
      id: 2,
      targetSlide: 5,
      title: 'ميسي حفظن',
      sub: 'مغحفظ 5 اية مغيکوت اوروتن',
      desc: 'مغحفظ کسلوروهن سورة القدر مغيکوت اوروتن اية يغ بتول دغن ايغاتن يغ کوکوه.',
      icon: Star,
      color: 'amber',
      bgClass: 'bg-amber-950/40 border-amber-600/40 text-amber-300'
    },
    {
      id: 3,
      targetSlide: 6,
      title: 'ميسي تجويد',
      sub: 'ڤمبورو تجويد سورة',
      desc: 'مغنل ڤستي حكوم غنة، اخفاء، اظهار، اليف لام قمرية دان شمسية، مد واجب سرتا قلقلة صغرى.',
      icon: Award,
      color: 'cyan',
      bgClass: 'bg-cyan-950/40 border-cyan-600/40 text-cyan-300'
    },
    {
      id: 4,
      targetSlide: 9,
      title: 'ميسي ڤغهايتن',
      sub: 'ڤغاجرن دان عمل صالح',
      desc: 'مڽاتاکن کمولياءن ليلة القدر دان مغهوبوغکنڽ دغن عملن کباءيقن دالم کهيدوڤن هارين.',
      icon: HeartHandshake,
      color: 'pink',
      bgClass: 'bg-pink-950/40 border-pink-600/40 text-pink-300'
    }
  ];

  const adventureStops = [
    { slide: 3, label: 'کنالي سورة', desc: 'ڤغنلن سورة' },
    { slide: 4, label: 'ميسي تلاوة', desc: 'دغر دان سيمق' },
    { slide: 5, label: 'ميسي حفظن', desc: 'لڠکڤکن اية' },
    { slide: 6, label: 'ڤمبورو تجويد', desc: 'تروک حكوم' },
    { slide: 7, label: 'سوسون اية', desc: 'اوروتن اية' },
    { slide: 8, label: 'کويز ديݢيتل', desc: 'اوجين ڤغتاهوان' },
    { slide: 10, label: 'سيجيل ڤنچاڤاين', desc: 'ڤتي ݢنجرن' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Heading */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>سلايد 2 · اوبجيکتيف ڤمبلاجرن دان ڤتا ميسي</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          اوبجيکتيف دان ڤتا ڤغمباراءن
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          ڤيليه کاد ميسي د باوه اونتوق مليهت اوبجيکتيف، اتاو تکن لالوان ڤغمباراءن اونتوق تروس ک هنتين!
        </p>
      </div>

      {/* 4 Interactive Mission Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {missionCards.map((card) => {
          const Icon = card.icon;
          const isSelected = selectedMission === card.id;
          return (
            <div
              key={card.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedMission(isSelected ? null : card.id);
              }}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                card.bgClass
              } ${
                isSelected
                  ? 'ring-2 ring-amber-400 scale-[1.02] shadow-xl'
                  : 'hover:border-slate-500 hover:scale-[1.01]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    ميسي #{card.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-slate-100">{card.title}</h3>
                <div className="text-xs text-amber-300 font-medium mb-3">{card.sub}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFx.playClick();
                    onNavigateSlide(card.targetSlide);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  تروس ک ميسي ←
                </button>
                <span className="text-[11px] text-slate-400">
                  {completedSlides.includes(card.targetSlide) ? '✓ تله سلساي' : '○ بلوم سلساي'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive 7-stop Journey Map */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-800/40 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-emerald-300">
              لالوان ڤغمباراءن سورة القدر (ڤتا 7 هنتين)
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {completedSlides.length} / 10 سلايد دتروکاءي
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {adventureStops.map((stop, idx) => {
            const isDone = completedSlides.includes(stop.slide);
            return (
              <button
                key={stop.slide}
                onClick={() => {
                  soundFx.playClick();
                  onNavigateSlide(stop.slide);
                }}
                className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between cursor-pointer ${
                  isDone
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-600 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
                <div className="font-bold text-xs sm:text-sm text-slate-100">{stop.label}</div>
                <div className="text-[10px] text-slate-400 mt-1">{stop.desc}</div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
