import React, { useState } from 'react';
import { Award, Printer, RotateCcw, Home, Sparkles, Star } from 'lucide-react';
import { soundFx } from '../../utils/soundEffects';

interface Slide10PenutupProps {
  totalStars: number;
  quizScore: number;
  completedSlides: number[];
  studentName: string;
  onUpdateStudentName: (name: string) => void;
  onRestartAll: () => void;
  onGoHome: () => void;
  reflectionChoice: string;
}

export const Slide10Penutup: React.FC<Slide10PenutupProps> = ({
  totalStars,
  quizScore,
  completedSlides,
  studentName,
  onUpdateStudentName,
  onRestartAll,
  onGoHome,
  reflectionChoice
}) => {
  const [isChestOpen, setIsChestOpen] = useState(false);
  const [schoolName, setSchoolName] = useState('سکوله کبغساءن تاهون 5');

  const pearlsOfWisdom = [
    'القرءان اياله معجزة تراݢوغ يغ ممباوا ڤتونجوق کهيدوڤن.',
    'ليلة القدر مروڤاکن مالم کبرکتن يغ لبيه باءيق درڤد سريبو بولن.',
    'ممباچ دغن برتجويد ممليهارا کتڤتن کلام الله SWT.',
    'حفظن القرءان مغوکوهکن کإيمانن دان کخشوعن دالم صلاة.',
    'عمل صالح دان اخلاق موليا اداله بوقتي ڤغهايتن سورة القدر.'
  ];

  const handleOpenChest = () => {
    soundFx.playFanfare();
    setIsChestOpen(true);
  };

  const handlePrintCertificate = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-6 no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>سلايد 10 · ڤنوتوڤ دان سيجيل ڤنچاڤاين</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-200">
          تهنيءه! اندا تله منجاياکن ميسي سورة القدر
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          سموا ميسي تلاوة، حفظن، تجويد دان ڤغهايتن تله دتروکاءي دغن چمرلغ!
        </p>
      </div>

      {/* Summary Scoreboard Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 no-print">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-800/60 text-center">
          <span className="text-xs text-slate-400 block mb-1">بينتغ کجاءين</span>
          <div className="flex items-center justify-center gap-1.5 text-amber-400 font-mono font-bold text-2xl">
            <Star className="w-5 h-5 fill-amber-400" />
            <span>{totalStars}</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-800/60 text-center">
          <span className="text-xs text-slate-400 block mb-1">سکور کويز تجويد</span>
          <div className="text-emerald-400 font-mono font-bold text-2xl">
            {quizScore} / 5
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-800/60 text-center">
          <span className="text-xs text-slate-400 block mb-1">ميسي دتروکاءي</span>
          <div className="text-cyan-400 font-mono font-bold text-2xl">
            {completedSlides.length} / 10
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-800/60 text-center">
          <span className="text-xs text-slate-400 block mb-1">تاهڤ ڤغهايتن</span>
          <div className="text-pink-300 font-bold text-sm truncate pt-1">
            {reflectionChoice}
          </div>
        </div>
      </div>

      {/* Interactive Treasure Chest Section */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-2xl mb-8 no-print">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative shrink-0 text-center">
            <img
              src="/src/assets/images/treasure_chest_gold_1793021168825.jpg"
              alt="ڤتي ݢنجرن امس"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-2 border-amber-400 object-cover shadow-2xl mx-auto"
            />
            {!isChestOpen ? (
              <button
                onClick={handleOpenChest}
                className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all transform hover:scale-105 cursor-pointer"
              >
                بوک ڤتي ݢنجرن
              </button>
            ) : (
              <span className="inline-block mt-3 text-xs text-amber-300 font-bold">
                ✓ ڤتي تله دبوک!
              </span>
            )}
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-amber-300">
                5 موتيارا حکمة سورة القدر
              </h3>
            </div>
            
            {!isChestOpen ? (
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تکن بوتغ &ldquo;بوک ڤتي ݢنجرن&rdquo; اونتوق مليهت 5 موتيارا حکمة دان ڤغاجرن اݢوغ سورة القدر يغ تله اندا ڤلاجري هاري اين!
              </p>
            ) : (
              <div className="space-y-2 text-xs sm:text-sm animate-fade-in">
                {pearlsOfWisdom.map((pearl, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-200 flex items-center gap-2.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span>{pearl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PRINTABLE DIGITAL CERTIFICATE */}
      <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 border-4 border-amber-500/80 shadow-2xl relative overflow-hidden mb-8 text-center text-slate-100">
        
        {/* Background Islamic corner motifs */}
        <div className="absolute top-3 left-3 text-amber-500/30 text-2xl font-mono select-none">✦ ✦ ✦</div>
        <div className="absolute top-3 right-3 text-amber-500/30 text-2xl font-mono select-none">✦ ✦ ✦</div>
        <div className="absolute bottom-3 left-3 text-amber-500/30 text-2xl font-mono select-none">✦ ✦ ✦</div>
        <div className="absolute bottom-3 right-3 text-amber-500/30 text-2xl font-mono select-none">✦ ✦ ✦</div>

        {/* Certificate Title */}
        <div className="space-y-1 mb-4">
          <span className="text-xs text-amber-400 font-bold tracking-widest block">
            کمنترين ڤنديديقن مليسيا · ڤنديديقن إسلام تاهون 5
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-amber-300">
            سيجيل ڤنچاڤاين ديݢيتل
          </h1>
          <p className="text-xs sm:text-sm text-emerald-300">
            ميسي منجلاجه سورة القدر · EDUP3133
          </p>
        </div>

        <div className="text-xs sm:text-sm text-slate-300 mb-4">
          دڤرعکوي بهاوا ڤغمبارا کچيل د باوه:
        </div>

        {/* Name input box */}
        <div className="max-w-md mx-auto mb-6">
          <input
            type="text"
            value={studentName}
            onChange={(e) => onUpdateStudentName(e.target.value)}
            placeholder="تاءيڤ نام اندا د سيني (چونتوه: احمد حاذق)"
            className="w-full text-center py-2.5 px-4 rounded-xl bg-slate-900 border-2 border-amber-400 text-xl sm:text-2xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-amber-300 shadow-inner"
          />
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="نام سکوله"
            className="w-full text-center py-1 px-4 mt-2 bg-transparent border-b border-slate-700 text-xs text-slate-300 focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Certificate Body Paragraph */}
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
          تله برجاي مڽلسايکن کسموا ميسي <strong>تلاوة فصيح</strong>، <strong>حفظن مغيکوت اوروتن</strong>، <strong>ڤمبورو تجويد</strong>، دان <strong>ڤغهايتن سورة القدر</strong> دغن سمڤورنا سرتا ممڤراوليه بينتغ دان لينچانا کجاءين.
        </p>

        {/* Seal and Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-800">
          <div className="flex flex-col items-center">
            <img
              src="/src/assets/images/badge_pemburu_tajwid_1793021169296.jpg"
              alt="لينچانا ڤمبورو تجويد"
              className="w-16 h-16 rounded-full border-2 border-amber-400 object-cover"
            />
            <span className="text-[10px] text-amber-300 font-bold mt-1">
              لينچانا تجويد
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-900/60 border-2 border-emerald-400 flex items-center justify-center text-emerald-300">
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
            </div>
            <span className="text-[10px] text-emerald-300 font-bold mt-1">
              {totalStars} بينتغ کجاءين
            </span>
          </div>

          <div className="text-right text-xs text-slate-300 pr-6 border-r border-slate-800 space-y-1">
            <div>تاريخ: {new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
            <div>تاهڤ ڤغواساءن: تاهڤ 5 – تاهڤ 6 (چمرلغ)</div>
            <div>مودول: القرءان تاهون 5 (KSSR سيمقن)</div>
          </div>
        </div>

      </div>

      {/* Action Buttons for Certificate & Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-3 no-print">
        <button
          onClick={handlePrintCertificate}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-lg cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>چيتق سيجيل اتاو سيمڤن PDF</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            onGoHome();
          }}
          className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4 text-emerald-400" />
          <span>کمبالي ک هلامن اوتام</span>
        </button>

        <button
          onClick={onRestartAll}
          className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 border border-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>مولا سمولا</span>
        </button>
      </div>

    </div>
  );
};
