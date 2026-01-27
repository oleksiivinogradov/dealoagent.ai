import { Navigation } from "../Router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

export default function SoftwareSalesUseCase() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>{t('saasUseCase.helmet.title')}</title>
                <meta name="description" content={t('saasUseCase.helmet.description')} />
                <link rel="canonical" href="https://dealoagent.ai/usecases/softwaresales/" />
            </Helmet>
            <Navigation />

            <main className="pt-20">
                {/* Header */}
                <div className="bg-blue-900 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            {t('saasUseCase.header.title')}
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-blue-100">
                            {t('saasUseCase.header.description')}
                        </p>
                    </div>
                </div>

                {/* Case 1: The Sales Representative */}
                <section className="py-16 sm:py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700 mb-6">
                                    <span className="font-semibold">{t('saasUseCase.roles.rep.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('saasUseCase.roles.rep.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('saasUseCase.roles.rep.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`saasUseCase.roles.rep.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('saasUseCase.roles.rep.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`saasUseCase.roles.rep.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            {t('saasUseCase.roles.rep.quote')}
                                        </p>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            {t('saasUseCase.roles.rep.cta')}
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
                                            <h4 className="font-bold text-gray-900">{t('saasUseCase.roles.rep.testimonial.name')}</h4>
                                            <p className="text-sm text-gray-500">{t('saasUseCase.roles.rep.testimonial.role')}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        {t('saasUseCase.roles.rep.testimonial.text')}
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
                                    <span className="font-semibold">{t('saasUseCase.roles.founder.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('saasUseCase.roles.founder.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('saasUseCase.roles.founder.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`saasUseCase.roles.founder.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('saasUseCase.roles.founder.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`saasUseCase.roles.founder.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            {t('saasUseCase.roles.founder.quote')}
                                        </p>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            {t('saasUseCase.roles.founder.cta')}
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
                                            <h4 className="font-bold text-gray-900">{t('saasUseCase.roles.founder.testimonial.name')}</h4>
                                            <p className="text-sm text-gray-500">{t('saasUseCase.roles.founder.testimonial.role')}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        {t('saasUseCase.roles.founder.testimonial.text')}
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
                                    <span className="font-semibold">{t('saasUseCase.roles.ceo.badge')}</span>
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    {t('saasUseCase.roles.ceo.title')}
                                </h2>

                                <div className="space-y-8">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-red-900 mb-4">{t('saasUseCase.roles.ceo.before.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`saasUseCase.roles.ceo.before.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                                        <h3 className="font-semibold text-green-900 mb-4">{t('saasUseCase.roles.ceo.after.title')}</h3>
                                        <ul className="space-y-3 text-gray-700 list-disc pl-4">
                                            {[0, 1, 2, 3].map((i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: t(`saasUseCase.roles.ceo.after.items.${i}`) }} />
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-gray-700 italic mb-4">
                                            {t('saasUseCase.roles.ceo.quote')}
                                        </p>
                                        <Button
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                                        >
                                            {t('saasUseCase.roles.ceo.cta')}
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
                                            <h4 className="font-bold text-gray-900">{t('saasUseCase.roles.ceo.testimonial.name')}</h4>
                                            <p className="text-sm text-gray-500">{t('saasUseCase.roles.ceo.testimonial.role')}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        {t('saasUseCase.roles.ceo.testimonial.text')}
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
                                <span className="font-semibold">{t('saasUseCase.roadmap.badge')}</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">
                                {t('saasUseCase.roadmap.title')}
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                                {t('saasUseCase.roadmap.subtitle')}
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
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('saasUseCase.roadmap.features.negotiation.title')}</h3>
                                <p className="text-gray-600">
                                    {t('saasUseCase.roadmap.features.negotiation.description')}
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('saasUseCase.roadmap.features.revenue.title')}</h3>
                                <p className="text-gray-600">
                                    {t('saasUseCase.roadmap.features.revenue.description')}
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('saasUseCase.roadmap.features.avatar.title')}</h3>
                                <p className="text-gray-600">
                                    {t('saasUseCase.roadmap.features.avatar.description')}
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('saasUseCase.roadmap.features.churn.title')}</h3>
                                <p className="text-gray-600">
                                    {t('saasUseCase.roadmap.features.churn.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-blue-900 text-white text-center">
                    <div className="mx-auto max-w-4xl px-4">
                        <h2 className="text-3xl font-bold mb-6">{t('saasUseCase.cta.title')}</h2>
                        <Button
                            size="lg"
                            className="bg-white text-blue-900 hover:bg-gray-100"
                            onClick={() => window.open('https://app.dealoagent.ai', '_blank')}
                        >
                            {t('saasUseCase.cta.button')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    );
}
