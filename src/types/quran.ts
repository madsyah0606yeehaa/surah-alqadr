export interface QuranVerse {
  number: number;
  arabicText: string;
  translationMs: string;
  audioUrl: string;
  words: {
    text: string;
    tajwidRuleId?: string;
  }[];
}

export interface TajwidRule {
  id: string;
  nameJawi: string;
  nameArabic: string;
  color: string;
  borderClass: string;
  bgClass: string;
  textClass: string;
  descriptionJawi: string;
  reasonJawi: string;
  examples: {
    verseNumber: number;
    wordText: string;
    explanationJawi: string;
    highlightSubstring: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  level: string; // Aras 1 - 5
  questionJawi: string;
  verseExcerptArabic?: string;
  optionsJawi: string[];
  correctIndex: number;
  explanationJawi: string;
}

export interface ReflectionScenario {
  id: number;
  situationJawi: string;
  questionJawi: string;
  options: {
    id: string;
    textJawi: string;
    isCorrect: boolean;
    feedbackJawi: string;
  }[];
}

export interface StudentProgress {
  studentName: string;
  completedSlides: number[];
  readVerses: number[];
  memorizedStages: number[];
  discoveredTajwidRules: string[];
  quizAnswers: { [questionId: number]: number };
  quizScore: number;
  susunAyatCompleted: boolean;
  reflectionSelected: string;
  reflectionNote: string;
  totalStars: number;
}
