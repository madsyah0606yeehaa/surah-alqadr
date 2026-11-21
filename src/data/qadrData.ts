import { QuranVerse, TajwidRule, QuizQuestion, ReflectionScenario } from '../types/quran';

export const SURAH_NAME_ARABIC = 'سُورَةُ الْقَدْرِ';
export const SURAH_NAME_JAWI = 'سورة القدر';
export const BASMALAH = 'بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ';

export const QADR_VERSES: QuranVerse[] = [
  {
    number: 1,
    arabicText: 'إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ',
    translationMs: 'سسوغݢوهڽ کامي تله منورونکنڽ (القرءان) ڤد مالم ليلة القدر.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/097001.mp3',
    words: [
      { text: 'إِنَّآ', tajwidRuleId: 'ghunnah' },
      { text: 'أَنزَلْنَـٰهُ', tajwidRuleId: 'ikhfa' },
      { text: 'فِى', tajwidRuleId: 'mad_tabii' },
      { text: 'لَيْلَةِ' },
      { text: 'ٱلْقَدْرِ', tajwidRuleId: 'lam_qamariah' }
    ]
  },
  {
    number: 2,
    arabicText: 'وَمَآ أَدْرَىٰكَ مَا لَيْلَةُ ٱلْقَدْرِ',
    translationMs: 'دان اڤ جالنڽ اغکاو داڤت مغتاهوءي اڤ دي کبسارن مالم ليلة القدر ايت؟',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/097002.mp3',
    words: [
      { text: 'وَمَآ', tajwidRuleId: 'mad_jaiz' },
      { text: 'أَدْرَىٰكَ', tajwidRuleId: 'qalqalah' },
      { text: 'مَا', tajwidRuleId: 'mad_tabii' },
      { text: 'لَيْلَةُ' },
      { text: 'ٱلْقَدْرِ', tajwidRuleId: 'lam_qamariah' }
    ]
  },
  {
    number: 3,
    arabicText: 'لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
    translationMs: 'مالم ليلة القدر ايت لبيه باءيق درڤد سريبو بولن.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/097003.mp3',
    words: [
      { text: 'لَيْلَةُ' },
      { text: 'ٱلْقَدْرِ', tajwidRuleId: 'lam_qamariah' },
      { text: 'خَيْرٌ' },
      { text: 'مِّنْ' },
      { text: 'أَلْفِ', tajwidRuleId: 'izhar_halqi' },
      { text: 'شَهْرٍ' }
    ]
  },
  {
    number: 4,
    arabicText: 'تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ',
    translationMs: 'ڤد مالم ايت، تورون ملاءيکة دان جبريل دغن ايذين توهن مريک، کران ممباوا سݢالا ڤرکارا.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/097004.mp3',
    words: [
      { text: 'تَنَزَّلُ' },
      { text: 'ٱلْمَلَـٰٓئِكَةُ', tajwidRuleId: 'mad_wajib' },
      { text: 'وَٱلرُّوحُ', tajwidRuleId: 'lam_syamsiah' },
      { text: 'فِيهَا', tajwidRuleId: 'mad_tabii' },
      { text: 'بِإِذْنِ' },
      { text: 'رَبِّهِم' },
      { text: 'مِّن كُلِّ', tajwidRuleId: 'ikhfa' },
      { text: 'أَمْرٍ' }
    ]
  },
  {
    number: 5,
    arabicText: 'سَلَـٰمٌ هِىَ حَتَّىٰ مَطْلَعِ ٱلْفَجْرِ',
    translationMs: 'سجهتراله مالم (يغ برکت) ايت هيغݢ تربيت فجر.',
    audioUrl: 'https://everyayah.com/data/Alafasy_128kbps/097005.mp3',
    words: [
      { text: 'سَلَـٰمٌ هِىَ', tajwidRuleId: 'izhar_halqi' },
      { text: 'حَتَّىٰ' },
      { text: 'مَطْلَعِ', tajwidRuleId: 'qalqalah' },
      { text: 'ٱلْفَجْرِ', tajwidRuleId: 'lam_qamariah' }
    ]
  }
];

