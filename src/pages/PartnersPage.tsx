
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle2, Users, Briefcase, Share2, Zap, Globe, ShieldCheck, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export function PartnersPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>DealoAgent Partner Program | AI CRM Partnership</title>
                <meta name="description" content="Join the DealoAgent Partner Program. Whether you're a reseller, affiliate, or solution partner, earn high commissions with the fastest growing AI CRM." />
            </Helmet>
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
                        <span className="text-sm font-medium text-blue-100">{t('partnersPage.hero.badge')}</span>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        {t('partnersPage.hero.title')} <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {t('partnersPage.hero.titleGradient')}
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100/80 sm:text-xl">
                        {t('partnersPage.hero.description')}
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 text-lg hover:from-blue-700 hover:to-purple-700"
                            onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                        >
                            {t('partnersPage.hero.cta.becomePartner')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="min-w-[200px] border-white/20 bg-white/10 text-lg text-white hover:bg-white/20"
                            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('partnersPage.hero.cta.explore')}
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
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('partnersPage.comparison.title')}</h2>
                            <p className="mt-2 text-blue-200">{t('partnersPage.comparison.subtitle')}</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">{t('partnersPage.comparison.headers.benefit')}</th>
                                        <th className="px-6 py-4 font-bold text-blue-600 bg-blue-50/50">{t('partnersPage.comparison.headers.dealo')}</th>
                                        <th className="px-6 py-4">{t('partnersPage.comparison.headers.hubspot')}</th>
                                        <th className="px-6 py-4">{t('partnersPage.comparison.headers.apollo')}</th>
                                        <th className="px-6 py-4">{t('partnersPage.comparison.headers.clay')}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{t('partnersPage.comparison.rows.revShareY1')}</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">{t('partnersPage.comparison.values.y1_30')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.y1_20')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.y1_20')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{t('partnersPage.comparison.rows.revShareY2')}</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">{t('partnersPage.comparison.values.y2_20')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{t('partnersPage.comparison.rows.revShareY3')}</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">{t('partnersPage.comparison.values.y3_10')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{t('partnersPage.comparison.rows.bounty')}</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">{t('partnersPage.comparison.values.bountyVal')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.bountyClay')}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{t('partnersPage.comparison.rows.referral')}</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">{t('partnersPage.comparison.values.referralYes')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.dash')}</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50/50">
                                        <td className="px-6 py-4 font-medium text-gray-900">{t('partnersPage.comparison.rows.terms')}</td>
                                        <td className="px-6 py-4 font-bold text-blue-700 bg-blue-50/50">{t('partnersPage.comparison.values.termsNet30')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.termsQuarterly')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.termsNet30')}</td>
                                        <td className="px-6 py-4">{t('partnersPage.comparison.values.termsNet90')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">{t('partnersPage.programs.title')}</h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            {t('partnersPage.programs.description')}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Solution Partners */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('partnersPage.programs.solution.title')}</h3>
                            <p className="mb-6 text-sm text-gray-600">
                                {t('partnersPage.programs.solution.description')}
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {(t('partnersPage.programs.solution.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> {benefit}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Resellers */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('partnersPage.programs.resellers.title')}</h3>
                            <p className="mb-6 text-sm text-gray-600">
                                {t('partnersPage.programs.resellers.description')}
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {(t('partnersPage.programs.resellers.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> {benefit}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Affiliates */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <Share2 className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-gray-900">{t('partnersPage.programs.affiliates.title')}</h3>
                            <p className="mb-6 text-sm text-gray-600">
                                {t('partnersPage.programs.affiliates.description')}
                            </p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                {(t('partnersPage.programs.affiliates.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-1" /> {benefit}</li>
                                ))}
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
                                {t('partnersPage.why.title')}
                            </h2>
                            <p className="mb-8 text-lg text-gray-600">
                                {t('partnersPage.why.description')}
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-blue-100 p-3">
                                        <Globe className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold text-gray-900">{t('partnersPage.why.market.title')}</h4>
                                        <p className="text-gray-600">{t('partnersPage.why.market.description')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-purple-100 p-3">
                                        <Trophy className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold text-gray-900">{t('partnersPage.why.retention.title')}</h4>
                                        <p className="text-gray-600">{t('partnersPage.why.retention.description')}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 rounded-lg bg-green-100 p-3">
                                        <ShieldCheck className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-lg font-semibold text-gray-900">{t('partnersPage.why.support.title')}</h4>
                                        <p className="text-gray-600">{t('partnersPage.why.support.description')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Abstract visual representation of partnership */}
                            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-purple-800 p-8 shadow-2xl relative overflow-hidden text-white flex flex-col justify-center items-center text-center">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <h3 className="text-4xl font-bold mb-4 relative z-10">3.2x</h3>
                                <p className="text-xl opacity-90 mb-8 relative z-10">{t('partnersPage.roi.label')}</p>
                                <div className="w-full h-px bg-white/20 mb-8 relative z-10"></div>
                                <h3 className="text-4xl font-bold mb-4 relative z-10">24/7</h3>
                                <p className="text-xl opacity-90 relative z-10">{t('partnersPage.roi.support')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-900 py-20 text-center">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{t('partnersPage.cta.title')}</h2>
                    <p className="mb-8 text-xl text-blue-100/80">
                        {t('partnersPage.cta.description')}
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg"
                        onClick={() => window.open('https://t.me/alex12alex', '_blank')}
                    >
                        {t('partnersPage.cta.button')}
                    </Button>
                </div>
            </section>
        </div>
    );
}

