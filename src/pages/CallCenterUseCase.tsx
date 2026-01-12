import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import {
    ArrowRight,
    Phone,
    Server,
    Mic,
    Bot,
    ShieldAlert,
    Zap,
    BarChart3,
    MessageCircle,
    Headphones
} from "lucide-react";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

function TypingEffect({ onPhraseChange }: { onPhraseChange: (index: number) => void }) {
    const phrases = [
        "Show me agents with highest Script Deviation this week...",
        "Graph the correlation between Hold Time and CSAT...",
        "Who are the top performers in the Retention campaign?",
        "List calls where 'compliance' was missed last hour..."
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
                placeholder="Ask anything..."
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-500 animate-pulse">
                <span className="inline-block w-2 H-5 bg-indigo-500 ml-1">|</span>
            </div>
        </div>
    );
}

export default function CallCenterUseCase() {
    const [activePhraseIndex, setActivePhraseIndex] = useState(0);

    const responses = [
        { text: "Here are the top 5 agents with highest script deviation (>5%):", type: "list" },
        { text: "Here is the correlation analysis for Hold Time vs CSAT (Last 30 days):", type: "graph" },
        { text: "Top 3 Performers in Retention Campaign by Save Rate:", type: "list" },
        { text: "Found 4 calls with missed 'Mini-Miranda' disclosure in the last hour:", type: "alert" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>AI for Call Centers & BPOs - DealoAgent.ai</title>
                <meta name="description" content="AI-First Contact Center Intelligence. Slash AHT, boost FCR, and optimize Occupancy with 100% QA coverage." />
                <link rel="canonical" href="https://dealoagent.ai/usecases/callcenter/" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-indigo-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-800/50 border border-indigo-700 px-4 py-2 text-indigo-100 mb-6">
                            <Headphones className="h-4 w-4" />
                            <span className="text-sm font-medium">New: BPO & Contact Center AI</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            AI-First Contact Center Intelligence
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-indigo-100">
                            Slash AHT, boost FCR, and optimize Occupancy. 100% QA coverage to reduce Shrinkage and drive Adherence.
                        </p>
                    </div>
                </div>

                {/* Technical Schema Section */}
                <section className="py-16 bg-indigo-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-gray-900">Seamless Integration Architecture</h2>
                            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                                Zero latency recording with no quality loss. No custom APIs or complex infrastructure changes required—simply place the recorder, register it in DealoAgent, and you're live.
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
                                        <h3 className="font-bold text-gray-900">Voice PBX</h3>
                                        <p className="text-sm text-gray-500 mt-2">Your existing telephony</p>
                                    </div>

                                    {/* Node 2: IXC Softswitch (Center) */}
                                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center w-64 ring-2 ring-indigo-500 ring-offset-2 z-10 relative">
                                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
                                            <ArrowRight className="h-6 w-6 text-indigo-300" />
                                        </div>
                                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block">
                                            <ArrowRight className="h-6 w-6 text-indigo-300" />
                                        </div>

                                        <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                                            <Mic className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">IXC Softswitch</h3>
                                        <p className="text-sm text-gray-500 mt-2">High-fidelity Recording Box</p>
                                        <span className="mt-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">No quality loss</span>
                                    </div>

                                    {/* Node 3: Voice Terminator */}
                                    <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm flex flex-col items-center text-center w-64 z-10 relative">
                                        <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                                            <Server className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-gray-900">Voice Terminator</h3>
                                        <p className="text-sm text-gray-500 mt-2">SIP Traffic routing</p>
                                    </div>
                                </div>

                                {/* Row 2: DealoAgent (Below IXC) */}
                                <div className="flex justify-center">
                                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg flex flex-col items-center text-center text-white transform md:scale-105 transition-transform w-80 z-10 relative">
                                        <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                                            <Bot className="h-8 w-8" />
                                        </div>
                                        <h3 className="font-bold text-white">DealoAgent AI</h3>
                                        <p className="text-sm text-indigo-100 mt-2">Processing, Understanding & Scoring</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Features Grid */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900">Deep Call Analytics & QA</h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                Automate your Quality Assurance to audit 100% of interactions. Optimize AHT and drive FCR with data.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <Zap className="h-10 w-10 text-amber-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Real-Time Adherence & Assist</h3>
                                <p className="text-gray-600">
                                    Live tactical playbooks guide agents to reduce Wrap-up time and boost CSAT/NPS.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <ShieldAlert className="h-10 w-10 text-red-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">100% QA & Compliance Checks</h3>
                                <p className="text-gray-600">
                                    Full audit of every interaction. Flag prohibited language and ensure script adherence across all calls.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <Headphones className="h-10 w-10 text-indigo-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Automated Coaching</h3>
                                <p className="text-gray-600">
                                    Slash ramp time with automated coaching that identifies AHT outliers and winning phrases.
                                </p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <MessageCircle className="h-10 w-10 text-blue-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">BPO Intelligence</h3>
                                <p className="text-gray-600">
                                    Chat with your data to uncover Shrinkage causes and Occupancy trends. "Show me agents with high Hold Time."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data & Leaderboard Section */}
                <section className="py-16 bg-slate-900 text-white overflow-hidden">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">

                            {/* Sample Review Card */}
                            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-2xl">
                                <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">Agent Performance Review</h3>
                                        <p className="text-slate-400 text-sm">Session ID: #8821 • Agent 498</p>
                                    </div>
                                    <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/20">
                                        Score: 0.45 (Satisfied)
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-700/50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-400 mb-1">Script Deviation</p>
                                            <p className="text-2xl font-bold text-red-400">0.4%</p>
                                            <p className="text-xs text-slate-500">Critical Alert</p>
                                        </div>
                                        <div className="bg-slate-700/50 p-4 rounded-lg">
                                            <p className="text-sm text-slate-400 mb-1">FCR & CSAT Uplift</p>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl font-bold">0.45</span>
                                                <ArrowRight className="h-4 w-4 text-slate-500" />
                                                <span className="text-xl font-bold text-green-400">30.3%</span>
                                            </div>
                                            <p className="text-xs text-slate-500">Satisfied Rate</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-slate-300 mb-4">AHT Breakdown (min)</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span>Agent Talk Time</span>
                                                    <span>276.7 min</span>
                                                </div>
                                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 w-[69%]"></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-xs mb-1">
                                                    <span>Customer Talk Time</span>
                                                    <span>122.7 min</span>
                                                </div>
                                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-purple-500 w-[31%]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-slate-300 mb-4">Emotion Mix (&gt;10%)</h4>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-xs text-slate-400 mb-2">Agent Emotions</p>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-400"></div>Neutral</span>
                                                        <span>45.5%</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div>Happy</span>
                                                        <span>26.7%</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div>Sad</span>
                                                        <span>24.8%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-400 mb-2">Customer Emotions</p>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400"></div>Happy</span>
                                                        <span>38.8%</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400"></div>Sad</span>
                                                        <span>27.2%</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gray-400"></div>Neutral</span>
                                                        <span>24.8%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Leaderboard & Insights */}
                            <div className="flex flex-col justify-center h-full">
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 text-blue-400 px-4 py-2 border border-blue-500/20 mb-6 w-fit">
                                    <BarChart3 className="h-4 w-4" />
                                    <span className="font-semibold">Live Team Leaderboard</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-6">Gamify performance with transparent metrics</h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Identify your top performers instantly. DealoAgent tracks nuanced metrics like "Script Adherence" and "Customer Satisfaction Rate" to give you a true picture of productivity beyond just call counts.
                                </p>

                                <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                                    <div className="p-4 border-b border-slate-700 bg-slate-800/50">
                                        <h3 className="font-semibold">Weekly Top Performers</h3>
                                    </div>
                                    <div className="divide-y divide-slate-700">
                                        <div className="p-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-8 w-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold">1</div>
                                                <div>
                                                    <p className="font-medium">agent_13</p>
                                                    <p className="text-xs text-slate-400">Top Satisfaction Rate</p>
                                                </div>
                                            </div>
                                            <div className="text-green-400 font-bold">38.9%</div>
                                        </div>
                                        <div className="p-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-8 w-8 rounded-full bg-slate-600/20 text-slate-400 flex items-center justify-center font-bold">2</div>
                                                <div>
                                                    <p className="font-medium">agent_2</p>
                                                    <p className="text-xs text-slate-400">Lowest Script Deviation</p>
                                                </div>
                                            </div>
                                            <div className="text-blue-400 font-bold">0.2%</div>
                                        </div>
                                        <div className="p-4 flex items-center justify-between hover:bg-slate-700/30 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-8 w-8 rounded-full bg-slate-600/20 text-slate-400 flex items-center justify-center font-bold">3</div>
                                                <div>
                                                    <p className="font-medium">agent_5</p>
                                                    <p className="text-xs text-slate-400">Best Average Score</p>
                                                </div>
                                            </div>
                                            <div className="text-purple-400 font-bold">0.54</div>
                                        </div>
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
                            <span className="font-semibold">Natural Language BI</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Build your own dashboard
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                            Stop waiting for data analysts. Just ask DealoAgent to visualize any metric, trend, or anomaly in seconds.
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
                                        dealoagent.ai/analytics
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
                                                <p className="text-gray-800 text-sm mb-3">
                                                    {responses[activePhraseIndex].text}
                                                </p>
                                                {/* Dynamic Fake Chart/Content */}
                                                {responses[activePhraseIndex].type === 'graph' && (
                                                    <div className="h-32 bg-gray-50 rounded-lg flex items-end gap-2 p-2 px-4 border border-gray-100">
                                                        <div className="w-1/5 bg-indigo-200 h-[40%] rounded-t"></div>
                                                        <div className="w-1/5 bg-indigo-300 h-[60%] rounded-t"></div>
                                                        <div className="w-1/5 bg-indigo-400 h-[80%] rounded-t"></div>
                                                        <div className="w-1/5 bg-indigo-500 h-[50%] rounded-t"></div>
                                                        <div className="w-1/5 bg-indigo-600 h-[70%] rounded-t"></div>
                                                    </div>
                                                )}
                                                {responses[activePhraseIndex].type === 'list' && (
                                                    <ul className="text-xs text-gray-600 space-y-1">
                                                        <li className="flex justify-between border-b pb-1"><span>1. Agent 492</span> <span className="font-bold text-red-500">8.2%</span></li>
                                                        <li className="flex justify-between border-b pb-1"><span>2. Agent 301</span> <span className="font-bold text-red-500">6.1%</span></li>
                                                        <li className="flex justify-between"><span>3. Agent 118</span> <span className="font-bold text-red-500">5.8%</span></li>
                                                    </ul>
                                                )}
                                                {responses[activePhraseIndex].type === 'alert' && (
                                                    <div className="bg-red-50 border border-red-100 rounded p-2 text-xs text-red-700">
                                                        <div className="font-bold mb-1">Critical Compliance Alert</div>
                                                        <p>Call ID #9923, #9911, #8843 missed mandatory disclosure.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* User Query Input (Animated) */}
                                        <div className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 shrink-0">
                                                <span className="font-bold text-xs">YOU</span>
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

                {/* Case 1: Agent */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                    <span className="font-semibold">The Agent</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Empowered, not monitored
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>QA Anxiety:</strong> I was constantly worried about skipping a mandatory disclosure or compliance statement.
                                            </li>
                                            <li>
                                                <strong>Escalation Fatigue:</strong> Without a playbook, I'd freeze when customers got angry, leading to long hold times and escalations.
                                            </li>
                                            <li>
                                                <strong>Delayed Coaching:</strong> I'd get feedback on my calls weeks later, when the context was already lost.
                                            </li>
                                            <li>
                                                <strong>KPI Uncertainty:</strong> I didn't know my AHT or CSAT standing until the monthly view.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Real-time Guardrails:</strong> The system alerts me instantly if I miss a script requirement, so I can fix it live on the call.
                                            </li>
                                            <li>
                                                <strong>Winning Playbooks:</strong> I get live suggestions to turn "neutral" interactions into "happy" ones, boosting my CSAT.
                                            </li>
                                            <li>
                                                <strong>Daily Micro-Goals:</strong> I see my FCR and AHT targets in real-time, with clips of my best moments.
                                            </li>
                                            <li>
                                                <strong>Automated Coaching:</strong> The AI identifies my specific strengths and gaps, offering bite-sized coaching tips every morning.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/call_center_floor_busy.png"
                                        alt="Call Center Agent Floor"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <p className="text-gray-700 italic">
                                        "I feel much more confident knowing the system has my back. My customer satisfaction scores went up 30% in the first month."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 2: Owner / CEO */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 mb-6">
                                    <span className="font-semibold">BPO Owner / CEO</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Total visibility, zero blind spots
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>1% QA Sample Liability:</strong> QA could only listen to 1% of calls. We had massive blind spot exposure on 99% of interactions.
                                            </li>
                                            <li>
                                                <strong>Blind Spot Exposure:</strong> We only found out about compliance breaches or prohibited language usage when a client complained.
                                            </li>
                                            <li>
                                                <strong>Biased QA Scoring:</strong> Performance reviews were subjective and inconsistent, based on random call samples.
                                            </li>
                                            <li>
                                                <strong>Unclear Seat Utilization:</strong> It was hard to track true Occupancy and justify headcount efficiency to clients.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>100% QA Audit:</strong> AI scores and audits EVERY single call. We know exactly what is happening in real-time across the entire floor.
                                            </li>
                                            <li>
                                                <strong>Compliance Firewall:</strong> We can search across all transcripts for "risky promises" or specific prohibited terms to mitigate liability.
                                            </li>
                                            <li>
                                                <strong>Occupancy & Shrinkage Insights:</strong> Leaderboards based on "AHT" and "Adherence" let us reward true productivity.
                                            </li>
                                            <li>
                                                <strong>Natural Language BPO Queries:</strong> I can ask "Show me the trend of happy customers this month" and get an instant chart to share with stakeholders.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="relative lg:order-1">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/call_center_manager_dashboard.png"
                                        alt="BPO Manager Dashboard"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <p className="text-gray-700 italic">
                                        "We moved from reactive damage control to proactive quality engineering. Operations are finally transparent."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-indigo-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">Ready to upgrade your Call Center?</h2>
                        <Button
                            size="lg"
                            className="bg-white text-indigo-900 hover:bg-gray-100"
                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                        >
                            Get Started Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