export const TAJWID_RULES: TajwidRule[] = [
  {
    id: 'ghunnah',
    nameJawi: 'غنة مشددة',
    nameArabic: 'غُنَّةٌ مُشَدَّدَةٌ',
    color: '#10b981',
    borderClass: 'border-emerald-500',
    bgClass: 'bg-emerald-950/60',
    textClass: 'text-emerald-400',
    descriptionJawi: 'حروف نون اتاو ميم يغ برتندا شدة (سبدو).',
    reasonJawi: 'برلاکو اڤابيلا حروف نون برتندا شدة؛ واجب ددغوغکن دغن قدر 2 حرکت.',
    examples: [
      {
        verseNumber: 1,
        wordText: 'إِنَّآ',
        explanationJawi: 'نون برتندا شدة (سبدو) ددغوغکن سلاما 2 حرکت.',
        highlightSubstring: 'إِنَّ'
      }
    ]
  },
  {
    id: 'ikhfa',
    nameJawi: 'اخفاء حقيقي',
    nameArabic: 'إِخْفَاءٌ حَقِيقِيٌّ',
    color: '#06b6d4',
    borderClass: 'border-cyan-500',
    bgClass: 'bg-cyan-950/60',
    textClass: 'text-cyan-400',
    descriptionJawi: 'نون ساکنة اتاو تنوين برتمو دغن ساله ساتو درڤد 15 حروف اخفاء.',
    reasonJawi: 'دباچ سچارا سامر-سامر انتارا اظهار دان ادغام برسرتا دغوغ 2 حرکت.',
    examples: [
      {
        verseNumber: 1,
        wordText: 'أَنزَلْنَـٰهُ',
        explanationJawi: 'نون ساکنة برتمو حروف زاي (ز). دباچ سامر دان ددغوغکن 2 حرکت.',
        highlightSubstring: 'أَنزَ'
      },
      {
        verseNumber: 4,
        wordText: 'مِّن كُلِّ',
        explanationJawi: 'نون ساکنة برتمو حروف کاف (ك). دباچ سامر دان ددغوغکن 2 حرکت.',
        highlightSubstring: 'ن كُ'
      }
    ]
  },
  {
    id: 'izhar_halqi',
    nameJawi: 'اظهار حلقي',
    nameArabic: 'إِظْهَارٌ حَلْقِيٌّ',
    color: '#eab308',
    borderClass: 'border-amber-500',
    bgClass: 'bg-amber-950/60',
    textClass: 'text-amber-400',
    descriptionJawi: 'نون ساکنة اتاو تنوين برتمو دغن حروف حلق (ء، هـ، ع، ح، غ، خ).',
    reasonJawi: 'دباچ دغن جلس دان پايت تنڤا دغوغ.',
    examples: [
      {
        verseNumber: 3,
        wordText: 'مِّنْ أَلْفِ',
        explanationJawi: 'نون ساکنة برتمو حروف همزة (أ). دباچ جلس تنڤا دغوغ.',
        highlightSubstring: 'نْ أَلْ'
      },
      {
        verseNumber: 5,
        wordText: 'سَلَـٰمٌ هِىَ',
        explanationJawi: 'تنوين ضمة برتمو حروف هاء (هـ). دباچ جلس تنڤا دغوغ.',
        highlightSubstring: 'مٌ هِ'
      }
    ]
  },
  {
    id: 'lam_qamariah',
    nameJawi: 'اليف لام قمرية',
    nameArabic: 'إِظْهَارٌ قَمَرِيٌّ',
    color: '#3b82f6',
    borderClass: 'border-blue-500',
    bgClass: 'bg-blue-950/60',
    textClass: 'text-blue-400',
    descriptionJawi: 'اليف لام برتمو دغن ساله ساتو درڤد 14 حروف قمرية.',
    reasonJawi: 'حروف لام برتندا سکون دباچ دغن جلس دان پايت (اظهار قمري).',
    examples: [
      {
        verseNumber: 1,
        wordText: 'ٱلْقَدْرِ',
        explanationJawi: 'اليف لام برتمو حروف قاف (ق). لام دباچ دغن جلس.',
        highlightSubstring: 'ٱلْقَ'
      },
      {
        verseNumber: 4,
        wordText: 'ٱلْمَلَـٰٓئِكَةُ',
        explanationJawi: 'اليف لام برتمو حروف ميم (م). لام دباچ دغن جلس.',
        highlightSubstring: 'ٱلْمَ'
      },
      {
        verseNumber: 5,
        wordText: 'ٱلْفَجْرِ',
        explanationJawi: 'اليف لام برتمو حروف فاء (ف). لام دباچ دغن جلس.',
        highlightSubstring: 'ٱلْفَ'
      }
    ]
  },
  {
    id: 'lam_syamsiah',
    nameJawi: 'اليف لام شمسية',
    nameArabic: 'إِدْغَامٌ شَمْسِيٌّ',
    color: '#f97316',
    borderClass: 'border-orange-500',
    bgClass: 'bg-orange-950/60',
    textClass: 'text-orange-400',
    descriptionJawi: 'اليف لام برتمو دغن ساله ساتو درڤد 14 حروف شمسية.',
    reasonJawi: 'حروف لام تيدق دباچ دان دادغامکن (دماسوقکن) ک دالم حروف سلڤسڽ يغ برتندا شدة.',
    examples: [
      {
        verseNumber: 4,
        wordText: 'وَٱلرُّوحُ',
        explanationJawi: 'اليف لام برتمو حروف راء (ر). لام دادغامکن دان حروف راء دباچ برتندا شدة.',
        highlightSubstring: 'ٱلرُّ'
      }
    ]
  },
  {
    id: 'mad_wajib',
    nameJawi: 'مد واجب متصل',
    nameArabic: 'مَدٌّ وَاجِبٌ مُتَّصِلٌ',
    color: '#a855f7',
    borderClass: 'border-purple-500',
    bgClass: 'bg-purple-950/60',
    textClass: 'text-purple-400',
    descriptionJawi: 'حروف مد برتمو دغن همزة دالم ساتو کليمه يغ سام.',
    reasonJawi: 'واجب دڤنجغکن باچاءن دغن قدر 4 اتاو 5 حرکت کتيک وصل.',
    examples: [
      {
        verseNumber: 4,
        wordText: 'ٱلْمَلَـٰٓئِكَةُ',
        explanationJawi: 'حروف مد اليف برتمو همزة دالم کليمه ٱلْمَلَـٰٓئِكَةُ. دڤنجغکن 4 اتاو 5 حرکت.',
        highlightSubstring: 'لَـٰٓئِ'
      }
    ]
  },
  {
    id: 'qalqalah',
    nameJawi: 'قلقلة صغرى',
    nameArabic: 'قَلْقَلَةٌ صُغْرَى',
    color: '#ec4899',
    borderClass: 'border-pink-500',
    bgClass: 'bg-pink-950/60',
    textClass: 'text-pink-400',
    descriptionJawi: 'ساله ساتو درڤد حروف قلقلة (ق، ط، ب، ج، د) برتندا سکون د تغه کليمه.',
    reasonJawi: 'دلنتونکن سوارا سچارا ريغن کتيک ممباچاڽ.',
    examples: [
      {
        verseNumber: 2,
        wordText: 'أَدْرَىٰكَ',
        explanationJawi: 'حروف دال (د) برتندا سکون د تغه کليمه. دلنتونکن سوارا سچارا ريغن.',
        highlightSubstring: 'أَدْ'
      },
      {
        verseNumber: 5,
        wordText: 'مَطْلَعِ',
        explanationJawi: 'حروف طاء (ط) برتندا سکون د تغه کليمه. دلنتونکن سوارا سچارا ريغن.',
        highlightSubstring: 'مَطْ'
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    level: 'ارس 1: مغنل ڤستي حكوم تجويد',
    questionJawi: 'اڤکه حكوم تجويد يغ ترداڤت ڤد کليمه "إِنَّآ" دالم اية ڤرتام؟',
    verseExcerptArabic: 'إِنَّآ أَنزَلْنَـٰهُ فِى لَيْلَةِ ٱلْقَدْرِ',
    optionsJawi: [
      'غنة مشددة',
      'اظهار حلقي',
      'مد طبيعي'
    ],
    correctIndex: 0,
    explanationJawi: 'بتول! کليمه "إِنَّآ" مغاندوغي حروف نون برتندا شدة يغ واجب ددغوغکن سلاما 2 حرکت.'
  },
  {
    id: 2,
    level: 'ارس 2: مننتوکن بهاݢين باچاءن',
    questionJawi: 'مانکه انتارا کليمه برايکوت مغاندوغي حكوم "اخفاء حقيقي"؟',
    verseExcerptArabic: 'أَنزَلْنَـٰهُ  ·  ٱلْقَدْرِ  ·  خَيْرٌ مِّنْ',
    optionsJawi: [
      'ٱلْقَدْرِ',
      'أَنزَلْنَـٰهُ',
      'خَيْرٌ مِّنْ'
    ],
    correctIndex: 1,
    explanationJawi: 'بتول! کليمه "أَنزَلْنَـٰهُ" مغاندوغي نون ساکنة برتمو حروف زاي (ز)، دباچ سامر دغن دغوغ 2 حرکت.'
  },
  {
    id: 3,
    level: 'ارس 3: منجلسکن سبب برلاکو حكوم',
    questionJawi: 'مغاڤکه کليمه "مِّنْ أَلْفِ" دباچ دغن حكوم "اظهار حلقي"؟',
    verseExcerptArabic: 'لَيْلَةُ ٱلْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
    optionsJawi: [
      'کران نون ساکنة برتمو حروف همزة (أ)',
      'کران نون ساکنة برتمو حروف زاي (ز)',
      'کران تنوين برتمو حروف ميم (م)'
    ],
    correctIndex: 0,
    explanationJawi: 'بتول! حكوم اظهار حلقي برلاکو کران نون ساکنة (مِّنْ) برتمو حروف همزة (أَلْفِ) يغ مروڤاکن حروف حلق.'
  },
  {
    id: 4,
    level: 'ارس 4: ممبيذاکن دوا حكوم تجويد',
    questionJawi: 'اڤکه ڤربيذاءن حكوم انتارا "ٱلْقَدْرِ" دغن "وَٱلرُّوحُ"؟',
    verseExcerptArabic: 'ٱلْقَدْرِ  ·  وَٱلرُّوحُ',
    optionsJawi: [
      'ٱلْقَدْرِ اياله اليف لام قمرية، مناکالا وَٱلرُّوحُ اياله اليف لام شمسية',
      'کدوا-دواڽ اداله اليف لام شمسية',
      'ٱلْقَدْرِ اياله ادغام، مناکالا وَٱلرُّوحُ اياله اظهار'
    ],
    correctIndex: 0,
    explanationJawi: 'بتول! کليمه "ٱلْقَدْرِ" دباچ حروف لام دغن جلس (اليف لام قمرية)، سدغکن "وَٱلرُّوحُ" حروف لام دادغامکن ک دالم راء (اليف لام شمسية).'
  },
  {
    id: 5,
    level: 'ارس 5: مغاڤليکاسيکن ڤغتاهوان تجويد',
    questionJawi: 'براڤکه قدر حرکت باچاءن باݢي کليمه "ٱلْمَلَـٰٓئِكَةُ" (مد واجب متصل) کتيک وصل؟',
    verseExcerptArabic: 'تَنَزَّلُ ٱلْمَلَـٰٓئِكَةُ وَٱلرُّوحُ فِيهَا',
    optionsJawi: [
      '2 حرکت سهاج',
      '4 اتاو 5 حرکت',
      '6 حرکت سهاج'
    ],
    correctIndex: 1,
    explanationJawi: 'تهنيءه! کليمه "ٱلْمَلَـٰٓئِكَةُ" اياله مد واجب متصل، واجب دڤنجغکن 4 اتاو 5 حرکت کتيک وصل.'
  }
];

export const REFLECTION_SCENARIOS: ReflectionScenario[] = [
  {
    id: 1,
    situationJawi: 'حاذق مندڤتي بولن رمضان تله مماسوقي 10 مالم تراخير.',
    questionJawi: 'اڤکه تيندقن ترباءيق حاذق برداسرکن کمولياءن مالم ليلة القدر؟',
    options: [
      {
        id: '1a',
        textJawi: 'ممڤرباپق عبادة، صلاة تراويح دان بردعاء کڤد الله SWT.',
        isCorrect: true,
        feedbackJawi: 'تهنيءه! اين تيندقن يغ باءيق اونتوق مغيسي 10 مالم تراخير مغيکوت سنة رسول الله SAW.'
      },
      {
        id: '1b',
        textJawi: 'تيدور اول کران ڤنت برڤواسا.',
        isCorrect: false,
        feedbackJawi: 'چوبا لاݢي! بولن رمضان اياله بولن عبادة؛ ربوتله ڤلواغ مالم ليلة القدر.'
      },
      {
        id: '1c',
        textJawi: 'برماءين ڤرماءينن ۏيديو سڤنجغ مالم.',
        isCorrect: false,
        feedbackJawi: 'چوبا لاݢي! اوتاماکن عبادة ڤد مالم يغ امت موليا اين.'
      }
    ]
  },
  {
    id: 2,
    situationJawi: 'امينة ايغين منچاڤاي کبرکتن درڤد سورة القدر سلڤس بلاجر هاري اين.',
    questionJawi: 'باݢايمانکه امينة بوليه مغعملکن ڤغاجرن سورة القدر دالم کهيدوڤن هارين؟',
    options: [
      {
        id: '2a',
        textJawi: 'ممباچ دان مغحفظ القرءان سچارا استقامة سرتا مغعملکن سنة.',
        isCorrect: true,
        feedbackJawi: 'بتول سکالي! استقامة ممباچ دان برعمل دغن القرءان ممباوا رحمة دان کبرکتن.'
      },
      {
        id: '2b',
        textJawi: 'ممباچ القرءان هاڽ کتيک اکن مغهادڤي ڤڤريقساءن.',
        isCorrect: false,
        feedbackJawi: 'چوبا لاݢي! القرءان ڤرلو دباچ دان دعملکن ستياڤ هاري، بوکن کتيک ڤڤريقساءن سهاج.'
      },
      {
        id: '2c',
        textJawi: 'مڽيمڤن مصحف د اتس راق تنڤا دباچ.',
        isCorrect: false,
        feedbackJawi: 'چوبا لاݢي! کمولياءن القرءان دڤراوليه دغن تلاوة، حفظن دان عملن.'
      }
    ]
  },
  {
    id: 3,
    situationJawi: 'کتيک د دالم کلس، سئورغ راکن مغهادڤي کسوکرن اونتوق ممباچ سورة القدر.',
    questionJawi: 'اڤکه تيندقن يغ منونجوقکن سيکڤ صالح دان کاسيه سايغ؟',
    options: [
      {
        id: '3a',
        textJawi: 'ممبنتوڽ ممباچ دغن صبر دان ممبري کات-کات سماغت.',
        isCorrect: true,
        feedbackJawi: 'تهنيءه! اين عمل صالح يغ دتونتوت دالم إسلام دان ممباوا رحمة.'
      },
      {
        id: '3b',
        textJawi: 'منرتاواکن کسيلاڤنڽ کڤد راکن-راکن لاءين.',
        isCorrect: false,
        feedbackJawi: 'چوبا لاݢي! إسلام ملارغ مغيجيق دان منونتوت کيت ساليغ ممبنتو.'
      },
      {
        id: '3c',
        textJawi: 'ممبيارکنڽ تنڤا ممبري ڤرهاتين.',
        isCorrect: false,
        feedbackJawi: 'چوبا لاݢي! بنتوله راکن دان عملکن کباءيقن برسام-سام.'
      }
    ]
  }
];

export const DSKP_INFO = {
  mataPelajaran: 'ڤنديديقن إسلام',
  tahun: 'تاهون 5 سکوله رنده (KSSR سيمقن)',
  bidang: 'القرءان',
  tajuk: 'ممباچ دان مغحفظ سورة القدر',
  standardKandungan: [
    {
      code: '1.3',
      desc: 'مغحفظ سورة القدر دغن بتول دان برتجويد سرتا مغعملکنڽ دالم صلاة دان کهيدوڤن هارين.'
    }
  ],
  standardPembelajaran: [
    {
      code: '1.3.1',
      desc: 'مغحفظ سورة القدر دغن بتول دان برتجويد.'
    },
    {
      code: '1.3.2',
      desc: 'ممباچ القرءان دالم کهيدوڤن هارين سچارا برادب دان استقامة.'
    }
  ],
  tahapPenguasaanPBD: [
    { tp: 'TP 1', desc: 'موريد داڤت ممباچ اية ترتنتو سورة القدر دغن بيمبيغن ݢورو.' },
    { tp: 'TP 2', desc: 'موريد داڤت ممباچ دان مغحفظ سورة القدر دغن سبهاݢين تجويد يغ بتول.' },
    { tp: 'TP 3', desc: 'موريد داڤت ممباچ دان مغحفظ کسلوروهن سورة القدر دغن بتول دان لنچر سرتا برتجويد.' },
    { tp: 'TP 4', desc: 'موريد داڤت ممباچ، مغحفظ دان مغنل ڤستي حكوم تجويد دغن تڤت سرتا ترسوسون.' },
    { tp: 'TP 5', desc: 'موريد داڤت ممباچ، مغحفظ دان منجلسکن حكوم تجويد سرتا مغاءيتکن ڤغاجرن سورة دالم کهيدوڤن سچارا تکل.' },
    { tp: 'TP 6', desc: 'موريد داڤت ممباچ دان مغحفظ دغن فصيح دان چمرلغ، مغواساءي تجويد سچارا متقين، سرتا منونجوقکن عملن ترڤوجي دان ممبيمبيغ راکن.' }
  ],
  modelPedagogi: [
    'موديل ڤمبلاجرن براساسکن ڤرماءينن (PBP)',
    'ڤمبلاجرن ماستيري (بلوم دان ݢوسکي)',
    'موديل اينتݢراسي تيکنولوݢي SAMR (ڤوينتيدورا) – تاهڤ ڤغوبهسواين دان ڤنتعريفن سمولا',
    'سمبيلن ڤريستيوا ڤغاجرن ݢانييه'
  ]
};
