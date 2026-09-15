import React, { useState, useRef, useEffect } from 'react';
import { Language, Theme } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, Send, X, RotateCcw, Copy, Check, Compass, BookOpen, Quote, HelpCircle } from 'lucide-react';

interface AiHistorianModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: Theme;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  source?: string;
  timestamp: string;
}

export const AiHistorianModal: React.FC<AiHistorianModalProps> = ({
  isOpen,
  onClose,
  language,
  theme,
}) => {
  const isFa = language === 'fa';
  const isLight = theme === 'light';

  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const initialWelcomeFa = `درود بر شما پژوهشگر گرامی! من «دانا»، دستیار هوش مصنوعی و مورخ تاریخ کهن ایران‌زمین هستم.
می‌توانید درباره هر دوره‌ای از تاریخ ایران بپرسید:
• **منشور حقوق بشر کوروش بزرگ و مفاد آن**
• **رازهای مهندسی تخت جمشید و پاسارگاد**
• **شاهنشاهی ساسانی، دانشگاه جندی‌شاپور و ایوان مدائن**
• **عصر زرین تمدن ایرانی: سامانیان، فردوسی، ابن‌سینا و خیام**
• **شکوه مکتب اصفهان در عهد صفوی یا نبردهای نادرشاه افشار**

پرسش خود را بنویسید یا یکی از موضوعات زیر را انتخاب کنید:`;

  const initialWelcomeEn = `Greetings! I am "Dana", your AI Scholar and Historian of Persian Civilization and Greater Iran.
Ask me anything regarding thousands of years of Iranian heritage:
• **The Cyrus Cylinder: Decrees, discovery, and global significance**
• **Persepolis & Pasargadae: Hydraulic mastery and imperial architecture**
• **The Sasanian Golden Age: Gundeshapur University and Taq Kasra**
• **The Persian Literary Renaissance: Ferdowsi, Avicenna, Omar Khayyam**
• **Safavid Art & Isfahan, or Nader Shah’s military campaigns**

Select an inquiry below or type your question:`;

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: isFa ? initialWelcomeFa : initialWelcomeEn,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const presetQuestions = isFa
    ? [
        'چرا منشور کوروش نخستین اعلامیه حقوق بشر جهان نامیده می‌شود؟',
        'علت ماندگاری تخت جمشید و ویژگی‌های معماری آپادانا چیست؟',
        'نقش دانشگاه جندی‌شاپور در پیشرفت پزشکی و علوم جهان',
        'چگونه فردوسی و شاهنامه زبان فارسی را پس از حمله اعراب احیا کردند؟',
        'مقایسه نبوغ جنگی نادرشاه افشار با سرداران باستان چون سورنا',
        'تقویم جلالی چگونه توسط خیام محاسبه شد و دقت آن چقدر است؟',
      ]
    : [
        'Why is the Cyrus Cylinder considered the world’s first human rights declaration?',
        'What are the hydraulic and architectural wonders of Persepolis?',
        'How did Gundeshapur University shape ancient medicine and science?',
        'How did Ferdowsi and the Shahnameh preserve the Persian language?',
        'Compare the military tactics of Surena at Carrhae with Nader Shah',
        'What makes the Jalali calendar designed by Omar Khayyam so accurate?',
      ];

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai-historian', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          language,
          context: 'Application: Imperial Heritage of Iran - Digital Archive',
        }),
      });

      const data = await res.json();
      const replyText = data.reply || (isFa ? 'پاسخی دریافت نشد.' : 'No response received.');

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        source: data.source,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const errorMsg: Message = {
        id: `err-${Date.now()}`,
        sender: 'ai',
        text: isFa
          ? 'متاسفانه در برقراری ارتباط با سرور هوش مصنوعی خطایی رخ داد. لطفاً دوباره تلاش کنید.'
          : 'An error occurred while connecting to the AI Historian service. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden backdrop-blur-xl bg-black/80"
      >
        <motion.div
          initial={{ scale: 0.95, y: 15 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden flex flex-col h-[90vh] max-h-[850px] ${
            isLight
              ? 'bg-white border-[#e4ddcf] shadow-[#000000]/15 text-[#09090b]'
              : 'bg-[#09090d] border-[#262632] shadow-[0_0_70px_rgba(0,0,0,0.9)] text-[#f4f4f6]'
          }`}
        >
          {/* Header */}
          <div
            className={`px-6 py-4 flex items-center justify-between border-b ${
              isLight ? 'border-[#e4ddcf] bg-[#faf9f5]' : 'border-[#262632] bg-[#0c0c12]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#c5a059] to-[#ecd399] flex items-center justify-center text-black shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold font-serif-title">
                    {isFa ? 'دانا: هوش مصنوعی و پژوهشگر تاریخ ایران' : 'Dana: AI Scholar of Persian History'}
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30">
                    Gemini 3.8
                  </span>
                </div>
                <p className="text-xs opacity-75">
                  {isFa
                    ? 'پاسخ‌های تحلیلی، استنادات کهن و بررسی موشکافانه تمدن فلات ایران'
                    : 'Analytical research, primary citations, and deep exploration of Greater Iran'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: 'reset',
                      sender: 'ai',
                      text: isFa ? initialWelcomeFa : initialWelcomeEn,
                      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ])
                }
                title={isFa ? 'شروع مجدد گفتگو' : 'Reset Conversation'}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#e4ddcf] text-stone-600 hover:text-black'
                    : 'bg-[#14141d] border-[#2a2a38] text-stone-400 hover:text-white'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className={`p-2 rounded-xl border transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#e4ddcf] text-stone-600 hover:text-black hover:border-black'
                    : 'bg-[#14141d] border-[#2a2a38] text-stone-400 hover:text-white hover:border-white'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${isAi ? 'justify-start' : 'justify-end'}`}
                >
                  {isAi && (
                    <div className="w-8 h-8 rounded-xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center shrink-0 mt-1 border border-[#c5a059]/30">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl p-4 sm:p-5 relative group text-sm leading-relaxed ${
                      isAi
                        ? isLight
                          ? 'bg-[#faf9f5] border border-[#e4ddcf] text-[#09090b]'
                          : 'bg-[#121218] border border-[#262632] text-[#f4f4f6]'
                        : 'bg-gradient-to-r from-[#c5a059] to-[#dfbb6c] text-black font-medium shadow-md'
                    }`}
                  >
                    {/* Render message with line breaks and simple markdown heading formatting */}
                    <div className="whitespace-pre-wrap space-y-2">
                      {msg.text.split('\n\n').map((para, pIdx) => {
                        if (para.startsWith('### ')) {
                          return (
                            <h4 key={pIdx} className="font-bold font-serif-title text-base text-[#c5a059] mt-2 mb-1">
                              {para.replace('### ', '')}
                            </h4>
                          );
                        }
                        if (para.startsWith('> ')) {
                          return (
                            <blockquote
                              key={pIdx}
                              className={`border-r-4 rtl:border-r-4 rtl:border-l-0 ltr:border-l-4 ltr:border-r-0 border-[#c5a059] px-3 py-1.5 rounded-lg my-2 italic ${
                                isLight ? 'bg-amber-50/60' : 'bg-[#181822]'
                              }`}
                            >
                              {para.replace('> ', '')}
                            </blockquote>
                          );
                        }
                        return <p key={pIdx}>{para}</p>;
                      })}
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-black/10 dark:border-white/10 text-[11px] opacity-70">
                      <span>{msg.timestamp}</span>
                      {isAi && (
                        <button
                          onClick={() => copyToClipboard(msg.text, msg.id)}
                          className="flex items-center gap-1 hover:text-[#c5a059] cursor-pointer"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check className="w-3 h-3 text-green-500" />
                              <span>{isFa ? 'کپی شد' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>{isFa ? 'کپی پاسخ' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-8 h-8 rounded-xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center shrink-0 border border-[#c5a059]/30">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div
                  className={`p-4 rounded-2xl border text-xs flex items-center gap-2 ${
                    isLight ? 'bg-[#faf9f5] border-[#e4ddcf]' : 'bg-[#121218] border-[#262632]'
                  }`}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-[#c5a059] animate-ping" />
                  <span>{isFa ? 'دانا در حال کاوش منابع و نگارش پاسخ تاریخی...' : 'Dana is researching historical archives...'}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick preset prompt pills */}
          <div
            className={`p-3 border-t overflow-x-auto flex items-center gap-2 no-scrollbar ${
              isLight ? 'bg-[#faf9f5] border-[#e4ddcf]' : 'bg-[#0c0c12] border-[#262632]'
            }`}
          >
            <span className="text-[11px] font-bold text-[#c5a059] shrink-0 flex items-center gap-1">
              <HelpCircle className="w-3 h-3" />
              <span>{isFa ? 'پرسش‌های پیشنهادی:' : 'Suggested Questions:'}</span>
            </span>
            {presetQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                disabled={loading}
                className={`text-xs px-3 py-1.5 rounded-xl border whitespace-nowrap transition-all cursor-pointer ${
                  isLight
                    ? 'bg-white border-[#dcd4c6] text-stone-700 hover:border-[#c5a059] hover:text-[#875e18]'
                    : 'bg-[#14141d] border-[#2a2a38] text-stone-300 hover:border-[#c5a059] hover:text-[#f4d89e]'
                }`}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className={`p-3 sm:p-4 border-t flex items-center gap-2 ${
              isLight ? 'bg-white border-[#e4ddcf]' : 'bg-[#09090d] border-[#262632]'
            }`}
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={
                isFa
                  ? 'پرسش خود درباره هر شاه، جنگ، بنا، فیلسوف یا رخداد تاریخی را بنویسید...'
                  : 'Ask about any dynasty, ruler, monument, battle, or philosopher...'
              }
              className={`flex-1 px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                isLight
                  ? 'bg-[#faf9f5] border-[#dcd4c6] text-black focus:border-[#c5a059]'
                  : 'bg-[#121218] border-[#2a2a38] text-white focus:border-[#c5a059]'
              }`}
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || loading}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#c5a059] to-[#dfbb6c] text-black font-bold text-sm shadow-md hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Send className="w-4 h-4 rtl:rotate-180" />
              <span>{isFa ? 'ارسال' : 'Send'}</span>
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
