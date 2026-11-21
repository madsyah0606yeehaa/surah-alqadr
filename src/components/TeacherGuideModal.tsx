import React, { useState } from 'react';
import { X, BookOpen, Award, CheckCircle2, FileText, Sparkles, Layers, HelpCircle } from 'lucide-react';
import { DSKP_INFO, QUIZ_QUESTIONS, TAJWID_RULES } from '../data/qadrData';

interface TeacherGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeacherGuideModal: React.FC<TeacherGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'dskp' | 'pedagogi' | 'skema' | 'pbd'>('dskp');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto no-print">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-emerald-700/60 rounded-2xl shadow-2xl text-slate-100 flex flex-col max-h-[90vh] overflow-hidden font-jawi"
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-600/40 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-emerald-300 font-jawi">
                ڤندوان ݢورو دان نوتا ڤمباغون EDUP3133
              </h2>
              <p className="text-xs text-slate-400">
                کومڤيتينسي ݢورو ممڤرکاس ترانسفورماسي ڤنديديقن · کيت ديݢيتل سورة القدر تاهون 5
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 p-3 bg-slate-950/40 border-b border-slate-800 overflow-x-auto">
          <button
            onClick={() => setActiveTab('dskp')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold font-jawi transition-colors whitespace-nowrap ${
              activeTab === 'dskp'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. DSKP تاهون 5</span>
          </button>
          <button
            onClick={() => setActiveTab('pedagogi')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold font-jawi transition-colors whitespace-nowrap ${
              activeTab === 'pedagogi'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. موديل ڤيداݢوݢي دان EDUP3133</span>
          </button>
          <button
            onClick={() => setActiveTab('skema')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold font-jawi transition-colors whitespace-nowrap ${
              activeTab === 'skema'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>3. سکيما جواڤن لڠکڤ</span>
          </button>
          <button
            onClick={() => setActiveTab('pbd')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold font-jawi transition-colors whitespace-nowrap ${
              activeTab === 'pbd'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>4. روبريک PBD (TP 1 – TP 6)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-right">
          
          {/* TAB 1: DSKP */}
          {activeTab === 'dskp' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                <div className="text-xs font-semibold text-emerald-400 mb-1">
                  معلومات کوريکولوم
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div><span className="text-slate-400">مات ڤلاجرن:</span> {DSKP_INFO.mataPelajaran}</div>
                  <div><span className="text-slate-400">ساسرن:</span> {DSKP_INFO.tahun}</div>
                  <div><span className="text-slate-400">بيدغ:</span> {DSKP_INFO.bidang}</div>
                  <div><span className="text-slate-400">تاجوق:</span> {DSKP_INFO.tajuk}</div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  ستندرد کاندوغن (SK)
                </h3>
                <div className="space-y-2">
                  {DSKP_INFO.standardKandungan.map((sk) => (
                    <div key={sk.code} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <span className="font-bold text-emerald-400 font-mono ml-2">{sk.code}</span>
                      <span className="text-slate-200">{sk.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ستندرد ڤمبلاجرن (SP)
                </h3>
                <div className="space-y-2">
                  {DSKP_INFO.standardPembelajaran.map((sp) => (
                    <div key={sp.code} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <span className="font-bold text-emerald-400 font-mono ml-2">{sp.code}</span>
                      <span className="text-slate-200">{sp.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PEDAGOGI DAN EDUP3133 */}
          {activeTab === 'pedagogi' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs font-semibold text-amber-400 mb-1">
                  ايديا اوتام EDUP3133
                </div>
                <div className="text-base font-bold text-white mb-2">
                  کومڤيتينسي ݢورو ممڤرکاس ترانسفورماسي ڤنديديقن
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  کيت ميديا سومبر ديݢيتل اينتراکتيف اين مغݢابوغکن ڤيداݢوݢي کونتيمڤوراري (ڤمبلاجرن براساسکن ڤرماءينن دان ڤمبلاجرن ماستيري) دغن اينتݢراسي تيکنولوݢي مولتيميديا براساسکن سساوغ باݢي ممبينا ڤغالمن ڤمبلاجرن يغ برمعنا، برڤوستکن موريد سرتا مڽوکوع ڤنتکسيرن فورماتيف اءوتينتيک اونتوق موريد تاهون 5.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                  <div className="font-bold text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    موديل ڤمبلاجرن براساسکن ڤرماءينن
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    موريد منروک سورة القدر ملالوءي ميسي برڤريغکت، مغومڤول لينچانا ڤرمات، ممبوک ڤتي ݢنجرن امس، سرتا منريما معلوم بالس ڤوسيتيف تنڤا تکنن ماس يغ ملمڤاو.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                  <div className="font-bold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    ڤمبلاجرن ماستيري
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    اکتيويتي حفظن دان تجويد دبينا سچارا بيمبيغن برڤريغکت (مندغر، مغچم تندا، مغيسي تمڤت کوسوغ، مڽوسون اوروتن، هيغݢ ريفليکسي کنديري) باݢي ممبوليهکن موريد مغولغ لاتيهن سهيغݢ منچاڤاي تاهڤ ڤغواساءن.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                  <div className="font-bold text-emerald-400 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    موديل اينتݢراسي SAMR (ڤوينتيدورا)
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    تاهڤ <strong>ڤغوبهسواين دان ڤنتعريفن سمولا</strong>: مغوبه لمبرن کرجا کونۏينسيونل کڤد سيمقن اوديو اينتراکتيف باݢي ستياڤ اية، ڤاڤرن تجويد اينتراکتيف يغ بوليه دتکن، دان ڤنجناءن سيجيل ديݢيتل موريد سچارا اءوتوماتيک.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                  <div className="font-bold text-emerald-400 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    سمبيلن ڤريستيوا ڤغاجرن ݢانييه
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    مناريق ڤرهاتين موريد (واتق اوستاذ انس دان ۏيسوال مالم ليلة القدر)، ممعلومکن اوبجيکتيف (ڤتا ميسي)، مرغسغ ايغاتن سديا اد (کنالي سورة)، ممبيمبيغ ڤمبلاجرن (اوديو قاري دان ڤتونجوق)، سرتا ڤنتکسيرن فورماتيف (کويز تجويد).
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SKEMA JAWAPAN */}
          {activeTab === 'skema' && (
            <div className="space-y-5">
              <div className="p-3 bg-amber-950/40 border border-amber-800/50 rounded-lg text-xs text-amber-200">
                <strong>نوتا کراهسياءن ݢورو:</strong> سکيما اين دسدياکن خصوص اونتوق روجوعن ڤنيلاين ݢورو.
              </div>

              <div>
                <h3 className="font-bold text-slate-200 mb-3">سکيما کويز ديݢيتل تجويد (سلايد 8)</h3>
                <div className="space-y-3">
                  {QUIZ_QUESTIONS.map((q) => (
                    <div key={q.id} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-semibold text-emerald-400">
                        <span>سوءالن {q.id} ({q.level})</span>
                        <span className="text-slate-400 font-mono">جواڤن: ڤيليهن #{q.correctIndex + 1}</span>
                      </div>
                      <div className="text-slate-200 text-sm">{q.questionJawi}</div>
                      <div className="text-amber-300 font-bold text-sm">
                        ✓ {q.optionsJawi[q.correctIndex]}
                      </div>
                      <div className="text-slate-400 text-xs">{q.explanationJawi}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 mb-3">سکيما سوسون اية سورة القدر (سلايد 7)</h3>
                <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60 space-y-2 font-quran text-right text-base" dir="rtl">
                  <p>١. إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ</p>
                  <p>٢. وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ</p>
                  <p>٣. لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ</p>
                  <p>٤. تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ</p>
                  <p>٥. سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 mb-3">حكوم تجويد دصحکن دالم سورة القدر (سلايد 6)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {TAJWID_RULES.map((rule) => (
                    <div key={rule.id} className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <div className="font-bold text-emerald-400 text-sm mb-1">{rule.nameJawi}</div>
                      <div className="text-slate-300 mb-1">{rule.reasonJawi}</div>
                      <div className="text-amber-300 font-quran text-right text-sm" dir="rtl">
                        {rule.examples.map(e => e.wordText).join(' , ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RUBRIK PBD */}
          {activeTab === 'pbd' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                ڤپيلراسن تاهڤ ڤغواساءن ڤنتکسيرن بيليق درجه (PBD) بيدغ القرءان تاهون 5 سلارس دغن KSSR سيمقن:
              </p>
              <div className="space-y-2.5">
                {DSKP_INFO.tahapPenguasaanPBD.map((pbd) => (
                  <div key={pbd.tp} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/70 flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded bg-emerald-900/60 text-emerald-300 font-mono font-bold text-xs shrink-0 border border-emerald-700/40">
                      {pbd.tp}
                    </span>
                    <span className="text-xs text-slate-200 leading-relaxed">{pbd.desc}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700 text-xs text-slate-300 space-y-1.5">
                <span className="font-bold text-amber-400 block">ڤرايغتن ڤروفيسيونل ݢورو:</span>
                <p>
                  سکور کويز ديݢيتل اين مغوکور ڤغتاهوان تجويد موريد سچارا کوݢنيتيف. ڤنتکسيرن حفظن دان باچاءن سچارا مڽلوروه (تلقي دان مشافهة) هندقله دنيلاي سچارا ليسن دان ڤمرهاتين برتروسن اوليه ݢورو د دالم بيليق درجه.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>اينستيتوت ڤنديديقن ݢورو مليسيا (IPGM) · توݢسن EDUP3133</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
          >
            توتوڤ ڤندوان
          </button>
        </div>
      </div>
    </div>
  );
};
