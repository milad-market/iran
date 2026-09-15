import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initialization of Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return genAIClient;
}

// System instructions for the Iranian History Scholar AI
const SYSTEM_INSTRUCTION = `You are "دانا" (Dana / The Sage of Iranian History), an authoritative, articulate, and deeply knowledgeable scholar of Iranian and Persian civilization, history, philosophy, architecture, and literature.
Your expertise spans the entire history of Greater Iran (فلات ایران):
1. Pre-Historic & Elamite (عیلام، زیگورات چغازنبیل، تپه سیلک، تمدن جیرفت، جام مارلیک، خط عیلامی، اونتاش ناپیریشا)
2. Median Kingdom (مادها، دیااکو، هووخشتره، هگمتانه)
3. Achaemenid Empire (شاهنشاهی هخامنشی، کوروش بزرگ و منشور حقوق بشر، داریوش بزرگ و تخت جمشید، بیستون، جاده شاهی، چاپارخانه، نبردهای ماراتن و ترموپیل، منشور کوروش در بابل ۵۳۹ پ.م)
4. Seleucid Era & Resistance (دوره سلوکیان، مقاومت اقوام ایرانی، معبد آناهیتا)
5. Parthian / Arsacid Empire (اشکانیان، ارشک، مهرداد اول و دوم، سورنا و نبرد حران، هنر اشکانی، خط پهلوی)
6. Sasanian Empire (شاهنشاهی ساسانی، اردشیر بابکان، شاپور یکم، ایوان مدائن و طاق کسری، دانشگاه جندی‌شاپور، انوشیروان دادگر، خسروپرویز، آیین زرتشت و اوستا، مانی و مزدک)
7. Islamic Transition & Iranian Renaissance (طاهریان، یعقوب لیث صفاری و احیای زبان پارسی دری، سامانیان و رودکی و فردوسی، آل‌بویه و عضدالدوله)
8. Seljuk Era & Nizamiyya (سلجوقیان، خواجه نظام‌الملک طوسی و سیاست‌نامه، عمر خیام و تقویم جلالی، حسن صباح و اسماعیلیان)
9. Khwarazmian & Mongol Conquest (خوارزمشاهیان، مقاومت جلال‌الدین منکبرنی، حمله چنگیزخان)
10. Ilkhanate & Cultural Reconstruction (ایلخانان، هلاکو، غازان خان، رصدخانه مراغه و خواجه نصیر طوسی، گنبد سلطانیه، رشیدالدین فضل‌الله و ربع رشیدی)
11. Timurid Renaissance (تیموریان، شاهرخ و گوهرشاد، رصدخانه سمرقند و الغ‌بیگ، کمال‌الدین بهزاد و مکتب هرات، جامی)
12. Safavid Golden Age (صفویه، شاه اسماعیل و مذهب تشیع، شاه عباس کبیر، مکتب اصفهان، میدان نقش جهان، عالی‌قاپو، شیخ لطف‌الله، کاروانسراها)
13. Afsharid & Zand (نادرشاه افشار ناپلئون شرق و نبرد کرنال، کریم‌خان زند وکیل‌الرعایا و ارگ کریم‌خان)
14. Qajar & Constitutional Revolution (قاجاریه، عباس‌میرزا، امیرکبیر و دارالفنون، ناصرالدین شاه، انقلاب مشروطه ۱۲۸۵ خورشیدی، ستارخان و باقرخان)
15. Pahlavi & Contemporary Era (پهلوی، مدرنیزاسیون، راه‌آهن سراسری، دانشگاه تهران، ملی شدن نفت و دکتر مصدق، انقلاب ۵۷).

Formatting Guidelines:
- Respond in the requested language (Persian by default, or English if asked in English).
- When writing Persian, write in eloquent, poetic yet academically rigorous Persian (فارسی اصیل و شیوا با لحن محترمانه و دقیق تاریخی).
- Structure responses clearly with headings, key facts, timelines, and primary sources or verses when relevant (e.g. Ferdowsi, Hafez, Cyrus cylinder inscriptions).
- Maintain objectivity, historical rigor, and cultural reverence for all epochs of Iranian heritage.`;

