import { Dynasty, TimelineEvent, HeritageSite, CulturalArtifact } from '../types';

export const DYNASTIES: Dynasty[] = [
  {
    id: 'elamite',
    nameEn: 'Elamite Civilization',
    nameFa: 'تمدن عیلام و دوران کهن',
    periodEn: '3200 – 539 BCE',
    periodFa: '۳۲۰۰ تا ۵۳۹ پیش از میلاد',
    startYear: -3200,
    endYear: -539,
    emblem: '🏺',
    eraCategory: 'pre-islamic',
    capitalEn: 'Susa, Anshan',
    capitalFa: 'شوش، انشان',
    territorySqKm: '1.2 Million km² (Southwest & Central Plateau)',
    descriptionEn: 'One of the earliest recorded civilizations on the Iranian plateau. The Elamites pioneered monumental ziggurat architecture, advanced metallurgy, and written administrative tablets, laying the foundations for Greater Iran.',
    descriptionFa: 'از کهن‌ترین تمدن‌های ثبت‌شده در فلات ایران که با ساخت زیگورات‌های عظیم همچون چغازنبیل، فلزکاری شگفت‌انگیز و خط پیش‌عیلامی، پایه‌های تمدن فلات ایران را بنا نهاد.',
    rulers: [
      {
        nameEn: 'Untash-Napirisha',
        nameFa: 'اونتاش ناپیریشا',
        titleEn: 'King of Anshan and Susa',
        titleFa: 'پادشاه انشان و شوش',
        reignEn: 'c. 1275 – 1240 BCE',
        reignFa: 'حدود ۱۲۷۵ تا ۱۲۴۰ پیش از میلاد',
        achievementEn: 'Commissioned the monumental UNESCO World Heritage Ziggurat of Chogha Zanbil.',
        achievementFa: 'فرمان احداث نیایشگاه و زیگورات باشکوه چغازنبیل در خوزستان را صادر کرد.'
      },
      {
        nameEn: 'Shutruk-Nakhkhunte',
        nameFa: 'شوتروک ناهونته',
        titleEn: 'King of Elamite Empire',
        titleFa: 'فرمانروای بزرگ شاهنشاهی عیلام',
        reignEn: 'c. 1184 – 1155 BCE',
        reignFa: 'حدود ۱۱۸۴ تا ۱۱۵۵ پیش از میلاد',
        achievementEn: 'Expanded Elamite rule to Mesopotamia and erected imperial monuments at Susa.',
        achievementFa: 'گسترش قلمرو عیلام و انتقال ستون حمورابی و یادمان‌های پیروزی به شوش.'
      }
    ],
    achievementsEn: [
      'The Chogha Zanbil Ziggurat (First UNESCO World Heritage site in Iran)',
      'Sophisticated bronze and gold casting techniques',
      'The ancient proto-Elamite and Linear Elamite scripts',
      'Extensive subterranean urban water filtration networks in Susa'
    ],
    achievementsFa: [
      'زیگورات چغازنبیل (نخستین اثر ثبت جهانی یونسکو در ایران و شاهکار آجرکاری باستان)',
      'فناوری ریخته‌گری برنز و نقره در تمدن‌های هم‌جوار جیرفت و مارلیک',
      'خط پیش‌عیلامی و عیلامی خطی برای سازمان‌دهی امور مالی و حقوقی',
      'مهندسی آب و کانال‌کشی تصفیه آب در کهن‌شهر شوش'
    ],
    culturalLegacyEn: 'Introduced monumental brickwork, civic deities, and ceramic artistry deeply influential to subsequent empires.',
    culturalLegacyFa: 'آغازگر سنت معماری خشتی و آجری در فلات ایران و الگوی اداری و نمادین برای شاهنشاهی‌های پس از خود.'
  },
  {
    id: 'medes',
    nameEn: 'Median Empire',
    nameFa: 'پادشاهی مادها',
    periodEn: '678 – 549 BCE',
    periodFa: '۶۷۸ تا ۵۴۹ پیش از میلاد',
    startYear: -678,
    endYear: -549,
    emblem: '🦁',
    eraCategory: 'pre-islamic',
    capitalEn: 'Ecbatana (Hamedan)',
    capitalFa: 'هگمتانه (همدان)',
    territorySqKm: '2.8 Million km²',
    descriptionEn: 'The first unified Iranian political state. Founded by Deioces and expanded by Cyaxares, the Medes allied with Babylon to overthrow the brutal Assyrian Empire, uniting Iranian tribes under a single sovereign crown.',
    descriptionFa: 'نخستین پادشاهی متحد اقوام آریایی در ایران به بنیادگذاری دیاکو؛ مادها به رهبری هوخشتره و در اتحاد با بابل، امپراتوری ستمگر آشور را درهم شکستند و هگمتانه را پایتخت خود ساختند.',
    rulers: [
      {
        nameEn: 'Deioces',
        nameFa: 'دیاکو',
        titleEn: 'First King & Lawgiver of the Medes',
        titleFa: 'بنیان‌گذار و دادگستر نخستین مادها',
        reignEn: '700 – 647 BCE',
        reignFa: '۷۰۰ تا ۶۴۷ پیش از میلاد',
        achievementEn: 'United the dispersed Median tribes, instituted national judicial laws, and founded Ecbatana.',
        achievementFa: 'اتحاد قبایل ماد، بنیان‌گذاری قوانین دادگستری و بنای باروی هفت‌قلعه هگمتانه.'
      },
      {
        nameEn: 'Cyaxares',
        nameFa: 'هوخشتره',
        titleEn: 'Imperial Unifier and Conqueror of Nineveh',
        titleFa: 'شاهنشاه مقتدر ماد و فاتح نینوا',
        reignEn: '625 – 585 BCE',
        reignFa: '۶۲۵ تا ۵۸۵ پیش از میلاد',
        achievementEn: 'Modernized the military into specialized cavalry and archers; destroyed the Assyrian capital Nineveh in 612 BCE.',
        achievementFa: 'سازماندهی ارتش منظم، فتح نینوا و پایان دادن به سه قرن سلطه آشور بر خاور نزدیک.'
      }
    ],
    achievementsEn: [
      'Creation of the first pan-Iranian federal military confederation',
      'The Seven-Tiered fortified royal capital of Ecbatana',
      'Rock-cut tombs and Mazdean fire sanctuaries at Nush-i Jan',
      'Renowned cavalry traditions later adopted by the Achaemenids'
    ],
    achievementsFa: [
      'تاسیس نخستین ارتش سواره‌نظام منظم و منسجم ایرانی',
      'معماری هفت‌رنگ و مستحکم هگمتانه با برج و باروهای سنگی',
      'آرامگاه‌های صخره‌ای و آتشکده نوشیجان ملایر',
      'پیوند فرهنگی و نظامی اقوام فلات ایران و پایه‌گذاری سنن شاهنشاهی'
    ],
    culturalLegacyEn: 'Laid the military, cultural, and political blueprint that Cyrus the Great expanded into the world’s first superpower.',
    culturalLegacyFa: 'پی‌ریزی ساختار دولتی و نظامی که کوروش بزرگ آن را به بزرگ‌ترین امپراتوری عصر باستان بدل ساخت.'
  },
  {
    id: 'achaemenid',
    nameEn: 'Achaemenid Empire',
    nameFa: 'شاهنشاهی هخامنشی',
    periodEn: '550 – 330 BCE',
    periodFa: '۵۵۰ تا ۳۳۰ پیش از میلاد',
    startYear: -550,
    endYear: -330,
    emblem: '🦅',
    eraCategory: 'pre-islamic',
    capitalEn: 'Pasargadae, Persepolis, Susa, Ecbatana',
    capitalFa: 'پاسارگاد، تخت جمشید، شوش، هگمتانه',
    territorySqKm: '5.5 Million km² (44% of world population)',
    descriptionEn: 'The first world superpower founded by Cyrus the Great, spanning from the Indus Valley to the Balkans and Egypt. Renowned for pioneering human rights, the satrapy governance system, and the monumental architecture of Persepolis.',
    descriptionFa: 'نخستین ابرقدرت جهانی به دست کوروش بزرگ که از دره سند تا بالکان و مصر گسترده بود. مشهور به منشور حقوق بشر، سامانه فدرال ساتراپی، راه شاهی ۲۷۰۰ کیلومتری و شکوه ماندگار تخت جمشید.',
    rulers: [
      {
        nameEn: 'Cyrus the Great',
        nameFa: 'کوروش بزرگ',
        titleEn: 'King of Kings, Liberator of Babylon',
        titleFa: 'شاه شاهان، رهایی‌بخش ملل',
        reignEn: '559 – 530 BCE',
        reignFa: '۵۵۹ تا ۵۳۰ پیش از میلاد',
        achievementEn: 'Issued the Cyrus Cylinder, freed displaced peoples, and established universal religious tolerance.',
        achievementFa: 'صدور استوانه کوروش، لغو برده‌داری و اسارت ملل، آزادی یهودیان بابل و ترویج احترام به ادیان.'
      },
      {
        nameEn: 'Darius the Great',
        nameFa: 'داریوش بزرگ',
        titleEn: 'Architect of the Imperial State',
        titleFa: 'معمار نظم شاهنشاهی و بازرگانی جهانی',
        reignEn: '522 – 486 BCE',
        reignFa: '۵۲۲ تا ۴۸۶ پیش از میلاد',
        achievementEn: 'Built Persepolis, commissioned the Royal Road (2,700 km), and instituted standard imperial coinage (Daric).',
        achievementFa: 'آغاز ساخت تخت جمشید، ایجاد سامانه چاپارخانه، بازگشایی کانال باستانی سوئز و ضرب سکه دریک.'
      }
    ],
    achievementsEn: [
      'The Cyrus Cylinder (First declaration of universal human dignity)',
      'The 2,700 km Royal Road with courier postal relay stations (Chaparkhaneh)',
      'Qanat subterranean aqueduct systems irrigating arid plateaus',
      'Construction of Persepolis (Takht-e Jamshid) and Apadana Palace'
    ],
    achievementsFa: [
      'منشور استوانه کوروش بزرگ (نخستین منشور حقوق بشر جهان در موزه بریتانیا)',
      'سامانه راه شاهی به درازای ۲۷۰۰ کیلومتر با ایستگاه‌های پستی چاپارخانه',
      'فناوری کاریز (قنات) و شبکه کانال آبیاری برای باروری فلات ایران',
      'کاخ‌های تخت جمشید و آپادانا با مشارکت هنرمندان ده‌ها ملت بدون کار اجباری'
    ],
    culturalLegacyEn: 'Introduced federal tolerance, legal charters, and international diplomatic protocols embraced across antiquity.',
    culturalLegacyFa: 'آوردن الگوی حکومت متساهل و منشورهای قانونی در جهان که ستایش اندیشمندان باستان چون گزنفون را برانگیخت.'
  },
  {
    id: 'seleucid',
    nameEn: 'Seleucid Empire',
    nameFa: 'دوره سلوکیان',
    periodEn: '312 – 129 BCE',
    periodFa: '۳۱۲ تا ۱۲۹ پیش از میلاد',
    startYear: -312,
    endYear: -129,
    emblem: '🏛️',
    eraCategory: 'pre-islamic',
    capitalEn: 'Seleucia, Antioch',
    capitalFa: 'سلوکیه، انطاکیه',
    territorySqKm: '3.9 Million km²',
    descriptionEn: 'The Hellenistic state established by Seleucus I Nicator following Alexander’s conquest. Although Greek language and institutions were introduced, indigenous Iranian culture resisted assimilation, culminating in the Parthian liberation.',
    descriptionFa: 'حکومت جانشینان مقدونی پس از تهاجم اسکندر؛ علی‌رغم ورود معماری و خط یونانی، جامعه و فرهنگ بومی ایرانی استقلال خود را حفظ کرد و سرانجام اشکانیان آنان را از فلات ایران بیرون راندند.',
    rulers: [
      {
        nameEn: 'Seleucus I Nicator',
        nameFa: 'سلوکوس یکم نیکاتور',
        titleEn: 'Founder of the Seleucid Dynasty',
        titleFa: 'بنیان‌گذار دودمان سلوکی',
        reignEn: '305 – 281 BCE',
        reignFa: '۳۰۵ تا ۲۸۱ پیش از میلاد',
        achievementEn: 'Consolidated rule over Mesopotamia and the Iranian plateau following the Wars of the Diadochi.',
        achievementFa: 'تثبیت تسلط مقدونیان بر بین‌النهرین و بخش‌هایی از فلات ایران پس از نبردهای دیادوخوی.'
      },
      {
        nameEn: 'Antiochus III the Great',
        nameFa: 'آنتیوخوس سوم',
        titleEn: 'Seleucid Basileus',
        titleFa: 'پادشاه سلوکی',
        reignEn: '222 – 187 BCE',
        reignFa: '۲۲۲ تا ۱۸۷ پیش از میلاد',
        achievementEn: 'Attempted to restore imperial hegemony in the east before being checked by Rome and the rising Parthians.',
        achievementFa: 'تلاش برای حفظ سرحدات شرقی پیش از شکست در برابر پارتیان و پیشروی روم.'
      }
    ],
    achievementsEn: [
      'Greco-Persian syncretic art and coin minting standards',
      'Construction of monumental stone temple structures like Kangavar',
      'Preservation of Babylonian and Iranian astronomical logs',
      'Cultural resilience that galvanized the Arsacid national resurgence'
    ],
    achievementsFa: [
      'تلفیق هنری یونانی و شرقی در ضرب مسکوکات و سنگ‌تراشی‌ها',
      'احداث معابد سنگی با ستون‌های کرینتی مانند معبد آناهیتا در کنگاور',
      'حفظ اسناد و زیج‌های ستاره‌شناسی بابلی و ایرانی',
      'شکل‌گیری همبستگی ملی ایرانیان برای احیای استقلال سرزمینی'
    ],
    culturalLegacyEn: 'Served as an interlude of intense intercultural exchange, paving the way for the Arsacid renaissance.',
    culturalLegacyFa: 'دوره تبادل فرهنگی میان شرق و غرب که مقاومت پارتیان علیه آن به احیای هویت اصیل ایرانی انجامید.'
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
    eraCategory: 'pre-islamic',
    capitalEn: 'Hecatompylos, Nisa, Ctesiphon',
    capitalFa: 'صددروازه، نسا، تیسفون',
    territorySqKm: '2.8 Million km²',
    descriptionEn: 'Founded by Arsaces I, the Parthians drove the Seleucids from the Iranian plateau and established an enduring superpower that repeatedly defeated the Roman Republic and Empire. Masters of horse archery and Silk Road commerce.',
    descriptionFa: 'بنیادگذاری شده به دست ارشک یکم؛ اشکانیان سلوکیان را بیرون راندند و به هماوردی شکست‌ناپذیر در برابر امپراتوری روم تبدیل شدند. آنان با سواره‌نظام پارتی و نبرد کاره، جاده ابریشم را میان شرق و غرب پیوند دادند.',
    rulers: [
      {
        nameEn: 'Mithridates I the Great',
        nameFa: 'مهرداد یکم بزرگ',
        titleEn: 'King of Kings, Philhellene',
        titleFa: 'شاه شاهان، احیاگر شاهنشاهی پارتی',
        reignEn: '171 – 132 BCE',
        reignFa: '۱۷۱ تا ۱۳۲ پیش از میلاد',
        achievementEn: 'Liberated Babylonia, Media, and Susa, transforming Parthia into an expansive imperial empire.',
        achievementFa: 'آزادبخشی بابل، ماد و شوش و تبدیل دولت پارتی به یک شاهنشاهی فراگیر جهانی.'
      },
      {
        nameEn: 'General Surena',
        nameFa: 'سپهبد سورنا',
        titleEn: 'Commander-in-Chief of Parthian Forces',
        titleFa: 'فرمانده کل قوای ایران در نبرد کاره',
        reignEn: 'c. 84 – 53 BCE',
        reignFa: 'حدود ۸۴ تا ۵۳ پیش از میلاد',
        achievementEn: 'Crushed Marcus Licinius Crassus and the Roman legions at the Battle of Carrhae (53 BCE).',
        achievementFa: 'درهم شکستن لژیون‌های روم به فرماندهی کراسوس در نبرد سرنوشت‌ساز کاره (حران).'
      }
    ],
    achievementsEn: [
      'The "Parthian Shot" tactical feint archery perfected on horseback',
      'Secured and monopolized the Eurasian Silk Road trade routes',
      'Invention of the Iwan architectural vault (e.g. Hatra and Ctesiphon origins)',
      'Defeated Roman expansionism at Carrhae, preventing subjugation'
    ],
    achievementsFa: [
      'تیراندازی پارتی و شگرد رزمی عقب‌نشینی ساختگی و چرخش روی اسب',
      'امن‌سازی و رونق بی‌سابقه جاده ابریشم میان چین، ایران و روم',
      'نوآوری معماری ایوان طاق‌دار که به ستون معماری ایرانی بدل شد',
      'توقف جاه‌طلبی‌های امپراتوری روم در سرحدات فرات برای ۵ قرن'
    ],
    culturalLegacyEn: 'Pioneered decentralised federal councils (Mehestan) and blended Hellenistic artistic techniques with Iranian chivalry.',
    culturalLegacyFa: 'تاسیس مجلس مِهِستان (مهتران و رایزنان شاهنشاهی) و ترویج جوانمردی، موسیقی باربد و فرهنگ پهلوانی.'
  },
  {
    id: 'sasanian',
    nameEn: 'Sasanian Empire',
    nameFa: 'شاهنشاهی ساسانیان',
    periodEn: '224 – 651 CE',
    periodFa: '۲۲۴ تا ۶۵۱ میلادی',
    startYear: 224,
    endYear: 651,
    emblem: '👑',
    eraCategory: 'pre-islamic',
    capitalEn: 'Ctesiphon, Istakhr',
    capitalFa: 'تیسفون، استخر',
    territorySqKm: '3.5 Million km²',
    descriptionEn: 'The golden zenith of pre-Islamic Iranian civilization. Founded by Ardashir I, the Sasanians revitalized Zoroastrian statecraft, created the Academy of Gondeshapur, and built monumental vaults like Taq Kasra.',
    descriptionFa: 'اوج شکوه تمدن ایران پیش از اسلام به دست اردشیر بابکان؛ در این عصر دانشگاه بین‌المللی گندی‌شاپور، طاق کسری تیسفون، ثبت کامل اوستا و دادگری انوشیروان چهره جهان باستان را دگرگون ساخت.',
    rulers: [
      {
        nameEn: 'Shapur I',
        nameFa: 'شاپور یکم',
        titleEn: 'King of Kings of Iran and Aniran',
        titleFa: 'شاهنشاه ایران و انیران',
        reignEn: '240 – 270 CE',
        reignFa: '۲۴۰ تا ۲۷۰ میلادی',
        achievementEn: 'Defeated three Roman Emperors: Gordian III, Philip the Arab, and captured Emperor Valerian at Edessa (260 CE).',
        achievementFa: 'پیروزی بر سه امپراتور روم و اسیر ساختن والرین در نبرد ادسا که در نقش‌رستم جاودانه شد.'
      },
      {
        nameEn: 'Khosrow I Anushirvan',
        nameFa: 'خسرو انوشیروان دادگر',
        titleEn: 'The Immortal Soul, Emperor of Justice',
        titleFa: 'انوشه‌روان، پادشاه دادگستر و حامی حکمت',
        reignEn: '531 – 579 CE',
        reignFa: '۵۳۱ تا ۵۷۹ میلادی',
        achievementEn: 'Instituted extensive tax and judicial reforms; expanded Gondeshapur into the greatest medical and philosophical academy.',
        achievementFa: 'اصلاحات بنیادین مالیاتی و قضایی، توسعه دانشگاه و بیمارستان گندی‌شاپور و ترجمه کتب از هند و یونان.'
      }
    ],
    achievementsEn: [
      'Academy of Gondeshapur (The world’s first teaching hospital and medical school)',
      'Taq Kasra (Arch of Ctesiphon, the largest single-span brick arch in the world)',
      'The Shushtar Historical Hydraulic System with Band-e Kaisar',
      'Compilation of the Khwaday-Namag (The Book of Kings, basis of Shahnameh)'
    ],
    achievementsFa: [
      'دانشگاه و بیمارستان گندی‌شاپور (نخستین مرکز علمی و پزشکی بین‌المللی با منشور اخلاق پزشکی)',
      'طاق کسری در تیسفون (عظیم‌ترین طاق قوسی آجری مهندسی جهان بدون ستون)',
      'سازه آبی تاریخی شوشتر و پل بند سزار با نبوغ حیرت‌انگیز هیدرولیک',
      'تدوین خوتای‌نامگ (خدای‌نامک، که شالوده سرایش شاهنامه فردوسی شد)'
    ],
    culturalLegacyEn: 'Sasanian silk textiles, court etiquette, silver metalwork, and musical scales influenced Byzantine Europe, Tang China, and the Islamic world.',
    culturalLegacyFa: 'هنر سیمین‌کاری، ابریشم‌بافی، نغمه‌های باربد و نظام دیوانی که تا قرن‌ها الگوی دولت‌داری در خاورمیانه و روم بود.'
  },
  {
    id: 'tahirid-saffarid',
    nameEn: 'Tahirids & Saffarids',
    nameFa: 'طاهریان و صفاریان (رستاخیز هویت)',
    periodEn: '821 – 900 CE',
    periodFa: '۸۲۱ تا ۹۰۰ میلادی',
    startYear: 821,
    endYear: 900,
    emblem: '⚔️',
    eraCategory: 'islamic-golden',
    capitalEn: 'Nishapur, Zaranj',
    capitalFa: 'نیشابور، زرنج',
    territorySqKm: '2.1 Million km²',
    descriptionEn: 'The pioneering national dynasties that restored Iranian semi-independence and proclaimed New Persian as the official administrative language under Ya’qub ibn al-Layth al-Saffar, ending centuries of linguistic suppression.',
    descriptionFa: 'نخستین حکومت‌های بومی ایرانی پس از اسلام؛ طاهر ذوالیمینین استقلال خراسان را رقم زد و یعقوب لیث صفاری، عیار سیستانی، با بیرون راندن زبان عربی از دربار، زبان فارسی را زبان رسمی اعلام کرد.',
    rulers: [
      {
        nameEn: 'Ya’qub ibn al-Layth al-Saffar',
        nameFa: 'یعقوب لیث صفاری',
        titleEn: 'Reviver of the Persian Language, Chieftain of Sistan',
        titleFa: 'احیاگر زبان پارسی و سردار آزادگان سیستان',
        reignEn: '861 – 879 CE',
        reignFa: '۸۶۱ تا ۸۷۹ میلادی',
        achievementEn: 'Banned Arabic in court correspondence, mandating that poetry and state documents be recited in Persian.',
        achievementFa: 'فرمان داد هیچ‌کس در حضور وی به عربی سخن نگوید و زبان فارسی را زبان رسمی ایران‌زمین بازگرداند.'
      }
    ],
    achievementsEn: [
      'Proclamation of Persian as the official court and administrative language',
      'Establishment of independent judicial and monetary institutions in Khorasan',
      'Rise of patriotic court poets like Muhammad ibn Wasif',
      'Fostered the revival of Iranian chivalry (Ayyaran & Javonmardi)'
    ],
    achievementsFa: [
      'صدور فرمان تاریخی رسمیت زبان فارسی برای دیوان و سرایش اشعار ملی',
      'استقلال سیاسی از دربار بغداد و برپایی حاکمیت ملی در فلات ایران',
      'طلوع شاعران پارسی‌گوی همچون محمد بن وصیف سیستانی',
      'نهادینه‌سازی مرام عیاری و جوانمردی در دفاع از حقوق مردم فرودست'
    ],
    culturalLegacyEn: 'Rescued the Persian language from obsolescence and lit the spark of the Persian Renaissance.',
    culturalLegacyFa: 'نجات زبان و فرهنگ فارسی از فراموشی که مسیر را برای شاهکار فردوسی و سامانیان هموار ساخت.'
  },
  {
    id: 'samanid',
    nameEn: 'Samanid Renaissance',
    nameFa: 'شاهنشاهی سامانیان (عصر زرین دانش)',
    periodEn: '819 – 999 CE',
    periodFa: '۸۱۹ تا ۹۹۹ میلادی',
    startYear: 819,
    endYear: 999,
    emblem: '📜',
    eraCategory: 'islamic-golden',
    capitalEn: 'Bukhara, Samarkand',
    capitalFa: 'بخارا، سمرقند',
    territorySqKm: '2.85 Million km²',
    descriptionEn: 'The golden age of Iranian scientific, philosophical, and literary resurgence. Under enlightened Samanid patrons, Rudaki, Ferdowsi, Avicenna, and Al-Biruni sparked an intellectual enlightenment that transformed global thought.',
    descriptionFa: 'دوران رنسانس اندیشه، شعر و دانش ایرانی با پایتختی بخارا و سمرقند؛ در سایه حمایت سامانیان، پدر شعر فارسی (رودکی)، سرودن شاهنامه (فردوسی)، طب و فلسفه (ابن‌سینا) و ستاره‌شناسی (بیرونی) شکوفا شد.',
    rulers: [
      {
        nameEn: 'Ismail Samani',
        nameFa: 'امیر اسماعیل سامانی',
        titleEn: 'The Just Sovereign, Patron of Scholars',
        titleFa: 'امیر عادل سامانی و حامی اندیشمندان',
        reignEn: '892 – 907 CE',
        reignFa: '۸۹۲ تا ۹۰۷ میلادی',
        achievementEn: 'Fortified the borders of Transoxiana and established Bukhara as the philosophical rival to Baghdad.',
        achievementFa: 'یکپارچگی خراسان و فرارود، آرامش سرزمینی و بنای آرامگاه خشتی بی‌نظیر سامانی در بخارا.'
      }
    ],
    achievementsEn: [
      'Rudaki named the Adam of Poets (Father of Classical Persian Poetry)',
      'Avicenna (Ibn Sina) wrote The Canon of Medicine and The Book of Healing',
      'Al-Biruni calculated the Earth’s radius and authored Chronology of Ancient Nations',
      'Ferdowsi began composing the Shahnameh epic chronicle'
    ],
    achievementsFa: [
      'رودکی سمرقندی ملقب به آدم‌الشعرا و پایه‌گذاری سبک خراسانی شعر پارسی',
      'تالیف کتاب «قانون در طب» و «شفا» به دست ابوعلی سینا نابغه جهانی دانش',
      'محاسبه دقیق شعاع زمین و تالیف آثارالباقیه توسط ابوریحان بیرونی',
      'آغاز سرایش شاهنامه فردوسی برای پاسداری از تاریخ، هویت و واژگان کهن'
    ],
    culturalLegacyEn: 'Crafted the classical Persian linguistic canon and gifted humanity enduring masterworks of rational science.',
    culturalLegacyFa: 'بنیان‌گذاری استاندارد ادب کلاسیک فارسی و تولید کتب مرجع علمی که تا ۵ قرن در دانشگاه‌های اروپا تدریس می‌شد.'
  },
  {
    id: 'buyid',
    nameEn: 'Buyid (Daylamite) Dynasty',
    nameFa: 'آل بویه (دیلمیان)',
    periodEn: '934 – 1062 CE',
    periodFa: '۹۳۴ تا ۱۰۶۲ میلادی',
    startYear: 934,
    endYear: 1062,
    emblem: '🛡️',
    eraCategory: 'islamic-golden',
    capitalEn: 'Shiraz, Rey, Isfahan, Baghdad',
    capitalFa: 'شیراز، ری، اصفهان، بغداد',
    territorySqKm: '1.9 Million km²',
    descriptionEn: 'Hailing from the rugged mountains of Gilan, the Buyid brothers captured Baghdad, revived the pre-Islamic royal title of Shahanshah (King of Kings), and built celebrated hospitals, observatories, and irrigation dams in Shiraz.',
    descriptionFa: 'سرداران برخاسته از کوهستان‌های دیلمان در گیلان که با تسخیر بغداد، خلیفه عباسی را تحت‌الحمایه قرار دادند، عنوان شاهنشاه را پس از قرن‌ها احیا کردند و شیراز را به قطب آبادانی و علم بدل ساختند.',
    rulers: [
      {
        nameEn: 'Adud al-Dawla',
        nameFa: 'عضدالدوله دیلمی',
        titleEn: 'Shahanshah of Iran and Iraq',
        titleFa: 'شاهنشاه دیلمی و سازنده بناهای ماندگار',
        reignEn: '949 – 983 CE',
        reignFa: '۹۴۹ تا ۹۸۳ میلادی',
        achievementEn: 'Constructed the Adudi Hospital in Baghdad and the massive Band-e Amir dam in Fars.',
        achievementFa: 'ساخت بیمارستان پیشرفته عضدی با کادر پزشکان حاذق و احداث بند تاریخی امیر بر رود کر.'
      }
    ],
    achievementsEn: [
      'Reintroduction of the ancient title "Shahanshah" in state coins and inscriptions',
      'Construction of advanced municipal hospitals and libraries in Shiraz and Baghdad',
      'Construction of the historic Band-e Amir stone barrage in Fars',
      'Flourishing of astronomical research under Abd al-Rahman al-Sufi (Book of Fixed Stars)'
    ],
    achievementsFa: [
      'احیای رسمیت عنوان «شاهنشاه» بر روی سکه‌ها و اسناد درباری',
      'تاسیس بیمارستان‌ها و کتابخانه‌های عظیم با ده‌ها هزار جلد کتاب در شیراز و ری',
      'احداث بند امیر در استان فارس با نبوغ مهندسی سدسازی',
      'رونق ستاره‌شناسی و تالیف صورالکواکب توسط عبدالرحمن صوفی رازی'
    ],
    culturalLegacyEn: 'Proved the political supremacy of Iranian leaders over the Caliphate and protected rational sciences.',
    culturalLegacyFa: 'اثبات قدرت سیاسی و تمدنی ایرانیان و پیوند میان تساهل مذهبی، آبادانی شهری و حکمت خردورزانه.'
  },
  {
    id: 'seljuk',
    nameEn: 'Great Seljuk Empire',
    nameFa: 'امپراتوری سلجوقیان بزرگ',
    periodEn: '1037 – 1194 CE',
    periodFa: '۱۰۳۷ تا ۱۱۹۴ میلادی',
    startYear: 1037,
    endYear: 1194,
    emblem: '⭐',
    eraCategory: 'medieval',
    capitalEn: 'Nishapur, Rey, Isfahan, Merv',
    capitalFa: 'نیشابور، ری، اصفهان، مرو',
    territorySqKm: '3.9 Million km²',
    descriptionEn: 'A vast Turko-Persian empire administrated by brilliant Iranian viziers such as Nizam al-Mulk. Famous for institutionalizing higher education through the Nezamiyeh universities, the Jalali solar calendar by Omar Khayyam, and brick domes.',
    descriptionFa: 'امپراتوری پهناور از کاشغر تا مدیترانه که با وزارت و تدبیر وزیر دانشمند ایرانی، خواجه نظام‌الملک طوسی اداره می‌شد. عصر درخشان تاسیس دانشگاه‌های نظامیه، تدوین تقویم جلالی خیام و ساخت مساجد باشکوه سلجوقی.',
    rulers: [
      {
        nameEn: 'Malik-Shah I',
        nameFa: 'سلطان ملکشاه سلجوقی',
        titleEn: 'Sultan of the Great Seljuks',
        titleFa: 'فرمانروای بزرگ و حامی آبادانی ایران',
        reignEn: '1072 – 1092 CE',
        reignFa: '۱۰۷۲ تا ۱۰۹۲ میلادی',
        achievementEn: 'Presided over the territorial and cultural peak of the empire alongside his grand vizier Nizam al-Mulk.',
        achievementFa: 'رساندن قلمرو سلجوقیان به بیشترین وسعت و شکوفایی هنر، ستاره‌شناسی و معماری با وزارت نظام‌الملک.'
      },
      {
        nameEn: 'Nizam al-Mulk Tusi',
        nameFa: 'خواجه نظام‌الملک طوسی',
        titleEn: 'Grand Vizier of the Realm, Author of Siyasatnama',
        titleFa: 'وزیر اعظم دانشمند و نویسنده سیرالملوک (سیاست‌نامه)',
        reignEn: '1064 – 1092 CE',
        reignFa: '۱۰۶۴ تا ۱۰۹۲ میلادی',
        achievementEn: 'Founded the Nezamiyeh collegiate system and sponsored Omar Khayyam’s observatory and solar calendar.',
        achievementFa: 'بنیان‌گذاری زنجیره دانشگاه‌های نظامیه و تامین مالی رصدخانه اصفهان برای تنظیم گاه‌شماری جلالی.'
      }
    ],
    achievementsEn: [
      'The Jalali Solar Calendar formulated by Omar Khayyam (Accuracy of 1 day error in 5,000 years)',
      'The Nezamiyeh University network (Precursor to the modern collegiate model)',
      'Monumental double-shell brick domes at the Jameh Mosque of Isfahan',
      'The Siyasatnama treatise on governance, administration, and rule of law'
    ],
    achievementsFa: [
      'گاه‌شماری خورشیدی جلالی به سرپرستی حکیم عمر خیام (دقیق‌ترین تقویم تاریخ بشر)',
      'شبکه دانشگاه‌های نظامیه با بورسیه کامل دانشجویان و حضور اساتیدی چون امام محمد غزالی',
      'گنبد تاج‌الملک و گنبد نظام‌الملک در مسجد جامع عتیق اصفهان با تناسب طلایی',
      'کتاب سیاست‌نامه در اصول کشورداری، نظارت بر کارگزاران و دادخواهی مظلومان'
    ],
    culturalLegacyEn: 'Spread the Persian language and administrative culture from Central Asia to Anatolia, creating the Turko-Persian tradition.',
    culturalLegacyFa: 'جهانی‌سازی زبان و ادبیات فارسی و نظام اداری ایرانی در سراسر خاورمیانه و آناتولی.'
  },
  {
    id: 'khwarazmian',
    nameEn: 'Khwarazmian Dynasty',
    nameFa: 'خوارزمشاهیان و ایستادگی ملی',
    periodEn: '1077 – 1231 CE',
    periodFa: '۱۰۷۷ تا ۱۲۳۱ میلادی',
    startYear: 1077,
    endYear: 1231,
    emblem: '🐎',
    eraCategory: 'medieval',
    capitalEn: 'Gurganj, Samarkand, Tabriz',
    capitalFa: 'گرگانج، سمرقند، تبریز',
    territorySqKm: '2.3 Million km²',
    descriptionEn: 'The sovereign realm of Central Asia and the Iranian plateau that bore the catastrophic initial impact of the Mongol onslaught. Remembered for the heroic resistance of Crown Prince Jalal al-Din Mangburni against Genghis Khan.',
    descriptionFa: 'دولتی قدرتمند بر فلات ایران و آسیای میانه که در برابر هجوم ویرانگر چنگیزخان مغول قرار گرفت؛ این دوره با دلاوری‌ها و مقاومت اسطوره‌ای سلطان جلال‌الدین خوارزمشاه در نبردهای پیاپی با لشکریان مغول در یادها زنده است.',
    rulers: [
      {
        nameEn: 'Jalal al-Din Mangburni',
        nameFa: 'سلطان جلال‌الدین خوارزمشاه',
        titleEn: 'The Heroic Defender of Iran',
        titleFa: 'سردار دلاور مقاومت ملی در برابر چنگیزخان',
        reignEn: '1220 – 1231 CE',
        reignFa: '۱۲۲۰ تا ۱۲۳۱ میلادی',
        achievementEn: 'Defeated Mongol armies at Parwan and fought valiantly on the Indus River, earning Genghis Khan’s legendary awe.',
        achievementFa: 'شکست دادن ارتش مغول در نبرد پروان و پرش با اسب به رود سند در برابر دیدگان چنگیزخان.'
      }
    ],
    achievementsEn: [
      'Epic military victories at Parwan and defiance of the steppe conqueror',
      'Preservation of Khwarazmian irrigation systems and monumental citadels',
      'The resilience of urban scholars who preserved scientific manuscripts',
      'Galvanized national unity and defense chronicles across Iranian lands'
    ],
    achievementsFa: [
      'پیروزی‌های ماندگار بر سپاهیان تاتار و ایستادگی ۱۰ ساله در سخت‌ترین شرایط تاریخ',
      'شبکه سدهای آبرسانی و دژهای مستحکم گرگانج در دل بیابان‌های خوارزم',
      'ایثار اندیشمندان و کتابدارانی که نسخه‌های نفیس علمی را پیش از ویرانی پنهان کردند',
      'الهام‌بخش سروده‌ها و حماسه‌های مقاومت ملی در برابر بیگانگان'
    ],
    culturalLegacyEn: 'A symbol of fearless patriotic courage against overwhelming adversity commemorated across Iranian literature.',
    culturalLegacyFa: 'نماد جاودان غیرت و حماسه ملی که حتی تحسین مهاجمان تاریخ را برانگیخت.'
  },
  {
    id: 'ilkhanate',
    nameEn: 'Ilkhanate & Persian Cultural Revival',
    nameFa: 'ایلخانان و رنسانس ایرانی',
    periodEn: '1256 – 1335 CE',
    periodFa: '۱۲۵۶ تا ۱۳۳۵ میلادی',
    startYear: 1256,
    endYear: 1335,
    emblem: '🔭',
    eraCategory: 'medieval',
    capitalEn: 'Maragheh, Tabriz, Soltaniyeh',
    capitalFa: 'مراغه، تبریز، سلطانیه',
    territorySqKm: '3.75 Million km²',
    descriptionEn: 'The Mongol state in Iran rapidly converted to Islam and embraced Persian language and civilization through master viziers like Nasir al-Din al-Tusi and Rashid al-Din. Renowned for the Maragheh Observatory and Soltaniyeh Dome.',
    descriptionFa: 'فاتحان مغول در ایران به سرعت مقهور شکوه تمدن، زبان و عرفان ایرانی شدند؛ با تدبیر خواجه نصیرالدین طوسی رصدخانه جهانی مراغه بنا شد و با وزارت رشیدالدین فضل‌الله، تبریز به مرکز ترجمه و تاریخ‌نگاری بدل گشت.',
    rulers: [
      {
        nameEn: 'Ghazan Khan',
        nameFa: 'محمود غازان خان',
        titleEn: 'Reformer Ilkhan of Iran',
        titleFa: 'ایلخان اصلاح‌گر و حامی تمدن ایرانی',
        reignEn: '1295 – 1304 CE',
        reignFa: '۱۲۹۵ تا ۱۳۰۴ میلادی',
        achievementEn: 'Converted the Ilkhanate officially to Islam, instituted economic reforms, and rebuilt Iranian cities.',
        achievementFa: 'رسمیت اسلام و فرهنگ ایرانی در دربار ایلخانی، اصلاح نظام اوزان و مالیات و بازسازی قنات‌ها.'
      },
      {
        nameEn: 'Nasir al-Din al-Tusi',
        nameFa: 'خواجه نصیرالدین طوسی',
        titleEn: 'Polymath, Founder of Maragheh Observatory',
        titleFa: 'علامه روزگار، ریاضی‌دان و سازنده رصدخانه مراغه',
        reignEn: '1201 – 1274 CE',
        reignFa: '۱۲۰۱ تا ۱۲۷۴ میلادی',
        achievementEn: 'Invented the Tusi-couple planetary device and saved hundreds of thousands of scientific manuscripts.',
        achievementFa: 'ابداع جفت طوسی در هندسه نجوم (مبنای مدل کوپرنیک) و نجات بیش از ۴۰۰ هزار کتاب علمی.'
      }
    ],
    achievementsEn: [
      'Maragheh Astronomical Observatory (The premier international astrophysics institute of its era)',
      'The Soltaniyeh Dome (The third largest brick dome in the world)',
      'The Jami al-Tawarikh by Rashid al-Din (First comprehensive world history encyclopedia)',
      'Flourishing of the Persian miniature school of Tabriz'
    ],
    achievementsFa: [
      'رصدخانه مراغه با پیشرفته‌ترین ابزارهای ستاره‌شناسی و رصدخانه‌ای برای منجمان سراسر جهان',
      'گنبد سلطانیه زنجان (شاهکار بی‌همتای معماری خشتی دوپوسته و الهام‌بخش کلیسای سانتا ماریا در فلورانس)',
      'جامع‌التواریخ رشیدی (نخستین دائره‌المعارف تاریخ مصور جهان به قلم خواجه رشیدالدین فضل‌الله)',
      'شکوفایی مکتب نگارگری و مینیاتور تبریز و هنر تذهیب زرین'
    ],
    culturalLegacyEn: 'Persian culture assimilated the conquerors, revitalizing Islamic and global science prior to the European Renaissance.',
    culturalLegacyFa: 'جذب فاتحان بیابان در ژرفای تمدن ایرانی و روشن نگه داشتن مشعل علم، ریاضیات و نجوم در آسیا.'
  },
  {
    id: 'timurid',
    nameEn: 'Timurid Empire & Herat Renaissance',
    nameFa: 'دوره تیموریان و مکتب هرات',
    periodEn: '1370 – 1507 CE',
    periodFa: '۱۳۷۰ تا ۱۵۰۷ میلادی',
    startYear: 1370,
    endYear: 1507,
    emblem: '🎨',
    eraCategory: 'medieval',
    capitalEn: 'Samarkand, Herat',
    capitalFa: 'سمرقند، هرات',
    territorySqKm: '4.4 Million km²',
    descriptionEn: 'An era of sublime artistic splendor, turquoise mosaic tiles, and calligraphy. Under Shah Rukh, Queen Goharshad, and Ulugh Beg, Herat and Samarkand became radiant world capitals of architecture, poetry, and painting.',
    descriptionFa: 'عصر درخشش کاشی‌کاری‌های فیروزه‌ای، خطاطی و شعر؛ با حکمرانی شاهرخ تیموری، بانو گوهرشاد و الغ‌بیگ، هرات و سمرقند پایتخت‌های بی‌رقیب نگارگری کمال‌الدین بهزاد، رصدخانه‌های نجومی و ادب فارسی شدند.',
    rulers: [
      {
        nameEn: 'Shah Rukh',
        nameFa: 'شاهرخ تیموری',
        titleEn: 'Peaceful Monarch of the Herat Renaissance',
        titleFa: 'پادشاه فرهنگ‌پرور و معمار آرامش هرات',
        reignEn: '1405 – 1447 CE',
        reignFa: '۱۴۰۵ تا ۱۴۴۷ میلادی',
        achievementEn: 'Shifted focus from conquest to culture, making Herat the premier intellectual center of Asia.',
        achievementFa: 'پایان دادن به جنگ‌ها، رونق بازرگانی جاده ابریشم و تبدیل هرات به مرکز هنر، ادب و تذهیب.'
      },
      {
        nameEn: 'Queen Goharshad',
        nameFa: 'بانو گوهرشاد آغا',
        titleEn: 'Empress and Great Architectural Benefactor',
        titleFa: 'بانوی فرهنگ‌مدار و بنیان‌گذار مسجد گوهرشاد',
        reignEn: '1378 – 1457 CE',
        reignFa: '۱۳۷۸ تا ۱۴۵۷ میلادی',
        achievementEn: 'Commissioned the Goharshad Mosque in Mashhad and the renowned Musalla complex in Herat.',
        achievementFa: 'فرمان احداث مسجد جامع گوهرشاد مشهد با کاشی‌کاری معرق شگفت‌انگیز و مصلای هرات.'
      }
    ],
    achievementsEn: [
      'Masterpieces of Kamāl ud-Dīn Behzād (The Raphael of the East in Persian miniature)',
      'The Goharshad Mosque in Mashhad with sublime muqarnas tilework',
      'Ulugh Beg Observatory and the star catalog of 1,018 stars',
      'The golden age of Persian lyrical poetry and Nastaliq calligraphy'
    ],
    achievementsFa: [
      'شاهکارهای نگارگری کمال‌الدین بهزاد (نابغه مینیاتور شرق)',
      'مسجد جامع گوهرشاد با کاشی‌کاری‌های معرق لاجوردی و مقرنس‌های ظریف',
      'رصدخانه الغ‌بیگ در سمرقند و تدوین زیج سلطانی با خطای چند ثانیه‌ای',
      'تثبیت خط نستعلیق به عنوان عروس خطوط اسلامی توسط میرعلی تبریزی'
    ],
    culturalLegacyEn: 'Set the aesthetic benchmark in Persian miniature, book arts, and architectural geometry that directly influenced Safavids and Mughals.',
    culturalLegacyFa: 'آفرینش استانداردهای جاودان در هنر مینیاتور، تذهیب و کاشی‌کاری که مستقیماً به هنر صفوی و تاج‌محل هند منتقل شد.'
  },
  {
    id: 'safavid',
    nameEn: 'Safavid Empire',
    nameFa: 'شاهنشاهی صفویه (عصر شکوه ملی)',
    periodEn: '1501 – 1736 CE',
    periodFa: '۱۵۰۱ تا ۱۷۳۶ میلادی',
    startYear: 1501,
    endYear: 1736,
    emblem: '☀️',
    eraCategory: 'modern',
    capitalEn: 'Tabriz, Qazvin, Isfahan',
    capitalFa: 'تبریز، قزوین، اصفهان',
    territorySqKm: '3.0 Million km²',
    descriptionEn: 'The restoration of a unified national Iranian empire and identity. Founded by Shah Ismail I and elevated to world fame by Shah Abbas I, who made Isfahan "Half the World" (Naqsh-e Jahan Square, Chehel Sotoun, royal carpet ateliers).',
    descriptionFa: 'رستاخیز هویت یکپارچه ملی و ارضی ایران پس از ۸ قرن؛ شاه اسماعیل یکم ایران را متحد ساخت و شاه عباس بزرگ با پایتختی اصفهان («نصف جهان»)، میدان نقش جهان، پل‌های زاینده‌رود و کارگاه‌های قالیبافی را جاودانه کرد.',
    rulers: [
      {
        nameEn: 'Shah Ismail I',
        nameFa: 'شاه اسماعیل یکم',
        titleEn: 'Restorer of the Unified Iranian State',
        titleFa: 'بنیان‌گذار وحدت ملی و سرزمینی ایران',
        reignEn: '1501 – 1524 CE',
        reignFa: '۱۵۰۱ تا ۱۵۲۴ میلادی',
        achievementEn: 'Unified the disparate provinces of Iran into a sovereign, independent state with Tabriz as capital.',
        achievementFa: 'یکپارچه‌سازی ایالات متفرق فلات ایران، برقراری استقلال ملی و ایستادگی در جنگ چالدران.'
      },
      {
        nameEn: 'Shah Abbas the Great',
        nameFa: 'شاه عباس بزرگ',
        titleEn: 'Master Builder of Isfahan and Patron of the Arts',
        titleFa: 'شاهنشاه مقتدر صفوی و آفریننده اصفهان نصف جهان',
        reignEn: '1587 – 1629 CE',
        reignFa: '۱۵۸۷ تا ۱۶۲۹ میلادی',
        achievementEn: 'Commissioned Naqsh-e Jahan Square, established 999 caravanserai across the realm, and freed Hormuz from Portuguese colonization.',
        achievementFa: 'ساخت میدان نقش جهان، آزادسازی جزیره هرمز از استعمار پرتغال و ایجاد ۹۹۹ کاروانسرای شاه‌عباسی.'
      }
    ],
    achievementsEn: [
      'Naqsh-e Jahan Square (Second largest historic public plaza in the world, UNESCO)',
      'The world-renowned Safavid Silk and Wool Carpets (e.g. Ardabil Carpet)',
      'Liberation of the Persian Gulf islands and Straits of Hormuz in 1622',
      'The 999 Royal Caravanserais network securing merchant routes'
    ],
    achievementsFa: [
      'میدان نقش جهان اصفهان، مسجد شیخ لطف‌الله و کاخ عالی‌قاپو (ثبت میراث جهانی یونسکو)',
      'شاهکارهای قالیبافی ابریشمی و زرین صفوی (همچون قالی نامدار اردبیل در موزه ویکتوریا و آلبرت)',
      'پایان دادن به استعمار پرتغالی‌ها در خلیج فارس و آزادسازی بندرعباس و هرمز',
      'شبکه ۹۹۹ کاروانسرای سنگی و آجری برای امنیت کاروان‌های تجاری سراسر کشور'
    ],
    culturalLegacyEn: 'Revived Persian nationhood, diplomacy with Europe, and architectural excellence celebrated globally.',
    culturalLegacyFa: 'تثبیت مرزها و هویت ملی ایران، آغاز دیپلماسی گسترده با دول اروپایی و اوج هنر نقاشی، سفالگری و معماری.'
  },
  {
    id: 'afsharid-zand',
    nameEn: 'Afsharid & Zand Dynasties',
    nameFa: 'افشاریه و زندیه (حماسه و مردم‌داری)',
    periodEn: '1736 – 1794 CE',
    periodFa: '۱۷۳۶ تا ۱۷۹۴ میلادی',
    startYear: 1736,
    endYear: 1794,
    emblem: '🗡️',
    eraCategory: 'modern',
    capitalEn: 'Mashhad (Afshar), Shiraz (Zand)',
    capitalFa: 'مشهد (افشاری)، شیراز (زندی)',
    territorySqKm: '4.0 Million km² (at peak)',
    descriptionEn: 'Nader Shah Afshar reconstituted Iran’s shattered borders through legendary military genius, repelling Ottoman, Russian, and Afghan incursions. He was followed by Karim Khan Zand, the beloved "Advocate of the People" who brought peace to Shiraz.',
    descriptionFa: 'نادرشاه افشار، نابغه نظامی مشهور به «ناپلئون شرق»، با اخراج بیگانگان متجاوز (عثمانی، روس و افغان) مرزهای تاریخی ایران را نجات داد؛ پس از او، کریم‌خان زند با عنوان «وکیل‌الرعایا» شیراز را به بهشت آرامش، تجارت و هنر بدل ساخت.',
    rulers: [
      {
        nameEn: 'Nader Shah Afshar',
        nameFa: 'نادرشاه افشار',
        titleEn: 'Sword of Persia, Reclaimer of Frontiers',
        titleFa: 'شمشیر ایران، پادشاه کشورگشا و احیاگر مرزها',
        reignEn: '1736 – 1747 CE',
        reignFa: '۱۷۳۶ تا ۱۷۴۷ میلادی',
        achievementEn: 'Defeated Ottoman and Afghan armies, reuniting Iranian territories and liberating Bahrain.',
        achievementFa: 'پیروزی در نبرد کرنال، بازپس‌گیری تمامیت ارضی ایران، بیرون راندن قوای متخاصم و حفظ استقلال کشور.'
      },
      {
        nameEn: 'Karim Khan Zand',
        nameFa: 'کریم‌خان زند',
        titleEn: 'Vakil ol-Ro\'aya (Advocate of the People)',
        titleFa: 'وکیل‌الرعایا، فرمانروای دادگر و حامی مردم',
        reignEn: '1751 – 1779 CE',
        reignFa: '۱۷۵۱ تا ۱۷۷۹ میلادی',
        achievementEn: 'Refused the title of Shah, rebuilt Shiraz, revitalized trade, and governed with benevolence and integrity.',
        achievementFa: 'رد عنوان شاهی به احترام مردم، آبادانی شیراز، ساخت بازار وکیل، ارگ و مسجد وکیل و برقراری امنیت تجاری.'
      }
    ],
    achievementsEn: [
      'Re-establishment of national sovereignty after the Afghan invasion',
      'The Sun Palace (Kakh-e Khorshid) in Kalat-e Naderi',
      'The Vakil Architectural Complex (Bazaar, Mosque, Bathhouse, and Citadel of Shiraz)',
      'Promotion of international maritime trade through Bushehr'
    ],
    achievementsFa: [
      'احیای کامل تمامیت ارضی و استقلال ایران از زیر یوغ تجزیه و اشغال بیگانگان',
      'کاخ خورشید کلات نادری در خراسان با حجاری‌های هندسی و هندی',
      'مجموعه بی‌نظیر وکیل شیراز (بازار وکیل با تهویه طبیعی، حمام وکیل و ارگ کریم‌خان)',
      'توسعه بندر بوشهر و برقراری امنیت راهزنی‌زدایی‌شده در جاده‌های داخلی'
    ],
    culturalLegacyEn: 'Proved the resilience of Iranian sovereignty and left a legacy of civic empathy in Karim Khan Zand’s rule.',
    culturalLegacyFa: 'ثبت مفهوم والای خدمتگزاری به مردم در حکمرانی ایرانی که نام وکیل‌الرعایا را محبوب‌ترین پادشاه تاریخ ایران ساخت.'
  },
  {
    id: 'qajar',
    nameEn: 'Qajar Dynasty & Constitutionalism',
    nameFa: 'قاجاریه و نهضت مشروطه',
    periodEn: '1796 – 1925 CE',
    periodFa: '۱۷۹۶ تا ۱۹۲۵ میلادی',
    startYear: 1796,
    endYear: 1925,
    emblem: '⚖️',
    eraCategory: 'modern',
    capitalEn: 'Tehran',
    capitalFa: 'تهران',
    territorySqKm: '1.65 Million km²',
    descriptionEn: 'A transformative century of modernization, anti-colonial resistance, and democratic struggle. Featured Mirza Taqi Khan Amir Kabir’s educational and industrial reforms (Dar al-Funun) and culminated in the Persian Constitutional Revolution of 1906.',
    descriptionFa: 'سده مواجهه با مدرنیته و رویارویی با استعمار روس و انگلیس؛ این دوره با اصلاحات بزرگ میرزاتقی‌خان امیرکبیر و تاسیس دارالفنون آغاز شد و با قیام تنباکو و انقلاب مشروطه (۱۲۸۵ خورشیدی) و تاسیس نخستین مجلس قانون‌گذاری ملی به بار نشست.',
    rulers: [
      {
        nameEn: 'Amir Kabir (Mirza Taqi Khan)',
        nameFa: 'امیرکبیر (میرزا تقی‌خان فراهانی)',
        titleEn: 'Grand Chancellor and Father of Modern Iranian Reform',
        titleFa: 'صدراعظم ایران، مصلح بزرگ و پدر آموزش نوین',
        reignEn: '1848 – 1851 CE',
        reignFa: '۱۲۲۷ تا ۱۲۳۰ خورشیدی',
        achievementEn: 'Founded the Dar al-Funun polytechnic, launched modern newspapers, reformed military equipment, and eradicated corruption.',
        achievementFa: 'تاسیس دارالفنون، انتشار روزنامه وقایع اتفاقیه، واکسیناسیون عمومی آبله و مبارزه بی‌امان با رشوه و نفوذ استعمار.'
      },
      {
        nameEn: 'Mozaffar ad-Din Shah Qajar',
        nameFa: 'مظفرالدین‌شاه قاجار',
        titleEn: 'Signatory of the 1906 Persian Constitution',
        titleFa: 'امضاکننده فرمان مشروطیت ایران',
        reignEn: '1896 – 1907 CE',
        reignFa: '۱۲۷۵ تا ۱۲۸۵ خورشیدی',
        achievementEn: 'Yielded to popular protest and signed the Royal Proclamation establishing the Persian National Parliament (Majlis).',
        achievementFa: 'تسلیم در برابر اراده ملت و امضای فرمان تاریخی مشروطه و تشکیل مجلس شورای ملی.'
      }
    ],
    achievementsEn: [
      'The Persian Constitutional Revolution of 1906 (First democratic parliament in the Middle East)',
      'Establishment of Dar al-Funun (The first modern polytechnic university in Iran)',
      'The Golestan Palace complex with the Shams-ol-Emareh tower in Tehran',
      'The Tobacco Protest of 1891 (First successful nationwide mass civil disobedience)'
    ],
    achievementsFa: [
      'انقلاب مشروطه (۱۲۸۵ خورشیدی) و تدوین نخستین قانون اساسی و مجلس دموکراتیک در خاورمیانه',
      'تاسیس دارالفنون با رشته‌های مهندسی، پزشکی، توپخانه و معدن‌شناسی',
      'مجموعه کاخ گلستان و عمارت شمس‌العماره در تهران با آینه‌کاری‌های نفیس',
      'نهضت تنباکو به فتوای میرزای شیرازی (نخستین پیروزی مدنی ملت در برابر امتیازات استعماری)'
    ],
    culturalLegacyEn: 'Birth of modern Iranian political consciousness, civil law, free press, and constitutional liberty.',
    culturalLegacyFa: 'زایش اندیشه آزادی‌خواهی، حاکمیت قانون، مطبوعات مستقل و حقوق شهروندی در تاریخ معاصر.'
  },
  {
    id: 'pahlavi',
    nameEn: 'Pahlavi Dynasty & Modernization',
    nameFa: 'دودمان پهلوی و عصر نوین',
    periodEn: '1925 – 1979 CE',
    periodFa: '۱۹۲۵ تا ۱۹۷۹ میلادی',
    startYear: 1925,
    endYear: 1979,
    emblem: '🚆',
    eraCategory: 'modern',
    capitalEn: 'Tehran',
    capitalFa: 'تهران',
    territorySqKm: '1.648 Million km²',
    descriptionEn: 'The era of rapid institutional and infrastructural modernization. Saw the construction of the Trans-Iranian Railway, founding of the University of Tehran, civic code standardization, and the historic Nationalization of Iranian Oil under Dr. Mohammad Mosaddegh.',
    descriptionFa: 'عصر توسعه پرشتاب زیرساخت‌ها، صنعت و نهادهای مدرن اداری؛ با احداث راه‌آهن سراسری ایران، تاسیس دانشگاه تهران، کشف و نهضت ملی شدن صنعت نفت به رهبری دکتر محمد مصدق و شکل‌گیری هویت صنعتی و دانشگاهی معاصر.',
    rulers: [
      {
        nameEn: 'Reza Shah Pahlavi',
        nameFa: 'رضاشاه پهلوی',
        titleEn: 'Founder of the Pahlavi Dynasty',
        titleFa: 'بنیان‌گذار دودمان پهلوی و سازنده زیرساخت‌های نوین',
        reignEn: '1925 – 1941 CE',
        reignFa: '۱۳۰۴ تا ۱۳۲۰ خورشیدی',
        achievementEn: 'Built the Trans-Iranian Railway, created modern civil registry and judiciaries, and unified the national administrative map.',
        achievementFa: 'احداث راه‌آهن سراسری شمال-جنوب، ثبت اسناد و شناسنامه، ارتش نوین و لغو کاپیتولاسیون.'
      },
      {
        nameEn: 'Dr. Mohammad Mosaddegh',
        nameFa: 'دکتر محمد مصدق',
        titleEn: 'Prime Minister & Champion of Oil Nationalization',
        titleFa: 'نخست‌وزیر و رهبر نهضت ملی شدن صنعت نفت',
        reignEn: '1951 – 1953 CE',
        reignFa: '۱۳۳۰ تا ۱۳۳۲ خورشیدی',
        achievementEn: 'Led the historic nationalization of the Iranian oil industry, asserting sovereign control over national natural resources.',
        achievementFa: 'رهبری قیام ملی برای خلع ید شرکت نفت انگلیس و تصویب قانون ملی شدن نفت در ۲۹ اسفند ۱۳۲۹.'
      }
    ],
    achievementsEn: [
      'The Trans-Iranian Railway (1,394 km engineering marvel linking the Caspian Sea to the Persian Gulf, UNESCO)',
      'Founding of the University of Tehran (1934) and modern higher education institutions',
      'Nationalization of the Iranian Oil Industry (March 20, 1951)',
      'Expansion of public healthcare, telecommunications, and industrial manufacture'
    ],
    achievementsFa: [
      'راه‌آهن سراسری ایران (شاهکار مهندسی پل‌ها و تونل‌ها ثبت جهانی یونسکو)',
      'تاسیس دانشگاه تهران در سال ۱۳۱۳ و اعزام محصلان برجسته به دانشگاه‌های جهان',
      'تصویب قانون ملی شدن صنعت نفت ایران و الگودهی به کشورهای در حال توسعه برای استقلال منابع',
      'توسعه شبکه بهداشت، راه‌های ترانزیتی و پایه‌گذاری نهادهای مدرن علمی و فرهنگی'
    ],
    culturalLegacyEn: 'Transformed traditional systems into a modern sovereign state with global academic and cultural prominence.',
    culturalLegacyFa: 'پیوند هویت تاریخی کهن با علم، فناوری، راه‌ها و نهادهای جهان مدرن.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'evt-3200',
    year: -3200,
    dateDisplayEn: '3200 BCE',
    dateDisplayFa: '۳۲۰۰ پیش از میلاد',
    eraId: 'elamite',
    category: 'culture',
    titleEn: 'Rise of Proto-Elamite Civilization',
    titleFa: 'پیدایش تمدن عیلام و خط پیش‌عیلامی',
    summaryEn: 'Susa and Anshan establish administrative accounting and bronze metallurgy across the plateau.',
    summaryFa: 'شوش و انشان به عنوان کانون‌های مدیریت بازرگانی، سفالگری و خط اولیه در فلات ایران پدیدار شدند.',
    fullDescriptionEn: 'Proto-Elamite represents the earliest indigenous civilization on the Iranian plateau. Excavations at Susa, Jiroft, and Shahr-e Sukhteh (Burnt City) reveal sophisticated stone craftsmanship, early bronze casting, and intricate geometric pottery predating the influx of Indo-European tribes.',
    fullDescriptionFa: 'تمدن پیش‌عیلامی قدیمی‌ترین تمدن ثبت‌شده شهری در فلات ایران است. کاوش‌های شوش، جیرفت و شهر سوخته سیستان وجود چشم مصنوعی، کهن‌ترین انیمیشن جهان روی جام سفالین و نخستین جراحی مغز را به اثبات رسانده است.',
    locationEn: 'Susa & Jiroft, Iranian Plateau',
    locationFa: 'شوش، جیرفت و شهر سوخته سیستان'
  },
  {
    id: 'evt-1250',
    year: -1250,
    dateDisplayEn: '1250 BCE',
    dateDisplayFa: '۱۲۵۰ پیش از میلاد',
    eraId: 'elamite',
    category: 'architectural',
    titleEn: 'Construction of the Chogha Zanbil Ziggurat',
    titleFa: 'احداث زیگورات چغازنبیل به دست اونتاش ناپیریشا',
    summaryEn: 'King Untash-Napirisha erects the monumental sacred ziggurat dedicated to Inshushinak.',
    summaryFa: 'بنای معبد پنج‌طبقه و نیایشگاه مقدس خشتی چغازنبیل در نزدیکی شوش خوزستان.',
    fullDescriptionEn: 'The ziggurat of Dur-Untash (Chogha Zanbil) is the best-preserved pre-classical monumental complex outside Mesopotamia. Comprising millions of kiln-fired bricks inscribed in Elamite cuneiform, it incorporated a sophisticated water reservoir and gravitational filtration conduits.',
    fullDescriptionFa: 'چغازنبیل نخستین اثر ایرانی ثبت‌شده در فهرست میراث جهانی یونسکو است. میلیون‌ها آجر پخته با کتیبه‌های میخی عیلامی در ۵ طبقه افراشته شدند و سیستم تصفیه آب گرانشی آن از شاهکارهای بی‌بدیل مهندسی عهد عتیق است.',
    locationEn: 'Khuzestan, Iran',
    locationFa: 'شوش، خوزستان',
    quoteEn: 'I, Untash-Napirisha, built this holy sanctuary with golden bricks for the guardian deity.',
    quoteFa: 'من اونتاش ناپیریشا این نیایشگاه مقدس را با آجرهای پخته برای ایزد حامی سرزمین افراشتم.',
    quoteAuthorEn: 'Elamite Inscription',
    quoteAuthorFa: 'کتیبه میخی عیلامی چغازنبیل'
  },
  {
    id: 'evt-678',
    year: -678,
    dateDisplayEn: '678 BCE',
    dateDisplayFa: '۶۷۸ پیش از میلاد',
    eraId: 'medes',
    category: 'statecraft',
    titleEn: 'Foundation of the Median Realm at Ecbatana',
    titleFa: 'بنیادگذاری دولت متحد مادها در هگمتانه',
    summaryEn: 'Deioces unifies the Iranian tribes and establishes Ecbatana as the fortified royal seat.',
    summaryFa: 'دیاکو با برقراری دادگستری قبایل پراکنده ماد را متحد کرد و همدان (هگمتانه) را بنا نهاد.',
    fullDescriptionEn: 'Desiring an impartial judge to end lawlessness, the council of Median elders elected Deioces as monarch. He decreed the construction of Ecbatana with its seven concentrically colored ramparts, instituting the formal royal protocol and common defense pact that dismantled the Assyrian scourge.',
    fullDescriptionFa: 'بزرگان ماد به دلیل عدالت‌خواهی دیاکو او را به پادشاهی برگزیدند. دیاکو دستور داد باروی هفت‌قلعه هگمتانه با رنگ‌های نمادین بر فراز تپه ساخته شود و ساختار سیاسی واحدی برای دفاع در برابر ارتش غارتگر آشور پایه‌ریزی کرد.',
    locationEn: 'Hamedan (Ecbatana), Iran',
    locationFa: 'هگمتانه (همدان کنونی)'
  },
  {
    id: 'evt-550',
    year: -550,
    dateDisplayEn: '550 BCE',
    dateDisplayFa: '۵۵۰ پیش از میلاد',
    eraId: 'achaemenid',
    category: 'statecraft',
    titleEn: 'Cyrus the Great Founds the Achaemenid Empire',
    titleFa: 'پایه‌گذاری شاهنشاهی هخامنشی به دست کوروش بزرگ',
    summaryEn: 'Cyrus unites the Medes and Persians, establishing the first global empire founded on federation.',
    summaryFa: 'کوروش بزرگ با یکپارچه‌سازی مادها و پارس‌ها بزرگ‌ترین شاهنشاهی تاریخ باستان را بنیان نهاد.',
    fullDescriptionEn: 'In 550 BCE, Cyrus the Great consolidated the Iranian plateau by integrating the Median nobility with Persian forces. He treated the defeated Median King Astyages with honor, setting a revolutionary precedent of mercy, federal governance, and cross-cultural partnership.',
    fullDescriptionFa: 'در سال ۵۵۰ پیش از میلاد کوروش بزرگ با برقراری اتحاد میان پارس و ماد شاهنشاهی هخامنشی را پدید آورد. او با پادشاه ماد به نیکی رفتار کرد و شیوه مدارا و مشارکت اقوام را سرلوحه جهان‌داری نوین قرار داد.',
    locationEn: 'Pasargadae, Fars',
    locationFa: 'پاسارگاد، پارس'
  },
  {
    id: 'evt-539',
    year: -539,
    dateDisplayEn: '539 BCE',
    dateDisplayFa: '۵۳۹ پیش از میلاد',
    eraId: 'achaemenid',
    category: 'philosophy',
    titleEn: 'Liberation of Babylon & The Cyrus Cylinder',
    titleFa: 'فتح بابل و صدور منشور حقوق بشر کوروش بزرگ',
    summaryEn: 'Cyrus enters Babylon peacefully and issues the world’s first charter of human rights.',
    summaryFa: 'کوروش بزرگ بدون خونریزی وارد بابل شد و آزادی ادیان و لغو برده‌داری را در منشوری تاریخی ثبت کرد.',
    fullDescriptionEn: 'Upon conquering Babylon without bloodshed, Cyrus issued the inscribed clay cylinder decreeing freedom of religious worship, prohibiting forced labor, and allowing exiled peoples—including the Jewish population—to return to their homelands and restore their temples.',
    fullDescriptionFa: 'کوروش بزرگ پس از ورود مسالمت‌آمیز به بابل استوانه گلی معروف خود را صادر کرد. او غارت و ویرانی معابد را ممنوع کرد، بردگان را آزاد ساخت و یهودیان اسیر در بابل را به بیت‌المقدس بازگرداند تا معبد خود را بازسازی کنند.',
    locationEn: 'Babylon',
    locationFa: 'بابل',
    quoteEn: 'I let no one terrorize the land of Sumer and Akkad. I set free all who were held in bondage.',
    quoteFa: 'نگذاشتم رنج و آزار به مردم این سرزمین برسد... من یوغ اسارت را از دوش ستمدیدگان برداشتم.',
    quoteAuthorEn: 'Cyrus Cylinder, British Museum',
    quoteAuthorFa: 'منشور کوروش بزرگ، موزه بریتانیا'
  },
  {
    id: 'evt-518',
    year: -518,
    dateDisplayEn: '518 BCE',
    dateDisplayFa: '۵۱۸ پیش از میلاد',
    eraId: 'achaemenid',
    category: 'architectural',
    titleEn: 'Darius I Commences Persepolis (Takht-e Jamshid)',
    titleFa: 'آغاز ساخت تخت جمشید به فرمان داریوش بزرگ',
    summaryEn: 'Construction begins on the ceremonial capital designed to host representatives of 28 nations.',
    summaryFa: 'آغاز ساخت پارسه (تخت جمشید)، کانون برگزاری جشن مهرگان و نوروز و گردهمایی ملل ۲۸گانه.',
    fullDescriptionEn: 'Darius the Great commissioned Persepolis as the ceremonial heart of the empire. Over 150,000 square meters of stone terraces, Apadana audience halls, and majestic Gate of All Nations were erected by paid artisans with equal wages for men and women, documented in the Fortification Tablets.',
    fullDescriptionFa: 'داریوش بزرگ بر فراز صفه‌ای سنگی ساخت تخت جمشید را آغاز کرد. در الواح گلی باروی تخت جمشید ثبت شده است که کارگران، معماران و زنان شاغل دستمزد عادلانه و مرخصی زایمان دریافت می‌کردند و هیچ برده‌ای در ساخت آن به کار گرفته نشد.',
    locationEn: 'Marvdasht, Fars',
    locationFa: 'مرودشت، فارس'
  },
  {
    id: 'evt-53',
    year: -53,
    dateDisplayEn: '53 BCE',
    dateDisplayFa: '۵۳ پیش از میلاد',
    eraId: 'parthian',
    category: 'statecraft',
    titleEn: 'Battle of Carrhae: Surena Crushes Crassus',
    titleFa: 'نبرد کاره: پیروزی سپهبد سورنا بر رومیان',
    summaryEn: 'The Parthian cavalry defeats the Roman legions, halting Rome’s eastward advance for centuries.',
    summaryFa: 'سپهبد سورنا با نبوغ نظامی خود ارتش روم به سرکردگی کراسوس را در دشت‌های کاره درهم شکست.',
    fullDescriptionEn: 'Marcus Licinius Crassus marched seven Roman legions (over 40,000 soldiers) into Parthian territory. General Surena, commanding 1,000 cataphracts and 9,000 mobile horse archers supplied with continuous camels carrying arrows, executed the Parthian shot retreat tactic, routing the Roman invader.',
    fullDescriptionFa: 'کراسوس سردار ثروتمند روم با ۴۰ هزار سپاهی برای غارت به قلمرو ایران تاخت. سپهبد سورنا با ۱۰ هزار سوار پارتی و تدارکات شترهای حامل صدها هزار تیر، ارتش روم را به محاصره درآورد و روم را از سرحدات فرات عقب راند.',
    locationEn: 'Carrhae (Harran)',
    locationFa: 'کاره (حران)'
  },
  {
    id: 'evt-260',
    year: 260,
    dateDisplayEn: '260 CE',
    dateDisplayFa: '۲۶۰ میلادی',
    eraId: 'sasanian',
    category: 'statecraft',
    titleEn: 'Battle of Edessa: Shapur I Captures Roman Emperor Valerian',
    titleFa: 'نبرد ادسا: اسارت امپراتور والرین به دست شاپور یکم',
    summaryEn: 'For the only time in history, a Roman emperor is captured alive by a foreign sovereign.',
    summaryFa: 'شاپور یکم ساسانی سپاه ۷۰ هزار نفری روم را مغلوب و امپراتور والرین را اسیر کرد.',
    fullDescriptionEn: 'At the Battle of Edessa, King Shapur I decisively defeated Roman Emperor Valerian and his legions. Shapur put the captured Roman engineers and artisans to work constructing civic infrastructure across Khuzestan, including the historic bridge and hydraulic weir Band-e Kaisar at Shushtar.',
    fullDescriptionFa: 'در نبرد ادسا شاپور اول ساسانی امپراتور والرین را به اسارت گرفت؛ این رویداد بی‌سابقه در نقش‌برجسته‌های سنگی نقش رستم و بیشاپور ثبت شد. شاپور از مهندسان اسیر برای ساخت پل تاریخی بند قیصر شوشتر بهره برد.',
    locationEn: 'Edessa / Naqsh-e Rostam',
    locationFa: 'ادسا / نقش رستم فارس'
  },
  {
    id: 'evt-540',
    year: 540,
    dateDisplayEn: '540 CE',
    dateDisplayFa: '۵۴۰ میلادی',
    eraId: 'sasanian',
    category: 'culture',
    titleEn: 'Flourishing of the Academy of Gondeshapur',
    titleFa: 'اوج درخشش دانشگاه و بیمارستان بین‌المللی گندی‌شاپور',
    summaryEn: 'Khosrow I expands the global university integrating Greek, Indian, and Persian medicine and astronomy.',
    summaryFa: 'خسرو انوشیروان گندی‌شاپور را به کانون پژوهش‌های پزشکی، داروشناسی و فلسفه جهان تبدیل کرد.',
    fullDescriptionEn: 'Under Khosrow I Anushirvan, the Academy of Gondeshapur in Khuzestan became the world’s preeminent intellectual sanctuary. Christian scholars exiled from Byzantine Athens, Indian physicians with Ayurvedic treatises, and Zoroastrian scholars collaborated under a unified medical code.',
    fullDescriptionFa: 'دانشگاه گندی‌شاپور نخستین مرکز علمی جهان بود که تدریس تئوری و کار عملی بالینی بیمارستانی را در هم آمیخت. پزشکان یونانی، هندی و ایرانی در کمال آزادی مذهبی در این آکادمی گرد هم آمدند و کتب حکمت و طب را به پهلوی ترجمه کردند.',
    locationEn: 'Gondeshapur, Khuzestan',
    locationFa: 'گندی‌شاپور، خوزستان'
  },
  {
    id: 'evt-867',
    year: 867,
    dateDisplayEn: '867 CE',
    dateDisplayFa: '۸۶۷ میلادی',
    eraId: 'tahirid-saffarid',
    category: 'literary',
    titleEn: 'Ya’qub Leith Proclaims Persian Official State Language',
    titleFa: 'فرمان تاریخی یعقوب لیث صفاری برای رسمیت زبان فارسی',
    summaryEn: 'The Saffarid liberator mandates that government chronicles and poetry must be composed in Persian.',
    summaryFa: 'یعقوب لیث صفاری سرودن شعر به زبان عربی در دربار را ممنوع و زبان پارسی را زبان رسمی اعلام کرد.',
    fullDescriptionEn: 'When court panegyrists recited poems in Arabic to celebrate his victories, Ya’qub famously replied: "Why recite what I cannot understand?" He decreed that henceforth, all poetry, decrees, and administrative letters across the realm must be written in the Persian tongue, triggering the literary renaissance.',
    fullDescriptionFa: 'وقتی شاعران درباری برای تبریک فتوحات یعقوب لیث قصایدی به زبان عربی خواندند، او گفت: «چیزی که من اندر نیابم چرا باید گفت؟» از آن پس به فرمان وی سرودن شعر و نگارش نامه‌های دیوانی به پارسی دری آغاز شد.',
    locationEn: 'Zaranj / Nishapur',
    locationFa: 'زرنج سیستان / نیشابور',
    quoteEn: 'Speak to me in the tongue of my people, that I may comprehend the soul of this land.',
    quoteFa: 'چیزی که من اندر نیابم چرا باید گفت؟ به زبان نیاکانمان پارسی بسرایید.',
    quoteAuthorEn: 'Ya’qub ibn al-Layth al-Saffar',
    quoteAuthorFa: 'یعقوب لیث صفاری (تاریخ سیستان)'
  },
  {
    id: 'evt-945',
    year: 945,
    dateDisplayEn: '945 CE',
    dateDisplayFa: '۹۴۵ میلادی',
    eraId: 'buyid',
    category: 'statecraft',
    titleEn: 'The Buyid Conquest of Baghdad',
    titleFa: 'فتح بغداد به دست آل بویه و احیای عنوان شاهنشاه',
    summaryEn: 'Mu’izz al-Dawla enters Baghdad, establishing Iranian sovereignty over the Abbasid Caliphate.',
    summaryFa: 'امیران دیلمی آل بویه بغداد را تصرف کردند و اقتدار تاریخی ایران را بر خلیفه تحمیل نمودند.',
    fullDescriptionEn: 'Ahmad Mu’izz al-Dawla marched his Daylamite mountain soldiers into Baghdad. The Caliph was forced to grant the Buyids supreme sovereign control, allowing Iranian viziers to rule Iraq and Iran while patronizing astronomical observatories, libraries, and hospitals in Ray, Shiraz, and Isfahan.',
    fullDescriptionFa: 'سرداران آل بویه از کوهستان‌های سرسبز دیلم گیلان به بغداد وارد شدند و خلیفه ناچار شد اختیارات حکومت را به آنان واگذارد. آل بویه لقب کهن «شاهنشاه» را زنده ساختند و به ساخت رصدخانه‌ها و بیمارستان‌ها همت گماردند.',
    locationEn: 'Baghdad & Shiraz',
    locationFa: 'بغداد و شیراز'
  },
  {
    id: 'evt-1010',
    year: 1010,
    dateDisplayEn: '1010 CE',
    dateDisplayFa: '۱۰۱۰ میلادی',
    eraId: 'samanid',
    category: 'literary',
    titleEn: 'Ferdowsi Completes the Shahnameh (The Book of Kings)',
    titleFa: 'پایان سرایش شاهنامه به دست حکیم ابوالقاسم فردوسی',
    summaryEn: 'After 30 years of labor, Ferdowsi immortalizes Persian myth, history, and linguistic identity.',
    summaryFa: 'فردوسی بزرگ با سی سال رنج شاهکار حماسی و هویت ملی ایرانیان را در ۶۰ هزار بیت جاودانه کرد.',
    fullDescriptionEn: 'Abolqasem Ferdowsi of Tus dedicated three decades to composing the 60,000 rhyming couplets of the Shahnameh. By relying almost exclusively on native Persian vocabulary and celebrating pre-Islamic kings and heroes like Rostam and Cyrus, he preserved the soul of the Iranian nation for all posterity.',
    fullDescriptionFa: 'حکیم فردوسی توسی با نگارش شاهنامه در دوران سامانی و غزنوی، بدون استفاده از واژگان بیگانه، حماسه‌ها و خرد کهن ایران را ثبت کرد و مانع از عربی‌شدن زبان مردم ایران، برخلاف مصر و بین‌النهرین، گردید.',
    locationEn: 'Tus, Khorasan',
    locationFa: 'توس، خراسان',
    quoteEn: 'Much have I suffered in these thirty years; I have revived the Persian through my verse.',
    quoteFa: 'بسی رنج بردم در این سال سی / عجم زنده کردم بدین پارسی',
    quoteAuthorEn: 'Ferdowsi, Shahnameh',
    quoteAuthorFa: 'حکیم ابوالقاسم فردوسی'
  },
  {
    id: 'evt-1025',
    year: 1025,
    dateDisplayEn: '1025 CE',
    dateDisplayFa: '۱۰۲۵ میلادی',
    eraId: 'samanid',
    category: 'philosophy',
    titleEn: 'Avicenna (Ibn Sina) Completes The Canon of Medicine',
    titleFa: 'تکمیل شاهکار «قانون در طب» توسط ابوعلی سینا',
    summaryEn: 'The monumental 5-volume encyclopedia becomes the foundational medical textbook in Europe and Asia.',
    summaryFa: 'ابن‌سینا نابغه پزشکی و حکمت ایران، کتاب قانون در طب را به عنوان مرجع پزشکی جهانی نگاشت.',
    fullDescriptionEn: 'Born near Bukhara, the philosopher-physician Avicenna synthesized Greco-Roman pathology, Indian medicinal botany, and clinical Persian empirical observations into Al-Qanun fi al-Tibb. It remained the supreme medical curriculum at universities like Montpellier, Padua, and Oxford for over 500 years.',
    fullDescriptionFa: 'پورسینا (ابوعلی سینا) با طبقه‌بندی صدها بیماری، کشف مسری بودن سل، روش‌های جراحی چشم و خواص گیاهان دارویی، کتاب قانون را تالیف کرد که قرن‌ها معتبرترین کتاب درسی دانشکده‌های پزشکی اروپا بود.',
    locationEn: 'Hamedan & Isfahan',
    locationFa: 'همدان و اصفهان'
  },
  {
    id: 'evt-1079',
    year: 1079,
    dateDisplayEn: '1079 CE',
    dateDisplayFa: '۱۰۷۹ میلادی',
    eraId: 'seljuk',
    category: 'philosophy',
    titleEn: 'Omar Khayyam Formulates the Jalali Solar Calendar',
    titleFa: 'تدوین گاه‌شماری خورشیدی جلالی به دست حکیم عمر خیام',
    summaryEn: 'Khayyam and fellow astronomers calculate the solar year with unmatched astronomical precision.',
    summaryFa: 'خیام نیشابوری با حمایت خواجه نظام‌الملک دقیق‌ترین گاه‌شماری خورشیدی جهان را تدوین کرد.',
    fullDescriptionEn: 'Commissioned by Sultan Malik-Shah I and vizier Nizam al-Mulk, Omar Khayyam led the Isfahan Observatory. His Jalali calendar calculated the tropical year to 365.24219858156 days, far more mathematically exact than the Gregorian calendar introduced in Europe five centuries later.',
    fullDescriptionFa: 'حکیم عمر خیام در رصدخانه اصفهان طول سال خورشیدی را محاسبه کرد. تقویم جلالی با خطای تنها یک روز در هر ۵۰۰۰ سال، از تقویم گریگوری اروپایی که قرن‌ها بعد تنظیم شد بسیار دقیق‌تر و منطبق بر اعتدال بهاری است.',
    locationEn: 'Nishapur & Isfahan',
    locationFa: 'نیشابور و اصفهان'
  },
  {
    id: 'evt-1259',
    year: 1259,
    dateDisplayEn: '1259 CE',
    dateDisplayFa: '۱۲۵۹ میلادی',
    eraId: 'ilkhanate',
    category: 'philosophy',
    titleEn: 'Foundation of the Maragheh Astronomical Observatory',
    titleFa: 'تاسیس رصدخانه مراغه به همت خواجه نصیرالدین طوسی',
    summaryEn: 'Nasir al-Din al-Tusi constructs the world’s leading observatory, developing non-Ptolemaic celestial models.',
    summaryFa: 'خواجه نصیر طوسی با گردآوری دانشمندان ملل مختلف، بزرگ‌ترین رصدخانه و مرکز نجوم زمان را ساخت.',
    fullDescriptionEn: 'Hulagu Khan provided funding at the urging of polymath Nasir al-Din al-Tusi to build the Maragheh Observatory in Azerbaijan. Incorporating a library of over 400,000 manuscripts and state-of-the-art sextants, Tusi formulated the "Tusi-couple" mathematical device that Nicolaus Copernicus later used for heliocentrism.',
    fullDescriptionFa: 'خواجه نصیرالدین طوسی در مراغه رصدخانه‌ای با برج‌های سنگی، کارگاه ساخت اسطرلاب و کتابخانه‌ای بزرگ بنا کرد. ابداع ریاضی «جفت طوسی» توسط وی مسیر را برای کوپرنیک در اثبات گردش زمین به دور خورشید هموار ساخت.',
    locationEn: 'Maragheh, East Azerbaijan',
    locationFa: 'مراغه، آذربایجان شرقی'
  },
  {
    id: 'evt-1418',
    year: 1418,
    dateDisplayEn: '1418 CE',
    dateDisplayFa: '۱۴۱۸ میلادی',
    eraId: 'timurid',
    category: 'architectural',
    titleEn: 'Dedication of Goharshad Mosque in Mashhad',
    titleFa: 'احداث مسجد باشکوه گوهرشاد در مشهد به فرمان بانو گوهرشاد',
    summaryEn: 'The Timurid queen sponsors one of the greatest masterpieces of Persian tilework and architecture.',
    summaryFa: 'مسجد جامع گوهرشاد با معماری قوام‌الدین شیرازی و خطاطی بایسنقر میرزا افتتاح شد.',
    fullDescriptionEn: 'Queen Goharshad, wife of Shah Rukh, commissioned architect Qavam al-Din Shirazi to construct this breathtaking sanctuary adjoining the Imam Reza Shrine. Featuring radiant turquoise glazed faience, intricate muqarnas vaults, and majestic Thuluth calligraphy by her son Prince Baysonqor.',
    fullDescriptionFa: 'بانو گوهرشاد آغا، همسر شاهرخ تیموری، با همکاری معمار نامدار قوام‌الدین شیرازی این مسجد را ساخت. کتیبه‌های ایوان مقصوره به خط ثلث زرین شاهزاده بایسنقر میرزا از شاهکارهای تاریخ خوشنویسی جهان است.',
    locationEn: 'Mashhad, Khorasan',
    locationFa: 'مشهد، خراسان رضوی'
  },
  {
    id: 'evt-1501',
    year: 1501,
    dateDisplayEn: '1501 CE',
    dateDisplayFa: '۱۵۰۱ میلادی',
    eraId: 'safavid',
    category: 'statecraft',
    titleEn: 'Coronation of Shah Ismail I and Rebirth of Iranian Statehood',
    titleFa: 'تاج‌گذاری شاه اسماعیل یکم و رستاخیز وحدت ملی ایران',
    summaryEn: 'The Safavid dynasty restores the unified borders and cultural autonomy of the Iranian realm.',
    summaryFa: 'شاه اسماعیل یکم در تبریز تاج‌گذاری کرد و هویت ملی و مستقل ایران را پس از سده‌ها بازآفرینی نمود.',
    fullDescriptionEn: 'At the age of fourteen, Shah Ismail I united the fractured provinces from Khorasan to Azerbaijan under a centralized national government in Tabriz. The Safavids established Twelver Shi’ism as the unifying state confession, consolidating Iranian cultural sovereignty in the face of Ottoman expansionism.',
    fullDescriptionFa: 'شاه اسماعیل صفوی در سن نوجوانی در تبریز به تخت نشست و با شجاعت ملوک‌الطوایفی را برچید و مرزهای تاریخی ایران را یکپارچه ساخت تا ایران کشوری مستقل در برابر زیاده‌خواهی‌های امپراتوری عثمانی باقی بماند.',
    locationEn: 'Tabriz, Azerbaijan',
    locationFa: 'تبریز، آذربایجان'
  },
  {
    id: 'evt-1598',
    year: 1598,
    dateDisplayEn: '1598 CE',
    dateDisplayFa: '۱۵۹۸ میلادی',
    eraId: 'safavid',
    category: 'architectural',
    titleEn: 'Shah Abbas Transits Capital to Isfahan ("Half the World")',
    titleFa: 'انتقال پایتخت به اصفهان و بنای میدان نقش جهان',
    summaryEn: 'Shah Abbas the Great transforms Isfahan into an international metropolis of urban planning.',
    summaryFa: 'شاه عباس بزرگ اصفهان را پایتخت ساخت و میدان نقش جهان، عالی‌قاپو و مسجد شاه را پدید آورد.',
    fullDescriptionEn: 'Shah Abbas moved the royal seat to Isfahan, commissioning architect Shaykh Bahai to design Naqsh-e Jahan Square. Flanked by the royal bazaar, the Ali Qapu Palace, the jewel-like Sheikh Lotfollah Mosque, and the grand Shah Mosque, the city drew diplomats and merchants from Venice, England, and China.',
    fullDescriptionFa: 'شاه عباس با همکاری شیخ بهایی اصفهان را به شاهکار شهرسازی و قطب بازرگانی ابریشم و قالی جهان تبدیل کرد. میدان نقش جهان با طول ۵۶۰ متر به عنوان یکی از بزرگ‌ترین میدان‌های باستانی جهان ثبت یونسکو گردید.',
    locationEn: 'Isfahan',
    locationFa: 'اصفهان'
  },
  {
    id: 'evt-1739',
    year: 1739,
    dateDisplayEn: '1739 CE',
    dateDisplayFa: '۱۷۳۹ میلادی',
    eraId: 'afsharid-zand',
    category: 'statecraft',
    titleEn: 'Nader Shah’s Battle of Karnal and Frontier Restoration',
    titleFa: 'نبرد کرنال نادرشاه افشار و بازپس‌گیری مرزهای ایران',
    summaryEn: 'Nader Shah triumphs at Karnal, cementing his reputation as the greatest military commander of his era.',
    summaryFa: 'نادرشاه افشار با نبوغ رزمی بی‌مانند مرزهای شرقی و غربی ایران را بازپس گرفت و متجاوزان را تنبیه کرد.',
    fullDescriptionEn: 'After expelling Ottoman invaders from Western Iran and restoring national borders, Nader Shah marched east to Karnal. His swift cavalry tactics crushed vastly superior forces, returning to Iran with celebrated historical treasures including the Darya-i-Noor and Koh-i-Noor diamonds and Peacock Throne.',
    fullDescriptionFa: 'نادرشاه افشار پس از بیرون راندن قوای عثمانی و افغان و سرکوب شورش‌ها، ارتش هند را در نبرد سه ساعته کرنال زمین‌گیر کرد. الماس‌های تاریخی دریای نور و کوه نور و تخت طاووس به گنجینه ملی ایران آورده شدند.',
    locationEn: 'Karnal & Mashhad',
    locationFa: 'کرنال و مشهد'
  },
  {
    id: 'evt-1765',
    year: 1765,
    dateDisplayEn: '1765 CE',
    dateDisplayFa: '۱۷۶۵ میلادی',
    eraId: 'afsharid-zand',
    category: 'culture',
    titleEn: 'Karim Khan Zand Constructs the Vakil Complex in Shiraz',
    titleFa: 'احداث مجموعه تاریخی وکیل در شیراز به فرمان کریم‌خان زند',
    summaryEn: 'The "Advocate of the People" builds the covered Vakil Bazaar, Mosque, and public bathhouses.',
    summaryFa: 'کریم‌خان زند پایتخت خود شیراز را با ساخت بازار مسقف وکیل، حمام عمومی و ارگ وکیل آراست.',
    fullDescriptionEn: 'Rejecting the opulent titles of imperial monarchs, Karim Khan styled himself Vakil ol-Ro’aya (Advocate of the Subjects). In Shiraz, he built the brick Vakil Bazaar with high vaulted ceilings that maintain cool airflow in summer, welcoming merchants and poets in an era of tranquility.',
    fullDescriptionFa: 'کریم‌خان زند پادشاهی وارسته بود که حاضر به استفاده از عنوان شاه نشد و خود را وکیل و نماینده مردم خواند. او با ساخت بازار وکیل، مسجد وکیل با ۴۸ ستون یکپارچه سنگی و ارگ تاریخی شیراز، به رفاه مردم و رونق کسب‌وکار اندیشید.',
    locationEn: 'Shiraz, Fars',
    locationFa: 'شیراز، فارس'
  },
  {
    id: 'evt-1851',
    year: 1851,
    dateDisplayEn: '1851 CE',
    dateDisplayFa: '۱۸۵۱ میلادی',
    eraId: 'qajar',
    category: 'culture',
    titleEn: 'Inauguration of Dar al-Funun by Amir Kabir',
    titleFa: 'افتتاح مدرسه دارالفنون به همت میرزا تقی‌خان امیرکبیر',
    summaryEn: 'The first modern academy for sciences, engineering, and medicine opens its doors in Tehran.',
    summaryFa: 'گشایش دارالفنون تهران برای تدریس علوم مهندسی، طب، داروسازی و معدن با معلمان اروپایی.',
    fullDescriptionEn: 'Premier Mirza Taqi Khan Amir Kabir envisioned a self-reliant Iran free from foreign imperial interference. He established Dar al-Funun (Polytechnic College) in Tehran, recruiting instructors from Austria and Bohemia to train youth in mathematics, modern surgery, chemistry, and military engineering.',
    fullDescriptionFa: 'امیرکبیر با درک نیاز مبرم کشور به علوم جدید، دارالفنون را بنا کرد. اگرچه بدخواهان پیش از افتتاح حکم قتل او را گرفتند، دارالفنون نسل طلایی دانشمندان، پزشکان، دیپلمات‌ها و مترجمان معاصر ایران را پرورش داد.',
    locationEn: 'Tehran',
    locationFa: 'تهران'
  },
  {
    id: 'evt-1906',
    year: 1906,
    dateDisplayEn: '1906 CE',
    dateDisplayFa: '۱۹۰۶ میلادی',
    eraId: 'qajar',
    category: 'statecraft',
    titleEn: 'The Persian Constitutional Revolution (Mashruteh)',
    titleFa: 'پیروزی انقلاب مشروطه و تاسیس نخستین مجلس قانون‌گذاری',
    summaryEn: 'Popular protests culminate in the signing of the Constitution and opening of the National Majlis.',
    summaryFa: 'امضای فرمان مشروطیت، مهار قدرت استبداد و تشکیل مجلس شورای ملی در بهارستان تهران.',
    fullDescriptionEn: 'A coalition of merchants, progressive clerics, intellectuals, and women took sanctuary at the British legation and shrines demanding an "Adalatkhaneh" (House of Justice). Mozaffar ad-Din Shah conceded on August 5, 1906, signing the historic proclamation establishing constitutional rule in Asia.',
    fullDescriptionFa: 'انقلاب مشروطه ایران نخستین جنبش دموکراتیک برای حکومت قانون در آسیا و خاورمیانه بود. با ایثار ستارخان و باقرخان و مشروطه‌خواهان گیلان و اصفهان، استبداد مهار شد و اصل قانون اساسی و تفکیک قوا به رسمیت شناخته شد.',
    locationEn: 'Baharestan, Tehran',
    locationFa: 'بهارستان، تهران',
    quoteEn: 'I wish that all the soil of Iran belonged to Iranians, and that we governed ourselves under the light of law.',
    quoteFa: 'من می‌خواهم که خاک ایران متعلق به ایرانیان باشد و ما زیر سایه قانون زندگی کنیم.',
    quoteAuthorEn: 'Sattar Khan, Sardar-e Melli',
    quoteAuthorFa: 'ستارخان (سردار ملی)'
  },
  {
    id: 'evt-1934',
    year: 1934,
    dateDisplayEn: '1934 CE',
    dateDisplayFa: '۱۹۳۴ میلادی',
    eraId: 'pahlavi',
    category: 'culture',
    titleEn: 'Establishment of the University of Tehran & Modern Infrastructure',
    titleFa: 'تاسیس دانشگاه تهران و ساخت راه‌آهن سراسری ایران',
    summaryEn: 'Academic faculties unify into a flagship national university as the Trans-Iranian railway spans north to south.',
    summaryFa: 'افتتاح دانشگاه تهران در اراضی جلالیه و تکمیل شاهکار مهندسی راه‌آهن سراسری با پل ورسک.',
    fullDescriptionEn: 'In 1934, the National Assembly passed the legislation establishing the University of Tehran under the guidance of scholar Ali Asghar Hekmat and architect André Godard. Concurrently, Iranian and international engineers completed the Trans-Iranian Railway through the Alborz and Zagros mountains.',
    fullDescriptionFa: 'دانشگاه تهران به عنوان نماد آموزش عالی نوین با دانشکده‌های پزشکی، فنی، حقوق و ادبیات پایه‌گذاری شد و با تکمیل خط آهن سراسری خلیج فارس به دریای خزر پیوند یافت که ثبت میراث جهانی یونسکو نیز گردیده است.',
    locationEn: 'Tehran & Veresk Bridge',
    locationFa: 'تهران و پل ورسک سوادکوه'
  },
  {
    id: 'evt-1951',
    year: 1951,
    dateDisplayEn: '1951 CE',
    dateDisplayFa: '۱۹۵۱ میلادی',
    eraId: 'pahlavi',
    category: 'statecraft',
    titleEn: 'Nationalization of the Iranian Oil Industry',
    titleFa: 'تصویب قانون ملی شدن صنعت نفت به رهبری دکتر محمد مصدق',
    summaryEn: 'Iran reclaims sovereign ownership of its petroleum wealth, inspiring anti-colonial movements across the globe.',
    summaryFa: 'خلع ید از شرکت نفت انگلیس و بازگرداندن منابع نفتی به مالکیت قانونی و ملی ملت ایران.',
    fullDescriptionEn: 'On March 20, 1951 (29 Esfand 1329), the Iranian Senate and Majlis ratified the law nationalizing all petroleum exploration, extraction, and refining. Championed by Prime Minister Dr. Mohammad Mosaddegh, this bold assertion of economic sovereignty served as a template for anti-colonial struggles worldwide.',
    fullDescriptionFa: 'در ۲۹ اسفند ۱۳۲۹ با ایستادگی مردم و نطق‌های تاریخی دکتر محمد مصدق در دادگاه لاهه و سازمان ملل، صنعت نفت ایران ملی اعلام شد. این اقدام شجاعانه الهام‌بخش جمال عبدالناصر در ملی کردن کانال سوئز و ملل استعمارزده شد.',
    locationEn: 'Abadan & Tehran',
    locationFa: 'آبادان و تهران',
    quoteEn: 'If we are to live as a free and sovereign nation, our national resources must belong to the Iranian people.',
    quoteFa: 'اگر قرار است ملتی آزاد و سرفراز باشیم، منابع ملی باید در اختیار فرزندان همین آب و خاک باشد.',
    quoteAuthorEn: 'Dr. Mohammad Mosaddegh',
    quoteAuthorFa: 'دکتر محمد مصدق'
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
    eraEn: 'Achaemenid Empire (518 BCE)',
    eraFa: 'شاهنشاهی هخامنشی (۵۱۸ ق.م)',
    coordinates: { x: 53, y: 72 },
    summaryEn: 'The ceremonial crown jewel of the Achaemenid Empire, famous for the Gate of All Nations, Apadana Palace, and reliefs of tributary delegations.',
    summaryFa: 'نگین تمدن هخامنشی با کاخ‌های آپادانا، صدستون، دروازه ملل و سنگ‌نگاره‌های باشکوه هیئت‌های ۲۸گانه جهانی.',
    highlightsEn: [
      'The majestic Gate of All Nations guarded by winged Lamassu bulls',
      'The Apadana stairway bas-reliefs showing gift-bearing dignitaries without chained captives',
      'Engineered drainage cisterns carved into the living rock of Mount Rahmat'
    ],
    highlightsFa: [
      'دروازه ملل با گاوهای بالدار نگهبان و ستون‌های ۲۰ متری',
      'پلکان آپادانا با تصویر نمایندگان ملل در کمال احترام و بدون تحقیر یا زنجیر',
      'کانال‌های زیرزمینی دفع آب و فاضلاب تراشیده‌شده در صخره‌های کوه رحمت'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599818497672-040212f45143?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pasargadae',
    nameEn: 'Pasargadae & Tomb of Cyrus',
    nameFa: 'پاسارگاد و آرامگاه کوروش بزرگ',
    provinceEn: 'Fars',
    provinceFa: 'فارس',
    type: 'monument',
    unescoYear: 2004,
    eraEn: 'Achaemenid Empire (550 BCE)',
    eraFa: 'شاهنشاهی هخامنشی (۵۵۰ ق.م)',
    coordinates: { x: 54, y: 69 },
    summaryEn: 'The first dynastic capital of Cyrus the Great, housing his minimalist limestone stepped tomb and the prototype of the Fourfold Persian Garden (Chaharbagh).',
    summaryFa: 'نخستین پایتخت کوروش بزرگ شامل آرامگاه ساده و پلکانی سنگی وی و کهن‌ترین الگوی باغ ایرانی (چهارباغ).',
    highlightsEn: [
      'The six-tiered stepped limestone sepulcher of Cyrus the Great',
      'The original geometric Chaharbagh hydraulic garden channels',
      'The winged spirit guardian bas-relief with cuneiform inscription'
    ],
    highlightsFa: [
      'آرامگاه ۶ طبقه کوروش بزرگ با سنگ‌های سفید آهکی بدون ملاط',
      'نخستین شبکه آبرسانی مهندسی باغ ایرانی در جهان',
      'سنگ‌نگاره مرد بالدار با کتیبه «من کوروش شاه هخامنشی‌ام»'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1590076212450-482d8c36b1df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chogha-zanbil',
    nameEn: 'Chogha Zanbil Ziggurat',
    nameFa: 'زیگورات چغازنبیل (دوراونتاش)',
    provinceEn: 'Khuzestan',
    provinceFa: 'خوزستان',
    type: 'spiritual',
    unescoYear: 1979,
    eraEn: 'Elamite Civilization (1250 BCE)',
    eraFa: 'تمدن عیلام (۱۲۵۰ ق.م)',
    coordinates: { x: 34, y: 65 },
    summaryEn: 'The best-preserved ziggurat temple complex in the world, constructed of millions of inscribed mudbricks dedicated to Elamite deities.',
    summaryFa: 'سالم‌ترین معبد طبقاتی (زیگورات) جهان باستان ساخته‌شده از آجر و قیر طبیعی با خط میخی عیلامی.',
    highlightsEn: [
      'Inscribed cuneiform bricks every tenth row praising Inshushinak',
      'One of the oldest recorded water purification filter reservoirs',
      'Sacred footprint imprints left by child artisans in dried clay'
    ],
    highlightsFa: [
      'ردپای کودک عیلامی باقی‌مانده روی آجرهای خشتی ۳۳۰۰ ساله',
      'قدیمی‌ترین حوضچه تصفیه آب جهان با لایه‌های ماسه و زغال',
      'کتیبه‌های نذر و وقف پادشاه اونتاش ناپیریشا'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'naqsh-e-jahan',
    nameEn: 'Naqsh-e Jahan Square',
    nameFa: 'میدان نقش جهان اصفهان',
    provinceEn: 'Isfahan',
    provinceFa: 'اصفهان',
    type: 'palace',
    unescoYear: 1979,
    eraEn: 'Safavid Empire (1598 CE)',
    eraFa: 'شاهنشاهی صفویه (۱۵۹۸ م)',
    coordinates: { x: 48, y: 55 },
    summaryEn: 'One of the world’s largest and most harmonious public plazas, surrounded by the Shah Mosque, Sheikh Lotfollah Mosque, and Ali Qapu Palace.',
    summaryFa: 'میدان تاریخی اصفهان به درازای ۵۶۰ متر که نبض حکومت، دین، تجارت و ورزش چوگان ایران صفوی را گرد هم آورد.',
    highlightsEn: [
      'Sheikh Lotfollah Mosque’s dome with color-shifting peacock tail lighting',
      'Ali Qapu music hall with acoustically engineered acoustic plaster cutouts',
      'Historic stone polo (Chowgan) goalposts still standing on the plaza'
    ],
    highlightsFa: [
      'طاووس نورانی زیر گنبد مسجد شیخ لطف‌الله با تابش پرتوهای خورشید',
      'اتاق موسیقی کاخ عالی‌قاپو با گچ‌بری‌های توخالی برای طنین نغمات تار و نی',
      'ستون‌های سنگی بازی اصیل چوگان ایرانی در دو سر میدان'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'shushtar-hydraulics',
    nameEn: 'Shushtar Historical Hydraulic System',
    nameFa: 'سازه‌های آبی تاریخی شوشتر',
    provinceEn: 'Khuzestan',
    provinceFa: 'خوزستان',
    type: 'hydraulic',
    unescoYear: 2009,
    eraEn: 'Sasanian & Achaemenid (3rd Century CE)',
    eraFa: 'ساسانیان و هخامنشیان (سده ۳ م)',
    coordinates: { x: 35, y: 62 },
    summaryEn: 'A multi-purpose water masterpiece dubbed by UNESCO as a masterpiece of creative genius, channeling the Karun river to power dozens of watermills.',
    summaryFa: 'شاهکار نبوغ مهندسی آب جهان؛ هدایت آب کارون برای به گردش درآوردن ده‌ها آسیاب آبی و آبیاری دشت‌ها.',
    highlightsEn: [
      'Gargar canal hand-carved through limestone cliffs',
      'Band-e Kaisar (Caesar’s Weir) weir bridge spanning 500 meters',
      'Cascading waterfalls continuously turning centuries-old flour mills'
    ],
    highlightsFa: [
      'نهر دست‌کند گرگر که صخره‌های سترگ شوشتر را شکافته است',
      'پل‌بند شادروان (قیصر) ساخته‌شده با بلوک‌های تراشیده سنگی',
      'آبشارهای جوشان خروشان که چرخ آسیاب‌های کهن را می‌چرخانند'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bisotun',
    nameEn: 'Bisotun Inscription',
    nameFa: 'کتیبه و سنگ‌نگاره بیستون',
    provinceEn: 'Kermanshah',
    provinceFa: 'کرمانشاه',
    type: 'archaeological',
    unescoYear: 2006,
    eraEn: 'Achaemenid Empire (520 BCE)',
    eraFa: 'شاهنشاهی هخامنشی (۵۲۰ ق.م)',
    coordinates: { x: 28, y: 46 },
    summaryEn: 'The Rosetta Stone of cuneiform writing, carved 100 meters up a sheer limestone cliff documenting Darius the Great’s rise to power.',
    summaryFa: 'کلید رمزگشایی از خط میخی جهان؛ کتیبه سه‌زبانه داریوش بزرگ بر دیواره صخره مقدس بیستون در کرمانشاه.',
    highlightsEn: [
      'Trilingual inscription written in Old Persian, Elamite, and Babylonian',
      'Detailed bas-relief of Darius holding a bow before the rebel pretenders',
      'Deciphered by Sir Henry Rawlinson, opening the study of ancient Assyriology'
    ],
    highlightsFa: [
      'کتیبه سه‌زبانه به خط میخی پارسی باستان، عیلامی و بابلی',
      'تصویر داریوش بزرگ با کمانی در دست زیر سایه فروهر',
      'رمزگشایی خط میخی باستان در قرن نوزدهم به واسطه این شاهکار سنگی'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gonbad-qabus',
    nameEn: 'Gonbad-e Qabus Tower',
    nameFa: 'برج گنبد قابوس (گنبد کاووس)',
    provinceEn: 'Golestan',
    provinceFa: 'گلستان',
    type: 'monument',
    unescoYear: 2012,
    eraEn: 'Ziyarid Dynasty (1006 CE)',
    eraFa: 'آل زیار (۱۰۰۶ م / ۳۹۷ ق)',
    coordinates: { x: 62, y: 22 },
    summaryEn: 'The world’s tallest purely unreinforced brick tower (72 meters tall), a masterwork of Islamic mathematics and decagonal geometry.',
    summaryFa: 'بلندترین برج آجری تمام‌عیار جهان به ارتفاع ۷۲ متر و شاهکار تناسبات هندسه ۱۰ ضلعی ریاضیات ایرانی.',
    highlightsEn: [
      'Decagonal star-shaped brick exterior resisting a millennium of earthquakes',
      'Acoustic echo focal point at the entrance producing crisp reverberation',
      'Pure unglazed burnt yellow bricks without internal structural armature'
    ],
    highlightsFa: [
      'پلان ستاره‌ای ۱۰ پر که بیش از هزار سال در برابر زلزله‌ها ایستادگی کرده است',
      'نقطه کانونی آکوستیک ورودی با بازتاب دقیق و حیرت‌انگیز صدا',
      'معماری خردورزانه بدون تزیینات کاذب و تکیه بر خلوص آجر پخته'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maragheh-observatory',
    nameEn: 'Maragheh Observatory & Caves',
    nameFa: 'رصدخانه تاریخی مراغه',
    provinceEn: 'East Azerbaijan',
    provinceFa: 'آذربایجان شرقی',
    type: 'archaeological',
    eraEn: 'Ilkhanate Era (1259 CE)',
    eraFa: 'ایلخانان مغول (۱۲۵۹ م)',
    coordinates: { x: 24, y: 24 },
    summaryEn: 'The scientific nerve center founded by Nasir al-Din al-Tusi that revolutionized world astronomy and the mathematics of celestial motion.',
    summaryFa: 'مرکز علمی بی‌همتای خواجه نصیرالدین طوسی که دانش نجوم و هندسه حرکات افلاک را دگرگون ساخت.',
    highlightsEn: [
      'The foundational research site of the "Tusi Couple" geometric theorem',
      'Housing early armillary spheres and precision quadrants',
      'Extensive subterranean workshops and research laboratories'
    ],
    highlightsFa: [
      'خاستگاه قضیه هندسی «جفت طوسی» که در مدل‌های کوپرنیک ظاهر شد',
      'ذخیره ۴۰۰ هزار نسخه دست‌نویس علمی از یونان، چین و هند',
      'کارگاه‌های ریخته‌گری ابزار دقیق نجومی بر فراز تپه مراغه'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'arg-e-bam',
    nameEn: 'Arg-e Bam (Citadel of Bam)',
    nameFa: 'ارگ بم (بزرگ‌ترین دژ خشتی جهان)',
    provinceEn: 'Kerman',
    provinceFa: 'کرمان',
    type: 'monument',
    unescoYear: 2004,
    eraEn: 'Achaemenid to Qajar (6th Century BCE)',
    eraFa: 'هخامنشی تا قاجار (سده ۶ ق.م)',
    coordinates: { x: 74, y: 78 },
    summaryEn: 'The largest adobe building complex in the world, an impenetrable oasis fortress on the Silk Road with millennia of continuous settlement.',
    summaryFa: 'عظیم‌ترین بنای خشتی جهان بر مسیر جاده ابریشم؛ دژی با باروهای چندلایه، بادگیرها و کاریزهای زنده کویر.',
    highlightsEn: [
      'Multi-tiered defense concentric ramparts with 38 watchtowers',
      'Sophisticated desert windcatchers (Badgirs) and ice-houses (Yakhchals)',
      'A vital trading hub on the Spice and Silk caravan routes'
    ],
    highlightsFa: [
      'باروی عظیم چندلایه با ۳۸ برج دیده‌بانی مستحکم خشتی',
      'سامانه بادگیرها، اصطبل‌های شاهی و یخچال‌های کویری پایدار',
      'کانون امن بازرگانان جاده ابریشم در کناره دشت لوت'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'golestan-palace',
    nameEn: 'Golestan Palace Complex',
    nameFa: 'کاخ موزه گلستان تهران',
    provinceEn: 'Tehran',
    provinceFa: 'تهران',
    type: 'palace',
    unescoYear: 2013,
    eraEn: 'Qajar Era (18th-19th Century)',
    eraFa: 'قاجاریه (سده ۱۸ و ۱۹ م)',
    coordinates: { x: 45, y: 34 },
    summaryEn: 'The opulent historic royal residence showcasing Persian craft fused with 19th-century European architectural influences.',
    summaryFa: 'کاخ سلطنتی تاریخی تهران با تالار آینه، شمس‌العماره و تلفیق باشکوه کاشی‌کاری‌های قاجار و معماری اروپایی.',
    highlightsEn: [
      'The famed Hall of Mirrors (Talar-e Ayeneh) reflecting royal regalia',
      'Shams-ol-Emareh (Sun Building), once the tallest skyscraper of Tehran',
      'The Marble Throne (Takht-e Marmar) carved from 65 pieces of Yazd marble'
    ],
    highlightsFa: [
      'تالار آینه با انعکاس خیره‌کننده نور و شاهکار نقاشی کمال‌الملک',
      'عمارت شمس‌العماره با پنج طبقه و ساعت اهدایی ملکه ویکتوریا',
      'تخت مرمر زرین ساخته‌شده از ۶۵ قطعه مرمر نفیس یزد'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?auto=format&fit=crop&w=800&q=80'
  }
];

export const CULTURAL_ARTIFACTS: CulturalArtifact[] = [
  {
    id: 'cyrus-cylinder',
    titleEn: 'The Cyrus Cylinder',
    titleFa: 'استوانه منشور حقوق بشر کوروش بزرگ',
    categoryEn: 'Charter of Human Rights & Law',
    categoryFa: 'منشور حقوق بشر و کشورداری',
    eraEn: 'Achaemenid Empire (539 BCE)',
    eraFa: 'شاهنشاهی هخامنشی (۵۳۹ ق.م)',
    currentHoldingEn: 'British Museum, London (Replica at UN HQ, New York)',
    currentHoldingFa: 'موزه بریتانیا، لندن (مولاژ در مقر سازمان ملل، نیویورک)',
    descriptionEn: 'A barrel-shaped clay cylinder inscribed in Babylonian cuneiform script. Issued after Cyrus peacefully entered Babylon, it decrees freedom of religion, restoration of destroyed temples, and abolishes slavery and deportation.',
    descriptionFa: 'استوانه‌ای از گل پخته منقوش به خط میخی بابلی که پس از ورود مسالمت‌آمیز کوروش به بابل نگاشته شد و آزادی عبادت، بازگشت اسیران و منع اجبار و ستم را رسماً اعلام داشت.',
    significanceEn: 'Recognized internationally as the world’s first declaration of human rights, inspiring principles codified in the modern UN Charter.',
    significanceFa: 'نخستین اعلامیه مکتوب حقوق بشر در تاریخ که به دستور کوروش بدون خشونت و بر پایه احترام به کرامت همه ملل صادر شد.',
    quoteEn: 'I gathered all their inhabitants and returned to them their dwellings... When I entered Babylon as a friend, I established the seat of government in the palace amid jubilation and rejoicing.',
    quoteFa: 'مردم را جمع‌آوری کردم و خانه‌هایشان را به آنان بازگرداندم... من صلح و آرامش را به بابل و همه شهرهایش هدیه دادم.'
  },
  {
    id: 'shahnameh-epic',
    titleEn: 'The Shahnameh of Shah Tahmasp',
    titleFa: 'شاهنامه شاه‌طهماسبی (اوج مکتب نگارگری)',
    categoryEn: 'Epic Poetry & Illuminated Manuscripts',
    categoryFa: 'حماسه ملی و شاهکار نگارگری',
    eraEn: 'Safavid Dynasty (1522–1540 CE)',
    eraFa: 'شاهنشاهی صفویه (سده ۱۶ م)',
    currentHoldingEn: 'Tehran Museum of Contemporary Art & Metropolitan Museum, NY',
    currentHoldingFa: 'موزه هنرهای معاصر تهران و موزه متروپولیتن نیویورک',
    descriptionEn: 'The most opulent illustrated manuscript of Ferdowsi’s epic ever created, containing 258 miniature paintings executed by master artists including Sultan Muhammad and Mir Sayyid Ali over two decades.',
    descriptionFa: 'نفیس‌ترین نسخه دست‌نویس مصور شاهنامه در تاریخ با ۲۵۸ مینیاتور ظریف که در طول ۲۰ سال به سرپرستی سلطان محمد و هنرمندان نامدار مکتب تبریز خلق شد.',
    significanceEn: 'Regarded as the pinnacle of Persian book illustration, blending poetic majesty with microscopic brushwork, gold leaf, and ground lapis lazuli pigment.',
    significanceFa: 'اوج هنر کتاب‌آرایی، تذهیب زرین و نگارگری جهان که شاهکارهای آن پیوند اسطوره، تاریخ و ذوق ایرانی را نشان می‌دهد.'
  },
  {
    id: 'darya-i-noor',
    titleEn: 'The Darya-i-Noor Diamond',
    titleFa: 'الماس نامدار «دریای نور»',
    categoryEn: 'Crown Jewels & Regalia',
    categoryFa: 'جواهرات ملی و نماد حاکمیت',
    eraEn: 'Afsharid to Qajar (182 Carats)',
    eraFa: 'افشاریه و قاجاریه (۱۸۲ قیراط)',
    currentHoldingEn: 'National Jewels Treasury, Central Bank of Iran, Tehran',
    currentHoldingFa: 'خزانه جواهرات ملی، بانک مرکزی ایران، تهران',
    descriptionEn: 'One of the largest cut diamonds in the world (weighing approximately 182 carats) and the largest pink diamond known to humankind, celebrated for its flawless pale rose brilliance.',
    descriptionFa: 'بزرگ‌ترین الماس صورتی‌رنگ جهان به وزن حدود ۱۸۲ قیراط که در ظرافت تراش و درخشش رنگی بی‌همتاست و نماد اقتدار و گنجینه تاریخی ایران به شمار می‌رود.',
    significanceEn: 'A sister stone to the Koh-i-Noor, it bears inscriptions of Qajar monarchs and remains an irreplaceable symbol of Iran’s historic gemological heritage.',
    significanceFa: 'الماس نادری که نادرشاه آن را به ایران آورد و بعدها فتحعلی‌شاه نام خود را بر یکی از وجوه آن حک کرد؛ سالم‌ترین گوهر تاریخی جهان.'
  },
  {
    id: 'persian-carpet',
    titleEn: 'The Ardabil Carpet',
    titleFa: 'قالی تاریخی شاهکار اردبیل',
    categoryEn: 'Textile Masterpiece & Sacred Geometry',
    categoryFa: 'هنر قالیبافی و هندسه قدسی',
    eraEn: 'Safavid Dynasty (1539 CE)',
    eraFa: 'شاهنشاهی صفویه (۹۱۸ خورشیدی)',
    currentHoldingEn: 'Victoria and Albert Museum, London',
    currentHoldingFa: 'موزه ویکتوریا و آلبرت لندن (جفت دیگر در لس‌آنجلس)',
    descriptionEn: 'Measuring 10.5 meters by 5.3 meters with over 26 million hand-tied knots. Created by Maqsud of Kashan for the Sheikh Safi shrine in Ardabil, it depicts a cosmic golden sunburst floating on an indigo pond of floral vines.',
    descriptionFa: 'قالی باشکوه ابریشمی با بیش از ۲۶ میلیون گره ریز که توسط مقصود کاشانی برای آرامگاه شیخ صفی‌الدین اردبیلی بافته شد و شمسه‌ای زرین چون خورشید آسمان را بر اقیانوسی لاجوردی مجسم می‌کند.',
    significanceEn: 'Recognized globally as the finest and most intricate historic textile ever woven by human hands.',
    significanceFa: 'والاترین دستاورد هنر فرشبافی تاریخ بشر با کتیبه شعری از حافظ: «جز آستان توام در جهان پناهی نیست / سر مرا به جز این در حواله‌گاهی نیست».',
    quoteEn: 'I have no refuge in the world other than thy threshold; my head has no shelter other than this doorway.',
    quoteFa: 'جز آستان توام در جهان پناهی نیست / سر مرا به جز این در حواله‌گاهی نیست'
  },
  {
    id: 'golden-rhyton',
    titleEn: 'The Winged Golden Rhyton of Hamedan',
    titleFa: 'ریتون زرین بالدار هگمتانه (تکوک زرین)',
    categoryEn: 'Imperial Metallurgy & Goldsmithing',
    categoryFa: 'فلزکاری و زرگری شاهنشاهی',
    eraEn: 'Achaemenid Empire (5th Century BCE)',
    eraFa: 'شاهنشاهی هخامنشی (سده ۵ ق.م)',
    currentHoldingEn: 'National Museum of Iran, Tehran',
    currentHoldingFa: 'موزه ملی ایران، تهران',
    descriptionEn: 'A drinking vessel fashioned entirely of pure 24-karat gold, depicting a roaring winged lion with feathers rendered in microscopic filigree, discovered at historic Ecbatana.',
    descriptionFa: 'ظرف آیینی باده‌خوری از طلای ناب ۲۴ عیار به شکل شیر بالدار غران با بال‌های پردار و شیارهای بسیار ظریف که در تپه هگمتانه همدان کشف شد.',
    significanceEn: 'Exemplifies the unmatched goldsmithing skill of Achaemenid royal metalworkers, fusing zoomorphic power with divine celestial wings.',
    significanceFa: 'اوج نبوغ زرگران هخامنشی در خلق آثار اساطیری که در موزه ملی ایران چشم هر بیننده‌ای را خیره می‌سازد.'
  },
  {
    id: 'jalali-calendar',
    titleEn: 'The Jalali Solar Astrolabe & Calendar Codex',
    titleFa: 'اسطرلاب برنجی و زیج گاه‌شماری جلالی',
    categoryEn: 'Astrophysics & Mathematical Instruments',
    categoryFa: 'ستاره‌شناسی و ابزار دقیق نجوم',
    eraEn: 'Seljuk Era (1079 CE)',
    eraFa: 'سلجوقیان (۱۰۷۹ م / ۴۵۸ خورشیدی)',
    currentHoldingEn: 'Museum of Islamic Art & Astrolabe Collections, Florence',
    currentHoldingFa: 'موزه علم فلورانس و موزه هنر اسلامی',
    descriptionEn: 'An intricate brass astronomical astrolabe calibrated for the coordinates of Isfahan, Rey, and Nishapur, used by Khayyam’s observatory team to determine the vernal equinox with split-second fidelity.',
    descriptionFa: 'اسطرلاب برنجی مسطور با صور فلکی برای رصد لحظه دقیق تحویل سال نو (نوروز) و اعتدال بهاری در رصدخانه‌های نیشابور و اصفهان.',
    significanceEn: 'Enabled the formulation of the most mathematically precise solar calendar in human history, measuring the year to within seconds of atomic precision.',
    significanceFa: 'پشتوانه محاسباتی دقیق‌ترین تقویم خورشیدی بشر که عید نوروز را در آغاز اعتدال بهاری جشن می‌گیرد.'
  }
];
