import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function IndustryUseCases() {
    return (
        <section id="use-cases" className="py-12 sm:pt-4 sm:pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 sm:mb-12 text-center">
                    <div className="mb-4 sm:mb-6">
                        <span className="inline-block rounded-full bg-indigo-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700">
                            Use Cases (per industry)
                        </span>
                    </div>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
                        Discover how DealoAgent transforms operations for specific industries.
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
                    {/* Recruiting Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">🤝</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">Recruiting</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            Streamline candidate sourcing, screening, and client management. See how recruiters, sales reps, and agency owners leverage AI to place more candidates.
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => window.location.href = '/usecases/recruiting'}
                        >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Software Sales Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">💻</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">Software Sales</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            Accelerate deal cycles and improve forecast accuracy. Empower sales managers and CEOs with real-time intelligence and automated CRM updates.
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => window.location.href = '/usecases/softwaresales'}
                        >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Venture Capital Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">🦄</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">Venture Capital</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            Automate due diligence and portfolio monitoring. Give analysts superpowers and help partners never miss a unicorn.
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => window.location.href = '/usecases/vcresearch'}
                        >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
