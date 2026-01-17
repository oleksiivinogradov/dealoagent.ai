
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle2, Users, Briefcase, Share2, Zap, Globe, ShieldCheck, Trophy } from "lucide-react";

export function PartnersPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/partners_hero.png"
                        alt="DealoAgent Partnership"
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-medium text-blue-100">DealoAgent Partner Program</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Partner with the AI CRM <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            that sells itself
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100/80 sm:text-xl">
                        Join the fastest-growing AI sales ecosystem. Whether you're a system integrator, reseller, or affiliate, we provide the technology and incentives to fuel your growth.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 text-lg hover:from-blue-700 hover:to-purple-700"
                            onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                        >
                            Become a Partner
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="min-w-[200px] border-white/20 bg-white/10 text-lg text-white hover:bg-white/20"
                            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Programs
                        </Button>
                    </div>
                </div>
            </section>

            {/* Partner Programs Grid */}
            <section id="programs" className="py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Comparison Table */}
                    <div className="mb-24 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
                        <div className="bg-slate-900 p-6 sm:p-8 text-center">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Why Partners Choose DealoAgent</h2>
                            <p className="mt-2 text-blue-200">See how we stack up against the competition</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Program Benefit</th>
                                        <th className="px-6 py-4 font-bold text-blue-600 bg-blue-50/50">DealoAgent</th>
                                        <th className="px-6 py-4">HubSpot</th>
                                        <th className="px-6 py-4">Apollo.io</th>
                                        <th className="px-6 py-4">Clay</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Revenue Share (Year 1)</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">30%</td>
                                        <td className="px-6 py-4">20%</td>
                                        <td className="px-6 py-4">20%</td>
                                        <td className="px-6 py-4">-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Revenue Share (Year 2)</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">20%</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Revenue Share (Year 3)</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">10%</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Flat Bounty</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">$60 (Enterprise), $10 (Pro)</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">$50 (Pro only)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Multi-Tier Referral</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">Yes (Earn from network)</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                        <td className="px-6 py-4">-</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">Payout Terms</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">Net 30 Monthly</td>
                                        <td className="px-6 py-4">Quarterly</td>
                                        <td className="px-6 py-4">Net 30 Monthly</td>
                                        <td className="px-6 py-4">Net 90 (First), then Monthly</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Choose Your Partnership Path</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            We've designed flexible programs tailored to your business model. Find the perfect fit and start growing with us.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Solution Partners */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">Solution Partners</h3>
                            <p className="mb-6 text-sm text-gray-600">
                                For agencies, consultancies, and system integrators. Implement DealoAgent for your clients and earn ongoing revenue share plus service fees.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> 30% (Y1), 20% (Y2), 10% (Y3) share</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Implementation revenue</li>
                                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Dedicated partner manager</li>
                            </ul>
                        </div>

                        {/* Resellers */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">Resellers</h3>
                            <p className="mb-6 text-sm text-gray-600">
                                For software dealers and VARs. Bundle DealoAgent with your existing portfolio. High margins and volume-based incentives.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> Huge recurring revenue potential vs one-time sales</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> Sell your own support & integration services</li>
                            </ul>
                        </div>

                        {/* Affiliates */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <Share2 className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">Affiliates</h3>
                            <p className="mb-6 text-sm text-gray-600">
                                For content creators, influencers, and community leaders. Share your unique link and earn for every signup. No caps.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> $60 flat bounty per Enterprise sub</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> $10 flat bounty per Pro sub</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> 30% (Y1), 20% (Y2), 10% (Y3) share</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> Earn from your network's referrals</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                                Why Partner with DealoAgent?
                            </h2>
                            <p className="mb-8 text-lg text-gray-600">
                                We're building the future of sales. Our partners are crucial to that mission, and we treat them like co-founders.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3">
                                        <Globe className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold text-gray-900">Massive Market Opportunity</h4>
                                        <p className="text-gray-600">The AI CRM market is exploding. Position yourself as a leader by offering the most advanced tool.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-purple-100 p-3">
                                        <Trophy className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold text-gray-900">High Retention Product</h4>
                                        <p className="text-gray-600">Our stickiness means your recurring revenue grows and stays. Users love the "chat to sell" experience.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
                                        <ShieldCheck className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold text-gray-900">Partner-First Support</h4>
                                        <p className="text-gray-600">Get direct access to our product team, priority support for your clients, and dedicated resources.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Abstract visual representation of partnership */}
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-purple-800 p-8 shadow-2xl relative overflow-hidden text-white flex flex-col justify-center items-center text-center">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <h3 className="text-4xl font-bold mb-4 relative z-10">3.2x</h3>
                                <p className="text-xl opacity-90 mb-8 relative z-10">Average ROI for Partners in Year 1</p>
                                <div className="w-full h-px bg-white/20 mb-8 relative z-10"></div>
                                <h3 className="text-4xl font-bold mb-4 relative z-10">24/7</h3>
                                <p className="text-xl opacity-90 relative z-10">Priority Partner Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 py-20 text-center">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Ready to grow together?</h2>
                    <p className="mb-8 text-xl text-blue-100/80">
                        Apply now to join the DealoAgent Partner Network. We review applications within 24 hours.
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg"
                        onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                    >
                        Apply to Become a Partner
                    </Button>
                </div>
            </section>
        </div>
    );
}