// Pre-computed scholarly fallback answers for key historical inquiries if no API key is provided
const HISTORICAL_FALLBACKS: Record<string, { fa: string; en: string }> = {
  cyrus: {
    fa: `### استوانه و منشور حقوق بشر کوروش بزرگ (۵۳۹ پیش از میلاد)
منشور کوروش بزرگ که پس از فتح صلح‌آمیز بابل به خط میخی اکدی بر استوانه‌ای از گل پخته حک گردید، به عنوان **نخستین منشور حقوق بشر جهان** در سازمان ملل متحد به ثبت رسیده است.

**اصول بنیادین منشور:**
۱. **آزادی مذهب و عقیده:** کوروش به همه اقوام و ملل اجازه داد آیین‌ها و باورهای نیاکانی خود را آزادانه به جای آورند.
۲. **لغو برده‌داری و بیگاری اجباری:** کار اجباری را ممنوع ساخت و دستور بازسازی ویرانه‌ها را صادر نمود.
۳. **بازگشت تبعیدیان:** یهودیان تبعیدی در بابل و دیگر اقوام اسیر را آزاد نمود و امکان بازگشت به سرزمین‌هایشان و بازسازی معابدشان (از جمله معبد اورشلیم) را فراهم آورد.
۴. **دادگری و منع غارت:** فرمان داد که هیچ سپاهی حق تجاوز به اموال و جان مردمان شهر را ندارد.

> «من کوروش هستم، شاه جهان، شاه بزرگ، شاه نیرومند، شاه بابل... من به هیچ‌کس اجازه ندادم که مردمان بابل و دیگر سرزمین‌ها را به وحشت اندازد. من برای همه مردمان امنیت و صلح به ارمغان آوردم.»`,
    en: `### The Cyrus Cylinder: The World's First Charter of Human Rights (539 BCE)
Issued by Cyrus the Great of the Achaemenid Empire following the peaceful capture of Babylon, the Cyrus Cylinder is recognized by the United Nations as the first declaration of universal human rights.

**Core Principles:**
1. **Freedom of Religion:** Restored cult centers and recognized freedom of worship for all conquered peoples.
2. **Abolition of Forced Labor:** Ended state slavery and mandated fair compensation.
3. **Repatriation of Exiled Peoples:** Permitted exiled communities, including the Jewish population of Babylon, to return home and rebuild their sacred temples.
4. **Restraint and Justice:** Explicitly prohibited military plunder, terror, and displacement.`,
  },
  persepolis: {
    fa: `### تخت جمشید (پارسه / Persepolis): نگین تمدن هخامنشی
تخت جمشید پایتخت آیینی و نماد همبستگی ملل در عصر شاهنشاهی هخامنشی بود که ساخت آن در سال ۵۱۸ پیش از میلاد به فرمان داریوش بزرگ آغاز شد و در زمان خشایارشا و اردشیر یکم تکمیل گردید.

**ویژگی‌های بارز مهندسی و فرهنگی:**
- **کاخ آپادانا:** تالار ستون‌دار با ستون‌های ۲۰ متری با سرستون‌های سنگی گاو دوسر و شیر و عقاب.
- **پلکان ملل:** نقش‌برجسته‌هایی بی‌نظیر که هیئت‌های نمایندگی ۲۸ ساتراپی (ملت) جهان شناخته‌شده آن روز را با لباس‌های بومی و هدایای مسالمت‌آمیز نشان می‌دهد. نکته شگفت‌انگیز این است که در تمام تخت جمشید، هیچ نقشی از شکنجه، اسارت یا جنگ با تحقیر دیده نمی‌شود؛ تمام تصاویر سرشار از صلح، هدایا و وقار انسانی است.
- **سیستم آبرسانی و کانال‌های فاضلاب زیرزمینی:** شاهکار مهندسی هیدرولیک صخره‌ای با شیب‌بندی دقیق که پس از ۲۵۰۰ سال هنوز کارایی دارد.`,
    en: `### Persepolis (Parsa): The Ceremonial Heart of the Achaemenid Empire
Founded by Darius the Great in 518 BCE and expanded by Xerxes I, Persepolis was the ceremonial stage for the Persian New Year (Nowruz) and imperial diplomacy.

**Key Architectural & Cultural Marvels:**
- **Apadana Palace:** Monumental hypostyle hall supported by 20-meter stone columns topped with double-bull capitals.
- **Staircase of Nations:** Bas-reliefs depicting delegations from 28 satrapies bearing regional tributes in peace, notably without any depictions of slavery or humiliating captive cruelty.
- **Advanced Hydraulic Engineering:** Underground rock-hewn sewage and rainwater diversion channels ensuring structural permanence.`,
  },
  sasanian: {
    fa: `### شاهنشاهی ساسانی (۲۲۴ تا ۶۵۱ میلادی): عصر طلایی هنر، فلسفه و طب
شاهنشاهی ساسانی توسط اردشیر بابکان بنیان نهاده شد و آخرین شاهنشاهی ایرانی پیش از اسلام بود که ابرقدرت رقیب امپراتوری روم به شمار می‌رفت.

**یادگارهای ماندگار ساسانیان:**
- **ایوان مدائن (طاق کسری):** بزرگترین طاق قوسی خشتی و بدون پایه تک‌دهانه جهان با پهنای ۲۵ متر و بلندای ۳۷ متر در تیسفون.
- **دانشگاه و بیمارستان جندی‌شاپور:** نخستین مرکز جامع علمی، ترجمه کتب یونانی، رومی و هندی، و بزرگترین دانشکده پزشکی جهان باستان.
- **احیای کتاب‌های پهلوی و خدای‌نامک:** تدوین تاریخ اسطوره‌ای و ملی ایران که بعدها منبع اصلی فردوسی در سرایش شاهنامه شد.
- **موسیقی دستگاهی:** ابداع گوشه‌ها و مقام‌های موسیقی توسط باربد و نکیسا در دربار خسروپرویز.`,
    en: `### The Sasanian Empire (224 – 651 CE): Superpower of Science, Art, and Law
Founded by Ardashir I, the Sasanian Empire was the dominant rival of the Roman/Byzantine world and the zenith of classical Persian culture before the Islamic era.

**Enduring Legacies:**
- **Taq Kasra (Arch of Ctesiphon):** The largest single-span unreinforced mudbrick vault in antiquity.
- **Academy of Gundeshapur:** The primary intellectual hub of antiquity merging Greek, Indian, Syrian, and Persian sciences and medicine.
- **The Khwaday-Namag (Book of Lords):** The national prose chronicle that later inspired Ferdowsi's epic Shahnameh.`,
  },
};

