import { useState, useRef, useEffect } from 'react';
import {
    Search,
    Database,
    Mail,
    ArrowRight,
    Bot,
    Sparkles,
    GripVertical,
    Users,
    Settings,
    Globe,
    MousePointer2,
    AlertCircle,
    X
} from 'lucide-react';

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

export function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    // --- Animation State: Old Approach ---
    const [oldStep, setOldStep] = useState(0);
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
    const [isClicking, setIsClicking] = useState(false);

    // --- Animation State: New Approach ---
    const [convoIndex, setConvoIndex] = useState(0);
    const [typingText, setTypingText] = useState("");
    const [showResponse, setShowResponse] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    // --- Handlers for Slider ---
    const handleMouseDown = () => { isDragging.current = true; };
    const handleMouseUp = () => { isDragging.current = false; };
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

    // --- Global Event Listeners & Slider Animation ---
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
                // Slow sine wave: 8s period, range 35-65%
                const newPosition = 50 + Math.sin(elapsed / 2000) * 35;
                setSliderPosition(newPosition);
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

    // --- Old Approach Animation Loop ---
    useEffect(() => {
        // Sequence of cursor movements and window spawns
        // 0: Start
        // 1: Move to "Search"
        // 2: Click -> Open Search Window
        // 3: Move to "Data"
        // 4: Click -> Open Data Window
        // 5: Move to "Email"
        // 6: Click -> Open Email Window (Chaos)
        // 7: Move to "Error"
        // 8: Click -> Error Popup
        // 9: Reset
        const sequence = [
            { x: 50, y: 50, delay: 1000 }, // Start
            { x: 20, y: 30, delay: 800 },  // Move to Search
            { x: 20, y: 30, click: true, delay: 300 }, // Click
            { x: 80, y: 40, delay: 800 },  // Move to Data
            { x: 80, y: 40, click: true, delay: 300 }, // Click
            { x: 40, y: 70, delay: 800 },  // Move to Email
            { x: 40, y: 70, click: true, delay: 300 }, // Click
            { x: 60, y: 60, delay: 800 },  // Move to random
            { x: 60, y: 60, click: true, delay: 2000 }, // Click Error & Wait
        ];

        let currentStep = 0;
        let timeoutId: NodeJS.Timeout;

        const runSequence = () => {
            const step = sequence[currentStep];

            // Move cursor
            setCursorPos({ x: step.x, y: step.y });

            // Handle click
            if (step.click) {
                setIsClicking(true);
                setTimeout(() => {
                    setIsClicking(false);
                    setOldStep(prev => prev + 1); // Advance window state
                }, 150);
            }

            // Schedule next
            timeoutId = setTimeout(() => {
                currentStep++;
                if (currentStep >= sequence.length) {
                    currentStep = 0;
                    setOldStep(0); // Reset windows
                }
                runSequence();
            }, step.delay);
        };

        runSequence();
        return () => clearTimeout(timeoutId);
    }, []);

    // --- New Approach Animation Loop ---
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const typeCharacter = (text: string, index: number) => {
            if (index <= text.length) {
                setTypingText(text.slice(0, index));
                setIsTyping(true);
                // Random typing speed
                timeoutId = setTimeout(() => typeCharacter(text, index + 1), 30 + Math.random() * 50);
            } else {
                setIsTyping(false);
                // Finished typing, wait then show response
                timeoutId = setTimeout(() => {
                    setShowResponse(true);
                    // Wait reading time then next conversation
                    timeoutId = setTimeout(() => {
                        setConvoIndex(prev => (prev + 1) % CONVERSATIONS.length);
                        setTypingText("");
                        setShowResponse(false);
                    }, 3000);
                }, 800);
            }
        };

        const startConversation = () => {
            const currentConvo = CONVERSATIONS[convoIndex];
            // Wait a bit before starting typing
            timeoutId = setTimeout(() => {
                typeCharacter(currentConvo.query, 0);
            }, 500);
        };

        startConversation();
        return () => clearTimeout(timeoutId);
    }, [convoIndex]);

    const currentConvo = CONVERSATIONS[convoIndex];

    return (
        <section className="py-12 sm:pt-4 sm:pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 sm:mb-12 text-center">
                    <div className="mb-4 sm:mb-6">
                        <span className="inline-block rounded-full bg-indigo-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700">
                            Experience the Difference
                        </span>
                    </div>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
                        See how DealoAgent transforms your sales workflow from complex and manual to simple and conversational.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize ring-1 ring-gray-200"
                    onMouseDown={handleMouseDown}
                    onTouchMove={handleTouchMove}
                >
                    {/* RIGHT SIDE - NEW APPROACH (Background Layer) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
                        <div className="absolute top-8 right-0 w-1/2 text-center z-10">
                            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-wider">
                                NEW APPROACH
                            </span>
                        </div>

                        {/* Chat Interface Mockup */}
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
                                    <div className="flex items-center gap-2 text-gray-400 bg-gray-50 px-2 py-1 rounded-md transition-all duration-300">
                                        <Globe className="w-4 h-4" />
                                        <span className="text-xs font-medium transition-all duration-300 w-4 text-center inline-block">{currentConvo.lang}</span>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="p-4 space-y-4 bg-gray-50/50 flex-1 overflow-y-auto">
                                    {/* User Message (Typing) */}
                                    <div className="flex justify-end min-h-[40px]">
                                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%] text-sm shadow-sm transition-all duration-200">
                                            {typingText}
                                            {isTyping && <span className="animate-pulse">|</span>}
                                        </div>
                                    </div>

                                    {/* AI Response */}
                                    <div className={`flex justify-start transition-all duration-500 ${showResponse ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                        <div className="bg-white border border-gray-200 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[90%] text-sm shadow-sm space-y-3 w-full">
                                            <div className="flex items-center gap-2 text-blue-600 font-medium text-xs uppercase tracking-wide">
                                                <Sparkles className="w-3 h-3" />
                                                {currentConvo.lang === 'EN' ? 'Analysis Complete' :
                                                    currentConvo.lang === 'ES' ? 'Borrador Listo' : 'Analyse Abgeschlossen'}
                                            </div>

                                            {/* Dynamic Content based on Response Type */}
                                            {currentConvo.responseType === 'list' && (
                                                <>
                                                    <p>I found 3 companies matching your criteria:</p>
                                                    <div className="space-y-2">
                                                        {currentConvo.responseContent.map((item: any, i: number) => (
                                                            <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors cursor-pointer">
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

                    {/* LEFT SIDE - OLD APPROACH (Foreground Layer, Clipped) */}
                    <div
                        className="absolute inset-0 bg-[#FDF6E3] flex flex-col"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <div className="absolute top-8 left-0 w-1/2 text-center z-10">
                            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-sm tracking-wider">
                                OLD APPROACH
                            </span>
                        </div>

                        <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center items-center opacity-80 relative">
                            {/* Old CRM Mockup - Complex and Cluttered */}
                            <div className="w-full max-w-2xl h-[400px] bg-white border border-gray-300 rounded shadow-sm relative overflow-hidden">
                                {/* Sidebar */}
                                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-100 border-r border-gray-200 flex flex-col items-center py-4 gap-4 z-20">
                                    <div className="w-8 h-8 bg-gray-300 rounded"></div>
                                    <div className="w-full h-px bg-gray-200"></div>
                                    <Database className={`w-5 h-5 transition-colors ${oldStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`} />
                                    <Users className={`w-5 h-5 transition-colors ${oldStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`} />
                                    <Mail className={`w-5 h-5 transition-colors ${oldStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`} />
                                    <Settings className="w-5 h-5 text-gray-400 mt-auto" />
                                </div>

                                {/* Main Content Area - Cluttered */}
                                <div className="absolute left-16 top-0 right-0 bottom-0 p-4 bg-gray-50 overflow-hidden">
                                    <div className="flex gap-2 mb-4 border-b border-gray-200 pb-2">
                                        <div className="text-xs font-bold text-gray-600 px-2 py-1 bg-white border border-gray-300 rounded-t">Dashboard</div>
                                        <div className="text-xs text-gray-400 px-2 py-1">Leads</div>
                                        <div className="text-xs text-gray-400 px-2 py-1">Reports</div>
                                    </div>

                                    <div className="relative w-full h-full">
                                        {/* Window 1: Search (Appears at step 1) */}
                                        <div className={`absolute top-0 left-0 w-64 bg-white border border-gray-300 rounded shadow-sm p-3 transition-all duration-300 ${oldStep >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Search className="w-3 h-3 text-gray-400" />
                                                    <span className="text-[10px] font-bold text-gray-600">Advanced Search</span>
                                                </div>
                                                <X className="w-3 h-3 text-gray-300" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-4 bg-gray-100 rounded w-full"></div>
                                                <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                                                <div className="flex gap-1">
                                                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                                                    <div className="h-4 bg-blue-600/20 rounded w-1/2"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Window 2: Data (Appears at step 2) */}
                                        <div className={`absolute top-12 left-24 w-64 bg-white border border-gray-300 rounded shadow-md p-3 transition-all duration-300 ${oldStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Database className="w-3 h-3 text-gray-400" />
                                                    <span className="text-[10px] font-bold text-gray-600">Data View #102</span>
                                                </div>
                                                <X className="w-3 h-3 text-gray-300" />
                                            </div>
                                            <div className="space-y-1">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="h-2 bg-gray-100 rounded w-full"></div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Window 3: Email (Appears at step 3) */}
                                        <div className={`absolute top-24 left-12 w-72 bg-white border border-gray-300 rounded shadow-lg p-3 transition-all duration-300 ${oldStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                            <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-3 h-3 text-gray-400" />
                                                    <span className="text-[10px] font-bold text-gray-600">Email Editor</span>
                                                </div>
                                                <X className="w-3 h-3 text-gray-300" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-16 border border-gray-200 rounded w-full bg-gray-50"></div>
                                                <div className="flex justify-end gap-2">
                                                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                                                    <div className="h-4 bg-blue-600 rounded w-12"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Window 4: Error (Appears at step 4) */}
                                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-red-50 border border-red-200 rounded-lg shadow-xl p-4 transition-all duration-200 ${oldStep >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                            <div className="flex flex-col items-center text-center gap-2">
                                                <AlertCircle className="w-8 h-8 text-red-500" />
                                                <span className="text-xs font-bold text-red-800">Connection Timeout</span>
                                                <p className="text-[10px] text-red-600">Please refresh the page and try again.</p>
                                                <div className="h-6 bg-red-200 rounded w-20 mt-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Cursor */}
                                <div
                                    className="absolute pointer-events-none transition-all duration-500 ease-in-out z-50"
                                    style={{
                                        left: `${cursorPos.x}%`,
                                        top: `${cursorPos.y}%`,
                                        transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`
                                    }}
                                >
                                    <MousePointer2 className="w-6 h-6 text-black fill-white drop-shadow-md" />
                                    {isClicking && (
                                        <div className="absolute -top-2 -left-2 w-10 h-10 rounded-full border-2 border-blue-400 animate-ping opacity-50"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SLIDER HANDLE */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-0 bottom-0 -left-[1px] w-[3px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
                            <GripVertical className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
