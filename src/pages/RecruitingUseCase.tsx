import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function RecruitingUseCase() {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>AI for Recruiting Agencies - DealoAgent.ai</title>
                <meta name="description" content="Automate candidate screening, parsing, and outreach with DealoAgent.ai. See how recruiters save 70% of admin time." />
                <link rel="canonical" href="https://dealoagent.ai/usecases/recruiting/" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-indigo-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            AI for Recruiting Agencies
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-indigo-100">
                            See how DealoAgent transforms the recruiting process for recruiters, sales teams, and agency owners.
                        </p>
                    </div>
                </div>

                {/* Case 1: Recruiter */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                    <span className="font-semibold">The Recruiter</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Focus on candidates, not admin
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Manual CV Processing:</strong> Candidates send PDFs or Docs that I have to manually convert and compare against vacancy skills.
                                            </li>
                                            <li>
                                                <strong>Fragmented Data Collection:</strong> I chase information across emails, messengers, and calls to fill vacancy forms. It's endless manual cycles, and I never know if a profile is truly complete.
                                            </li>
                                            <li>
                                                <strong>Redundant Interviews:</strong> I waste time in voice interviews asking questions about information the candidate already provided but I missed.
                                            </li>
                                            <li>
                                                <strong>Research Nightmare:</strong> Digging into candidate backgrounds manually is time-consuming and overwhelming.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Automated Parsing:</strong> All documents are converted on the fly from emails, messengers, or chats and instantly connected to the candidate.
                                            </li>
                                            <li>
                                                <strong>Smart Gap Filling:</strong> AI generates specific questions to fill missing vacancy details (even for candidates who ignore points), ensuring 100% completeness.
                                            </li>
                                            <li>
                                                <strong>Intelligent Interview Prep:</strong> AI analyzes all past info to suggest the EXACT questions I need. Voice call transcripts automatically fill any remaining unclear info.
                                            </li>
                                            <li>
                                                <strong>Deep Insights:</strong> Integrated deep research automatically adds special focusing points to the candidate report.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            "And good news, no need to wait for approval from the top or long integration decisions. I just started using it alone, and it works like a charm."
                                        </p>
                                        <Button
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            Register Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                        alt="Sarah Jenkins"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                                            alt="Sarah Jenkins"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                                            <p className="text-sm text-gray-500">Recruiter at TalentFlow Agency</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "It's like having a team of 5 assistants working 24/7. My placement rate has doubled in just 3 months."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 2: Sales (Recruiting) */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 mb-6">
                                    <span className="font-semibold">Sales & Business Development</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Predictable pipeline, personalized outreach
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Manual Prospecting:</strong> I spent hours manually hunting for companies hiring for roles we cover. It was a slow, hit-or-miss process.
                                            </li>
                                            <li>
                                                <strong>Generic Outreach:</strong> To hit my numbers, I had to send generic "spray and pray" emails. Personalization was impossible at scale, so response rates were low.
                                            </li>
                                            <li>
                                                <strong>Lost Context:</strong> When a lead finally replied, I'd scramble to find past notes or emails. I often walked into calls blindly, forgetting key details from months ago.
                                            </li>
                                            <li>
                                                <strong>Missed Follow-ups:</strong> I relied on memory or sticky notes to follow up. Valuable leads constantly slipped through the cracks.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>AI-Driven Targeting:</strong> DealoAgent identifies high-intent leads using integrated databases with 750M+ verified emails and tracks companies matching your niche who just posted relevant jobs.
                                            </li>
                                            <li>
                                                <strong>Hyper-Personalization:</strong> AI uses 'hidden facts' search to uncover lead mentions online, creating 100% personalized messages that reference specific roles, company news, and our top candidates.
                                            </li>
                                            <li>
                                                <strong>Unified Intelligence:</strong> Every email, call, and LinkedIn message is analyzed. I get a "cheat sheet" before every interaction with full context and suggested talking points.
                                            </li>
                                            <li>
                                                <strong>Smart Re-engagement:</strong> The system alerts me when a dormant lead shows buying signals (like visiting our site or posting a new role) and drafts the perfect re-opening line.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            "And good news, no need to wait for approval from the top or long integration decisions. I just started using it alone, and it works like a charm."
                                        </p>
                                        <Button
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            Register Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative lg:order-1">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                        alt="Michael Chen"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
                                            alt="Michael Chen"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Michael Chen</h4>
                                            <p className="text-sm text-gray-500">Sales Lead at TalentFlow Agency</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "I've moved from chasing leads to managing a steady stream of qualified meetings. My commission checks have never been higher."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 3: CEO/Owner */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 mb-6">
                                    <span className="font-semibold">CEO / Agency Owner</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Scale without headcount
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">Before DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Operational Black Box:</strong> I relied on weekly manual reports to understand what was happening. By the time I saw the data, it was often too late to fix issues.
                                            </li>
                                            <li>
                                                <strong>Performance Blind Spots:</strong> It was hard to distinguish between busy work and actual progress. I couldn't easily tell who was performing and who needed help without digging through CRM logs.
                                            </li>
                                            <li>
                                                <strong>Reactive Management:</strong> Correcting an employee's approach required sitting in on calls or reviewing random emails. I was always reacting to problems rather than preventing them.
                                            </li>
                                            <li>
                                                <strong>Fragmented Oversight:</strong> Sales and recruiting data were disconnected, making it impossible to get a unified view of the agency's health.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">After DealoAgent</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            <li>
                                                <strong>Conversational Intelligence:</strong> I simply chat with the AI to get real-time status updates. "Show me the sales pipeline" or "Visualize team activity" generates instant diagrams and reports.
                                            </li>
                                            <li>
                                                <strong>Performance Clarity:</strong> The AI identifies top performers and those struggling based on actual conversation outcomes, not just activity metrics.
                                            </li>
                                            <li>
                                                <strong>Scalable Coaching:</strong> I can instantly correct course. The AI analyzes communication styles and highlights areas for individual improvement, allowing me to provide specific, timely feedback.
                                            </li>
                                            <li>
                                                <strong>Proactive Leadership:</strong> I have a 24/7 pulse on every prospect and employee. I can spot trends and steer the ship with data-backed confidence.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            "And the best part? No special technical deployment was required. We simply connected our communication channels, and it started delivering value immediately."
                                        </p>
                                        <Button
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            Register Now
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
                                        alt="Elena Rodriguez"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100"
                                            alt="Elena Rodriguez"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">Elena Rodriguez</h4>
                                            <p className="text-sm text-gray-500">CEO of TalentFlow Agency</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "DealoAgent gave us the operational leverage we needed to grow. It's the best investment I've made for my business."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Features Pipeline */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                <span className="font-semibold">Future Roadmap</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                Coming Soon to DealoAgent
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                We're constantly innovating. Here is a sneak peek at the powerful features currently in our development pipeline.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* Feature 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.159 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 AI Screening Bot</h3>
                                <p className="text-gray-600">
                                    An always-on assistant that validates candidate knowledge and screens applicants around the clock, ensuring you never miss top talent.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Question Generator</h3>
                                <p className="text-gray-600">
                                    AI analyzes vacancy details to automatically generate precise, role-specific interview questions to assess technical and soft skills.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Avatar Interviews</h3>
                                <p className="text-gray-600">
                                    Conduct preliminary video interviews with a realistic AI avatar that interacts naturally with candidates, saving your team hours of call time.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Profile Analysis</h3>
                                <p className="text-gray-600">
                                    Deep analysis of candidate responses to detect potential fraud, evaluate emotional intelligence, and build comprehensive psychological profiles.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-indigo-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">Ready to transform your recruiting agency?</h2>
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
