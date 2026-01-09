import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function SoftwareSalesUseCase() {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>AI for SaaS Sales - DealoAgent.ai</title>
                <meta name="description" content="Scale your ARR, automate competitor research, and control your sales pipeline from anywhere with DealoAgent.ai." />
                <link rel="canonical" href="https://dealoagent.ai/usecases/softwaresales" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-blue-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            AI for SaaS Sales Teams
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-blue-100">
                            Scale your ARR, automate competitor research, and control your pipeline from anywhere.
                        </p>
                    </div>
                </div>

                {/* Case 1: The Sales Representative */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 mb-6">
                                    <span className="font-semibold">Sales Representative (SDR/AE)</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    100x More Deals, Automated Outreach
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Manual Prospecting:</strong> I wasted hours on LinkedIn manually hunting for leads. My pipeline velocity was dead slow.
                                            </li>
                                            <li>
                                                <strong>Spray & Pray:</strong> To hit quota, I sent generic emails with low open rates. Personalization at scale was impossible.
                                            </li>
                                            <li>
                                                <strong>CRM Data Entry Hell:</strong> Updating the CRM took longer than selling. I missed follow-ups and inadvertently caused churn.
                                            </li>
                                            <li>
                                                <strong>Limited Bandwidth:</strong> I could only handle a few dozen prospects effectively. Scaling up meant burnout.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>AI Outreach & Research:</strong> The AI finds MQLs/SQLs, researches them, and drafts hyper-personalized sequences. I just approve and close.
                                            </li>
                                            <li>
                                                <strong>100x Deal Volume:</strong> I work with significantly more prospects. The AI Assistant handles the grunt work, allowing me to close 100x more deals.
                                            </li>
                                            <li>
                                                <strong>Contextual Intelligence:</strong> Before every demo, I get a "cheat sheet" on the prospect's company news and tech stack.
                                            </li>
                                            <li>
                                                <strong>Automated Follow-ups:</strong> No lead slips through the cracks. The AI manages my entire funnel and nurtures leads automatically.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            "My quota is crushed every month. I focus on closing while the AI handles the prospecting and research."
                                        </p>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            Start Closing More
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/images/saas_sales_rep.png"
                                        alt="Michael Chen - Sales Rep"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="/images/saas_sales_rep.png"
                                            alt="Michael Chen"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Michael Chen</h4>
                                            <p className="text-sm text-gray-500">SDR at TechGrowth</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "I'm booking 5x more demos with less effort. It's like having a dedicated research team."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 2: The Founder */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 mb-6">
                                    <span className="font-semibold">The Founder</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Control Company Results from Anywhere
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Tied to the Desk:</strong> I had to be glued to my laptop to check dashboards. If I traveled, I lost visibility.
                                            </li>
                                            <li>
                                                <strong>Delayed Updates:</strong> I was always chasing the team for status updates via Slack. "Did we close that Enterprise deal?"
                                            </li>
                                            <li>
                                                <strong>Guesswork:</strong> Scaling meant chaos. I didn't know if our new messaging was landing or if we were burning cash on bad channels.
                                            </li>
                                            <li>
                                                <strong>Reactive:</strong> I only found out about missed targets at the end of the month when it was too late to fix.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Telegram Command Center:</strong> I control the company results from Telegram or Web. "Show me today's ARR" gets an instant answer.
                                            </li>
                                            <li>
                                                <strong>Remote Pulse:</strong> Whether I'm at a conference or on the go, I have a realtime pulse on every deal and metric.
                                            </li>
                                            <li>
                                                <strong>AI Assistant Control:</strong> I can instruct the AI to "Prioritize Q3 deals" or "Launch a re-engagement campaign" directly from chat.
                                            </li>
                                            <li>
                                                <strong>Proactive Alerts:</strong> The AI alerts me instantly if key metrics dip, so I can intervene immediately.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            "I run my SaaS from my phone. The AI Assistant acts as my COO, keeping everything on track."
                                        </p>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            Get Full Control
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative lg:order-1">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/images/saas_founder.png"
                                        alt="David Miller - Founder"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="/images/saas_founder.png"
                                            alt="David Miller"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">David Miller</h4>
                                            <p className="text-sm text-gray-500">Founder of SaaSFlow</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "The freedom to control my company's growth from anywhere is priceless. It's true autonomy."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 3: The CEO */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                    <span className="font-semibold">The CEO</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Automated Competitor Research & Team Control
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Competitive Blindness:</strong> Competitors changed pricing or launched features, and we found out weeks later when we lost the deal.
                                            </li>
                                            <li>
                                                <strong>Black Box Sales:</strong> I didn't know *why* we were losing. Was it pricing? Product? Sales skill? The CRM didn't tell the story.
                                            </li>
                                            <li>
                                                <strong>Manual Management:</strong> Managing the sales team was a full-time job—reviewing calls, checking activities, and enforcing process.
                                            </li>
                                            <li>
                                                <strong>Slow Adaptation:</strong> Market shifts happened faster than we could react. Our strategy was always outdated.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Automated Intel:</strong> AI monitors competitors daily. I get comparison tables, feature updates, and pricing shifts automatically.
                                            </li>
                                            <li>
                                                <strong>Realtime Control:</strong> I have automated control over sales results. The AI monitors conversations and guides the team to follow our playbook.
                                            </li>
                                            <li>
                                                <strong>Source of Ideas:</strong> The AI Research capabilities give me a constant stream of new ideas and market gaps to exploit.
                                            </li>
                                            <li>
                                                <strong>Strategic Dominance:</strong> I see exactly why we win or lose. I can pivot our strategy instantly based on real market data.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            "We're winning against competitors 10x our size because we're faster and smarter. DealoAgent is our secret weapon."
                                        </p>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            Dominate Your Market
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="/images/saas_ceo.png"
                                        alt="Jennifer Wu - CEO"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="/images/saas_ceo.png"
                                            alt="Jennifer Wu"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Jennifer Wu</h4>
                                            <p className="text-sm text-gray-500">CEO at CloudScale</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "DealoAgent gives me the clarity and control I need to lead effectively. It's indispensable."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Roadmap */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 mb-6">
                                <span className="font-semibold">Future Roadmap</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Coming Soon to DealoAgent for SaaS
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                We're constantly innovating. Here is a sneak peek at the powerful features currently in our development pipeline.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* Feature 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Negotiation Bot</h3>
                                <p className="text-gray-600">
                                    An AI that can handle initial negotiation rounds, pricing questions, and scheduling, freeing up your closers.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Revenue AI</h3>
                                <p className="text-gray-600">
                                    Forecast your quarter with 99% accuracy. AI analyzes deal sentiment and velocity to predict exactly what will close.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Avatar Training</h3>
                                <p className="text-gray-600">
                                    New reps practice pitches with a realistic AI prospect avatar that raises objections and gives feedback.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Churn Prediction</h3>
                                <p className="text-gray-600">
                                    Analyze usage patterns and communication sentiment to identify at-risk customers before they churn.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">Ready to hyper-scale your SaaS sales?</h2>
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
