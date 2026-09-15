import { Dynasty, TimelineEvent, HeritageSite, CulturalArtifact } from '../types';

export const DYNASTIES: Dynasty[] = [
  {
    id: 'achaemenid',
    nameEn: 'Achaemenid Empire',
    nameFa: 'شاهنشاهی هخامنشی',
    periodEn: '550 – 330 BCE',
    periodFa: '۵۵۰ تا ۳۳۰ پیش از میلاد',
    startYear: -550,
    endYear: -330,
    emblem: '🦅',
    capitalEn: 'Pasargadae, Persepolis, Susa, Ecbatana',
    capitalFa: 'پاسارگاد، تخت جمشید، شوش، هگمتانه',
    territorySqKm: '5.5 Million km² (44% of world population)',
    descriptionEn: 'The first Persian Empire founded by Cyrus the Great, spanning from the Indus Valley to the Balkans and Egypt. Renowned for pioneering human rights, the satrapy governance system, and the monumental architecture of Persepolis.',
    descriptionFa: 'نخستین شاهنشاهی بزرگ پارس که به دست کوروش بزرگ بنیاد نهاده شد؛ از دره سند تا بالکان و مصر گسترده بود و با منشور حقوق بشر، سامانه شهربانی (ساتراپی) و شکوه‌مندی تخت جمشید شناخته می‌شود.',
    rulers: [
      {
        nameEn: 'Cyrus the Great',
        nameFa: 'کوروش بزرگ',
        titleEn: 'King of Kings, Liberator of Babylon',
        titleFa: 'شاه شاهان، رهایی‌بخش بابل',
        reignEn: '559 – 530 BCE',
        reignFa: '۵۵۹ تا ۵۳۰ پیش از میلاد',
        achievementEn: 'Issued the Cyrus Cylinder, freed displaced peoples, and established universal religious tolerance.',
        achievementFa: 'صدور استوانه کوروش، آزادی اسیران و بردگان و پایه‌گذاری تساهل دینی در جهان باستان.'
      },
      {
        nameEn: 'Darius the Great',
        nameFa: 'داریوش بزرگ',
        titleEn: 'Architect of the Imperial State',
        titleFa: 'سازنده نظم امپراتوری و راه‌های بازرگانی',
        reignEn: '522 – 486 BCE',
        reignFa: '۵۲۲ تا ۴۸۶ پیش از میلاد',
        achievementEn: 'Built Persepolis, commissioned the Royal Road (2,700 km), and instituted standard imperial coinage (Daric).',
        achievementFa: 'آغاز ساخت تخت جمشید، ایجاد راه شاهی (۲۷۰۰ کیلومتر) و ضرب سکه استاندارد زرین دریک.'
      }
    ],
    achievementsEn: [
      'The Cyrus Cylinder (First declaration of universal human dignity)',
      'The 2,700 km Royal Road with courier postal relay stations (Chaparkhaneh)',
      'Qanat subterranean aqueduct systems irrigating arid plateaus',
      'Construction of Persepolis (Takht-e Jamshid) and Apadana Palace'
    ],
    achievementsFa: [
      'منشور کوروش بزرگ (نخستین اعلامیه جهانی حقوق و کرامت انسانی)',
      'سامانه راه شاهی به درازای ۲۷۰۰ کیلومتر و چاپارخانه‌های پیشرفته پستی',
      'فناوری کاریز (قنات) برای باروری فلات خشک ایران با مهندسی پایدار آب',
      'بنای کاخ‌های باشکوه تخت جمشید و آپادانا با حضور معماران همه ملل'
    ],
    culturalLegacyEn: 'Introduced federal tolerance, legal charters, and international diplomatic protocols embraced across antiquity.',
    culturalLegacyFa: 'آوردن الگوی حکومت متساهل و منشورهای قانونی در جهان که ستایش اندیشمندان باستان را برانگیخت.'
  },
  {
    id: 'parthian',
    nameEn: 'Parthian (Arsacid) Empire',
    nameFa: 'شاهنشاهی اشکانی (پارتی)',
    periodEn: '247 BCE – 224 CE',
    periodFa: '۲۴۷ پیش از میلاد تا ۲۲۴ میلادی',
    startYear: -247,
    endYear: 224,
    emblem: '🏹',
    capitalEn: 'Nisa, Hecatompylos, Ctesiphon',
    capitalFa: 'نسا، صددروازه، تیسفون',
    territorySqKm: '2.8 Million km²',
    descriptionEn: 'Fierce defenders of Iranian sovereignty who liberated the plateau from Hellenistic rule. They mastered horse archery, connected the East-West Silk Road trade, and held Rome at bay for nearly five centuries.',
    descriptionFa: 'پاسداران دلاور استقلال ایران که میهن را از سلطه سلوکیان رهانیدند. با سوارکاری و تیراندازی افسانه‌ای، راه ابریشم میان شرق و غرب را پیوند دادند و روم را سده‌ها مهار کردند.',
    rulers: [
      {
        nameEn: 'Mithridates I',
        nameFa: 'مهرداد یکم',
        titleEn: 'Expander of Parthia',
        titleFa: 'بزرگ‌ترین گشاینده قلمرو اشکانی',
        reignEn: '171 – 132 BCE',
        reignFa: '۱۷۱ تا ۱۳۲ پیش از میلاد',
        achievementEn: 'Transformed Parthia from a local kingdom into a world empire controlling Mesopotamia and Iran.',
        achievementFa: 'تبدیل اشکانیان از فرمانروایی محلی به یک ابرقدرت جهانی با چیرگی بر میان‌رودان و فلات ایران.'
      },
      {
        nameEn: 'Surena',
        nameFa: 'سپهبد سورنا',
        titleEn: 'Legendary Commander',
        titleFa: 'فرمانده نامدار ارتش پارت',
        reignEn: 'Battle of Carrhae (53 BCE)',
        reignFa: 'نبرد حران (۵۳ پیش از میلاد)',
        achievementEn: 'Decisively crushed the Roman legions under Crassus using tactical horse archery.',
        achievementFa: 'شکست سنگین سپاه کراسوس رومی با نبوغ رزمی و تاکتیک‌های چابک سوارنظام پارتی.'
      }
    ],
    achievementsEn: [
      'Full protection and vital expansion of the Silk Road trade route',
      'Feudal assembly system (Magean Senate & Royal Council - Mehestan)',
      'Invention of the Parthian shot maneuver in military tactics',
      'Sustained coexistence of Hellenistic, Persian, and Semitic traditions'
    ],
    achievementsFa: [
      'حمایت و گسترش پیوند تجاری راه ابریشم میان چین و رم',
      'تاسیس مجلس مهستان (شورای عالی نخبگان و شاهزادگان برای تصمیم‌گیری ملی)',
      'ابداع تاکتیک تیراندازی پارتی در سوارکاری رزمی',
      'پایداری تنوع فرهنگی، دینی و مدارا میان اقوام و ادیان گوناگون'
    ],
    culturalLegacyEn: 'Created the political council framework and shielded Eastern intellectual treasures during turbulent centuries.',
    culturalLegacyFa: 'آفرینش سامانه پارلمانی کهن و نگاهبانی از هویت فلات ایران در برابر امواج جهان‌گشایی غرب.'
  },
  {
    id: 'sasanian',
    nameEn: 'Sasanian Empire',
    nameFa: 'شاهنشاهی ساسانی',
    periodEn: '224 – 651 CE',
    periodFa: '۲۲۴ تا ۶۵۱ میلادی',
    startYear: 224,
    endYear: 651,
    emblem: '👑',
    capitalEn: 'Ctesiphon, Istakhr',
    capitalFa: 'تیسفون، استخر',
    territorySqKm: '3.5 Million km²',
    descriptionEn: 'The golden zenith of pre-Islamic Persian civilization. Sasanian art, music, courtly etiquette, and the Academy of Gondeshapur established deep philosophical traditions that influenced both Europe and the Islamic world.',
    descriptionFa: 'اوج شکوه تمدن باستانی ایران؛ هنر، خنیاگری، آیین دادگری و بنیادگذاری دانشگاه گندی‌شاپور که سرچشمه دانش و پزشکی در جهان باستان شد و تاثیری ژرف بر فرهنگ خاورمیانه و غرب نهاد.',
    rulers: [
      {
        nameEn: 'Shapur I',
        nameFa: 'شاپور یکم',
        titleEn: 'Victor over Three Roman Emperors',
        titleFa: 'پیروز بر سه امپراتور روم و سازنده شهرها',
        reignEn: '240 – 270 CE',
        reignFa: '۲۴۰ تا ۲۷۰ میلادی',
        achievementEn: 'Captured Emperor Valerian and founded the premier intellectual center of Gondeshapur.',
        achievementFa: 'اسارت والریانوس امپراتور روم و پایه‌گذاری دانشگاه بزرگ گندی‌شاپور به عنوان قطب پزشکی جهان.'
      },
      {
        nameEn: 'Khosrow I (Anushirvan)',
        nameFa: 'خسرو انوشیروان دادگر',
        titleEn: 'The Just King of Kings',
        titleFa: 'انوشه‌روان دادگر و پشتیبان فیلسوفان',
        reignEn: '531 – 579 CE',
        reignFa: '۵۳۱ تا ۵۷۹ میلادی',
        achievementEn: 'Brought chess (Shatranj) to Persia, translated Indian and Greek literature, and built Taq Kasra.',
        achievementFa: 'ترویج شطرنج، گردآوری متون پزشکی و فلسفی یونان و هند و برپایی طاق با عظمت کسری.'
      }
    ],
    achievementsEn: [
      'The Academy of Gondeshapur: World’s first university hospital and research hub',
      'The Great Arch of Ctesiphon (Taq Kasra): World’s largest single-span unreinforced brick vault',
      'Classical Persian court music established by Barbod and Nakisa',
      'Architectural rock reliefs at Naqsh-e Rustam and Taq-e Bostan'
    ],
    achievementsFa: [
      'دانشگاه و بیمارستان گندی‌شاپور: نخستین مرکز آموزش عالی پزشکی و علمی بین‌المللی',
      'طاق با عظمت کسری: بزرگ‌ترین طاق آجری بدون ستون و پایه در تاریخ مهندسی باستان',
      'دستگاه‌های بنیادین موسیقی سنتی ایرانی به همت باربد و نکیسا',
      'سنگ‌نگاره‌های شگفت‌انگیز نقش رستم، نقش رجب و طاق بستان'
    ],
    culturalLegacyEn: 'Pioneered urban design, scientific synthesis, and court rituals adopted across the medieval Near East.',
    culturalLegacyFa: 'بنیان‌گذاری شهرسازی نوین، گردآوری علوم ملل و آیین‌های درباری که الگوی تمدن‌های پسین شد.'
  },
  {
    id: 'golden-age',
    nameEn: 'Islamic Golden Age & Literary Renaissance',
    nameFa: 'دوران زرین فرهنگ و رنسانس ادبی',
    periodEn: '819 – 1220 CE',
    periodFa: '۸۱۹ تا ۱۲۲۰ میلادی',
    startYear: 819,
    endYear: 1220,
    emblem: '📜',
    capitalEn: 'Bukhara, Nishapur, Rayy, Isfahan',
    capitalFa: 'بخارا، نیشابور، ری، اصفهان',
    territorySqKm: 'Various regional kingdoms (Samanids, Seljuks, Buyids)',
    descriptionEn: 'The brilliant era when Persian luminaries spearheaded global advances in medicine, mathematics, astronomy, and poetry. Ferdowsi resurrected the Persian language with the Shahnameh, while Avicenna and Khayyam revolutionized science.',
    descriptionFa: 'دوران درخشش اندیشمندان ایرانی در هدایت کاروان علم، پزشکی، ریاضیات، فلسفه و شعر جهان؛ زنده شدن زبان پارسی با شاهنامه حکیم فردوسی و انقلاب علمی پورسینا، بیرونی و خیام.',
    rulers: [
      {
        nameEn: 'Ferdowsi of Tus',
        nameFa: 'حکیم ابوالقاسم فردوسی',
        titleEn: 'Savior of the Persian Language',
        titleFa: 'احیاگر زبان و هویت ملی ایران',
        reignEn: '940 – 1020 CE',
        reignFa: '۳۲۹ تا ۴۱۶ هجری قمری',
        achievementEn: 'Authored the 50,000-couplet epic Shahnameh (The Book of Kings), cementing Persian literary immortality.',
        achievementFa: 'سرایش شاهنامه در پنجاه هزار بیت بی‌مرگ، نجات زبان فارسی و ثبت تاریخ اساطیری و کهن.'
      },
      {
        nameEn: 'Avicenna (Ibn Sina)',
        nameFa: 'شیخ الرئیس پورسینا (ابن سینا)',
        titleEn: 'Prince of Physicians',
        titleFa: 'شاهزاده پزشکان و نابغه فلسفه مشاء',
        reignEn: '980 – 1037 CE',
        reignFa: '۳۷۰ تا ۴۲۸ هجری قمری',
        achievementEn: 'Wrote The Canon of Medicine, the standard medical textbook across European universities for 500 years.',
        achievementFa: 'نگارش کتاب جاودان «قانون در طب» که سده‌ها کتاب درسی اصلی دانشگاه‌های اروپا و آسیا بود.'
      }
    ],
    achievementsEn: [
      'Creation of the Shahnameh, preserving Persian lexicon and epic mythology',
      'The Canon of Medicine (Ibn Sina) and Introduction of Algebra (Al-Khwarizmi)',
      'The Jalali Calendar (Omar Khayyam): Astronomical accuracy surpassing the Gregorian calendar',
      'Seljuk brickwork and double-dome engineering at the Jameh Mosque of Isfahan'
    ],
    achievementsFa: [
      'سرایش شاهنامه و حراست ابدی از زبان، فرهنگ و حکمت ملی پارسیان',
      'کتاب «قانون در طب» ابن سینا و بنیادگذاری علم جبر توسط محمد خوارزمی',
      'گاه‌شماری خورشیدی جلالی توسط خیام نیشابوری با دقتی فراتر از گاه‌شماری میلادی',
      'آجرکاری بی‌همتا و گنبدهای دوپوسته سلجوقی در مسجد جامع اصفهان'
    ],
    culturalLegacyEn: 'Laid the foundational cornerstones for modern algebra, clinical medicine, and transcendent mystical verse.',
    culturalLegacyFa: 'پایه‌گذاری جبر در ریاضیات، بنیان‌های روش تجربی پزشکی و شکوفایی شعر نغز و عرفان جهانی.'
  },
  {
    id: 'safavid',
    nameEn: 'Safavid Empire',
    nameFa: 'شاهنشاهی صفوی',
    periodEn: '1501 – 1736 CE',
    periodFa: '۱۵۰۱ تا ۱۷۳۶ میلادی',
    startYear: 1501,
    endYear: 1736,
    emblem: '🕌',
    capitalEn: 'Tabriz, Qazvin, Isfahan',
    capitalFa: 'تبریز، قزوین، اصفهان',
    territorySqKm: '3.2 Million km²',
    descriptionEn: 'The re-unification of Iran under a cohesive national identity. Safavid Isfahan was famously titled "Half the World" (Nesf-e Jahan), marked by turquoise tiled domes, luminous miniature paintings, and world-renowned silk carpets.',
    descriptionFa: 'یکپارچگی مجدد سرزمین ایران و تثبیت هویت ملی؛ اصفهان پایتخت صفوی به نام «نصف جهان» شهرت یافت و با گنبدهای فیروزه‌ای، نگارگری‌های زرین و قالی‌های ابریشمی دلباختگان فراوان یافت.',
    rulers: [
      {
        nameEn: 'Shah Abbas I (The Great)',
        nameFa: 'شاه عباس بزرگ',
        titleEn: 'Urban Visionary & Restorer',
        titleFa: 'احیاگر راه‌ها و سازنده اصفهان نصف جهان',
        reignEn: '1588 – 1629 CE',
        reignFa: '۹۹۶ تا ۱۰۳۸ هجری قمری',
        achievementEn: 'Designed Naqsh-e Jahan Square, established 999 caravanserai road safety networks, and promoted international trade.',
        achievementFa: 'طراحی میدان نقش جهان، ساخت ۹۹۹ کاروانسرای شاه‌عباسی و گسترش بازرگانی بین‌المللی با اروپا.'
      },
      {
        nameEn: 'Reza Abbasi',
        nameFa: 'رضا عباسی',
        titleEn: 'Master of Persian Miniature',
        titleFa: 'استاد بی‌بدیل مکتب نگارگری اصفهان',
        reignEn: 'c. 1565 – 1635 CE',
        reignFa: 'سده یازدهم هجری قمری',
        achievementEn: 'Pioneered naturalistic single-sheet Persian miniature drawing and calligraphic portraits.',
        achievementFa: 'انقلاب در نقاشی و مینیاتور ایرانی با ترسیم چهره‌های طبیعی و تک‌پیکره‌های ماندگار.'
      }
    ],
    achievementsEn: [
      'Naqsh-e Jahan Square (One of the largest and most harmonious public squares on Earth)',
      'Sheikh Lotfollah Mosque: Optical light-transformation ceramic domes',
      'The 999 Caravanserais networking the Persian road network',
      'Pol-e Khaju and Si-o-se-pol architectural weir bridges of Zayanderud'
    ],
    achievementsFa: [
      'میدان تاریخی نقش جهان (یکی از بزرگ‌ترین و هماهنگ‌ترین میدان‌های شهری جهان)',
      'مسجد شیخ لطف‌الله و کاشی‌کاری‌های شگفت‌انگیز هفت‌رنگ با بازی نور خورشید',
      'شبکه سراسری کاروانسراهای شاه‌عباسی برای امنیت کاروان‌ها و مسافران',
      'پل خواجو و سی‌وسه‌پل با مهندسی هیدرولیکی مهار آب و آیین‌های شهری زاینده‌رود'
    ],
    culturalLegacyEn: 'Elevated tilework, textile weaving, and urban civic architecture into an internationally recognized sublime aesthetic.',
    culturalLegacyFa: 'اوج‌گیری کاشی‌کاری معرق، قالی‌بافی درباری و شهرسازی انسان‌محور در مقیاس جهانی.'
  },
  {
    id: 'zand-modern',
    nameEn: 'Zand, Qajar & Contemporary Era',
    nameFa: 'زند، قاجار و دوران معاصر',
    periodEn: '1751 – Present',
    periodFa: '۱۷۵۱ تا دوران معاصر',
    startYear: 1751,
    endYear: 2026,
    emblem: '🏛️',
    capitalEn: 'Shiraz, Tehran',
    capitalFa: 'شیراز، تهران',
    territorySqKm: '1.648 Million km²',
    descriptionEn: 'The era characterized by the humane governance of Karim Khan Zand, the cultural synthesis and Constitutional Revolution of 1906, modernization of institutions, and rich contemporary art and cinematic achievements.',
    descriptionFa: 'دورانی که با حکومت دادگرانه کریم‌خان زند آغاز شد، با انقلاب مشروطه ۱۲۸۵ خورشیدی نخستین پارلمان آسیا را آفرید و با پاسداری از موزه‌ها، شعر نو و سینمای بین‌المللی ادامه یافت.',
    rulers: [
      {
        nameEn: 'Karim Khan Zand',
        nameFa: 'کریم‌خان زند',
        titleEn: 'Advocate of the People (Vakil ol-Ro\'aya)',
        titleFa: 'وکیل‌ الرعایا (نماینده و خدمتگزار مردم)',
        reignEn: '1751 – 1779 CE',
        reignFa: '۱۱۶۴ تا ۱۱۹۳ هجری قمری',
        achievementEn: 'Refused the title of King, prioritized peace, and built Shiraz’s monumental Vakil complex.',
        achievementFa: 'امتناع از پذیرش عنوان شاه، تلاش برای آرامش و دادگری و احداث مجموعه بی‌مانند وکیل در شیراز.'
      },
      {
        nameEn: 'Constitutional Pioneers',
        nameFa: 'رهبران جنبش مشروطیت',
        titleEn: 'Founders of Persian Democracy',
        titleFa: 'پیشگامان قانون‌گرایی و مشروطه',
        reignEn: '1906 – 1911 CE',
        reignFa: '۱۲۸۵ تا ۱۲۹۰ خورشیدی',
        achievementEn: 'Established the first constitutional parliament and codified bill of rights in Western Asia.',
        achievementFa: 'تشکیل نخستین مجلس شورای ملی در غرب آسیا و نگارش قانون اساسی مدرن با اراده ملت.'
      }
    ],
    achievementsEn: [
      'Persian Constitutional Revolution of 1906 (Early triumph of modern constitutionalism)',
      'Establishment of the University of Tehran and National Museum of Iran',
      'Mirror-mosaic (Aineh-Kari) and stained-glass architecture (Nasir al-Mulk Mosque)',
      'Globally celebrated contemporary Persian cinema and modern poetic renaissance'
    ],
    achievementsFa: [
      'انقلاب مشروطیت ایران در سال ۱۲۸۵ (نخستین خیزش دموکراتیک مشروطه‌خواهی در خاورمیانه)',
      'تاسیس دانشگاه تهران و موزه ملی ایران برای حراست از میراث نیاکان',
      'هنر آینه‌کاری و شیشه‌های رنگین در شاهکارهای معماری چون مسجد نصیرالملک شیراز',
      'درخشش بین‌المللی سینمای اندیشمند ایران و شکوفایی شعر نو و موسیقی اصیل'
    ],
    culturalLegacyEn: 'Preserved ancestral identity while fostering active participation in universal scientific and artistic dialogues.',
    culturalLegacyFa: 'حفظ استوار ریشه‌های هویت کهن در کنار گشودگی به نوآوری‌های فکری و هنری جهان معاصر.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'evt-550',
    year: -550,
    dateDisplayEn: '550 BCE',
    dateDisplayFa: '۵۵۰ پیش از میلاد',
    eraId: 'achaemenid',
    category: 'statecraft',
    titleEn: 'Founding of the Achaemenid Empire',
    titleFa: 'بنیان‌گذاری شاهنشاهی هخامنشی',
    summaryEn: 'Cyrus the Great unites the Medes and Persians, establishing the foundations of the world’s largest empire of its era.',
    summaryFa: 'کوروش بزرگ با یکپارچه ساختن مادها و پارس‌ها، شالوده پهناورترین حکومت دادمحور دوران باستان را پی‌ریزی کرد.',
    fullDescriptionEn: 'Through visionary diplomacy, Cyrus brought Persian and Median tribes together without destructive conquest, championing justice and local governance autonomy that would define Persian statecraft.',
    fullDescriptionFa: 'کوروش با خردمندی و مدارا قبایل پارس و ماد را متحد ساخت و الگویی نو از حکمرانی بدون کشتار و ویرانی در جهان کهن ارائه داد که اساس شاهنشاهی جهانی شد.',
    locationEn: 'Pasargadae, Fars',
    locationFa: 'پاسارگاد، پارس',
    quoteEn: 'I am Cyrus, King of the World, Great King, Mighty King, King of Babylon...',
    quoteFa: 'منم کوروش، شاه جهان، شاه بزرگ، شاه دادگر، شاه بابل...',
    quoteAuthorEn: 'Cyrus Cylinder, 539 BCE',
    quoteAuthorFa: 'استوانه کوروش، ۵۳۹ پ.م'
  },
  {
    id: 'evt-539',
    year: -539,
    dateDisplayEn: '539 BCE',
    dateDisplayFa: '۵۳۹ پیش از میلاد',
    eraId: 'achaemenid',
    category: 'philosophy',
    titleEn: 'Proclamation of the Cyrus Cylinder',
    titleFa: 'صدور استوانه حقوق بشر کوروش',
    summaryEn: 'After freeing Babylon, Cyrus enacts the first recognized universal declaration of human liberties and freedom of worship.',
    summaryFa: 'پس از ورود صلح‌آمیز به بابل، کوروش نخستین منشور ثبت‌شده آزادی وجدان، مذهب و منع بردگی را صادر کرد.',
    fullDescriptionEn: 'The baked clay cylinder, inscribed in Akkadian cuneiform, decreed that all displaced populations could return to their homelands, rebuilt desecrated temples, and banned forced labor.',
    fullDescriptionFa: 'این استوانه گلی با خط میخی ایلامی-بابلی فرمان داد که اسیران به دیار خود بازگردند، بت‌ها و نیایشگاه‌های ویران‌شده بازسازی شوند و هیچ‌کس به بیگاری و ستم کشیده نشود.',
    locationEn: 'Babylon (Held in British Museum)',
    locationFa: 'بابل (نگهداری در موزه بریتانیا)',
    quoteEn: 'I freed all slaves and ended their misfortune. I commanded that every person be free to worship their gods.',
    quoteFa: 'من بردگان را از یوغ بندگی آزاد کردم و به تیره‌بختی آنان پایان دادم. فرمان دادم همگان در ستایش خدای خود آزاد باشند.',
    quoteAuthorEn: 'Cyrus the Great',
    quoteAuthorFa: 'کوروش بزرگ'
  },
  {
    id: 'evt-518',
    year: -518,
    dateDisplayEn: '518 BCE',
    dateDisplayFa: '۵۱۸ پیش از میلاد',
    eraId: 'achaemenid',
    category: 'architectural',
    titleEn: 'Construction of Persepolis Commences',
    titleFa: 'آغاز احداث تخت جمشید (پارسه)',
    summaryEn: 'Darius the Great lays the foundation for Persepolis (Takht-e Jamshid), the ceremonial heart of the empire.',
    summaryFa: 'داریوش بزرگ دستور ساخت تخت جمشید را به عنوان نماد همبستگی و شکوه تمدن ملل صادر کرد.',
    fullDescriptionEn: 'Persepolis was engineered on a massive 125,000 square meter terrace at the foot of Mount Rahmat. Over decades, master stonemasons from across Egypt, Babylon, Lydia, and Ionia contributed to its iconic Apadana columns, Gate of All Nations, and tribute reliefs.',
    fullDescriptionFa: 'تخت جمشید روی صفه‌ای به مساحت ۱۲۵ هزار متر مربع بر دامنه کوه رحمت بنا شد. معماران و هنرمندان مصری، بابلی، یونانی و عیلامی با دریافت دستمزد عادلانه کاخ‌های شکوهمند و دروازه ملل را خلق کردند.',
    locationEn: 'Fars Province',
    locationFa: 'استان فارس',
    quoteEn: 'Ahuramazda protect this land from enemy armies, from famine, and from the lie.',
    quoteFa: 'خداوند این کشور را از سپاه دشمن، از خشکسالی و از دروغ پاسداری دارد.',
    quoteAuthorEn: 'Darius Inscription at Persepolis',
    quoteAuthorFa: 'کتیبه داریوش بزرگ در تخت جمشید'
  },
  {
    id: 'evt-53',
    year: -53,
    dateDisplayEn: '53 BCE',
    dateDisplayFa: '۵۳ پیش از میلاد',
    eraId: 'parthian',
    category: 'statecraft',
    titleEn: 'Parthian Triumph at the Battle of Carrhae',
    titleFa: 'پیروزی ارتش پارت در نبرد حران (کاره)',
    summaryEn: 'Surena’s tactical cavalry overcomes Marcus Licinius Crassus, establishing parity between Rome and the Persian realm.',
    summaryFa: 'سپهبد سورنا با بهره‌گیری از سواره‌نظام زره‌پوش و کمانداران چابک، سپاه روم به رهبری کراسوس را شکست داد.',
    fullDescriptionEn: 'The Battle of Carrhae demonstrated the strategic superiority of composite bows, camels replenishing ammunition, and mobile cataphracts, setting the border along the Euphrates River for half a millennium.',
    fullDescriptionFa: 'نبرد حران با برتری تاکتیکی تیراندازان سواره و تدارکات شترهای حامل پیکان رخ داد و برای بیش از ۵۰۰ سال رود فرات را به عنوان مرز طبیعی میان دو ابرقدرت شرق و غرب تثبیت کرد.',
    locationEn: 'Carrhae (Upper Mesopotamia)',
    locationFa: 'حران (میان‌رودان شمالی)'
  },
  {
    id: 'evt-260',
    year: 260,
    dateDisplayEn: '260 CE',
    dateDisplayFa: '۲۶۰ میلادی',
    eraId: 'sasanian',
    category: 'statecraft',
    titleEn: 'Shapur I Triumphs Over Rome & Builds Gondeshapur',
    titleFa: 'پیروزی شاپور یکم بر روم و احداث گندی‌شاپور',
    summaryEn: 'Shapur defeats Emperor Valerian and founds the world’s leading intellectual sanctuary at the Academy of Gondeshapur.',
    summaryFa: 'شاپور یکم امپراتور روم را به اسارت درآورد و شهر دانشگاهی گندی‌شاپور را به عنوان مرکز دانش جهان تاسیس کرد.',
    fullDescriptionEn: 'Following his victory, celebrated in the monumental rock-cut reliefs of Naqsh-e Rustam, Shapur mobilized engineers to erect the Band-e Kaisar bridge-dam at Shushtar and welcome scholars of all origins to Gondeshapur.',
    fullDescriptionFa: 'شاپور پس از پیروزی که در صخره‌های نقش رستم جاودانه شد، مهندسان را برای ساخت سد شادروان شوشتر به کار گرفت و دانشمندان نستوری، زرتشتی و هندی را در گندی‌شاپور گرد آورد.',
    locationEn: 'Naqsh-e Rustam & Khuzestan',
    locationFa: 'نقش رستم و خوزستان'
  },
  {
    id: 'evt-540',
    year: 540,
    dateDisplayEn: '540 CE',
    dateDisplayFa: '۵۴۰ میلادی',
    eraId: 'sasanian',
    category: 'architectural',
    titleEn: 'Erection of the Arch of Ctesiphon (Taq Kasra)',
    titleFa: 'برپایی طاق کسری (ایوان مدائن)',
    summaryEn: 'Khosrow Anushirvan completes the grandest single-span unreinforced parabolic brick arch ever constructed.',
    summaryFa: 'خسرو انوشیروان ایوان عظیم مدائن را با دهانه‌ای شگفت‌انگیز و بدون پایه ستون از آجر خالص برافراشت.',
    fullDescriptionEn: 'Rising 37 meters with a span of 26 meters, Taq Kasra stood as an architectural marvel designed to inspire awe in foreign ambassadors, celebrated by Arab and Persian poets for millennia.',
    fullDescriptionFa: 'این طاق با بلندی ۳۷ متر و دهانه ۲۶ متر، شاهکار محاسبات ایستایی و معماری آجری بود که شاعرانی چون خاقانی شروانی قصاید بلند در عبرت‌آموزی از عظمت آن سروده‌اند.',
    locationEn: 'Ctesiphon',
    locationFa: 'تیسفون (ایوان مدائن)'
  },
  {
    id: 'evt-1010',
    year: 1010,
    dateDisplayEn: '1010 CE',
    dateDisplayFa: '۳۸۹ خورشیدی / ۱۰۱۰ میلادی',
    eraId: 'golden-age',
    category: 'literary',
    titleEn: 'Ferdowsi Completes the Shahnameh',
    titleFa: 'پایان سرایش شاهنامه فردوسی',
    summaryEn: 'After 30 years of solitary labor, Ferdowsi finishes the 50,000-line national epic, immortalizing the Persian tongue.',
    summaryFa: 'پس از ۳۰ سال رنج بی‌وقفه، حکیم ابوالقاسم فردوسی طومار شاهنامه را پایان داد و زبان فارسی را از زوال رهانید.',
    fullDescriptionEn: 'By composing the stories of Jamshid, Rostam, Sohrab, and Cyrus in pure, melodious Persian without reliance on foreign vocabulary, Ferdowsi created an unbreakable cultural identity that endured centuries of foreign invasions.',
    fullDescriptionFa: 'فردوسی با نظم داستان‌های باستانی و حماسه‌های رستم، کاوه آهنگر و فریدون به زبان فارسی فصیح، سدی پولادین در برابر فراموشی هویت ملی و تاریخی ساخت.',
    locationEn: 'Tus, Khorasan',
    locationFa: 'توس، خراسان',
    quoteEn: 'Much have I suffered in these thirty years, I have revived the Ajam [Persian] with this Parsi verse.',
    quoteFa: 'بسی رنج بردم در این سال سی / عجم زنده کردم بدین پارسی',
    quoteAuthorEn: 'Hakim Abu\'l-Qasim Ferdowsi',
    quoteAuthorFa: 'حکیم ابوالقاسم فردوسی'
  },
  {
    id: 'evt-1025',
    year: 1025,
    dateDisplayEn: '1025 CE',
    dateDisplayFa: '۴۰۴ خورشیدی / ۱۰۲۵ میلادی',
    eraId: 'golden-age',
    category: 'philosophy',
    titleEn: 'Avicenna Pens The Canon of Medicine',
    titleFa: 'نگارش کتاب قانون در طب توسط پورسینا',
    summaryEn: 'Ibn Sina synthesizes clinical medicine, pharmacology, and anatomy into a five-volume encyclopedia that guided European universities until the 17th century.',
    summaryFa: 'ابن سینا دانشنامه جامع پزشکی و داروسازی خود را به رشته تحریر درآورد که تا ۵۰۰ سال متن درسی دانشگاه‌های پاریس و بولونیا بود.',
    fullDescriptionEn: 'The Canon introduced quarantine protocols, clinical drug trials, pulse diagnostics, and the contagious nature of pulmonary tuberculosis, solidifying rational empirical medicine.',
    fullDescriptionFa: 'کتاب قانون روش آزمایش‌های دارویی، قرنطینه برای مهار بیماری‌های واگیردار و بررسی نبض و سیستم عصبی را بنیان گذاشت و نماد نبوغ علمی شرق در قرون وسطی گشت.',
    locationEn: 'Hamedan & Isfahan',
    locationFa: 'همدان و اصفهان'
  },
  {
    id: 'evt-1079',
    year: 1079,
    dateDisplayEn: '1079 CE',
    dateDisplayFa: '۴۵۸ خورشیدی / ۱۰۷۹ میلادی',
    eraId: 'golden-age',
    category: 'philosophy',
    titleEn: 'Omar Khayyam Perfects the Jalali Solar Calendar',
    titleFa: 'تنظیم گاه‌شماری خورشیدی جلالی توسط خیام',
    summaryEn: 'Poet-mathematician Omar Khayyam calculates the solar year with an error of merely one day every 5,000 years.',
    summaryFa: 'حکیم عمر خیام نیشابوری دقیق‌ترین تقویم خورشیدی تاریخ بشر را تدوین کرد که خطای آن تنها ۱ روز در هر ۵ هزار سال است.',
    fullDescriptionEn: 'Commissioned by Sultan Malik-Shah Seljuk, Khayyam led an observatory team that determined the tropical solar year as 365.24219858 days, outperforming both the Julian calendar and the later Gregorian reform of 1582.',
    fullDescriptionFa: 'خیام به همراه گروهی از منجمان در اصفهان طول سال شمسی را با دقتی شگفت محاسبه کرد؛ او علاوه بر نجوم با رباعیات فلسفی و حل معادلات درجه سه در جبر جهان را دگرگون ساخت.',
    locationEn: 'Isfahan Observatory',
    locationFa: 'رصدخانه اصفهان'
  },
  {
    id: 'evt-1598',
    year: 1598,
    dateDisplayEn: '1598 CE',
    dateDisplayFa: '۹۷۷ خورشیدی / ۱۵۹۸ میلادی',
    eraId: 'safavid',
    category: 'architectural',
    titleEn: 'Isfahan Declared Capital & Naqsh-e Jahan Built',
    titleFa: 'پایتختی اصفهان و بنای میدان نقش جهان',
    summaryEn: 'Shah Abbas transforms Isfahan into "Half the World", creating a pedestrian paradise framed by royal palaces, grand mosques, and vaulted bazaars.',
    summaryFa: 'شاه عباس بزرگ اصفهان را به اوج شکوه رساند و میدان عظیم نقش جهان را با کاخ عالی‌قاپو و مساجد شاه و شیخ لطف‌الله پی‌افکند.',
    fullDescriptionEn: 'Measuring 560 meters long by 160 meters wide, Naqsh-e Jahan accommodated royal polo games, military parades, and open markets, while the Sheikh Lotfollah Mosque showcased tilework of unprecedented luminosity.',
    fullDescriptionFa: 'میدان نقش جهان با طول ۵۶۰ و عرض ۱۶۰ متر میدانی بی‌همتا برای چوگان، جشن‌های ملی و تجارت جهانی بود که شاهکارهای کاشی هفت‌رنگ و معرق در آن چشم گردشگران ونیزی و فرانسوی را خیره ساخت.',
    locationEn: 'Isfahan',
    locationFa: 'اصفهان'
  },
  {
    id: 'evt-1906',
    year: 1906,
    dateDisplayEn: '1906 CE',
    dateDisplayFa: '۱۲۸۵ خورشیدی / ۱۹۰۶ میلادی',
    eraId: 'zand-modern',
    category: 'statecraft',
    titleEn: 'The Persian Constitutional Revolution (Mashrouteh)',
    titleFa: 'انقلاب مشروطیت ایران',
    summaryEn: 'Citizens, merchants, and intellectuals unite to establish the first written constitution and national assembly (Majles) in the Middle East.',
    summaryFa: 'قیام مردم و روشنفکران برای مهار استبداد، نگارش نخستین قانون اساسی ملی و تاسیس مجلس شورای ملی در بهارستان.',
    fullDescriptionEn: 'After months of general strikes, sanctuary protests (Bast), and public petitions, the Royal Decree for a constitutional parliament was signed, inaugurating an era of civil rights, secular law, and institutional reform.',
    fullDescriptionFa: 'فرمان مشروطیت با مقاومت مردم تبریز، تهران و اصفهان به بار نشست و ایران به عنوان پیشتاز دموکراسی و حاکمیت قانون در سراسر قاره آسیا شناخته شد.',
    locationEn: 'Tehran & Tabriz',
    locationFa: 'تهران و تبریز'
  }
];

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'persepolis',
    nameEn: 'Persepolis (Takht-e Jamshid)',
    nameFa: 'تخت جمشید (پارسه)',
    provinceEn: 'Fars',
    provinceFa: 'فارس',
    type: 'palace',
    unescoYear: 1979,
    eraEn: 'Achaemenid (518 BCE)',
    eraFa: 'هخامنشی (۵۱۸ پ.م)',
    coordinates: { x: 52, y: 72 },
    summaryEn: 'The monumental ceremonial capital of the Persian Empire, famed for the Gate of All Nations and Apadana reliefs depicting 23 subject nations bearing gifts in mutual dignity.',
    summaryFa: 'پایتخت تشریفاتی باشکوه هخامنشیان با دروازه ملل، کاخ آپادانا و سنگ‌نگاره‌های نمایندگان ۲۳ ملت که در صلح و برابری پیشکش‌های خود را به شاهنشاه پیشکش می‌کنند.',
    highlightsEn: [
      'Apadana Palace monumental staircase reliefs',
      'The Gate of All Nations guarded by winged bulls (Lamassu)',
      'Throne Hall (Hall of a Hundred Columns)',
      'Sophisticated underground stormwater drainage channels'
    ],
    highlightsFa: [
      'نقش‌برجسته‌های پلکان کاخ آپادانا و ادای احترام ملل',
      'دروازه ملل با تندیس گاوهای بالدار نگهبان با چهره انسان',
      'تالار صد ستون با ستون‌های ۲۰ متری سنگی تراش‌خورده',
      'سامانه مهندسی کانال‌های فاضلاب و دفع آب زیرزمینی'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'pasargadae',
    nameEn: 'Pasargadae & Tomb of Cyrus',
    nameFa: 'پاسارگاد و آرامگاه کوروش بزرگ',
    provinceEn: 'Fars',
    provinceFa: 'فارس',
    type: 'monument',
    unescoYear: 2004,
    eraEn: 'Achaemenid (546 BCE)',
    eraFa: 'هخامنشی (۵۴۶ پ.م)',
    coordinates: { x: 54, y: 69 },
    summaryEn: 'The first dynastic capital of the Achaemenids featuring the majestic stone stepped mausoleum of Cyrus the Great, surrounded by the earliest recorded formal Persian gardens (Chahar Bagh).',
    summaryFa: 'نخستین پایتخت هخامنشیان با بنای آرامگاه شش‌پله‌ای و ساده کوروش بزرگ بر فراز دشت مرغاب و کهن‌ترین باغ‌های چهارباغ مهندسی‌شده ایرانی.',
    highlightsEn: [
      'The stepped limestone chamber of Cyrus the Great',
      'Prototype of the world-famous quadripartite Persian garden (Chahar Bagh)',
      'Palace of Cyrus and winged guardian genius relief',
      'Toll-e Takht stone fortress platform'
    ],
    highlightsFa: [
      'بنای مکعبی و سنگی آرامگاه کوروش بزرگ با مهندسی ضدزلزله',
      'الگوی اصلی باغ چهاربخشی ایرانی با جوی‌های سنگی آبرسانی',
      'سنگ‌نگاره مرد بالدار با کلاهخود شاهانه شاخدار',
      'صفه سنگی دژ تل تخت با بلوک‌های عظیم بست‌دار'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1565018054866-9b54c7d0d087?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'naqsh-e-jahan',
    nameEn: 'Naqsh-e Jahan Square',
    nameFa: 'میدان نقش جهان',
    provinceEn: 'Isfahan',
    provinceFa: 'اصفهان',
    type: 'monument',
    unescoYear: 1979,
    eraEn: 'Safavid (1598 CE)',
    eraFa: 'صفوی (۱۵۹۸ م)',
    coordinates: { x: 48, y: 55 },
    summaryEn: 'A colossal urban ensemble harmoniously linking religion (Shah & Lotfollah Mosques), governance (Ali Qapu Palace), and commerce (Qeysarieh Bazaar).',
    summaryFa: 'میدانی پهناور و بی‌نظیر که عبادت (مسجد امام و شیخ لطف‌الله)، حکومت (کاخ عالی‌قاپو) و تجارت (بازار قیصریه) را با زیبایی شگفت در کنار هم جای داده است.',
    highlightsEn: [
      'Sheikh Lotfollah Mosque: Sanctuary of sacred geometry and peacock ceiling',
      'Ali Qapu Palace: 6-story acoustic music room with carved stucco niches',
      'Shah Mosque (Masjed-e Jameh Abbasi) turquoise tiles',
      'Historical marble polo goalposts preserved at both ends'
    ],
    highlightsFa: [
      'مسجد شیخ لطف‌الله با بازی تابش نور و گنبد شبیه دم طاووس',
      'کاخ عالی‌قاپو و تالار موسیقی با گچ‌بری‌های توخالی آکوستیک',
      'مسجد جامع عباسی با گنبد فیروزه‌ای و انعکاس هفت‌گانه صوت',
      'ستون‌های سنگی دروازه چوگان کهن در دو سوی میدان'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'shushtar-hydraulics',
    nameEn: 'Shushtar Historical Hydraulic System',
    nameFa: 'سازه‌های آبی تاریخی شوشتر',
    provinceEn: 'Khuzestan',
    provinceFa: 'خوزستان',
    type: 'hydraulic',
    unescoYear: 2009,
    eraEn: 'Achaemenid & Sasanian (5th c. BCE – 3rd c. CE)',
    eraFa: 'هخامنشی و ساسانی',
    coordinates: { x: 38, y: 60 },
    summaryEn: 'A genius masterpiece of creative hydraulic engineering utilizing cliff tunnels, weirs, watermills, and canals to supply water, power mills, and irrigate 40,000 hectares of land.',
    summaryFa: 'شاهکار نبوغ مهندسی آب باستان که با حفر تونل‌های سنگی، سدهای بندمیزان و آسیاب‌های آبی، ۴۰ هزار هکتار دشت را سیراب و آرد هزاران نفر را تامین می‌کرد.',
    highlightsEn: [
      'Gargar Canal diverted directly through bedrock cliffs',
      'Cascading waterfalls powering multiple sequential watermills',
      'Band-e Mizan weir regulating the Karun River flow',
      'Salasel Castle defensive command fortress'
    ],
    highlightsFa: [
      'کانال دست‌کند گرگر که از دل صخره‌های سخت شکافته شد',
      'آبشارهای جوشان و آسیاب‌های سنگی که آب را به چرخش درمی‌آورند',
      'بند میزان برای تقسیم متوازن و دقیق جریان رود کارون',
      'قلعه سلاسل به عنوان مرکز پایش و فرماندهی آب'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bisotun',
    nameEn: 'Bisotun Inscription & Relief',
    nameFa: 'کتیبه و نقش‌برجسته بیستون',
    provinceEn: 'Kermanshah',
    provinceFa: 'کرمانشاه',
    type: 'monument',
    unescoYear: 2006,
    eraEn: 'Achaemenid (521 BCE)',
    eraFa: 'هخامنشی (۵۲۱ پ.م)',
    coordinates: { x: 32, y: 46 },
    summaryEn: 'Carved 100 meters high on a limestone cliff along the ancient Silk Road, this trilingual cuneiform inscription served as the "Rosetta Stone of Cuneiform" deciphering Old Persian, Elamite, and Babylonian.',
    summaryFa: 'کتیبه‌ای با شکوه در ارتفاع ۱۰۰ متری صخره بیستون که با سه خط میخی پارسی باستان، عیلامی و بابلی نگاشته شد و کلید رمزگشایی خط میخی در جهان مدرن گردید.',
    highlightsEn: [
      'Trilingual cuneiform text deciphered by Sir Henry Rawlinson in 1835',
      'Relief of Darius the Great standing with bow under the Faravahar emblem',
      'Statue of Hercules carved during the Parthian era',
      'Caravanserai of Shah Abbas on the historic caravan trail'
    ],
    highlightsFa: [
      'متن سه‌زبانه میخی که رمزگشای خطوط دنیای کهن بین‌النهرین شد',
      'نقش‌برجسته داریوش بزرگ در زیر نشان پرتو فر کیانی',
      'مجسمه هرکول تراشیده شده در دوران سلحشوری اشکانیان',
      'کاروانسرای شاه‌عباسی بیستون در پای کوه افسانه‌ای'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'gonbad-qabus',
    nameEn: 'Gonbad-e Qabus Brick Tower',
    nameFa: 'گنبد قابوس (برج آجری قابوس)',
    provinceEn: 'Golestan',
    provinceFa: 'گلستان',
    type: 'monument',
    unescoYear: 2012,
    eraEn: 'Ziyarid (1006 CE)',
    eraFa: 'زیاری (۱۰۰۶ م)',
    coordinates: { x: 55, y: 30 },
    summaryEn: 'The tallest unreinforced baked-brick tower on Earth, standing 53 meters high with a fluted ten-pointed decagonal star plan, representing astronomical and geometric perfection.',
    summaryFa: 'بلندترین برج تمام‌آجری جهان به بلندی ۵۳ متر با پلان ستاره‌ای ده‌پر که بدون هیچ ملات فولادی پس از هزار سال و زلزله‌های سهمگین استوار مانده است.',
    highlightsEn: [
      '53-meter conical roof engineered entirely of unglazed baked bricks',
      'Fluted ten-pointed star exterior dissipating wind shear',
      'Acoustic echo focal point at the base of the monument',
      'Historical foundation inscription in Kufic script'
    ],
    highlightsFa: [
      'گنبد مخروطی یکپارچه آجری با مقاومت خارق‌العاده',
      'طراحی ده‌پر هندسی برای مهار نیروهای باد و زلزله',
      'نقطه تمرکز آکوستیک صدا در محوطه روبروی ورودی',
      'کتیبه آجری کوفی دورتادور برج با تاریخ هجری قمری و یزدگردی'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80'
  }
];

export const CULTURAL_ARTIFACTS: CulturalArtifact[] = [
  {
    id: 'cyrus-cylinder',
    titleEn: 'The Cyrus Cylinder',
    titleFa: 'استوانه حقوق بشر کوروش بزرگ',
    categoryEn: 'Charter & Epigraphy',
    categoryFa: 'منشور و سنگ‌نبشته',
    eraEn: '539 BCE (Achaemenid)',
    eraFa: '۵۳۹ پیش از میلاد (هخامنشی)',
    currentHoldingEn: 'British Museum (Replica at UN Headquarters, New York)',
    currentHoldingFa: 'موزه بریتانیا (نسخه بدل در مقر سازمان ملل، نیویورک)',
    descriptionEn: 'A barrel-shaped cylinder of baked clay, written in Akkadian cuneiform by order of Cyrus the Great upon his peaceful entry into Babylon. Recognized worldwide as the first charter of human rights and dignity.',
    descriptionFa: 'استوانه‌ای از گل پخته به خط میخی اکدی که به فرمان کوروش بزرگ پس از فتح صلح‌آمیز بابل نوشته شد و نخستین منشور دفاع از حقوق انسان و آزادی عقیده خوانده می‌شود.',
    significanceEn: 'Guaranteed freedom of religious belief, prohibited slavery and looting, restored confiscated sanctuaries, and permitted displaced peoples to return to their ancestral lands.',
    significanceFa: 'تضمین آزادی مذهب و آیین‌ها، لغو بیگاری و غارتگری، بازگرداندن تندیس‌های مصادره‌شده و بازگشت آزادانه همه اقوام تبعیدی به سرزمین‌هایشان.',
    quoteEn: 'I gathered all their inhabitants and returned to them their dwellings... and I let all people live in peaceful homes.',
    quoteFa: 'من تمام ساکنان سرزمین‌ها را گرد آوردم و خانه‌هایشان را به آنان بازگرداندم... و همه را در آرامش سکنا دادم.'
  },
  {
    id: 'shahnameh-epic',
    titleEn: 'The Shahnameh of Ferdowsi',
    titleFa: 'شاهنامه حماسه‌سرای توس',
    categoryEn: 'Literature & Philosophy',
    categoryFa: 'ادبیات و خرد حماسی',
    eraEn: 'Completed 1010 CE',
    eraFa: 'پایان سرایش در سال ۱۰۱۰ میلادی',
    currentHoldingEn: 'Archived globally in historic royal libraries (e.g., Tahmasp Shahnameh)',
    currentHoldingFa: 'نگهداری در موزه‌های برجسته جهان (شاهنامه شاه‌طهماسبی)',
    descriptionEn: 'The world’s longest epic poem written by a single poet, containing roughly 50,000 rhyming couplets that chronicle the creation of the world, heroic legends, and the historic kings of Iran.',
    descriptionFa: 'بلندترین منظومه حماسی جهان از یک سراینده با ۵۰ هزار بیت که تاریخ اساطیری، پهلوانی و سلسله‌های تاریخی ایران را با زبانی پالوده و آهنگین روایت می‌کند.',
    significanceEn: 'Resurrected the Persian language during a period of potential cultural assimilation; instilled ethics of truthfulness, chivalry (Javanmardi), and stewardship of nature.',
    significanceFa: 'نجات زبان فارسی از ادغام و نابودی؛ ترویج فضایل جوانمردی، راستی، دادگری و پیکار همیشگی با ظلم و دروغ.',
    quoteEn: 'Be righteous in deed and keep your heart pure; for this brief world will remain for no one.',
    quoteFa: 'به نیکی گرای و میازار کس / ره‌رستگاری همین است و بس'
  },
  {
    id: 'persian-carpet',
    titleEn: 'Ardabil Carpet & Geometric Silk Weaving',
    titleFa: 'فرش شاهکار اردبیل و قالی‌های ابریشمی',
    categoryEn: 'Textile Art & Sacred Geometry',
    categoryFa: 'هنر نساجی و هندسه مقدس',
    eraEn: '1539 CE (Safavid)',
    eraFa: '۱۵۳۹ میلادی (دوران صفوی)',
    currentHoldingEn: 'Victoria and Albert Museum, London',
    currentHoldingFa: 'موزه ویکتوریا و آلبرت، لندن',
    descriptionEn: 'One of the world’s oldest, largest, and most intricate surviving carpets, comprising over 26 million hand-tied knots. The design embodies an optical pool of water reflecting a sunburst medallion and hanging mosque lamps.',
    descriptionFa: 'یکی از کهن‌ترین و خیره‌کننده‌ترین قالی‌های جهان با ۲۶ میلیون گره دست‌باف که تصویری از یک حوض فیروزه‌ای، ترنج شمسه آسمانی و چراغدان‌های معلق را تداعی می‌کند.',
    significanceEn: 'Demonstrates the mastery of Persian natural dyes (madder, saffron, indigo) and sacred geometry where mathematics and spiritual infinity intertwine seamlessly.',
    significanceFa: 'اوج هنر رنگرزی سنتی گیاهی با روناس و نیل و کاربرد هندسه اسلیمی که مفاهیم بی‌پایانی جهان هستی را به تصویر می‌کشد.',
    quoteEn: 'Except for your threshold, I have no refuge in this world; there is no shelter for my head but this door.',
    quoteFa: 'جز آستان توام در جهان پناهی نیست / سر مرا به جز این در حواله‌گاهی نیست (بیت بافته‌شده بر فرش)'
  },
  {
    id: 'jalali-calendar',
    titleEn: 'The Jalali Solar Calendar & Astrolabes',
    titleFa: 'گاه‌شماری خورشیدی جلالی و اسطرلاب‌های برنجی',
    categoryEn: 'Astronomy & Mathematics',
    categoryFa: 'نجوم و دانش محاسباتی',
    eraEn: '1079 CE (Seljuk / Omar Khayyam)',
    eraFa: '۱۰۷۹ میلادی (عصر خیام)',
    currentHoldingEn: 'Iran National Science Museum & British Museum',
    currentHoldingFa: 'موزه علوم و فناوری ایران و موزه بریتانیا',
    descriptionEn: 'The world’s most accurate solar calendar system, calibrated to astronomical vernal equinox (Nowruz), complemented by exquisite engraved brass astrolabes for calculating celestial orbits.',
    descriptionFa: 'دقیق‌ترین سامانه گاه‌شماری خورشیدی تاریخ بر پایه تحویل دقیق اعتدال بهاری (نوروز) همراه با اسطرلاب‌های مسحورکننده برای اندازه‌گیری مختصات ستارگان.',
    significanceEn: 'Calculates the vernal solar cycle so precisely that it requires leap-year corrections only once every several thousand years, outperforming contemporary European calendars.',
    significanceFa: 'محاسبه چنان دقیق حرکت زمین به دور خورشید که آغاز سال نو همزمان با شکفتن طبیعت و دقیقه نجومی تحویل سال نو جشن گرفته می‌شود.'
  }
];
