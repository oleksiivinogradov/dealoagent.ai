import dealoAgentLogo from "../assets/new_logo_no_text_for_fabi.png";
import { Mail, MessageSquare, Calendar, BarChart3, Database, Phone, Building2, Search, Repeat, Send, User, Users, Plus } from "lucide-react";
import { useTranslation } from 'react-i18next';

// Top Users category
const topUserItems = [
  {
    title: "You", logos: [
      { name: "Control", note: false },
      { name: "Monitor", note: false },
      { name: "Decide", note: false },
      { name: "Approve", note: false },
      { name: "Review", note: false }
    ], icon: User, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200"
  },
  {
    title: "Your team", subtitle: "(optional)", logos: [
      { name: "Collaborate", note: false },
      { name: "Share", note: false },
      { name: "Access", note: false },
      { name: "Track", note: false },
      { name: "Report", note: false }
    ], icon: Users, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200"
  },
];

// Connectors category
const connectorItems = [
  {
    title: "Email", logos: [
      { name: "Gmail", note: false },
      { name: "Outlook", note: false },
      { name: "Yahoo", note: false },
      { name: "ProtonMail", note: false },
      { name: "Zoho", note: false }
    ], icon: Mail, color: "text-red-600", bg: "bg-red-50", border: "border-red-200", showAddButton: true
  },
  {
    title: "Messenger", logos: [
      { name: "Telegram", note: false },
      { name: "Slack", note: true },
      { name: "WhatsApp", note: true },
      { name: "Teams", note: false },
      { name: "Discord", note: true }
    ], icon: MessageSquare, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", showAddButton: true
  },
  {
    title: "Calendar", logos: [
      { name: "Google", note: false },
      { name: "Outlook", note: false },
      { name: "Apple", note: true },
      { name: "Calendly", note: true },
      { name: "Zoom", note: true }
    ], icon: Calendar, color: "text-green-600", bg: "bg-green-50", border: "border-green-200", showAddButton: true
  },
  {
    title: "Analytics", logos: [
      { name: "Google", note: true },
      { name: "Mixpanel", note: true },
      { name: "Amplitude", note: true },
      { name: "Segment", note: true },
      { name: "Heap", note: true }
    ], icon: BarChart3, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200", showAddButton: true
  },
];

// External Data category
const externalDataItems = [
  {
    title: "CRM Sync", logos: [
      { name: "Salesforce", note: true },
      { name: "HubSpot", note: true },
      { name: "Pipedrive", note: true },
      { name: "Zoho", note: true },
      { name: "Monday", note: true }
    ], icon: Building2, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", showAddButton: true
  },
  {
    title: "Softswitch", logos: [
      { name: "IXC", note: false },
      { name: "iptel", note: false }
    ], icon: Phone, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", showAddButton: true
  },
  {
    title: "Commercial DB", logos: [
      { name: "Apollo", note: false },
      { name: "ZoomInfo", note: true },
      { name: "RocketReach", note: false },
      { name: "Hunter", note: true },
      { name: "Lusha", note: true }
    ], icon: Database, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200", showAddButton: true
  },
];

// Agents category
const agentItems = [
  {
    title: "Research", logos: [
      { name: "Market", note: false },
      { name: "Competitor", note: false },
      { name: "Lead", note: false },
      { name: "Company", note: false },
      { name: "Industry", note: false }
    ], icon: Search, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200"
  },
  {
    title: "CRM", logos: [
      { name: "Auto-fill", note: false },
      { name: "Vocabulary", note: false },
      { name: "Insights", note: false },
      { name: "History", note: false },
      { name: "Context", note: false }
    ], icon: Database, color: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200"
  },
  {
    title: "Workflow", logos: [
      { name: "Sequence", note: false },
      { name: "Pipeline", note: false },
      { name: "Task", note: false },
      { name: "Route", note: false },
      { name: "Automate", note: false }
    ], icon: Repeat, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200"
  },
  {
    title: "Follow Up", logos: [
      { name: "Email", note: false },
      { name: "SMS", note: false },
      { name: "Call", note: false },
      { name: "LinkedIn", note: false },
      { name: "Reminder", note: false }
    ], icon: Send, color: "text-green-600", bg: "bg-green-50", border: "border-green-200"
  },
];

