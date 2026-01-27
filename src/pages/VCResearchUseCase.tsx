import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

export default function VCResearchUseCase() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>{t('vcUseCase.helmet.title')}</title>
                <meta name="description" content={t('vcUseCase.helmet.description')} />
                <link rel="canonical" href="https://dealoagent.ai/usecases/vcresearch/" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-indigo-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            {t('vcUseCase.header.title')}
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-indigo-100">
                            {t('vcUseCase.header.description')}
                        </p>
                    </div>
                </div>

                {/* Case 1: VC Research Analyst */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                    <span className="font-semibold">{t('vcUseCase.roles.analyst.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('vcUseCase.roles.analyst.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('vcUseCase.roles.analyst.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`vcUseCase.roles.analyst.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('vcUseCase.roles.analyst.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`vcUseCase.roles.analyst.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            {t('vcUseCase.roles.analyst.quote')}
                                        </p>
                                        <Button
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            {t('vcUseCase.cta.button')}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
                                        alt="Investment Analyst"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=100"
                                            alt="Investment Analyst"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t('vcUseCase.roles.analyst.testimonial.name')}</h4>
                                            <p className="text-sm text-gray-500">{t('vcUseCase.roles.analyst.testimonial.role')}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        {t('vcUseCase.roles.analyst.testimonial.text')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case 2: VC CEO / Partner */}
                <section className="py-16 sm:py-24 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center lg:flex-row-reverse">
                            <div className="lg:order-2">
                                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-purple-700 mb-6">
                                    <span className="font-semibold">{t('vcUseCase.roles.partner.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('vcUseCase.roles.partner.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('vcUseCase.roles.partner.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`vcUseCase.roles.partner.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('vcUseCase.roles.partner.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`vcUseCase.roles.partner.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            {t('vcUseCase.roles.partner.quote')}
                                        </p>
                                        <Button
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            {t('vcUseCase.cta.button')}
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="relative lg:order-1">
                                <div className="aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                                        alt="VC Partner"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-sm border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                                            alt="VC Partner"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900">{t('vcUseCase.roles.partner.testimonial.name')}</h4>
                                            <p className="text-sm text-gray-500">{t('vcUseCase.roles.partner.testimonial.role')}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        {t('vcUseCase.roles.partner.testimonial.text')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Features Pipeline */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 mb-6">
                                <span className="font-semibold">{t('vcUseCase.roadmap.badge')}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {t('vcUseCase.roadmap.title')}
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                {t('vcUseCase.roadmap.subtitle')}
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {/* Feature 1 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('vcUseCase.roadmap.features.scoring.title')}</h3>
                                <p className="text-gray-600">
                                    {t('vcUseCase.roadmap.features.scoring.description')}
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('vcUseCase.roadmap.features.termsheet.title')}</h3>
                                <p className="text-gray-600">
                                    {t('vcUseCase.roadmap.features.termsheet.description')}
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('vcUseCase.roadmap.features.headhunting.title')}</h3>
                                <p className="text-gray-600">
                                    {t('vcUseCase.roadmap.features.headhunting.description')}
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('vcUseCase.roadmap.features.prediction.title')}</h3>
                                <p className="text-gray-600">
                                    {t('vcUseCase.roadmap.features.prediction.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-indigo-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">{t('vcUseCase.cta.title')}</h2>
                        <Button
                            size="lg"
                            className="bg-white text-indigo-900 hover:bg-gray-100"
                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                        >
                            {t('vcUseCase.cta.button')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
