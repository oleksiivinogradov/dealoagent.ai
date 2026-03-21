import { useState, useRef, useEffect } from 'react';
import {
    ArrowRight,
    Bot,
    Sparkles,
    GripVertical,
    Globe,
    MousePointer2,
    Copy,
    ClipboardPaste,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { G2Widget } from "./G2Widget";
import { ProductHuntWidget } from "./ProductHuntWidget";

// App logo SVG imports
import gmailLogo from '../assets/logo_gmail.svg';
import gcalLogo from '../assets/logo_gcalendar.svg';
import telegramLogo from '../assets/logo_telegram.svg';
import whatsappLogo from '../assets/logo_whatsapp.svg';

// Inline Teams SVG (not available on Wikimedia)
const TeamsLogo = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" fill="#5059C9"/>
    <path d="M29.5 18c-3.5 0-6.5 1.5-8.5 4H33a5 5 0 0 1 5 5v8a11 11 0 0 0 4-8.5C42 21.5 36.4 18 29.5 18Z" fill="#5059C9"/>
    <path d="M20 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" fill="#7B83EB"/>
    <path d="M4 26a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v10a14 14 0 0 1-14 14H18A14 14 0 0 1 4 36V26Z" fill="#7B83EB"/>
    <path d="M22 18H8a4 4 0 0 0-4 4v14a14 14 0 0 0 14 14 14 14 0 0 0 4-.6V22a4 4 0 0 0-4-3.9H22A3.9 3.9 0 0 0 22 18Z" fill="url(#teams_grad)"/>
    <path d="M23 18H8a4 4 0 0 0-4 4v14a14 14 0 0 0 14 14 14 14 0 0 0 4-.6V22a4 4 0 0 0-4-3.9H23A3.9 3.9 0 0 0 23 18Z" fill="rgba(0,0,0,0.1)"/>
    <path d="M15 23v10.5M10.5 27.5h9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <defs>
      <linearGradient id="teams_grad" x1="4" y1="18" x2="26" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5A62C3"/>
        <stop offset="0.5" stopColor="#4D55BD"/>
        <stop offset="1" stopColor="#3940AB"/>
      </linearGradient>
    </defs>
  </svg>
);

// --- App data for Old Approach ---
type AppId = 'gmail' | 'gcalendar' | 'telegram' | 'whatsapp' | 'teams';

const APPS: { id: AppId; name: string; logo: string | null; color: string; bgColor: string }[] = [
  { id: 'gmail', name: 'Gmail', logo: gmailLogo, color: '#EA4335', bgColor: '#fef2f2' },
  { id: 'gcalendar', name: 'Calendar', logo: gcalLogo, color: '#1A73E8', bgColor: '#eff6ff' },
  { id: 'telegram', name: 'Telegram', logo: telegramLogo, color: '#2AABEE', bgColor: '#f0f9ff' },
  { id: 'whatsapp', name: 'WhatsApp', logo: whatsappLogo, color: '#25D366', bgColor: '#f0fdf4' },
  { id: 'teams', name: 'Teams', logo: null, color: '#6264A7', bgColor: '#f5f3ff' },
];

// App content snippets with a "copyable" piece of data
const APP_CONTENT: Record<AppId, { lines: string[]; copyText: string; copyLabel: string }> = {
  gmail: {
    lines: [
      'From: sarah@acmecorp.com',
      'Subject: Re: Partnership proposal',
      'Hi, our budget is $42,000/yr.',
      'Please confirm next steps.',
    ],
    copyText: '$42,000/yr',
    copyLabel: 'budget',
  },
  gcalendar: {
    lines: [
      '📅 Demo call with AcmeCorp',
      'Thu, Mar 27 · 3:00–3:30 PM',
      'Attendees: sarah@acmecorp.com',
      'Location: Zoom (link in invite)',
    ],
    copyText: 'Thu, Mar 27 · 3:00 PM',
    copyLabel: 'meeting time',
  },
  telegram: {
    lines: [
      'Sarah (AcmeCorp): Hey!',
      'They approved the budget 🎉',
      'Sending contract by EOD.',
      'Phone: +1 (415) 555-0192',
    ],
    copyText: '+1 (415) 555-0192',
    copyLabel: 'phone number',
  },
  whatsapp: {
    lines: [
      'Tom: Quick update —',
      'AcmeCorp signed the NDA.',
      'Contact: john.doe@acme.com',
      'They want 3 seats initially.',
    ],
    copyText: 'john.doe@acme.com',
    copyLabel: 'email',
  },
  teams: {
    lines: [
      '#deals channel',
      'Alex: AcmeCorp deal update:',
      'Decision maker: John Doe, VP',
      'Close date: April 15, 2025',
    ],
    copyText: 'John Doe, VP',
    copyLabel: 'contact',
  },
};

