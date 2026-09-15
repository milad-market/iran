export interface CharterClause {
  id: number;
  lines: string;
  linesFa: string;
  themeTitleEn: string;
  themeTitleFa: string;
  summaryEn: string;
  summaryFa: string;
  cuneiformBabylonian: string;
  akkadianTransliteration: string;
  persianText: string;
  englishText: string;
  historicalAnalysisFa: string;
  historicalAnalysisEn: string;
  corePrincipleFa: string;
  corePrincipleEn: string;
  keywords: string[];
}

export interface CharterArticle {
  id: string;
  titleFa: string;
  titleEn: string;
  authorFa: string;
  authorEn: string;
  readTimeFa: string;
  readTimeEn: string;
  categoryFa: string;
  categoryEn: string;
  contentFa: string[];
  contentEn: string[];
}

export const CYRUS_CHARTER_CLAUSES: CharterClause[] = [
  {
    id: 1,
    lines: 'Lines 1 – 11',
    linesFa: 'سطور ۱ تا ۱۱',
    themeTitleEn: 'Imperial Lineage & The Tyranny of Nabonidus',
    themeTitleFa: 'تبارنامه شاهنشاهی و پایان ستمگری نابونید',
    summaryEn: 'Introduction to Babylon’s grievances under King Nabonidus, who suppressed traditions and neglected sanctuaries.',
    summaryFa: 'شرح وضعیت نابسامان بابل در دوره نابونید، تعطیلی نیایشگاه‌ها و دعای مردم برای دادگری و نجات.',
    cuneiformBabylonian: '𒀭 𒀫𒌓 𒃲 𒀭 𒂗 𒆤 𒈨 𒋼 𒂗 𒍣 𒅎 𒋾 𒅀',
    akkadianTransliteration: '... ša Nabonāʾid šar Babili ... parṣēšina ušabbil ... ilāni ušēṣi...',
    persianText: '«...آن‌گاه که نبونید پادشاه بابل بر مردم ستم روا داشت و آیین‌های کهن را برانداخت، مردمان بابل در رنج و اندوه بودند. نیایشگاه‌ها خالی از رونق گشته بود و مردم هر روزه از خدایان خویش استمداد می‌کردند تا دادگری بر آنان سایه‌افکن شود...»',
    englishText: '"...When Nabonidus the King of Babylon imposed harsh burdens and discontinued customary rituals, the citizens cried out in anguish. Daily rites were neglected and people prayed for an enlightened sovereign to restore justice..."',
    historicalAnalysisFa: 'این بخش بیانگر شرایط اجتماعی و بحران مشروعیت حکومت بابل پیش از ورود ارتش کوروش است؛ کوروش ورود خود را نه یک تهاجم ویرانگر، بلکه پاسخی دادخواهانه به رنج مردمان رنج‌دیده تعریف می‌کند.',
    historicalAnalysisEn: 'Sets the political context: Cyrus frames his campaign not as an aggressive conquest, but as a liberation responding to the oppression of Babylonian subjects.',
    corePrincipleFa: 'مشروعیت قدرت مبتنی بر رضایت و دادگستری برای شهروندان',
    corePrincipleEn: 'Legitimacy rooted in justice and civilian protection',
    keywords: ['بابل', 'نابونید', 'دادگری', 'آغاز منشور'],
  },
  {
    id: 2,
    lines: 'Lines 12 – 19',
    linesFa: 'سطور ۱۲ تا ۱۹',
    themeTitleEn: 'Calling of Cyrus & Bloodless Entry into Babylon',
    themeTitleFa: 'فراخوان کوروش و ورود پیروزمندانه بدون جنگ و خونریزی',
    summaryEn: 'Cyrus marches toward Babylon; the city gates open and he enters peacefully without violence or plunder.',
    summaryFa: 'سپاه کوروش بزرگ بدون شمشیر و خونریزی وارد کهن‌شهر بابل شد و مردم با شاخه‌های زیتون و شادمانی از او استقبال کردند.',
    cuneiformBabylonian: '𒆍𒀭𒊏𒆠 𒁀 𒀭 𒊏 𒆠 𒈗 𒆳 𒀸𒋩 𒂍 𒆳 𒊏',
    akkadianTransliteration: 'ana ālišu Bābili illika... balu ṣaltu u qabli ušēšibšu qerebšu...',
    persianText: '«...من چون با آرامش و صلح به بابل درآمدم، در میان هلهله شادمانی مردمان در کاخ شهریاری بر تخت نشستم. ارتش بزرگ من به نرمی و بی‌آزار در بابل گام برداشت. من نگذاشتم در سراسر سرزمین‌های سومر و اکد هیچ‌کس هراس در دل راه دهد...»',
    englishText: '"...When I entered Babylon in peace, amidst joyful acclamation I took up residence in the royal palace. My widespread armies moved throughout Babylon unharmed and without causing fear in any citizen of Sumer and Akkad..."',
    historicalAnalysisFa: 'یکی از برجسته‌ترین تمایزهای کوروش با سایر فاتحان تاریخ؛ به جای سوزاندن و غارت شهر، ورود بدون نبرد و منع سربازان از هرگونه تعدی به نوامیس و اموال مردم صادر شد.',
    historicalAnalysisEn: 'Contrast with ancient Assyrian and Roman conquests: explicit royal prohibition of looting, terror, or retaliation against defeated populations.',
    corePrincipleFa: 'نفی خشونت نظامی و رفتار کرامت‌آمیز با ساکنان شهرهای فتح‌شده',
    corePrincipleEn: 'Absolute prohibition of military sack, slaughter, or plunder',
    keywords: ['ورود بدون جنگ', 'صلح بابل', 'سپاه بی‌آزار', 'آرامش'],
  },
  {
    id: 3,
    lines: 'Lines 20 – 22',
    linesFa: 'سطور ۲۰ تا ۲۲',
    themeTitleEn: 'Royal Titles, Dynasty of Anshan & Fatherhood',
    themeTitleFa: 'معرفی تبار، نیاکان و شاهنشاه انشان و گیتی',
    summaryEn: 'Declaration of Cyrus’s ancestral descent from Teispes, Cambyses I, and the royal line of Anshan.',
    summaryFa: 'معرفی رسمی نام و تبار کوروش: فرزند کمبوجیه، نوه کوروش اول، و از دودمان جاودان چیش‌پیش و شهریاران انشان.',
    cuneiformBabylonian: '𒁹𒆪𒊏𒀾 𒈗 𒃲 𒈗 𒁕 𒈝 𒈗 𒆍𒀭𒊏𒆠',
    akkadianTransliteration: 'anāku Kuraš šar kiššati šarru rabû šarru dannu šar Bābili šar māt Šumeri u Akkadi...',
    persianText: '«منم کوروش، شاه جهان، شاه بزرگ، شاه نیرومند، شاه بابل، شاه سومر و اکد، شاه چهارگوشه گیتی؛ فرزند کمبوجیه شاه بزرگ انشان، نوه کوروش شاه بزرگ انشان، نبیره چیش‌پیش شاه بزرگ انشان، از تباری کهن و شاهنشاهی پایدار...»',
    englishText: '"I am Cyrus, King of the World, Great King, Mighty King, King of Babylon, King of Sumer and Akkad, King of the Four Quarters of the Earth; son of Cambyses, grandson of Cyrus, descendant of Teispes, of eternal royal lineage..."',
    historicalAnalysisFa: 'این سطر سرشناس‌ترین سطر کتیبه است که بر تمام آثار یادبودی و مقبره پاسارگاد نیز بازتاب یافته است. کوروش مفهوم «شاه چهارگوشه گیتی» را با مسئولیت اخلاقی پیوند می‌دهد.',
    historicalAnalysisEn: 'The famous proclamation unifying universality with ancestral continuity, bridging Persian high plateau origins with Mesopotamian royal vocabulary.',
    corePrincipleFa: 'حکمرانی فراگیر جهانی با اتکا به تبار راستین و تعهد به عدالت',
    corePrincipleEn: 'Universal governance anchored in moral legitimacy',
    keywords: ['منم کوروش', 'شاه جهان', 'چهارگوشه گیتی', 'کمبوجیه'],
  },
  {
    id: 4,
    lines: 'Lines 23 – 28',
    linesFa: 'سطور ۲۳ تا ۲۸',
    themeTitleEn: 'Abolition of Slavery & Relief from Forced Labor',
    themeTitleFa: 'الغای برده‌داری، لغو بیگاری و آزادی طبقات فرودست',
    summaryEn: 'Cyrus relieves the burden of servitude, dismantles forced unpaid labor, and repairs degraded homes.',
    summaryFa: 'فرمان کوروش بزرگ برای پایان دادن به کار اجباری (بیگاری)، برچیدن زنجیرهای بردگی و اعطای حق آزادی کار و زندگی آبرومندانه.',
    cuneiformBabylonian: '𒈨 𒋼 𒂗 𒍣 𒅎 𒋾 𒅀 𒊏 𒄠 𒋙 𒂍 𒆳 𒊏',
    akkadianTransliteration: 'dalhātešina upašših... nīršina ušapṭir... bītātšina ušēpiš...',
    persianText: '«...من برای صلح و آسایش بابل کوشیدم. به بدبختی‌ها و بیچارگی‌های مردم پایان دادم؛ یوغ بیگاری و کار طاقت‌فرسا و خفت‌بار را از گردن آنان برداشتم. خانه‌های فروریخته و ویران‌شده‌شان را بازسازی کردم و نگذاشتم رنج و خواری بیش از این بر جان آنان نشیند...»',
    englishText: '"...I sought the welfare of the city of Babylon. As for the citizens, upon whom Nabonidus had imposed a yoke neither suited nor deserved, I relieved their weariness and freed them from their servitude..."',
    historicalAnalysisFa: 'این بند شالوده بنیادین تلقی استوانه به عنوان «نخستین منشور حقوق بشر» است. لغو بیگاری ساختمانی و کشاورزی و حق مسکن امن، ۲۵۰۰ سال پیش از اعلامیه جهانی حقوق بشر در این متن تثبیت شده است.',
    historicalAnalysisEn: 'The textual core of the human rights designation: explicit abolition of coercive feudal servitude and restoration of individual dignity and housing.',
    corePrincipleFa: 'کرامت انسانی، حق آزادی از بیگاری و منع بهره‌کشی ظالمانه',
    corePrincipleEn: 'Human dignity, freedom from forced servitude and arbitrary labor',
    keywords: ['الغای برده‌داری', 'لغو بیگاری', 'آزادی کار', 'کرامت انسان'],
  },
  {
    id: 5,
    lines: 'Lines 29 – 34',
    linesFa: 'سطور ۲۹ تا ۳۴',
    themeTitleEn: 'Freedom of Worship & Restoration of Sanctuaries',
    themeTitleFa: 'آزادی دین و مذهب و بازسازی پرستشگاه‌های ملل',
    summaryEn: 'Restoration of confiscated sacred relics and ancient shrines across Mesopotamia, Elam, and Media.',
    summaryFa: 'کوروش تندیس‌ها و نشانه‌های مقدس ملل مختلف را که به اسارت برده شده بودند به معابد اصلی‌شان در آشور، شوش، اوروک و بین‌النهرین بازگرداند.',
    cuneiformBabylonian: '𒀭 𒂍 𒆳 𒊏 𒀭 𒀫𒌓 𒃲 𒀭 𒂗 𒆤 𒆠',
    akkadianTransliteration: 'ilāni ša qerebšina ana ašrišunu utēr... ušēšib parakkī dārûti...',
    persianText: '«...از نینوا، شوش، آشور، اشنونا، زامبان، دیر، تا سرزمین‌های گوتیان در کوهستان‌ها، تمامی تندیس‌های خدایان را که به غنیمت برده شده بودند به جایگاه‌های ابدی و مقدس خود بازگرداندم و برای آنان نیایشگاه‌های جاودانی برپا داشتم...»',
    englishText: '"...From Nineveh, Susa, Ashur, Eshnunna, Zamban, and as far as the land of the Guti, I returned to their sacred cities the divine sanctuaries that had long been confiscated, and established for them eternal dwellings..."',
    historicalAnalysisFa: 'برخلاف فاتحان آن دوران که تندیس خدایان مغلوب را برای تحقیر مردم نابود می‌کردند، کوروش با مدارا و احترامی بی‌نظیر به تمام آیین‌ها اجازه داد در پناه حمایت امپراتوری آیین‌های خود را به جای آورند.',
    historicalAnalysisEn: 'Radical break with ancient Near Eastern practice: instead of burning temples, Cyrus funded their restoration and preserved local religious identities.',
    corePrincipleFa: 'رواداری مذهبی، مصونیت اماکن مقدس و احترام به تنوع عقاید',
    corePrincipleEn: 'Religious tolerance and absolute sanctity of worship places',
    keywords: ['آزادی مذهب', 'نیایشگاه‌ها', 'شوش و نینوا', 'مدارا'],
  },
  {
    id: 6,
    lines: 'Lines 35 – 37',
    linesFa: 'سطور ۳۵ تا ۳۷',
    themeTitleEn: 'Repatriation of Displaced Peoples & Captives',
    themeTitleFa: 'بازگرداندن آوارگان و اسیران به سرزمین‌های مادری (آزادی قوم یهود)',
    summaryEn: 'Cyrus gathers all exiled peoples, restores them to their native homelands, and provides resources to rebuild their cities.',
    summaryFa: 'کوروش فرمان آزادی تمامی اقوام به بند کشیده شده از جمله یهودیان بابل را صادر کرد و بودجه بازسازی اورشلیم را از خزانه شاهی تامین نمود.',
    cuneiformBabylonian: '𒌦 𒈨𒌍 𒉌 𒋛 𒂊 𒋾 𒌒 𒁍 𒄴 𒋾 𒁍 𒄯 𒈠',
    akkadianTransliteration: 'kullat nišīšunu upahhirma ana ašrīšunu utēr...',
    persianText: '«...من تمام مردمان آواره و تبعیدی را که در اسارت بودند گرد هم آوردم و آنان را به خانه‌ها و شهرهای بومی‌شان بازگرداندم تا در آرامش و امنیت زندگی کنند...»',
    englishText: '"...I gathered all their dispersed inhabitants and returned them to their homelands. I encouraged them to live in peace and rebuild their communities without harassment..."',
    historicalAnalysisFa: 'این همان واقعه مشهور تاریخی است که در عهد عتیق تورات (کتاب عزرا، فصل ۱) ستایش شده و به پایان «اسارت بابلی» یهودیان انجامید. کوروش تنها پادشاه غیر یهودی است که در تورات با لقب "مسیح خداوند" (برگزیده دادگستر) یاد شده است.',
    historicalAnalysisEn: 'Directly corroborated by Biblical scriptures (Book of Ezra 1:1-4): marks the end of the Babylonian Captivity of the Jewish people and the rebuilding of Jerusalem.',
    corePrincipleFa: 'حق بازگشت آوارگان به سرزمین مادری و امنیت پناهندگان',
    corePrincipleEn: 'Universal right of displaced populations to return and reclaim ancestral heritage',
    keywords: ['بازگشت اسیران', 'آزادی یهودیان', 'کتاب عزرا', 'پایان تبعید'],
  },
  {
    id: 7,
    lines: 'Lines 38 – 45',
    linesFa: 'سطور ۳۸ تا ۴۵',
    themeTitleEn: 'Daily Prayers for Peace & Fortification of Babylon',
    themeTitleFa: 'دعای جاودانی صلح، مرمت باروهای دفاعی و تداوم دادگری',
    summaryEn: 'Restoration of Babylon’s defensive moat and walls; peaceful benedictions for imperial longevity.',
    summaryFa: 'فرمان مرمت خندق‌ها و باروی بزرگ بابل و دعای صلح پایدار برای ساکنان جهان و فرزندان کوروش.',
    cuneiformBabylonian: '𒁕 𒀭 𒉡 𒌅 𒆍𒀭𒊏𒆠 𒄿 𒈾 𒈨 𒋾 𒅀',
    akkadianTransliteration: 'ina šalmāti u tubbāti... dūru rabû ša Bābili udannin... balāṭī lirik...',
    persianText: '«...من دیوار بزرگ دفاعی بابل و باروی کهن آن را که رو به ویرانی بود از نو استوار ساختم. دروازه‌های سترگ از چوب سرو و مس برپا داشتم. باشد که همگان در امنیتی پایدار روزگار گذرانند و دادگری جاودانه بماند...»',
    englishText: '"...I strengthened and completed the great defense wall of Babylon, which had fallen into ruin, and set up grand gates of cedar and bronze. May all beings dwell in perpetual peace under the banner of justice..."',
    historicalAnalysisFa: 'پایان‌بخش منشور، تاکیدی بر حفظ زیرساخت‌های مدنی و دفاعی است. کوروش به جای غنیمت‌گیری، درآمد فتح را صرف مرمت سازه‌های عمرانی و دیوارهای امنیتی شهروندان کرد.',
    historicalAnalysisEn: 'Concludes with civic infrastructure investment and civic defense restoration, establishing enduring governance through service.',
    corePrincipleFa: 'امنیت عمومی پایدار، مسئولیت عمران شهری و حفظ نوامیس جامعه',
    corePrincipleEn: 'Civic safety, public infrastructure protection, and peaceful continuity',
    keywords: ['دیوار دفاعی بابل', 'صلح پایدار', 'امنیت شهروندی', 'پایان منشور'],
  },
];