interface IntegrationItemProps {
  title: string;
  subtitle?: string;
  logos: Array<{ name: string; note: boolean }>;
  icon: any;
  color: string;
  bg: string;
  border: string;
  showAddButton?: boolean;
}

function IntegrationItem({ title, subtitle, logos, icon: Icon, color, bg, border, showAddButton }: IntegrationItemProps) {
  const { t } = useTranslation();

  return (
    <div className={`bg-white rounded-lg sm:rounded-xl border-2 ${border} shadow-lg p-1.5 sm:p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 relative`}>
      <div data-pdf-header className="flex items-center justify-between pb-1 sm:pb-2 mb-1 sm:mb-2 border-b-2 border-gray-100 pr-0.5 sm:pr-1">
        <div data-pdf-header-inner className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
          <div className={`${bg} p-0.5 sm:p-1.5 rounded-lg flex-shrink-0`} data-pdf-icon-wrap>
            <Icon className={`w-2.5 h-2.5 sm:w-4 sm:h-4 ${color}`} />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <h3 className="text-[8px] sm:text-sm font-bold text-gray-900 leading-tight whitespace-nowrap">{title}</h3>
            {subtitle && <span className="text-[7px] sm:text-[10px] text-gray-500 leading-tight whitespace-nowrap">{subtitle}</span>}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-0.5 sm:gap-1 pr-3 sm:pr-8">
        {logos.map((logo, idx) => (
          <span
            key={idx}
            data-pdf-pill
            className={`inline-flex items-center align-middle leading-none text-[6px] sm:text-[10px] px-0.5 sm:px-2 py-0.5 sm:py-1 rounded-md ${bg} ${color} font-medium whitespace-nowrap`}
          >
            {logo.name}{logo.note && <sup className="text-[5px] sm:text-[8px]">*</sup>}
          </span>
        ))}
      </div>

      {showAddButton && (
        <button
          className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 group"
          title={t('integrationHub.addFreeTooltip')}
        >
          <div className={`flex items-center gap-0.5 sm:gap-1 ${bg} ${color} px-1 sm:px-2 py-0.5 sm:py-1 rounded-lg hover:scale-110 transition-transform`} data-pdf-add-btn>
            <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="text-[7px] sm:text-[8px] font-bold">YOUR</span>
          </div>
          <div className="absolute bottom-full right-0 mb-1 hidden group-hover:block w-36 bg-emerald-500 text-white text-[9px] px-2 py-1 rounded shadow-lg z-50 whitespace-normal border border-emerald-300">
            {t('integrationHub.addFreeTooltip')}
          </div>
        </button>
      )}
    </div>
  );
}

