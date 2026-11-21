import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowLeft } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../data/qadrData';
import { soundFx } from '../../utils/soundEffects';

interface Slide8KuizProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
  onUpdateQuizScore: (score: number) => void;
  onNextSlide: () => void;
}

export const Slide8Kuiz: React.FC<Slide8KuizProps> = ({
  onEarnStar,
  hasEarnedStar,
  onUpdateQuizScore,
  onNextSlide
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentSelected = selectedAnswers[currentQ.id];

  const handleSelectOption = (optIdx: number) => {
    if (showExplanation) return; // locked once answered
    soundFx.playClick();
    const updated = { ...selectedAnswers, [currentQ.id]: optIdx };
    setSelectedAnswers(updated);
    setShowExplanation(true);

    const isCorrect = optIdx === currentQ.correctIndex;
    if (isCorrect) {
      soundFx.playSuccess();
    } else {
      soundFx.playTryAgain();
    }
  };

  const handleNextQuestion = () => {
    soundFx.playClick();
    setShowExplanation(false);
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Calculate final score
      let score = 0;
      QUIZ_QUESTIONS.forEach((q) => {
        if (selectedAnswers[q.id] === q.correctIndex) {
          score += 1;
        }
      });
      setIsQuizCompleted(true);
      onUpdateQuizScore(score);

      if (score >= 3 && !hasEarnedStar) {
        soundFx.playSuccess();
        onEarnStar();
      }
    }
  };

  const handleRestart = () => {
    soundFx.playClick();
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  // Compute current score
  let currentScore = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctIndex) {
      currentScore += 1;
    }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Top Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>سلايد 8 · ميسي کويز ديݢيتل تجويد</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          کويز ديݢيتل ڤمبورو تجويد
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2">
          اوجي کفهمن حكوم تجويد دالم سورة القدر. راءيه لينچانا ڤمبورو تجويد!
        </p>
      </div>

      {!isQuizCompleted ? (
        <div className="space-y-6">
          
          {/* Progress Tracker Bar */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400">سوءالن:</span>
              <span className="font-bold text-emerald-400 font-mono text-sm">
                {currentIdx + 1} / {totalQuestions}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {QUIZ_QUESTIONS.map((q, i) => {
                const answered = selectedAnswers[q.id] !== undefined;
                const isCorrect = selectedAnswers[q.id] === q.correctIndex;
                const isCurrent = i === currentIdx;

                return (
                  <div
                    key={q.id}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'ring-2 ring-amber-400 bg-amber-500 text-slate-950'
                        : answered
                        ? isCorrect
                          ? 'bg-emerald-600 text-white'
                          : 'bg-rose-700 text-white'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div className="text-amber-300 font-bold font-mono">
              سکور: {currentScore}
            </div>
          </div>

          {/* Current Question Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-emerald-700/50 shadow-xl space-y-6">
            
            {/* Level indicator */}
            <div className="inline-block px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
              {currentQ.level}
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
              {currentQ.questionJawi}
            </h3>

            {/* Excerpt if available */}
            {currentQ.verseExcerptArabic && (
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center" dir="rtl">
                <span className="font-quran text-2xl sm:text-3xl text-amber-300">
                  {currentQ.verseExcerptArabic}
                </span>
              </div>
            )}

            {/* 3 Large Option Buttons */}
            <div className="space-y-3">
              {currentQ.optionsJawi.map((option, optIdx) => {
                const isChosen = currentSelected === optIdx;
                const isCorrect = optIdx === currentQ.correctIndex;
                const hasAnswered = showExplanation;

                let btnStyle = 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700';

                if (hasAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/80 border-emerald-400 text-emerald-200 ring-2 ring-emerald-400';
                  } else if (isChosen && !isCorrect) {
                    btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-200 ring-2 ring-rose-400';
                  } else {
                    btnStyle = 'opacity-40 bg-slate-900 border-slate-800 text-slate-400';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={hasAnswered}
                    className={`w-full p-4 rounded-xl border text-right font-bold text-sm sm:text-base transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-900/80 border border-slate-700 flex items-center justify-center font-mono text-sm shrink-0">
                        {optIdx + 1}
                      </span>
                      <span>{option}</span>
                    </div>

                    {hasAnswered && isCorrect && (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    )}
                    {hasAnswered && isChosen && !isCorrect && (
                      <XCircle className="w-6 h-6 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback and Explanation */}
            {showExplanation && (
              <div
                className={`p-5 rounded-xl border text-sm space-y-2 animate-fade-in ${
                  currentSelected === currentQ.correctIndex
                    ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                    : 'bg-rose-950/50 border-rose-600 text-rose-200'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-base">
                  <span>
                    {currentSelected === currentQ.correctIndex ? 'جواڤن يغ بتول!' : 'چوبا لاݢي!'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">{currentQ.explanationJawi}</p>

                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>{currentIdx < totalQuestions - 1 ? 'سوءالن ستروسڽ' : 'ليهت کڤوتوسن کويز'}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      ) : (
        /* QUIZ SUMMARY & REWARDS SCREEN */
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-emerald-600/50 shadow-2xl text-center space-y-6">
          
          {/* Badge Image */}
          <div className="relative inline-block mx-auto">
            <img
              src="/src/assets/images/badge_pemburu_tajwid_1793021169296.jpg"
              alt="لينچانا ڤمبورو تجويد"
              className="w-32 h-32 rounded-full border-4 border-amber-400 object-cover shadow-2xl mx-auto"
            />
            <div className="absolute -bottom-2 -left-2 bg-amber-400 text-slate-950 px-3 py-0.5 rounded-full font-bold text-xs">
              {currentScore} / {totalQuestions}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-amber-300">
              {currentScore === 5
                ? 'لينچانا ڤمبورو تجويد سورة القدر!'
                : currentScore >= 3
                ? 'بينتغ ڤمبلاجر تجويد!'
                : 'تهنيءه اتس اوسها اندا!'}
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              {currentScore === 5
                ? 'ما شاء الله! اندا تله منچاڤاي مرکه ڤنوه 5/5 دان مغواساءي حكوم تجويد سورة القدر دغن چمرلغ!'
                : currentScore >= 3
                ? 'باݢوس سکالي! اندا تله مغواساءي سبهاݢين بسر حكوم تجويد. تروسکن لاتيهن!'
                : 'جاغن ڤوتوس اس، چوبا لاݢي! بلاجر اداله ڤروسيس يغ مغوتاماکن کتکونن.'}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>اولغ کويز</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                onNextSlide();
              }}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>تروس ک ميسي ڤغهايتن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