// Paste destinations in the spreadsheet
const PASTE_ROWS = [
  { label: 'Budget', value: '' },
  { label: 'Meeting', value: '' },
  { label: 'Phone', value: '' },
  { label: 'Email', value: '' },
  { label: 'Contact', value: '' },
];
const APP_TO_ROW: Record<AppId, number> = { gmail: 0, gcalendar: 1, telegram: 2, whatsapp: 3, teams: 4 };

// --- Types & Data for New Approach Animation ---
type ConversationStep = {
    lang: 'EN' | 'ES' | 'DE';
    query: string;
    responseType: 'list' | 'email' | 'status';
    responseContent: any;
};

const CONVERSATIONS: ConversationStep[] = [
    {
        lang: 'EN',
        query: "Find SaaS companies in FinTech raising Series A",
        responseType: 'list',
        responseContent: [
            { name: "FinTech Corp", detail: "$15M Series A • 2 days ago" },
            { name: "PayFlow", detail: "$12M Series A • 5 days ago" },
            { name: "Bankify", detail: "$20M Series A • 1 week ago" }
        ]
    },
    {
        lang: 'ES',
        query: "Redacta un correo de seguimiento para Juan",
        responseType: 'email',
        responseContent: {
            subject: "Seguimiento: Nuestra reunión",
            body: "Hola Juan, gracias por tu tiempo hoy. Me gustaría..."
        }
    },
    {
        lang: 'DE',
        query: "Wie ist der Status von Deal Alpha?",
        responseType: 'status',
        responseContent: {
            stage: "Verhandlung",
            probability: "85%",
            nextStep: "Vertrag unterzeichnen"
        }
    }
];

type IntegrationHubVariant = 'default' | 'onepager';

interface IntegrationHubProps {
  variant?: IntegrationHubVariant;
}

