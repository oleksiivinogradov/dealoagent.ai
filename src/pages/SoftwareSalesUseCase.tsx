import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function SoftwareSalesUseCase() {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>AI for Software Sales - DealoAgent.ai</title>
                <meta name="description" content="Accelerate your sales cycle and win more deals with AI-powered intelligence for managers and executives." />
                <link rel="canonical" href="https://dealoagent.ai/usecases/softwaresales" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-blue-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            AI for Software Sales
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-blue-100">
                            Accelerate your sales cycle and win more deals with AI-powered intelligence for managers and executives.
                        </p>
                    </div>
                </div>

                {/* Case 1: Sales Manager */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 mb-6">
                                    <span className="font-semibold">Sales Manager</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Real-time visibility & coaching
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-2">Before DealoAgent</h3>
                                        <p className="text-gray-700">
                                            "My team was spending more time entering data into the CRM than actually selling. Forecasts were inaccurate because data was always missing or outdated."
                                        </p>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-2">After DealoAgent</h3>
                                        <p className="text-gray-700">
                                            "DealoAgent automatically updates the CRM from emails and calls. I have real-time visibility into every deal and can coach my team effectively."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
                                        alt="David Miller"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                                            alt="David Miller"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">David Miller</h4>
                                            <p className="text-sm text-gray-500">Sales Manager at CloudScale Solutions</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "The visibility I have now is incredible. I can spot risks early and guide my team to close more deals. It's a game-changer."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 2: CEO */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 mb-6">
                                    <span className="font-semibold">CEO / Founder</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Win against bigger competitors
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-2">Before DealoAgent</h3>
                                        <p className="text-gray-700">
                                            "We were losing deals to competitors we didn't even know about. Our sales cycle was too long, and our CAC was getting out of control."
                                        </p>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-2">After DealoAgent</h3>
                                        <p className="text-gray-700">
                                            "DealoAgent provides competitive intelligence that helps us position our product better. We're closing deals faster and winning against bigger competitors."
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative lg:order-1">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                                        alt="Jennifer Wu"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100"
                                            alt="Jennifer Wu"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Jennifer Wu</h4>
                                            <p className="text-sm text-gray-500">CEO at CloudScale Solutions</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "DealoAgent leveled the playing field for us. We're now punching above our weight class and winning enterprise deals we wouldn't have touched before."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">Ready to scale your software sales?</h2>
                        <Button
                            size="lg"
                            className="bg-white text-blue-900 hover:bg-gray-100"
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
