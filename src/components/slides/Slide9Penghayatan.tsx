import React, { useState } from 'react';
import { HeartHandshake, CheckCircle2, MessageSquare, Send, ArrowLeft } from 'lucide-react';
import { REFLECTION_SCENARIOS } from '../../data/qadrData';
import { soundFx } from '../../utils/soundEffects';

interface Slide9PenghayatanProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
  onSaveReflection: (choice: string, note: string) => void;
  onNextSlide: () => void;
}

export const Slide9Penghayatan: React.FC<Slide9PenghayatanProps> = ({
  onEarnStar,
  hasEarnedStar,
  onSaveReflection,
  onNextSlide
}) => {
  const [scenarioAnswers, setScenarioAnswers] = useState<{ [id: number]: string }>({});
  const [reflectionChoice, setReflectionChoice] = useState<string>('ساي سوده فهم');
  const [reflectionNote, setReflectionNote] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSelectOption = (scenarioId: number, optionId: string) => {
    soundFx.playClick();
    setScenarioAnswers({ ...scenarioAnswers, [scenarioId]: optionId });
  };

  const handleSaveStudentReflection = () => {
    soundFx.playSuccess();
    setIsSaved(true);
    onSaveReflection(reflectionChoice, reflectionNote);
    if (!hasEarnedStar) {
      onEarnStar();
    }
  };

  const reflectionOptions = [
    { label: 'ساي سوده فهم', desc: 'ساي سوده مغواساءي باچاءن، حفظن دان تجويد سورة القدر.' },
    { label: 'ساي ڤرلو برلاتيه لاݢي', desc: 'ساي ايغين ممڤرباپقکن لاتيهن حفظن سوڤاي لبيه لنچر.' },
    { label: 'ساي ايغين برتاڽ کڤد ݢورو', desc: 'ساي ممڤوڽاءي ککليروان تنتغ حكوم تجويد دان ايغين ممينتا بيمبيغن ݢورو.' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <HeartHandshake className="w-3.5 h-3.5 text-pink-400" />
          <span>سلايد 9 · ميسي ڤغهايتن دان ريفليکسي</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          ڤغهايتن سورة القدر دالم کهيدوڤن
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          ڤادنکن ڤغاجرن سورة القدر دغن سيتواسي هارين دان لاکوکن ريفليکسي کنديري!
        </p>
      </div>

      {/* Part 1: Real-life Situation Scenarios */}
      <div className="space-y-4 mb-8">
        <div className="text-xs text-amber-300 font-bold">
          بهاݢين 1: سيتواسي کهيدوڤن موريد
        </div>

        {REFLECTION_SCENARIOS.map((scenario) => {
          return (
            <div
              key={scenario.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-emerald-800/40 shadow-lg space-y-4"
            >
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold block mb-1">
                  سيتواسي #{scenario.id}
                </span>
                <p className="text-slate-200 text-sm sm:text-base font-bold">
                  {scenario.situationJawi}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {scenario.questionJawi}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scenario.options.map((opt) => {
                  const isSelected = scenarioAnswers[scenario.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(scenario.id, opt.id)}
                      className={`p-3 rounded-xl border text-right text-xs sm:text-sm transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? opt.isCorrect
                            ? 'bg-emerald-950/70 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400'
                            : 'bg-amber-950/70 border-amber-500 text-amber-200 ring-2 ring-amber-400'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-600 text-slate-300'
                      }`}
                    >
                      <span className="leading-relaxed mb-2">{opt.textJawi}</span>
                      {isSelected && (
                        <span className="text-[11px] font-bold text-amber-300 pt-2 border-t border-slate-700/50">
                          {opt.feedbackJawi}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Part 2: Self-Reflection Questionnaire */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950/50 to-slate-900 border border-emerald-600/50 shadow-xl space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-800/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
            <MessageSquare className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <span className="text-xs text-amber-300 font-bold block">
              بهاݢين 2: ريفليکسي کنديري موريد
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              اڤکه ڤغاجرن يغ ساي ڤراوليه هاري اين؟
            </h3>
          </div>
        </div>

        {/* 3 Reflection Radios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {reflectionOptions.map((item) => {
            const isSelected = reflectionChoice === item.label;
            return (
              <button
                key={item.label}
                onClick={() => {
                  soundFx.playClick();
                  setReflectionChoice(item.label);
                }}
                className={`p-4 rounded-xl border text-right transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/80 border-emerald-400 text-white ring-2 ring-emerald-400/60 shadow-md'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-base text-amber-300">{item.label}</span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      isSelected ? 'border-emerald-400 bg-emerald-500' : 'border-slate-600'
                    }`}
                  >
                    {isSelected && <span className="w-2 h-2 rounded-full bg-slate-950" />}
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Short Text commitment for student */}
        <div className="space-y-2">
          <label className="text-xs text-slate-300 font-bold block">
            چاتتن عزم ديري ساي اڤابيلا ممباچ دان مغحفظ سورة القدر:
          </label>
          <textarea
            value={reflectionNote}
            onChange={(e) => setReflectionNote(e.target.value)}
            placeholder="چونتوه: ساي برعزم اکن ممباچ سورة القدر دالم صلاة دان ممڤرباپقکن عمل کباءيقن ڤد 10 مالم تراخير رمضان..."
            className="w-full p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-100 placeholder-slate-600 text-xs sm:text-sm focus:outline-none focus:border-emerald-500 h-24 text-right"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleSaveStudentReflection}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>هنتر ريفليکسي دان سيمڤن</span>
          </button>

          {isSaved && (
            <div className="flex items-center gap-2 text-xs text-emerald-300 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>ريفليکسي تله دسيمڤن! اندا منداڤت بينتغ!</span>
            </div>
          )}

          <button
            onClick={() => {
              soundFx.playClick();
              onNextSlide();
            }}
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer mr-auto"
          >
            <span>ستروسڽ (سيجيل ڤنچاڤاين)</span>
            <ArrowLeft className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>

    </div>
  );
};