export const CYRUS_ARTICLES: CharterArticle[] = [
  {
    id: 'archeology_discovery',
    titleFa: 'ماجرای کشف هیجان‌انگیز منشور در بابل (۱۸۷۹ میلادی)',
    titleEn: 'The Archeological Discovery of the Cylinder (1879 CE)',
    authorFa: 'دکتر هرمزد رسام و باستان‌شناسان موزه بریتانیا',
    authorEn: 'Dr. Hormuzd Rassam & British Museum Expedition',
    readTimeFa: '۵ دقیقه مطالعه',
    readTimeEn: '5 min read',
    categoryFa: 'تاریخ و باستان‌شناسی',
    categoryEn: 'History & Archeology',
    contentFa: [
      'در مارس ۱۸۷۹ میلادی (۱۲۵۷ خورشیدی)، هرمزد رسام، باستان‌شناس نامدار آشوری‌تبار بریتانیایی، در کاوش‌های محوطه کهن اساگیل (معبد مردوک در بابل باستان، واقع در عراق امروزی) به قطعه سفالینه‌ای استوانه‌ای برخورد که زیر پایه‌های معبد کار گذاشته شده بود.',
      'این استوانه از خاک رس مرغوب ساخته شده و طول آن ۲۲٫۸ سانتی‌متر و قطر آن ۱۰ سانتی‌متر است. متن روی آن در ۴۵ سطر با خط میخی بابلی نو (اکدی) با ظرافت و فشردگی فوق‌العاده‌ای حکاکی شده است.',
      'پس از انتقال به موزه بریتانیا، سر هنری راولینسون، دانشمند برجسته خطوط باستانی، نخستین ترجمه و بازخوانی کتیبه را انجام داد و جهان با سندی شگفت‌انگیز مواجه شد که در آن یک فاتح بزرگ، نه از قتل‌عام و نابودی، بلکه از صلح، آزادی و رواداری سخن می‌گفت.',
      'در سال ۱۹۷۱ میلادی، به مناسبت جشن‌های ۲۵۰۰ ساله، نسخه بدلی از این منشور توسط اشرف پهلوی به سازمان ملل متحد در نیویورک اهدا شد و او تانت، دبیرکل وقت سازمان ملل، آن را «نخستین بیانیه حقوق بشر در تاریخ بشر» خواند.'
    ],
    contentEn: [
      'In March 1879, Hormuzd Rassam, an accomplished Assyrian-British archaeologist, discovered the cylindrical clay tablet buried beneath the foundation deposits of Esagila, the ancient temple of Marduk in Babylon.',
      'Crafted from baked clay, the barrel-shaped cylinder measures 22.8 cm in length and 10 cm in diameter, containing 45 densely inscribed lines of Late Babylonian cuneiform text.',
      'Upon its arrival at the British Museum, Sir Henry Rawlinson produced the first scholarly translation, revealing a revolutionary text of peace, religious freedom, and civil tolerance instead of the typical ancient chronicles of slaughter.',
      'In 1971, a replica was presented to the United Nations headquarters in New York, where UN Secretary-General U Thant hailed it as an ancient declaration of human rights.'
    ],
  },
  {
    id: 'philosophical_impact',
    titleFa: 'تاثیر منشور کوروش بر فیلسوفان غرب و بنیان‌گذاران آمریکا',
    titleEn: 'Impact on Western Enlightenment & US Founding Fathers',
    authorFa: 'پژوهشگاه مطالعات تطبیقی تمدن‌ها',
    authorEn: 'Institute for Comparative Civilization Studies',
    readTimeFa: '۶ دقیقه مطالعه',
    readTimeEn: '6 min read',
    categoryFa: 'فلسفه و حقوق بین‌الملل',
    categoryEn: 'Philosophy & International Law',
    contentFa: [
      'اندیشه‌های دادگسترانه کوروش بزرگ از طریق کتاب «کوروش‌نامه» (Cyropaedia) نوشته گزنفون، مورخ و فیلسوف یونانی، در سراسر دنیای باستان و اروپای عصر رنسانس انتشار یافت.',
      'توماس جفرسون، نویسنده اعلامیه استقلال آمریکا و سومین رئیس‌جمهور این کشور، دو نسخه از کوروش‌نامه گزنفون را همواره در کتابخانه شخصی خود داشت و بخش‌های مربوط به آزادی مذهب و رفتار با اقلیت‌ها را با دقت علامت‌گذاری کرده بود.',
      'ماکیاولی در کتاب «شهریار» کوروش را به عنوان رهبری که با فضیلت و عدالت حکومت کرد می‌ستاید و او را الگوی حقیقی شهریاران می‌نامد.',
      'در تدوین متمم اول قانون اساسی ایالات متحده آمریکا (جدایی دین از حکومت و آزادی بیان و عقیده)، حقوقدانان آن عصر صراحتاً به الگوی مدارای کوروش در بابل و شاهنشاهی هخامنشی ارجاع داده‌اند.'
    ],
    contentEn: [
      'The egalitarian principles of Cyrus spread through the classical world via Xenophon’s masterpiece "Cyropaedia" (The Education of Cyrus), widely studied throughout Renaissance Europe.',
      'Thomas Jefferson, primary author of the US Declaration of Independence and third US President, owned two copies of the Cyropaedia, heavily annotated for its insights on religious tolerance and pluralism.',
      'Machiavelli in "The Prince" cites Cyrus repeatedly as the archetypal virtuous prince whose authority rested on wisdom and benevolence rather than pure coercion.',
      'During the drafting of the US First Amendment, foundational thinkers drew direct inspiration from the Achaemenid model of non-interference in local customs and religions.'
    ],
  },
  {
    id: 'biblical_corroboration',
    titleFa: 'کوروش در کتاب مقدس و آزادسازی قوم یهود',
    titleEn: 'Cyrus the Great in Biblical History & Jewish Liberation',
    authorFa: 'دکتر داوود الی یاهو — باستان‌شناسی عهد عتیق',
    authorEn: 'Dr. David Eliyahu — Biblical Archeology',
    readTimeFa: '۴ دقیقه مطالعه',
    readTimeEn: '4 min read',
    categoryFa: 'تاریخ ادیان',
    categoryEn: 'History of Religions',
    contentFa: [
      'در کتاب اشعیا (فصل ۴۵) و کتاب عزرا (فصل ۱ تا ۶) در تورات، کوروش بزرگ با صفت منحصر‌به‌فرد «مسیح خداوند» (Mashiah / برگزیده پروردگار) یاد شده است؛ عنوانی که هرگز به هیچ پادشاه غیر یهودی دیگری در تاریخ داده نشده است.',
      'پس از آنکه بخت‌النصر (نبوکدنصر) پادشاه بابل در سال ۵۸۶ ق.م معبد سلیمان را در اورشلیم به آتش کشید و یهودیان را به اسارت به بابل برد، آنان بیش از ۵۰ سال در غربت و بردگی زیستند.',
      'کوروش با ورود به بابل، نه تنها اسیران یهودی را آزاد ساخت، بلکه ظروف مقدس طلا و نقره به غارت رفته را به آنان بازگرداند و کاروان‌های آنان را با اسکورت نظامی و اعطای چوب سدر و کمک مالی برای تجدید بنای معبد دوم اورشلیم روانه ساخت.',
      'متن استوانه کوروش در بندهای ۳۵ تا ۳۸ دقیقاً همان واقعیتی را تایید می‌کند که متون کتاب مقدس با شگفتی و سپاسگزاری از آن یاد کرده‌اند.'
    ],
    contentEn: [
      'In the Book of Isaiah (45:1) and the Book of Ezra, Cyrus is uniquely called "the Lord’s Anointed" (Messiah), an unprecedented honor for a non-Jewish ruler in Hebrew scriptures.',
      'Following Nebuchadnezzar’s destruction of the First Temple in 586 BCE and the Babylonian Exile, generations had languished in foreign servitude for over five decades.',
      'Upon capturing Babylon, Cyrus freed the captives, returned sacred gold and silver vessels, and sponsored their return to Judea to reconstruct the Second Temple of Jerusalem.',
      'Lines 35–38 of the Cyrus Cylinder provide definitive archeological confirmation of the biblical record regarding the peaceful repatriation of captive populations.'
    ],
  },
];
