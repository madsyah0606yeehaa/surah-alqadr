import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { QADR_VERSES, BASMALAH } from '../../data/qadrData';
import { soundFx } from '../../utils/soundEffects';

interface Slide4TilawahProps {
  onEarnStar: () => void;
  hasEarnedStar: boolean;
}

export const Slide4Tilawah: React.FC<Slide4TilawahProps> = ({ onEarnStar, hasEarnedStar }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [teacherMode, setTeacherMode] = useState(false);
  const [readVerses, setReadVerses] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Play a specific verse
  const playVerse = (index: number) => {
    soundFx.playClick();
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const verse = QADR_VERSES[index];
    const audio = new Audio(verse.audioUrl);
    audio.playbackRate = audioSpeed;
    audioRef.current = audio;
    setPlayingIndex(index);

    audio.onended = () => {
      // Mark as read
      if (!readVerses.includes(verse.number)) {
        const updated = [...readVerses, verse.number];
        setReadVerses(updated);
        if (updated.length === 5 && !hasEarnedStar) {
          soundFx.playSuccess();
          onEarnStar();
        }
      }

      if (isPlayingAll && index < QADR_VERSES.length - 1) {
        setTimeout(() => {
          playVerse(index + 1);
        }, teacherMode ? 2000 : 700);
      } else {
        setPlayingIndex(null);
        setIsPlayingAll(false);
      }
    };

    audio.onerror = () => {
      setPlayingIndex(null);
      setIsPlayingAll(false);
    };

    audio.play().catch(() => {
      setPlayingIndex(null);
      setIsPlayingAll(false);
    });
  };

  const stopAudio = () => {
    soundFx.playClick();
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPlayingIndex(null);
    setIsPlayingAll(false);
  };

  const handlePlayAll = () => {
    soundFx.playClick();
    if (playingIndex !== null) {
      stopAudio();
    } else {
      setIsPlayingAll(true);
      playVerse(0);
    }
  };

  const toggleReadVerse = (verseNum: number) => {
    soundFx.playClick();
    if (readVerses.includes(verseNum)) {
      setReadVerses(readVerses.filter((v) => v !== verseNum));
    } else {
      const updated = [...readVerses, verseNum];
      setReadVerses(updated);
      if (updated.length === 5 && !hasEarnedStar) {
        soundFx.playSuccess();
        onEarnStar();
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 font-jawi text-right">
      
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400 text-xs mb-3">
          <Volume2 className="w-3.5 h-3.5 text-amber-400" />
          <span>سلايد 4 · ميسي تلاوة سورة القدر</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-300">
          تلاوة فصيح دان برتجويد
        </h2>
        
        {/* Instructions in Jawi tanpa harakat */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
            دغر باچاءن قاري دغن تليتي.
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
            ايکوت باچاءن دغن بتول.
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800">
            باچ برسام ݢورو.
          </span>
        </div>
      </div>

      {/* Audio Toolbar Controls */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-700/50 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePlayAll}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              isPlayingAll || playingIndex !== null
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md'
            }`}
          >
            {isPlayingAll || playingIndex !== null ? (
              <>
                <Pause className="w-4 h-4" />
                <span>هنتيکن باچاءن</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>ماءينکن سموا اية</span>
              </>
            )}
          </button>

          <button
            onClick={() => setTeacherMode(!teacherMode)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              teacherMode
                ? 'bg-teal-900/80 border border-teal-400 text-teal-200'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500'
            }`}
            title="مود تلقي دان مشافهة"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>مود برسام ݢورو</span>
          </button>
        </div>

        {/* Speed Controls & Reading counter */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-xs">
            <span className="text-slate-400 ml-1">کلاجوان:</span>
            <button
              onClick={() => setAudioSpeed(0.85)}
              className={`px-2 py-0.5 rounded cursor-pointer ${
                audioSpeed === 0.85 ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400'
              }`}
            >
              0.8x (ڤرلاهن)
            </button>
            <button
              onClick={() => setAudioSpeed(1.0)}
              className={`px-2 py-0.5 rounded cursor-pointer ${
                audioSpeed === 1.0 ? 'bg-emerald-700 text-white font-bold' : 'text-slate-400'
              }`}
            >
              1.0x (بياسا)
            </button>
          </div>

          <div className="text-xs text-amber-300 font-bold bg-amber-950/40 px-3 py-1.5 rounded-lg border border-amber-600/30 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{readVerses.length} / 5 دباچ</span>
          </div>
        </div>
      </div>

      {/* Basmalah Card */}
      <div className="text-center py-3 px-6 rounded-xl bg-slate-900/40 border border-slate-800/80 mb-4" dir="rtl">
        <span className="font-quran text-2xl sm:text-3xl text-amber-200/90 tracking-wide">
          {BASMALAH}
        </span>
      </div>

      {/* 5 Verses Cards */}
      <div className="space-y-4">
        {QADR_VERSES.map((verse, index) => {
          const isPlaying = playingIndex === index;
          const isRead = readVerses.includes(verse.number);

          return (
            <div
              key={verse.number}
              className={`p-5 rounded-2xl border transition-all ${
                isPlaying
                  ? 'bg-emerald-950/70 border-amber-400 ring-2 ring-amber-400/50 shadow-xl'
                  : 'bg-slate-900/80 border-slate-800 hover:border-emerald-800/80'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Verse Arabic Text + Jawi Translation (First in RTL = Right side) */}
                <div className="flex-1 space-y-2 text-right">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 text-sm font-mono font-bold flex items-center justify-center shrink-0">
                      {verse.number}
                    </span>
                    <div className="font-quran text-2xl sm:text-3xl md:text-4xl text-slate-100 leading-loose" dir="rtl">
                      {verse.arabicText}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-11">
                    {verse.translationMs}
                  </p>
                </div>

                {/* Verse Actions (End in RTL = Left side) */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => {
                      if (isPlaying) {
                        stopAudio();
                      } else {
                        playVerse(index);
                      }
                    }}
                    className={`p-3 rounded-xl transition-all cursor-pointer ${
                      isPlaying
                        ? 'bg-amber-500 text-slate-950 shadow-md animate-pulse'
                        : 'bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm'
                    }`}
                    title="دغر اية"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                  </button>

                  <button
                    onClick={() => playVerse(index)}
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                    title="اولغ باچاءن"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => toggleReadVerse(verse.number)}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                      isRead
                        ? 'bg-emerald-900/50 border-emerald-400 text-emerald-300'
                        : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${isRead ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span>{isRead ? 'سوده دباچ' : 'تندا باچ'}</span>
                  </button>
                </div>

              </div>

              {/* Teacher-Student Guidance tip if teacherMode is on */}
              {teacherMode && (
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-amber-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>
                    <strong>تلقي دان مشافهة:</strong> ݢورو ممباچ اية {verse.number} دان موريد مغيکوت دغن مڽبوت مخرج سرتا تجويد يغ تڤت.
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
