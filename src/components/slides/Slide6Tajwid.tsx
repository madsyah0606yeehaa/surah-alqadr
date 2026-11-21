import React, { useState } from 'react';
import { Award, Sparkles, Volume2, CheckCircle2, Info } from 'lucide-react';
import { TAJWID_RULES, QADR_VERSES } from '../../data/qadrData';
import { soundFx } from '../../utils/soundEffects';

interface Slide6TajwidProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
}

export const Slide6Tajwid: React.FC<Slide6TajwidProps> = ({ onEarnStar, hasEarnedStar }) => {
  const [selectedRuleId, setSelectedRuleId] = useState<string>('ghunnah');
  const [discoveredRules, setDiscoveredRules] = useState<string[]>(['ghunnah']);
  const [activeVerseAudio, setActiveVerseAudio] = useState<number | null>(null);

  const activeRule = TAJWID_RULES.find((r) => r.id === selectedRuleId) || TAJWID_RULES[0];

  const handleSelectRule = (ruleId: string) => {
    soundFx.playClick();
    setSelectedRuleId(ruleId);
    if (!discoveredRules.includes(ruleId)) {
      const updated = [...discoveredRules, ruleId];
      setDiscoveredRules(updated);
      if (updated.length >= 5 && !hasEarnedStar) {
        soundFx.playSuccess();
        onEarnStar();
      }
    }
  };

  const playVerseAudio = (verseNum: number) => {
    soundFx.playClick();
    const verse = QADR_VERSES.find((v) => v.number === verseNum);
    if (!verse) return;
    const audio = new Audio(verse.audioUrl);
    setActiveVerseAudio(verseNum);
    audio.onended = () => setActiveVerseAudio(null);
    audio.onerror = () => setActiveVerseAudio(null);
    audio.play().catch(() => setActiveVerseAudio(null));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>سلايد 6 · ميسي ڤمبورو تجويد</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          ڤمبورو تجويد سورة القدر
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          تکن ڤد حكوم تجويد د باوه اونتوق مليهت چونتوه کليمه، سبب برلاکوڽ حكوم، دان چارا باچاءن يغ بتول!
        </p>
      </div>

      {/* Tajwid Rules Segmented Selector Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {TAJWID_RULES.map((rule) => {
          const isSelected = selectedRuleId === rule.id;
          const isDiscovered = discoveredRules.includes(rule.id);
          return (
            <button
              key={rule.id}
              onClick={() => handleSelectRule(rule.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                isSelected
                  ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg scale-105'
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-600'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: rule.color }}
              />
              <span>{rule.nameJawi}</span>
              {isDiscovered && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          );
        })}
      </div>

      {/* Main 2-Zone Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Right Zone in RTL: Selected Rule Deep Explanation (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-emerald-600/40 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 gap-2">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: activeRule.color }}
              />
              <h3 className="text-lg sm:text-xl font-bold text-white">{activeRule.nameJawi}</h3>
            </div>
            <span className="font-quran text-lg text-amber-300 shrink-0" dir="rtl">{activeRule.nameArabic}</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-400" />
                <span>مقصود حكوم:</span>
              </div>
              <p className="text-slate-200 leading-relaxed">{activeRule.descriptionJawi}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>سبب برلاکو حكوم:</span>
              </div>
              <p className="text-slate-200 leading-relaxed">{activeRule.reasonJawi}</p>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-xs text-slate-400 mb-2 font-mono">
              بيلاغن چونتوه دتموءي: {activeRule.examples.length} کليمه
            </div>
            <div className="space-y-2">
              {activeRule.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-quran text-2xl text-amber-300" dir="rtl">
                      {ex.wordText}
                    </span>
                    <span className="text-xs text-slate-300">
                      (اية {ex.verseNumber})
                    </span>
                  </div>
                  <button
                    onClick={() => playVerseAudio(ex.verseNumber)}
                    className="p-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs flex items-center gap-1 cursor-pointer"
                    title="دغر باچاءن اية"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>دغر</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left Zone in RTL: Surah Text Highlighting Matrix (7 cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs text-slate-400 flex items-center justify-between px-2">
            <span>تيکس سورة القدر برسرتا حكوم يغ دتنداکن:</span>
            <span className="text-amber-400 font-mono">
              {discoveredRules.length} / {TAJWID_RULES.length} حكوم دتروکاءي
            </span>
          </div>

          {QADR_VERSES.map((verse) => {
            const hasExampleInVerse = activeRule.examples.some(
              (ex) => ex.verseNumber === verse.number
            );

            return (
              <div
                key={verse.number}
                className={`p-4 rounded-xl border transition-all ${
                  hasExampleInVerse
                    ? 'bg-emerald-950/50 border-amber-400/80 ring-1 ring-amber-400/40 shadow-md'
                    : 'bg-slate-900/60 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  {/* Highlighted text presentation (RTL for Arabic verse) */}
                  <div className="font-quran text-2xl sm:text-3xl text-slate-100 flex items-center gap-2 flex-wrap leading-relaxed flex-1 justify-start" dir="rtl">
                    <span className="w-7 h-7 rounded-full bg-slate-800 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {verse.number}
                    </span>
                    {verse.words.map((w, wIdx) => {
                      const isMatch = w.tajwidRuleId === activeRule.id;
                      return (
                        <span
                          key={wIdx}
                          onClick={() => {
                            if (w.tajwidRuleId) {
                              handleSelectRule(w.tajwidRuleId);
                            }
                          }}
                          className={`px-1.5 py-0.5 rounded transition-all ${
                            isMatch
                              ? 'bg-amber-400 text-slate-950 font-bold shadow-sm ring-2 ring-amber-300'
                              : w.tajwidRuleId
                              ? 'cursor-pointer hover:bg-slate-800 hover:text-emerald-300'
                              : ''
                          }`}
                        >
                          {w.text}
                        </span>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => playVerseAudio(verse.number)}
                    className={`p-2 rounded-lg transition-colors cursor-pointer shrink-0 ${
                      activeVerseAudio === verse.number
                        ? 'bg-amber-400 text-slate-950'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    }`}
                    title="دغر باچاءن"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
