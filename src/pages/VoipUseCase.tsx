
import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import {
    ArrowRight,
    Phone,
    Server,
    Bot,
    Globe,
    Activity
} from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

function TypingEffect({ onPhraseChange }: { onPhraseChange: (index: number) => void }) {
    const { t } = useTranslation();
    const phrases = [
        t('voipUseCase.dashboard.phrases.0'),
        t('voipUseCase.dashboard.phrases.1'),
        t('voipUseCase.dashboard.phrases.2'),
        t('voipUseCase.dashboard.phrases.3')
    ];
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        onPhraseChange(phraseIndex);
        const currentPhrase = phrases[phraseIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentPhrase.substring(0, text.length + 1));
                if (text.length === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setText(currentPhrase.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? 30 : 50);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, phraseIndex, phrases, onPhraseChange]);

    return (
        <div className="relative">
            <input
                type="text"
                readOnly
                value={text}
                className="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block p-4 shadow-sm"
                placeholder={t('voipUseCase.dashboard.placeholder')}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500 animate-pulse">
                <span className="inline-block w-2 H-5 bg-indigo-500 ml-1">|</span>
            </div>
        </div>
    );
}

export default function VoipUseCase() {
    const { t } = useTranslation();
    const [activePhraseIndex, setActivePhraseIndex] = useState(0);

    const responses = [
        { text: t('voipUseCase.dashboard.responses.0'), type: "alert" },
        { text: t('voipUseCase.dashboard.responses.1'), type: "list" },
        { text: t('voipUseCase.dashboard.responses.2'), type: "list" },
        { text: t('voipUseCase.dashboard.responses.3'), type: "graph" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>{t('voipUseCase.helmet.title')}</title>
                <meta name="description" content={t('voipUseCase.helmet.description')} />
                <link rel="canonical" href="https://dealoagent.ai/usecases/voip/" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-indigo-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-800/50 border border-indigo-700 px-4 py-2 text-indigo-100 mb-6">
                            <Activity className="h-4 w-4" />
                            <span className="text-sm font-medium">{t('voipUseCase.header.badge')}</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            {t('voipUseCase.header.title')}
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-indigo-100">
                            {t('voipUseCase.header.description')}
                        </p>
                    </div>
                </div>

                {/* Technical Schema Section */}
                <section className="py-16 bg-indigo-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900">{t('voipUseCase.technical.title')}</h2>
                            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                                {t('voipUseCase.technical.description')}
                            </p>
                        </div>

                        <div className="relative py-12">
                            {/* Horizontal Line Row 1 */}
                            <div className="hidden lg:block absolute top-[25%] left-[20%] right-[20%] h-0.5 bg-indigo-100 z-0" />
                            {/* Vertical Line from IXC to DealoAgent */}
                            <div className="hidden lg:block absolute top-[25%] left-1/2 w-0.5 h-[50%] bg-indigo-100 -translate-x-1/2 z-0" />

                            <div className="flex flex-col gap-16 relative z-10">
                                {/* Row 1: Voice Flow */}
                                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24">
                                    {/* Node 1: Voice PBX */}
                                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center w-64 z-10 relative">
                                        <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-600">
                                            <Phone className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{t('voipUseCase.technical.nodes.pbx.title')}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{t('voipUseCase.technical.nodes.pbx.description')}</p>
                                    </div>

                                    {/* Node 2: Voip Routing & Billing (Center) */}
                                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center w-64 ring-2 ring-indigo-500 ring-offset-2 z-10 relative">
                                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                                            <ArrowRight className="h-6 w-6 text-indigo-300" />
                                        </div>
                                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
                                            <ArrowRight className="h-6 w-6 text-indigo-300" />
                                        </div>

                                        <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                                            <Server className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{t('voipUseCase.technical.nodes.routing.title')}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{t('voipUseCase.technical.nodes.routing.description')}</p>
                                        <span className="mt-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{t('voipUseCase.technical.nodes.routing.tag')}</span>
                                    </div>

                                    {/* Node 3: SIP Traffic Routing */}
                                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center w-64 z-10 relative">
                                        <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                            <Globe className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">{t('voipUseCase.technical.nodes.sip.title')}</h3>
                                        <p className="text-sm text-gray-500 mt-2">{t('voipUseCase.technical.nodes.sip.description')}</p>
                                    </div>
                                </div>

                                {/* Row 2: DealoAgent (Below IXC) */}
                                <div className="flex justify-center">
                                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg flex flex-col items-center text-center text-white transform md:scale-105 transition-transform w-80 z-10 relative">
                                        <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                                            <Bot className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-white">{t('voipUseCase.technical.nodes.ai.title')}</h3>
                                        <p className="text-sm text-indigo-100 mt-2">{t('voipUseCase.technical.nodes.ai.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Build Your Own Dashboard Section */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-8">
                            <span className="font-semibold">{t('voipUseCase.dashboard.badge')}</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            {t('voipUseCase.dashboard.title')}
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            {t('voipUseCase.dashboard.description')}
                        </p>

                        <div className="relative max-w-3xl mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 transform rotate-1"></div>
                            <div className="relative bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden text-left">
                                {/* Fake Browser Header */}
                                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="ml-4 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-500 flex-1 text-center font-mono">
                                        dealoagent.ai/voip-analytics
                                    </div>
                                </div>

                                {/* Chat Interface */}
                                <div className="p-8 min-h-[300px] flex flex-col justify-end bg-slate-50">
                                    <div className="space-y-6">
                                        {/* AI Response Example 1 */}
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">
                                                <Bot className="h-5 w-5" />
                                            </div>
                                            <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm max-w-[80%]">
                                                <p className="text-gray-800 text-sm mb-3 whitespace-pre-line">
                                                    {responses[activePhraseIndex].text}
                                                </p>
                                                {/* Dynamic Fake Chart/Content */}
                                                {responses[activePhraseIndex].type === 'graph' && (
                                                    <div className="h-32 bg-gray-50 rounded-lg flex items-end gap-2 p-2 px-4 border border-gray-100">
                                                        <div className="w-1/5 bg-red-200 h-[60%] rounded-t"></div>
                                                        <div className="w-1/5 bg-red-300 h-[50%] rounded-t"></div>
                                                        <div className="w-1/5 bg-red-400 h-[40%] rounded-t"></div>
                                                        <div className="w-1/5 bg-red-500 h-[30%] rounded-t"></div>
                                                        <div className="w-1/5 bg-red-600 h-[20%] rounded-t"></div>
                                                    </div>
                                                )}
                                                {responses[activePhraseIndex].type === 'list' && (
                                                    <ul className="text-xs text-gray-600 space-y-1">
                                                        <li className="flex justify-between border-b pb-1"><span>1. Tata Comm</span> <span className="font-bold text-green-500">High Quality</span></li>
                                                        <li className="flex justify-between border-b pb-1"><span>2. Voxbone</span> <span className="font-bold text-green-500">Best Margin</span></li>
                                                        <li className="flex justify-between"><span>3. BICS</span> <span className="font-bold text-green-500">Stable</span></li>
                                                    </ul>
                                                )}
                                                {responses[activePhraseIndex].type === 'alert' && (
                                                    <div className="bg-red-50 border border-red-100 rounded p-2 text-xs text-red-700">
                                                        <div className="font-bold mb-1">ASR Critical Alert</div>
                                                        <p>Route ID #8821 dropped below 20% ASR.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* User Query Input (Animated) */}
                                        <div className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 shrink-0">
                                                <span className="font-bold text-xs">{t('callCenterUseCase.dashboard.you')}</span>
                                            </div>
                                            <div className="flex-1">
                                                <TypingEffect onPhraseChange={setActivePhraseIndex} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 1: Traffic Manager */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                    <span className="font-semibold">{t('voipUseCase.trafficManager.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('voipUseCase.trafficManager.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('voipUseCase.trafficManager.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`voipUseCase.trafficManager.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('voipUseCase.trafficManager.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`voipUseCase.trafficManager.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/voip_traffic_manager.png"
                                        alt="VoIP Traffic Manager Dashboard"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <p className="text-gray-700 italic">
                                        {t('voipUseCase.trafficManager.quote')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 2: VoIP Business Owner / CEO */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 mb-6">
                                    <span className="font-semibold">{t('voipUseCase.owner.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('voipUseCase.owner.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('voipUseCase.owner.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`voipUseCase.owner.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('voipUseCase.owner.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`voipUseCase.owner.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="relative lg:order-1">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/voip_ceo.png"
                                        alt="VoIP Business CEO"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <p className="text-gray-700 italic">
                                        {t('voipUseCase.owner.quote')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-indigo-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">{t('voipUseCase.cta.title')}</h2>
                        <Button
                            size="lg"
                            className="bg-white text-indigo-900 hover:bg-gray-100"
                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                        >
                            {t('voipUseCase.cta.button')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