export function IntegrationHub({ variant = 'default' }: IntegrationHubProps) {
  const { t } = useTranslation();
  const isOnePager = variant === 'onepager';

  const sectionClassName = isOnePager
    ? "relative h-[1123px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-6 pb-2"
    : "relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-20 sm:pt-24 pb-8 sm:pb-14";
  const containerClassName = isOnePager
    ? "relative mx-auto max-w-[794px] px-2"
    : "relative mx-auto max-w-7xl px-1 sm:px-6 lg:px-8";
  const titleWrapClassName = isOnePager ? "mb-2 text-center" : "mb-3 sm:mb-4 text-center";
  const badgeClassName = isOnePager
    ? "inline-flex items-center justify-center align-middle leading-none rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1.5 text-base text-white font-bold shadow-lg"
    : "inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-10 py-2 sm:py-3 text-lg sm:text-2xl md:text-3xl text-white font-bold shadow-lg";
  const subtitleClassName = isOnePager
    ? "mx-auto max-w-xl text-xs text-blue-100/80 font-medium"
    : "mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-blue-100/80 font-medium";
  const footerWrapClassName = isOnePager ? "mt-2 text-center" : "mt-6 sm:mt-8 text-center";
  const footerTextClassName = isOnePager ? "text-xs text-blue-100/70" : "text-sm sm:text-base text-blue-100/70";

  // --- Slider State ---
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // --- Old Approach State ---
  const [activeApp, setActiveApp] = useState<AppId>('gmail');
  const [copyPhase, setCopyPhase] = useState<'idle' | 'selecting' | 'copying' | 'switching' | 'pasting' | 'done'>('idle');
  const [pastedRows, setPastedRows] = useState<string[]>(Array(5).fill(''));
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
  const [showCrm, setShowCrm] = useState(false);

  // --- New Approach State ---
  const [convoIndex, setConvoIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // --- Handlers for Slider ---
  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e as React.MouseEvent).clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
  };
  const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e as React.TouchEvent).touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
  };

  // --- Slider auto-animation ---
  useEffect(() => {
      const handleGlobalMouseUp = () => { isDragging.current = false; };
      const handleGlobalMouseMove = (e: MouseEvent) => { handleMouseMove(e); };
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('mousemove', handleGlobalMouseMove);

      let animationFrameId: number;
      let startTime: number | null = null;
      const animateSlider = (timestamp: number) => {
          if (!isDragging.current) {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;
              setSliderPosition(50 + Math.sin(elapsed / 2000) * 35);
          } else {
              startTime = null;
          }
          animationFrameId = requestAnimationFrame(animateSlider);
      };
      animationFrameId = requestAnimationFrame(animateSlider);

      return () => {
          window.removeEventListener('mouseup', handleGlobalMouseUp);
          window.removeEventListener('mousemove', handleGlobalMouseMove);
          cancelAnimationFrame(animationFrameId);
      };
  }, []);

  // --- Old Approach: app-switch + copy-paste animation loop ---
  useEffect(() => {
    const appOrder: AppId[] = ['gmail', 'gcalendar', 'telegram', 'whatsapp', 'teams'];
    let appIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const runCycle = () => {
      const app = appOrder[appIndex % appOrder.length];
      setActiveApp(app);
      setShowCrm(false);
      setCopyPhase('idle');
      setCursorPos({ x: 50, y: 45 });

      // Step 1: cursor moves to text
      timeoutId = setTimeout(() => {
        setCursorPos({ x: 62, y: 62 });
        setCopyPhase('selecting');

        // Step 2: Ctrl+C
        timeoutId = setTimeout(() => {
          setCopyPhase('copying');

          // Step 3: switch to CRM spreadsheet
          timeoutId = setTimeout(() => {
            setCopyPhase('switching');
            setShowCrm(true);
            setCursorPos({ x: 55, y: 70 });

            // Step 4: paste
            timeoutId = setTimeout(() => {
              setCopyPhase('pasting');
              const rowIdx = APP_TO_ROW[app];
              setPastedRows(prev => {
                const next = [...prev];
                next[rowIdx] = APP_CONTENT[app].copyText;
                return next;
              });

              // Step 5: pause then next app
              timeoutId = setTimeout(() => {
                setCopyPhase('done');
                appIndex++;
                timeoutId = setTimeout(runCycle, 600);
              }, 1200);
            }, 700);
          }, 800);
        }, 900);
      }, 800);
    };

    runCycle();
    return () => clearTimeout(timeoutId);
  }, []);

  // --- New Approach Animation Loop ---
  useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      const typeCharacter = (text: string, index: number) => {
          if (index <= text.length) {
              setTypingText(text.slice(0, index));
              setIsTyping(true);
              timeoutId = setTimeout(() => typeCharacter(text, index + 1), 30 + Math.random() * 50);
          } else {
              setIsTyping(false);
              timeoutId = setTimeout(() => {
                  setShowResponse(true);
                  timeoutId = setTimeout(() => {
                      setConvoIndex(prev => (prev + 1) % CONVERSATIONS.length);
                      setTypingText("");
                      setShowResponse(false);
                  }, 3000);
              }, 800);
          }
      };
      const startConversation = () => {
          timeoutId = setTimeout(() => typeCharacter(CONVERSATIONS[convoIndex].query, 0), 500);
      };
      startConversation();
      return () => clearTimeout(timeoutId);
  }, [convoIndex]);

  const currentConvo = CONVERSATIONS[convoIndex];
  const currentAppData = APP_CONTENT[activeApp];
  const currentApp = APPS.find(a => a.id === activeApp)!;

  return (
    <section className={sectionClassName}>
      {/* Background gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-600/30 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-600/30 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      <div className={containerClassName}>
        {/* Section Title */}
        <div className={titleWrapClassName}>
          <div className={isOnePager ? "mb-1" : "mb-2 sm:mb-3"}>
            <span className={badgeClassName} data-pdf-badge>
              {t('integrationHub.badge')}
            </span>
          </div>
          <p className={subtitleClassName} data-pdf-subtitle>
            {t('integrationHub.subtitle')}
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="mt-6 sm:mt-8">
          <div
            ref={containerRef}
            className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize ring-1 ring-white/20"
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
          >
            {/* ───────────────────────────────────────────────────── */}
            {/* RIGHT SIDE — NEW APPROACH                            */}
            {/* ───────────────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
              <div className="absolute top-8 right-0 w-1/2 text-center z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wider">
                  {t('difference.newApproach')}
                </span>
              </div>

              <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center items-center">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden flex flex-col h-[400px]">
                  {/* Chat Header */}
                  <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">DealoAgent AI</div>
                        <div className="text-xs text-green-500 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Online
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
                      <Globe className="w-4 h-4" />
                      <span className="text-xs font-medium w-4 text-center inline-block">{currentConvo.lang}</span>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 bg-gray-50/50 flex-1 overflow-y-auto">
                    <div className="flex justify-end min-h-[40px]">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-sm shadow-sm">
                        {typingText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </div>
                    </div>

                    <div className={`flex justify-start transition-all duration-500 ${showResponse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] text-sm shadow-sm space-y-3 w-full">
                        <div className="flex items-center gap-2 text-blue-600 font-medium text-xs uppercase tracking-wide">
                          <Sparkles className="w-3 h-3" />
                          {currentConvo.lang === 'EN' ? 'Analysis Complete' :
                           currentConvo.lang === 'ES' ? 'Borrador Listo' : 'Analyse Abgeschlossen'}
                        </div>

                        {currentConvo.responseType === 'list' && (
                          <>
                            <p>I found 3 companies matching your criteria:</p>
                            <div className="space-y-2">
                              {currentConvo.responseContent.map((item: any, i: number) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100">
                                  <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                                    {item.name[0]}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-medium text-gray-900 truncate">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.detail}</div>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-400" />
                                </div>
                              ))}
                            </div>
                          </>
                        )}

                        {currentConvo.responseType === 'email' && (
                          <>
                            <p>Aquí tienes el borrador solicitado:</p>
                            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs font-mono text-gray-600">
                              <div className="mb-2 border-b border-gray-200 pb-1">Subject: {currentConvo.responseContent.subject}</div>
                              <div>{currentConvo.responseContent.body}</div>
                            </div>
                          </>
                        )}

                        {currentConvo.responseType === 'status' && (
                          <>
                            <p>Hier ist der aktuelle Status:</p>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-blue-50 p-2 rounded border border-blue-100">
                                <div className="text-[10px] text-blue-500 uppercase">Phase</div>
                                <div className="font-medium">{currentConvo.responseContent.stage}</div>
                              </div>
                              <div className="bg-green-50 p-2 rounded border border-green-100">
                                <div className="text-[10px] text-green-500 uppercase">Wahrscheinlichkeit</div>
                                <div className="font-medium">{currentConvo.responseContent.probability}</div>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="flex gap-2 mt-2">
                          <button className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors font-medium">
                            {currentConvo.lang === 'EN' ? 'Action' : currentConvo.lang === 'ES' ? 'Enviar' : 'Details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ───────────────────────────────────────────────────── */}
            {/* LEFT SIDE — OLD APPROACH                             */}
            {/* ───────────────────────────────────────────────────── */}
            <div
              className="absolute inset-0 bg-[#F0F2F5] flex flex-col"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="absolute top-8 left-0 w-1/2 text-center z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-sm tracking-wider">
                  {t('difference.oldApproach')}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-10 py-6 sm:py-8 gap-2">

                {/* ── App Tab Bar ── */}
                <div className="w-full max-w-2xl bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
                  {/* Tab row */}
                  <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
                    {APPS.map(app => (
                      <div
                        key={app.id}
                        className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-medium border-r border-gray-200 whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                          activeApp === app.id
                            ? 'bg-white border-b-2 text-gray-800 -mb-px'
                            : 'text-gray-400'
                        }`}
                        style={{
                          borderBottomColor: activeApp === app.id ? app.color : 'transparent',
                        }}
                      >
                        <div className="w-4 h-4 flex-shrink-0">
                          {app.logo ? (
                            <img src={app.logo} alt={app.name} className="w-4 h-4 object-contain" />
                          ) : (
                            <TeamsLogo />
                          )}
                        </div>
                        <span>{app.name}</span>
                        {activeApp === app.id && (
                          <span className="ml-1 w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: app.color }} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* App content area */}
                  <div className="relative h-[110px] sm:h-[130px] overflow-hidden">
                    {APPS.map(app => (
                      <div
                        key={app.id}
                        className={`absolute inset-0 p-3 transition-all duration-300 ${activeApp === app.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        style={{ background: app.bgColor }}
                      >
                        {/* App header */}
                        <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                          <div className="w-5 h-5 flex-shrink-0">
                            {app.logo ? (
                              <img src={app.logo} alt={app.name} className="w-5 h-5 object-contain" />
                            ) : (
                              <TeamsLogo />
                            )}
                          </div>
                          <span className="text-xs font-bold text-gray-700">{app.name}</span>
                          <span className="ml-auto text-[10px] text-gray-400">— minimize</span>
                        </div>

                        {/* Content lines */}
                        <div className="space-y-1">
                          {APP_CONTENT[app.id].lines.map((line, i) => {
                            const isHighlighted = i === 3 && activeApp === app.id && (copyPhase === 'selecting' || copyPhase === 'copying');
                            return (
                              <div key={i} className={`text-[11px] px-1 py-0.5 rounded transition-all duration-200 ${
                                isHighlighted
                                  ? 'bg-blue-200 text-blue-900 font-semibold ring-1 ring-blue-400'
                                  : 'text-gray-700'
                              }`}>
                                {line}
                              </div>
                            );
                          })}
                        </div>

                        {/* Copy indicator */}
                        {copyPhase === 'copying' && activeApp === app.id && (
                          <div className="absolute top-2 right-2 flex items-center gap-1 bg-gray-800 text-white text-[10px] px-2 py-1 rounded-full shadow-lg animate-bounce">
                            <Copy className="w-3 h-3" />
                            <span>Ctrl+C</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── CRM Spreadsheet (paste target) ── */}
                <div className={`w-full max-w-2xl bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500 ${showCrm ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  {/* Spreadsheet header */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-xs font-bold">
                    <span>📊</span>
                    <span>CRM_AcmeCorp_Deal.xlsx</span>
                    <span className="ml-auto text-green-200 font-normal">Manual entry required</span>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="bg-gray-100 border-b border-gray-200">
                          <th className="text-left px-2 py-1 text-gray-500 font-semibold w-24">Field</th>
                          <th className="text-left px-2 py-1 text-gray-500 font-semibold">Value</th>
                          <th className="text-left px-2 py-1 text-gray-500 font-semibold w-20">Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PASTE_ROWS.map((row, i) => {
                          const appForRow = APPS[i];
                          const isPasting = copyPhase === 'pasting' && showCrm && APP_TO_ROW[activeApp] === i;
                          const hasPasted = pastedRows[i] !== '';
                          return (
                            <tr key={i} className={`border-b border-gray-100 transition-colors duration-300 ${isPasting ? 'bg-yellow-50' : hasPasted ? 'bg-green-50/50' : ''}`}>
                              <td className="px-2 py-0.5 font-medium text-gray-600">{row.label}</td>
                              <td className="px-2 py-0.5">
                                {isPasting ? (
                                  <span className="flex items-center gap-1 text-orange-600 font-semibold">
                                    <ClipboardPaste className="w-3 h-3" />
                                    <span className="animate-pulse">{APP_CONTENT[activeApp].copyText}</span>
                                  </span>
                                ) : hasPasted ? (
                                  <span className="text-gray-800">{pastedRows[i]}</span>
                                ) : (
                                  <span className="text-gray-300 italic">empty...</span>
                                )}
                              </td>
                              <td className="px-2 py-0.5">
                                {hasPasted && (
                                  <span className="flex items-center gap-1 text-gray-400">
                                    <div className="w-3 h-3">
                                      {appForRow.logo ? (
                                        <img src={appForRow.logo} alt={appForRow.name} className="w-3 h-3 object-contain" />
                                      ) : <TeamsLogo />}
                                    </div>
                                    <span>{appForRow.name}</span>
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Paste indicator */}
                  {copyPhase === 'pasting' && showCrm && (
                    <div className="px-3 py-1.5 bg-yellow-50 border-t border-yellow-200 flex items-center gap-1.5 text-[10px] text-yellow-700">
                      <ClipboardPaste className="w-3 h-3" />
                      <span>Pasting {currentAppData.copyLabel} from {currentApp.name}... (Ctrl+V)</span>
                    </div>
                  )}
                </div>

                {/* ── Animated cursor ── */}
                <div
                  className="absolute pointer-events-none transition-all duration-700 ease-in-out z-50"
                  style={{
                    left: `${cursorPos.x}%`,
                    top: `${cursorPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <MousePointer2 className="w-5 h-5 text-black fill-white drop-shadow-md" />
                  {(copyPhase === 'copying' || copyPhase === 'pasting') && (
                    <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full border-2 border-orange-400 animate-ping opacity-60" />
                  )}
                </div>
              </div>
            </div>

            {/* SLIDER HANDLE */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-0 bottom-0 -left-[1px] w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
                <GripVertical className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={footerWrapClassName}>
          <p className={footerTextClassName}>
            {t('integrationHub.footer')}
          </p>

          {!isOnePager && (
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              <G2Widget />
              <ProductHuntWidget />
              <a
                href="https://www.shipit.buzz/products/dealoagentai?ref=badge"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 transition-all duration-300 hover:scale-105"
              >
                <img
                  src="https://www.shipit.buzz/api/products/dealoagentai/badge?theme=light"
                  alt="Featured on Shipit"
                  className="h-[54px] w-auto"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
