import React from 'react';
import { Compass, BookOpen, Sparkles, HelpCircle, ArrowLeft, Target, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface Slide1HeroProps {
  onStartMission: () => void;
  onOpenHelp: () => void;
  onOpenTeacher: () => void;
}

export const Slide1Hero: React.FC<Slide1HeroProps> = ({
  onStartMission,
  onOpenHelp,
}) => {
  const standardPembelajaran = [
    {
      code: '1.3.1',
      text: 'مغحفظ سورة القدر دغن بتول دان برتجويد'
    },
    {
      code: '1.3.2',
      text: 'ممباچ القرءان دالم کهيدوڤن هارين سچارا برادب دان استقامة'
    }
  ];

  const objektifPembelajaran = [
    'مغحفظ اية 1 هيغݢ 5 سورة القدر دغن بتول دان لنچر سلڤس اکتيويتي تلقي مشافهة.',
    'مغحفظ اية 1 هيغݢ 5 سورة القدر دغن مخرج دان تجويد يغ تڤت سلڤس اکتيويتي لاتيه توبي.',
    'ممباچ دان مغاڤليکاسيکن حفظن سورة القدر سباݢاي روتين هارين سچارا برادب سلڤس سيسي ڤربينچغن.'
  ];

  return (
    <div className="relative min-h-[calc(100vh-8.5rem)] flex flex-col justify-center overflow-hidden py-6 font-jawi">
      
      {/* Background with Mosque Hero Image & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_masjid_qadr_1793021168696.jpg"
          alt="لاتر بلاکغ مسجد ليلة القدر"
          className="w-full h-full object-cover opacity-35 filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        
        {/* Top Kicker Label */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs sm:text-sm mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>بيدغ القرءان · ڤنديديقن إسلام تاهون 5</span>
          <span className="text-emerald-500">·</span>
          <span>کيت ميديا ديݢيتل EDUP3133</span>
        </div>

        {/* Main Title in Jawi (without harakat) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-300 to-emerald-400 drop-shadow-md leading-tight mb-3">
          ميسي منجلاجه سورة القدر
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-emerald-100/90 max-w-2xl mb-6 leading-relaxed">
          ڤغمباراءن ڤرمات القرءان: تلاوة فصيح، حفظن مغيکوت اوروتن، ڤمبورو تجويد، دان ڤغهايتن ليلة القدر
        </p>

        {/* Ustaz Character Welcoming Dialog Box */}
        <div className="w-full max-w-3xl mb-6 bg-slate-900/85 backdrop-blur-md border border-emerald-600/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 text-right shadow-xl">
          <div className="relative shrink-0">
            <img
              src="/src/assets/images/character_ustaz_guide_1793021168992.jpg"
              alt="اوستاذ انس"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-emerald-400 object-cover shadow-lg"
            />
            <span className="absolute -bottom-2 -left-2 bg-emerald-700 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md border border-emerald-400">
              اوستاذ انس
            </span>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="font-bold text-amber-300 text-sm sm:text-base flex items-center justify-start gap-1.5">
              <span>السلام عليکم ورحمة الله وبرکاته!</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              سلامت داتغ، ڤغمبارا کچيل! ماري ممولاکن ميسي ڤرمات سورة القدر. بلاجر ممباچ دغن برتجويد، مغحفظ 5 اية، دان راءيه بينتغ سرتا سيجيل کجاءين!
            </p>
          </div>
        </div>

        {/* Big Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md mb-8">
          <button
            onClick={() => {
              soundFx.playSuccess();
              onStartMission();
            }}
            className="flex-1 min-w-[200px] px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-slate-950 font-black text-base sm:text-lg shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Compass className="w-5 h-5 text-slate-950 group-hover:rotate-45 transition-transform" />
            <span>مولا ميسي</span>
            <ArrowLeft className="w-5 h-5 text-slate-950" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenHelp();
            }}
            className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-emerald-300 border border-emerald-600/40 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>ڤندوان ڤمبلاجرن</span>
          </button>
        </div>

        {/* Standard Pembelajaran & Objektif Pembelajaran Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 text-right">
          
          {/* Card 1: Standard Pembelajaran */}
          <section className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-emerald-600/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-emerald-800/60">
                <div className="w-9 h-9 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-emerald-300">
                  ستندرد ڤمبلاجرن
                </h2>
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-slate-100 leading-relaxed">
                {standardPembelajaran.map((item) => (
                  <li
                    key={item.code}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                  >
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-900/70 border border-emerald-500/40 text-emerald-300 font-mono tabular-nums text-xs font-bold shrink-0 mt-1">
                      {item.code}
                    </span>
                    <span className="flex-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Card 2: Objektif Pembelajaran */}
          <section className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-amber-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-amber-800/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-950/70 border border-amber-500/40 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-amber-400" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-amber-300">
                    اوبجيکتيف ڤغاجرن دان ڤمبلاجرن
                  </h2>
                </div>
              </div>

              <p className="text-sm font-bold text-emerald-300 mb-3">
                موريد داڤت :
              </p>

              <ol className="space-y-2.5 text-sm sm:text-base text-slate-100 leading-relaxed">
                {objektifPembelajaran.map((obj, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80"
                  >
                    <span className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono tabular-nums text-xs font-bold flex items-center justify-center shrink-0 mt-1">
                      {idx + 1}
                    </span>
                    <span className="flex-1">{obj}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

        </div>

        {/* Quick Station Map Preview Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-4xl w-full text-right text-xs text-slate-300">
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-emerald-900/60 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-amber-400 font-bold block">ميسي 1</span>
              <span>کنالي سورة</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-emerald-900/60 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-amber-400 font-bold block">ميسي 2</span>
              <span>تلاوة فصيح</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-emerald-900/60 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-amber-400 font-bold block">ميسي 3</span>
              <span>حفظن برتوروتن</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-emerald-900/60 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-amber-400 font-bold block">ميسي 4</span>
              <span>ڤمبورو تجويد</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-emerald-900/60 col-span-2 sm:col-span-1 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-amber-400 font-bold block">ميسي 5</span>
              <span>کويز دان سيجيل</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