export function BeforeAfterSlider() {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:pt-4 sm:pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block rounded-full bg-indigo-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700">
              {t('difference.title')}
            </span>
          </div>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
            {t('difference.subtitle')}
          </p>
        </div>

        {/* Hub Layout - central logo + boxes */}
        <div className="relative min-h-[700px] sm:min-h-[820px] lg:min-h-[920px] flex items-center justify-center">

          {/* Central Logo Circle */}
          <div className="relative z-20">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 blur-xl" style={{
                width: '140%',
                height: '140%',
                left: '-20%',
                top: '-20%',
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }} />
              <div className="relative p-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                <div className="w-44 h-44 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center shadow-2xl p-3 sm:p-4 overflow-hidden">
                  <div className="flex flex-col items-center justify-center -mt-6 sm:-mt-10 lg:-mt-12">
                    <img
                      src={dealoAgentLogo}
                      alt="DealoAgent AI"
                      className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                    />
                    <div className="flex items-center gap-2 -mt-4 sm:-mt-8 scale-75 sm:scale-80 lg:scale-90 origin-center">
                      <span className="text-white font-semibold tracking-tight inline-flex items-center text-xl sm:text-2xl lg:text-[36px]" style={{ height: '48px' }}>
                        DealoAgent
                      </span>
                      <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                        <span className="font-semibold text-white text-xl sm:text-2xl lg:text-[36px]">AI</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              <linearGradient id="blueGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#93c5fd', stopOpacity: 0.3 }} />
              </linearGradient>
              <linearGradient id="purpleGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#c4b5fd', stopOpacity: 0.3 }} />
              </linearGradient>
              <linearGradient id="greenGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#6ee7b7', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>

            <line x1="50%" y1="50%" x2="40%" y2="18%" stroke="url(#blueGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
            <line x1="50%" y1="50%" x2="60%" y2="18%" stroke="url(#blueGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.2s' }} />

            <line x1="50%" y1="50%" x2="14%" y2="20%" stroke="url(#blueGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" />
            <line x1="50%" y1="50%" x2="14%" y2="35%" stroke="url(#blueGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" style={{ animationDelay: '0.3s' }} />
            <line x1="50%" y1="50%" x2="14%" y2="50%" stroke="url(#blueGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" style={{ animationDelay: '0.6s' }} />
            <line x1="50%" y1="50%" x2="14%" y2="65%" stroke="url(#blueGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" style={{ animationDelay: '0.9s' }} />

            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#blueGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" />
            <line x1="50%" y1="50%" x2="20%" y2="35%" stroke="url(#blueGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" style={{ animationDelay: '0.3s' }} />
            <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="url(#blueGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" style={{ animationDelay: '0.6s' }} />
            <line x1="50%" y1="50%" x2="20%" y2="65%" stroke="url(#blueGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" style={{ animationDelay: '0.9s' }} />

            <line x1="50%" y1="50%" x2="86%" y2="27%" stroke="url(#purpleGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" style={{ animationDelay: '0.2s' }} />
            <line x1="50%" y1="50%" x2="86%" y2="45%" stroke="url(#purpleGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" style={{ animationDelay: '0.5s' }} />
            <line x1="50%" y1="50%" x2="86%" y2="63%" stroke="url(#purpleGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse hidden sm:block" style={{ animationDelay: '0.8s' }} />

            <line x1="50%" y1="50%" x2="80%" y2="27%" stroke="url(#purpleGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" style={{ animationDelay: '0.2s' }} />
            <line x1="50%" y1="50%" x2="80%" y2="45%" stroke="url(#purpleGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" style={{ animationDelay: '0.5s' }} />
            <line x1="50%" y1="50%" x2="80%" y2="63%" stroke="url(#purpleGrad2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-pulse sm:hidden" style={{ animationDelay: '0.8s' }} />

            <line x1="50%" y1="50%" x2="25%" y2="90%" stroke="url(#greenGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <line x1="50%" y1="50%" x2="40%" y2="90%" stroke="url(#greenGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <line x1="50%" y1="50%" x2="60%" y2="90%" stroke="url(#greenGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            <line x1="50%" y1="50%" x2="75%" y2="90%" stroke="url(#greenGrad2)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          </svg>

          {/* TOP - YOU AND YOUR TEAM */}
          <div className="absolute top-5 sm:top-6 lg:top-8 left-1/2 -translate-x-1/2 flex flex-row gap-1.5 sm:gap-4 z-10">
            {topUserItems.map((item, idx) => (
              <div key={idx} className="w-28 sm:w-40">
                <IntegrationItem {...item} />
              </div>
            ))}
          </div>

          {/* LEFT SIDE - CONNECTORS */}
          <div className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 sm:gap-4 w-28 sm:w-44 z-10">
            {connectorItems.map((item, idx) => (
              <IntegrationItem key={idx} {...item} />
            ))}
          </div>

          {/* RIGHT SIDE - EXTERNAL DATA */}
          <div className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 sm:gap-4 w-28 sm:w-44 z-10">
            {externalDataItems.map((item, idx) => (
              <IntegrationItem key={idx} {...item} />
            ))}
          </div>

          {/* BOTTOM - AGENTS */}
          <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 -translate-x-1/2 flex flex-row gap-0.5 sm:gap-4 z-10">
            {agentItems.map((item, idx) => (
              <div key={idx} className="w-[82px] sm:w-36">
                <IntegrationItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
