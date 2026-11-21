import React from 'react';
import { X, Star, BookOpen, Volume2, Award, Heart } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

interface StudentHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentHelpModal: React.FC<StudentHelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto no-print">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-emerald-600/60 rounded-2xl shadow-2xl text-slate-100 flex flex-col max-h-[90vh] overflow-hidden font-jawi"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-emerald-900/60 bg-emerald-950/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-emerald-300">
                ڤندوان ڤغمبارا کچيل
              </h2>
              <p className="text-xs text-slate-300">
                چارا منجلاجه سورة القدر دغن چريا دان موده
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-right text-sm leading-relaxed">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
            <img 
              src="/src/assets/images/character_ustaz_guide_1793021168992.jpg" 
              alt="اوستاذ انس" 
              className="w-16 h-16 rounded-full border-2 border-emerald-400 object-cover shrink-0"
            />
            <div>
              <h3 className="font-bold text-amber-300 text-base mb-1">
                ڤسنن اوستاذ انس:
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm">
                السلام عليکم انق-انق سموا! ميسي کيت اياله ممباچ دان مغحفظ 5 اية سورة القدر سرتا مغنل تجويد. جاغن ريساو جک ترسيلڤ، اندا بوليه منچوبا براولغ کالي تنڤا ڤينالتي!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-emerald-400">
                <Volume2 className="w-4 h-4 text-emerald-400" />
                <span>1. دغر باچاءن قاري</span>
              </div>
              <p className="text-slate-300 text-xs">
                تکن بوتغ سوارا اونتوق مندغر باچاءن قاري يغ فصيح باݢي ستياڤ اية.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-cyan-400">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>2. ايکوت دان حفظ</span>
              </div>
              <p className="text-slate-300 text-xs">
                ليهت اية، سمبوييکن ڤرکاتاءن، دان ايسي تمڤت کوسوغ باݢي مغوجي ديري.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-400">
                <Award className="w-4 h-4 text-amber-400" />
                <span>3. ڤمبورو تجويد</span>
              </div>
              <p className="text-slate-300 text-xs">
                تکن ڤد کليمه اية اونتوق ممبوک رهسيا حكوم تجويد يغ سبنر.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-pink-400">
                <Heart className="w-4 h-4 text-pink-400" />
                <span>4. کويز دان سيجيل</span>
              </div>
              <p className="text-slate-300 text-xs">
                جواب 5 سوءالن کويز، کومڤول بينتغ، دان داڤتکن سيجيل دالم سلايد ڤنوتوڤ!
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-center text-xs text-emerald-300">
            تکن بوتغ &ldquo;ستروسڽ&rdquo; د باوه اونتوق ملنجوتکن ڤغمباراءن اندا!
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            سموݢ دبرکتي دالم منونتوت علمو
          </span>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            ساي فهم! ماري مولا
          </button>
        </div>
      </div>
    </div>
  );
};