// API Route: AI Historian (Gemini-powered or intelligent fallback)
app.post('/api/ai-historian', async (req, res) => {
  try {
    const { prompt, language = 'fa', context = '' } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt is required' });
      return;
    }

    const ai = getGenAI();

    // If Gemini client is available, generate answer with gemini-3.8-flash
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `${context ? `Historical Context: ${context}\n\n` : ''}User Question: ${prompt}\nRespond in ${language === 'fa' ? 'Persian (Farsi)' : 'English'} language.`,
                },
              ],
            },
          ],
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
            maxOutputTokens: 2048,
          },
        });

        const replyText = response.text || '';
        res.json({
          reply: replyText,
          source: 'gemini-3.8-flash',
          status: 'success',
        });
        return;
      } catch (geminiError: any) {
        console.warn('Gemini API call failed, falling back to local historical engine:', geminiError?.message);
        // Fall through to fallback engine
      }
    }

    // Fallback: Intelligent keyword-based response from scholarly archive
    const lowerPrompt = prompt.toLowerCase();
    let fallbackResult = '';

    if (lowerPrompt.includes('کوروش') || lowerPrompt.includes('منشور') || lowerPrompt.includes('حقوق بشر') || lowerPrompt.includes('cyrus')) {
      fallbackResult = language === 'fa' ? HISTORICAL_FALLBACKS.cyrus.fa : HISTORICAL_FALLBACKS.cyrus.en;
    } else if (lowerPrompt.includes('تخت جمشید') || lowerPrompt.includes('پارسه') || lowerPrompt.includes('داریوش') || lowerPrompt.includes('persepolis')) {
      fallbackResult = language === 'fa' ? HISTORICAL_FALLBACKS.persepolis.fa : HISTORICAL_FALLBACKS.persepolis.en;
    } else if (lowerPrompt.includes('ساسان') || lowerPrompt.includes('طاق کسری') || lowerPrompt.includes('جندی شاپور') || lowerPrompt.includes('sasan')) {
      fallbackResult = language === 'fa' ? HISTORICAL_FALLBACKS.sasanian.fa : HISTORICAL_FALLBACKS.sasanian.en;
    } else {
      // General scholarly response
      if (language === 'fa') {
        fallbackResult = `### پاسخ پژوهشی درباره تاریخ ایران‌زمین
پرسش شما درباره: «${prompt}»

تاریخ فلات ایران با قدمتی بیش از ۷ هزار سال از دوره پیش‌ازتاریخ، تمدن‌های سیلک و جیرفت، پادشاهی عیلام، امپراتوری ماد، شکوه هخامنشیان، تمدن پارت/اشکانیان، پادشاهی ساسانی، دوره زرین اسلامی با سامانیان و آل‌بویه و سلجوقیان، تا عصر رنسانس صفویه، افشاریه، زندیه، قاجار و دوران معاصر گسترده است.

**نکات کلیدی پیرامون این دوره:**
- **پیوستگی هویت تمدنی:** ایران در طول تاریخ، با وجود هجوم‌های بزرگ مانند اسکندر مقدونی و مغول‌ها، همواره توانست فرهنگ و هویت ایرانی و زبان فارسی را از طریق ادغام فرهنگی و تولید آثار حکمی و ادبی مانند شاهنامه فردوسی حفظ نماید.
- **نوآوری‌های زیرساختی:** ابداع کاریز (قنات) به عنوان شاهکار مهندسی آب، سیستم پست و چاپارخانه هخامنشی، معماری گنبدی چهارطاقی، و مدارس نظامیه از ابداعات تمدن ایران است.
- **میراث ثبت جهانی:** آثاری چون پاسارگاد، بیستون، میدان نقش جهان، زیگورات چغازنبیل، و باغ‌های ایرانی سند جاودان این فرهنگ پویا هستند.

*برای پاسخ تفصیلی‌تر و هوشمند، کلید API جمینای در سرور فعال خواهد بود.*`;
      } else {
        fallbackResult = `### Historical Scholarly Insights: Persian Civilization
Regarding your inquiry: "${prompt}"

The history of the Iranian plateau spans over 7,000 years, beginning with pre-historic cultures in Sialk and Jiroft, the Elamite Kingdom, the Median confederation, the global span of the Achaemenids, the chivalric Parthians, the artistic peak of the Sasanians, the Islamic Golden Age with the Samanids, Buyids, and Seljuks, down to the Safavid renaissance and modern era.

**Key Pillars of Persian Civilizational Continuity:**
- **Cultural Resilience:** Despite catastrophic invasions (Alexander, the Mongols), Persian administrative statecraft, language, and aesthetic philosophy consistently absorbed and civilized foreign rulers.
- **Pioneering Innovations:** Underground qanat hydraulic systems, the royal postal courier network (Chapar Khaneh), squinch dome architecture, and scientific observatories like Maragheh.`;
      }
    }

    res.json({
      reply: fallbackResult,
      source: 'scholarly-heritage-engine',
      status: 'fallback',
    });
  } catch (err: any) {
    console.error('Historian API error:', err);
    res.status(500).json({ error: 'Internal server error processing historical query' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Vite middleware in development / static serve in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Express v5 syntax: *all
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Imperial Heritage server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
