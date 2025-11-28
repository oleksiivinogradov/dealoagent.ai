import { Quote } from "lucide-react";

export function CitationSection() {
    return (
        <section className="py-12 sm:py-24 bg-white relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        {/* Image */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <img
                                    src="/andrew-ng.png"
                                    alt="Andrew Ng"
                                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-white/10 shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="mt-4 text-center lg:text-left">
                                    <h3 className="text-white font-semibold text-lg">Andrew Ng</h3>
                                    <p className="text-blue-200/60 text-sm">AI Pioneer</p>
                                    <p className="text-blue-200/40 text-xs">Co-founder of Coursera, Google Brain</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-6">
                            <Quote className="h-10 w-10 text-blue-500/50" />

                            <div className="space-y-4 text-blue-50/90 text-lg sm:text-xl leading-relaxed font-light">
                                <p>
                                    "Is there an AI bubble? With the massive number of dollars going into AI infrastructure such as OpenAI’s $1.4 trillion plan and Nvidia briefly reaching a $5 trillion market cap, many have asked if speculation and hype have driven the values of AI investments above sustainable values. However, AI isn’t monolithic, and different areas look bubbly to different degrees."
                                </p>

                                <div className="pl-4 border-l-2 border-blue-500/30 space-y-3 my-6">
                                    <div className="bg-blue-500/10 p-4 rounded-r-xl border border-blue-500/20 transition-all hover:bg-blue-500/20">
                                        <p className="font-medium text-white mb-1">AI application layer:</p>
                                        <p className="mb-2">There is underinvestment. The potential is still much greater than most realize.</p>
                                        <div className="inline-flex items-center gap-2 text-sm text-blue-300 bg-blue-950/50 px-3 py-1.5 rounded-full border border-blue-500/30">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                            </span>
                                            DealoAgent operates in this layer
                                        </div>
                                    </div>

                                    <p>
                                        <span className="text-blue-200 font-medium">AI infrastructure for inference:</span> This still needs significant investment.
                                    </p>

                                    <p>
                                        <span className="text-blue-200 font-medium">AI infrastructure for model training:</span> I’m still cautiously optimistic about this sector, but there could also be a bubble."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
