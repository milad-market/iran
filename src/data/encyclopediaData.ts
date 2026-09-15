export interface ComprehensiveArticle {
  id: string;
  titleFa: string;
  titleEn: string;
  eraFa: string;
  eraEn: string;
  categoryFa: string;
  categoryEn: string;
  readTimeFa: string;
  readTimeEn: string;
  summaryFa: string;
  summaryEn: string;
  sections: {
    headingFa: string;
    headingEn: string;
    bodyFa: string;
    bodyEn: string;
  }[];
  keyTakeawaysFa: string[];
  keyTakeawaysEn: string[];
}

export const COMPREHENSIVE_ARTICLES: ComprehensiveArticle[] = [
  {
    id: 'immortals-army',
    titleFa: 'سپاه جاویدان هخامنشی: لژیون افسانه‌ای ده هزار نفره شاهنشاهی',
    titleEn: 'The Immortals: The Legendary 10,000 Elite Guards of Persia',
    eraFa: 'شاهنشاهی هخامنشی (۵۵۰ – ۳۳۰ پیش از میلاد)',
    eraEn: 'Achaemenid Empire (550 – 330 BCE)',
    categoryFa: 'نظامی و راهبردی',
    categoryEn: 'Military & Strategy',
    readTimeFa: '۷ دقیقه مطالعه',
    readTimeEn: '7 min read',
    summaryFa: 'بررسی ساختار، آموزش‌های فوق‌سخت، تسلیحات انحصاری و روان‌شناسی نظامی ارتش ده هزار نفری جاویدان که هرگز تعداد آنان کاهش نیافت.',
    summaryEn: 'An in-depth analysis of the elite 10,000 royal guards who were immediately replenished to maintain exact numbers.',
    sections: [
      {
        headingFa: 'راز نام‌گذاری «جاویدان»',
        headingEn: 'The Origin of the "Immortal" Title',
        bodyFa: 'هرودوت مورخ یونانی می‌نویسد: دلیل این نام‌گذاری آن بود که شمار این لشکر همواره دقیقاً ده هزار نفر باقی می‌ماند. هرگاه یکی از سربازان به علت بیماری، نبرد یا پیری جان می‌باخت یا ناتوان می‌شد، فوراً سربازی آزموده و شجاع از پیش تعیین‌شده جایگزین او می‌شد، به گونه‌ای که شمار این واحد نخبه حتی برای یک روز نه ۹۹۹۹ نفر می‌شد و نه ۱۰۰۰۱ نفر.',
        bodyEn: 'Herodotus noted that the unit was strictly kept at exactly 10,000 men. If a soldier died, was wounded or fell ill, another trained warrior took his place immediately, so that the legion appeared never to diminish in strength.',
      },
      {
        headingFa: 'سازماندهی و تسلیحات پیشرفته',
        headingEn: 'Equipment, Armor and Weapons',
        bodyFa: 'سربازان جاویدان مجهز به زره‌های فلزی پولکی زیر قبای حریر بودند. سلاح‌های آنان شامل سپرهای محکم ساخته شده از نی و چرم، نیزه‌های کوتاه با انتهای گرد طلایی یا نقره‌ای (معروف به انارداران)، تیر و کمان مرغوب و شمشیر خنجری کوتاه (آکیناکس) بود.',
        bodyEn: 'Equipped with scale iron armor beneath rich woven tunics, wicker shields, short spears counterweighted with gold and silver pommels shaped like pomegranates, recurve bows, and short iron akinakes blades.',
      },
      {
        headingFa: 'تاکتیک‌های رزمی و اخلاق سپاهی',
        headingEn: 'Combat Tactics and Royal Ethos',
        bodyFa: 'علاوه بر مهارت بی‌نظیر در تیراندازی هم‌زمان، سپاه جاویدان با نظم آهنینی آموزش می‌دید که سوگند شرافت، راستی و وفاداری به شاهنشاه و پاسداری از سرزمین پارس را برترین ارزش انسانی می‌دانست.',
        bodyEn: 'Trained to fire synchronized volleys of arrows while holding unyielding defensive phalanxes, bound by sacred Zoroastrian oaths to uphold truth and protect the realm.',
      }
    ],
    keyTakeawaysFa: [
      'تعداد همواره ثابت ده هزار رزمنده برگزیده',
      'فرماندهی مستقیم توسط شاهنشاه یا هزارپاتیش (فرمانده ارشد امپراتوری)',
      'تلفیق سلاح سبک چابک با زره پنهان و مهارت چندگانه سواره و پیاده'
    ],
    keyTakeawaysEn: [
      'Constant strength of 10,000 elite warriors',
      'Commanded by the Hazarapatish (Grand Marshal)',
      'Combined rapid archery with armored close combat'
    ]
  },
  {
    id: 'chapar-khaneh-postal',
    titleFa: 'چاپارخانه و راه شاهی: نخستین شبکه پست و مخابرات سریع جهان',
    titleEn: 'The Chapar Khaneh: World’s First Global Express Mail Network',
    eraFa: 'داریوش بزرگ هخامنشی (۵۲۲ – ۴۸۶ پیش از میلاد)',
    eraEn: 'Darius the Great (522 – 486 BCE)',
    categoryFa: 'فناوری و کشورداری',
    categoryEn: 'Technology & Administration',
    readTimeFa: '۶ دقیقه مطالعه',
    readTimeEn: '6 min read',
    summaryFa: 'داریوش بزرگ با احداث راه شاهی به طول ۲۷۰۰ کیلومتر و ایستگاه‌های چاپارخانه با اسب‌های تازه، پیام‌ها را ظرف ۷ روز در سراسر خاورمیانه جابه‌جا می‌کرد.',
    summaryEn: 'Darius I created the Royal Road spanning 2,700 km with relay stations, delivering messages across the empire in just seven days.',
    sections: [
      {
        headingFa: 'راه شاهی از شوش تا سارد',
        headingEn: 'The Royal Road from Susa to Sardis',
        bodyFa: 'داریوش بزرگ برای مدیریت قلمروی پهناور که از هند تا مصر و دریای اژه امتداد داشت، شاهراه سنگ‌فرش شاهی را ساخت. این مسیر دارای ۱۱۱ ایستگاه چاپارخانه مجهز با اسب‌های تازه‌نفس، مهمان‌سراهای امن و نگهبانان دائمی بود.',
        bodyEn: 'To govern a territory from the Indus Valley to the Danube and Nile, Darius built a paved 2,700-kilometer highway with 111 royal post stations featuring fresh relay horses and armed garrisons.',
      },
      {
        headingFa: 'سرعت خارق‌العاده مخابره اطلاعات',
        headingEn: 'Unrivaled Speed of Delivery',
        bodyFa: 'مسافتی که کاروان‌های تجاری عادی ظرف ۹۰ روز طی می‌کردند، سواران چاپار شاهی با تعویض پیاپی اسب در هر ایستگاه ظرف تنها ۷ روز می‌پیمودند. هرودوت درباره سواران چاپار جمله معروفی دارد که امروزه بر سردر اداره پست نیویورک حک شده است: «نه برف، نه باران، نه گرما و نه تاریکی شب، این پیک‌ها را از انجام ماموریت سریعشان باز نمی‌دارد.»',
        bodyEn: 'Distances that took normal merchant caravans 90 days were covered in 7 days by fresh courier relays. Herodotus wrote the motto adopted by the New York Post Office: "Neither snow nor rain nor heat nor gloom of night stays these couriers from the swift completion of their appointed rounds."',
      }
    ],
    keyTakeawaysFa: [
      'احداث شاهراه ۲۷۰۰ کیلومتری سنگ‌فرش با امنیت کامل',
      'کاهش زمان سفر از ۳ ماه به ۷ روز از طریق رله اسب و سوار',
      'الهام‌بخش نظام‌های پست مدرن در سراسر تمدن بشری'
    ],
    keyTakeawaysEn: [
      '2,700 km paved highway system',
      'Transit time reduced from 90 days to 7 days',
      'Foundational blueprint for modern global postal networks'
    ]
  },
  {
    id: 'qanat-engineering',
    titleFa: 'کاریز (قنات) و پردیس ایرانی: شاهکار مهندسی آب در کویر',
    titleEn: 'The Qanat & Persian Paradise Garden: Ancient Hydraulic Engineering',
    eraFa: 'تمدن کهن ایران و ثبت میراث جهانی یونسکو',
    eraEn: 'Ancient Persian Innovations & UNESCO World Heritage',
    categoryFa: 'معماری و محیط‌زیست',
    categoryEn: 'Architecture & Environmental Science',
    readTimeFa: '۸ دقیقه مطالعه',
    readTimeEn: '8 min read',
    summaryFa: 'ابداع کاریز بیش از ۳۰۰۰ سال پیش توسط مهندسان ایرانی، قنات را به شریان حیاتی زیست در فلات خشک تبدیل کرد و الگوی چهارباغ و پردیس را در معماری جهان پدید آورد.',
    summaryEn: 'Over 3,000 years ago, Persian engineers developed gravity-fed subterranean aqueducts that enabled life in arid landscapes and birthed the Paradise Garden.',
    sections: [
      {
        headingFa: 'معماری زیرزمینی بدون پمپ و انرژی مکانیکی',
        headingEn: 'Subterranean Gravity-Driven Canals',
        bodyFa: 'کاریز با شیب مهندسی‌شده کمتر از ۱ درجه، آب سفره‌های زیرزمینی دامنه کوه‌ها را به وسیله گرانش زمین در کانال‌های زیرزمینی تاریک هدایت می‌کند تا از تبخیر زیر آفتاب سوزان جلوگیری شود. مادرچاه قنات قصبه گناباد با عمق بیش از ۳۰۰ متر، از شگفتی‌های مهندسی باستان جهان است.',
        bodyEn: 'Qanats gently slope underground channels to tap mountain aquifers using pure gravity. The Gonabad Qanat drops over 300 meters deep, representing one of antiquity’s greatest civil engineering achievements.',
      },
      {
        headingFa: 'پیدایش واژه پارادایس (پردیس / بهشت)',
        headingEn: 'Birth of the Word "Paradise"',
        bodyFa: 'واژه بین‌المللی «پارادایس» (Paradise) مستقیماً از واژه اوستایی «پئیری‌دئزا» و پارسی کهن «پردیس» به معنای باغ محصور و خرم گرفته شده است. الگوی چهارباغ پاسارگاد کوروش بزرگ با جوی‌های سنگی، مبنای طراحی باغ‌های ایرانی ثبت جهانی در یونسکو و تاج‌محل هند شد.',
        bodyEn: 'The global word "Paradise" derives from Old Persian "Pairi-daeza", meaning an enclosed walled garden. The geometric Chaharbagh layout pioneered by Cyrus at Pasargadae influenced world architecture from the Alhambra to the Taj Mahal.',
      }
    ],
    keyTakeawaysFa: [
      'انتقال پایدار آب آشامیدنی و کشاورزی در فلات خشک بدون مصرف سوخت',
      'قنات قصبه گناباد با عمق ۳۰۰ متر و طول بیش از ۳۳ کیلومتر',
      'ریشه واژه جهانی بهشت (پارادایس) از باغ‌های هندسی کوروش در پاسارگاد'
    ],
    keyTakeawaysEn: [
      'Zero-emission sustainable water distribution for 3,000 years',
      'The Gonabad mother well plunges 300 meters beneath desert crust',
      'Etymology of Paradise traced directly to Persian walled gardens'
    ]
  },
  {
    id: 'battle-of-carrhae',
    titleFa: 'نبرد حران (کاره): شاهکار تاکتیکی سپهبد سورنا و شکست لژیون روم',
    titleEn: 'The Battle of Carrhae: General Surena’s Masterclass Over Rome',
    eraFa: 'شاهنشاهی اشکانیان (۵۳ پیش از میلاد)',
    eraEn: 'Parthian Empire (53 BCE)',
    categoryFa: 'نبردهای سرنوشت‌ساز',
    categoryEn: 'Decisive Battles',
    readTimeFa: '۶ دقیقه مطالعه',
    readTimeEn: '6 min read',
    summaryFa: 'سپهبد سورنا با ارتشی متشکل از ۹۰۰۰ کماندار سوار و ۱۰۰۰ سوارکار سنگین‌زره (کاتافراکت)، ارتش ۴۳ هزار نفره مارکوس کراسوس ثروتمندترین مرد روم را منهدم کرد.',
    summaryEn: 'Surena’s tactical brilliance annihilated Crassus’s 43,000 legionaries using camel supply trains and the feigned retreat "Parthian Shot".',
    sections: [
      {
        headingFa: 'نبرد عقاب‌های روم با سواره‌نظام پارت',
        headingEn: 'Clash of Rome’s Eagles with the Parthian Host',
        bodyFa: 'مارکوس لیسینیوس کراسوس، کنسول جاه‌طلب روم با ۷ لژیون سنگین راهی تسخیر ایران شد. در دشت‌های حران، ارتش روم با نبوغ جوان ۳۰ ساله پارتی، سپهبد سورنا روبه‌رو شد که با استفاده از هزار شتر حامل میلیون‌ها تیر، جریان آتش بی‌وقفه را برقرار ساخت.',
        bodyEn: 'Marcus Crassus invaded Mesopotamia with seven legions. Near Carrhae, 30-year-old Parthian general Surena countered them with mobile archers supplied by a 1,000-camel baggage train packed with spare arrows.',
      },
      {
        headingFa: 'تیراندازی پارتی و عقب‌نشینی ساختگی',
        headingEn: 'The Parthian Shot and Supply Logistical Mastery',
        bodyFa: 'پارتیان با تظاهر به فرار، سربازان رومی را از صفوف منسجم جدا می‌کردند و ناگهان با چرخاندن بالاتنه بر روی اسب‌های در حال تاخت، رگبار تیرهای کشنده را روانه می‌ساختند. کراسوس و پسرش کشته شدند و درفش‌های عقاب لژیون‌های روم به غنیمت به تیسفون برده شد.',
        bodyEn: 'The Parthians perfected shooting backwards at full gallop during feigned retreats ("Parthian Shot"). Crassus fell, his army was routed, and Roman legionary standards were captured.',
      }
    ],
    keyTakeawaysFa: [
      'پایان افسانه شکست‌ناپذیری لژیون‌های زره‌پوش رومی',
      'اختراع لجستیک ذخیره تیر با کاروان‌های شتر',
      'تثبیت مرز فرات میان دو ابرقدرت باستان اشکانیان و روم'
    ],
    keyTakeawaysEn: [
      'Shattered the myth of Roman legionary invulnerability',
      'First recorded military logistics train using camels for live resupply',
      'Solidified the Euphrates River as the boundary between empires'
    ]
  },
  {
    id: 'golden-age-polymaths',
    titleFa: 'عصر زرین علم و دانشمندان ایرانی: از رازی و ابن سینا تا خیام',
    titleEn: 'The Golden Age of Persian Polymaths: Avicenna, Razi, Khayyam & Biruni',
    eraFa: 'قرون سوم تا ششم هجری (قرون وسطای طلایی)',
    eraEn: 'Islamic Golden Age (9th – 12th Century CE)',
    categoryFa: 'علوم، ریاضیات و فلسفه',
    categoryEn: 'Science, Mathematics & Philosophy',
    readTimeFa: '۹ دقیقه مطالعه',
    readTimeEn: '9 min read',
    summaryFa: 'دانشمندان فلات ایران با نگارش قانون در طب، جبر و مقابله، کشف الکل، ساخت تقویم جلالی و اندازه‌گیری شعاع کره زمین، مشعل علم جهان را برپا داشتند.',
    summaryEn: 'Persian scholars laid the foundations of modern medicine, algebra, chemistry, and astronomical trigonometry.',
    sections: [
      {
        headingFa: 'ابن سینا (پوورسینا) و قانون در طب',
        headingEn: 'Avicenna (Ibn Sina) & The Canon of Medicine',
        bodyFa: 'کتاب «قانون در طب» ابن سینا برای بیش از ۶۰۰ سال مرجع رسمی تدریس در دانشگاه‌های پاریس، بولونیا و آکسفورد بود. او نخستین کسی بود که سرایت‌پذیری بیماری‌ها از طریق آب و هوا و مفهوم قرنطینه را تعریف کرد.',
        bodyEn: 'Avicenna’s "The Canon of Medicine" remained the standard medical textbook in European universities for six centuries, pioneering principles of quarantine and contagious pathology.',
      },
      {
        headingFa: 'خوارزمی و تولد جبر و الگوریتم',
        headingEn: 'Al-Khwarizmi: Father of Algebra & Algorithms',
        bodyFa: 'محمد بن موسی خوارزمی واژه «جبر» (Algebra) را به عنوان شاخه‌ای مستقل از ریاضیات معرفی کرد و نام او ریشه کلمه جهانی «الگوریتم» (Algorithm) در علم رایانه شد.',
        bodyEn: 'Muhammad al-Khwarizmi established Algebra as an independent discipline. His Latinized name gave rise to the term "Algorithm", foundational to modern computing.',
      },
      {
        headingFa: 'خیام، مثلث خیام-پاسکال و تقویم جلالی',
        headingEn: 'Omar Khayyam: The Master of Geometry and Time',
        bodyFa: 'عمر خیام نیشابوری با تدوین تقویم جلالی، دقیق‌ترین گاه‌شماری تاریخ بشر را طراحی کرد که با گذشت هزار سال، تنها ۱ ثانیه در هر ۵۰۰۰ سال خطا دارد.',
        bodyEn: 'Khayyam developed the Jalali solar calendar, scientifically more accurate than the Gregorian calendar with an error of only one second every 5,000 years.',
      }
    ],
    keyTakeawaysFa: [
      'کتاب قانون ابن سینا ستون فقرات آموزش پزشکی اروپا در عصر رنسانس',
      'نام خوارزمی منشا واژه الگوریتم و پایه علوم کامپیوتر',
      'تقویم خورشیدی جلالی خیام دقیق‌ترین نظام سنجش زمان جهان'
    ],
    keyTakeawaysEn: [
      'Avicenna’s Canon was the primary European medical curriculum for 600 years',
      'Al-Khwarizmi’s work birthed Algebra and computer algorithms',
      'Khayyam’s Jalali calendar remains the most precise solar calendar ever engineered'
    ]
  }
];
