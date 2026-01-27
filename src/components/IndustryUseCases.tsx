import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export function IndustryUseCases() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const getPath = (path: string) => {
        const lang = i18n.language;
        if (lang === 'en') return path;
        return `/${lang}${path}`;
    };

    const handleNavigate = (path: string) => {
        navigate(getPath(path));
    };

    return (
        <section id="use-cases" className="py-12 sm:pt-4 sm:pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 sm:mb-12 text-center">
                    <div className="mb-4 sm:mb-6">
                        <span className="inline-block rounded-full bg-indigo-100 px-4 sm:px-8 py-2 sm:py-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700">
                            {t('industryUseCases.title')}
                        </span>
                    </div>
                    <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-xl text-gray-600 px-4">
                        {t('industryUseCases.subtitle')}
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6 lg:gap-8 lg:grid-cols-2">
                    {/* Recruiting Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">🤝</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">{t('industryUseCases.recruiting.title')}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            {t('industryUseCases.recruiting.description')}
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => handleNavigate('/usecases/recruiting')}
                        >
                            {t('industryUseCases.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* SaaS Sales Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">💻</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">{t('industryUseCases.saas.title')}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            {t('industryUseCases.saas.description')}
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => handleNavigate('/usecases/softwaresales')}
                        >
                            {t('industryUseCases.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Venture Capital Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">🦄</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">{t('industryUseCases.vc.title')}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            {t('industryUseCases.vc.description')}
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => handleNavigate('/usecases/vcresearch')}
                        >
                            {t('industryUseCases.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Call Center Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">🎧</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">{t('industryUseCases.callCenter.title')}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            {t('industryUseCases.callCenter.description')}
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => handleNavigate('/usecases/callcenter')}
                        >
                            {t('industryUseCases.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* VoIP Wholesale Card */}
                    <div className="rounded-2xl sm:rounded-3xl border-2 border-indigo-200 bg-indigo-50/50 p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col">
                        <div className="mb-4 sm:mb-6 flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl flex-shrink-0">📡</span>
                            <h3 className="text-indigo-900 text-xl sm:text-2xl break-words">{t('industryUseCases.voip.title')}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-6 flex-grow">
                            {t('industryUseCases.voip.description')}
                        </p>
                        <Button
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            onClick={() => handleNavigate('/usecases/voip')}
                        >
                            {t('industryUseCases.learnMore')}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    );
}
