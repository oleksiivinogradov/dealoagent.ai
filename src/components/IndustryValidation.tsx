
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export function IndustryValidation() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Dark Gradient Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">

                    {/* Background glow effects */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

                    <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">

                        {/* Quote Side */}
                        <div>
                            <div className="flex items-start gap-4 mb-8">
                                <div className="h-24 w-24 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg flex-shrink-0 bg-white/5">
                                    <img src="/andrew-ng.png" alt="Andrew Ng" className="h-full w-full object-cover" />
                                </div>
                                <Quote className="h-10 w-10 text-blue-400/50" />
                            </div>

                            <blockquote className="text-xl sm:text-2xl font-light text-blue-50 leading-relaxed mb-8">
                                "{t('industry_validation.quote.text')}"
                            </blockquote>

                            <div>
                                <div className="font-bold text-white text-lg">{t('industry_validation.quote.author')}</div>
                                <div className="text-blue-400 font-medium text-sm">{t('industry_validation.quote.credentials')}</div>
                            </div>
                        </div>

                        {/* Analysis Side */}
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50">

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-white mb-2 text-lg">{t('industry_validation.analysis.layer.title')}</h4>
                                    <p className="text-blue-200/80 mb-4 font-light">
                                        {t('industry_validation.analysis.layer.description')}
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                                        {t('industry_validation.analysis.layer.dealoBadge')}
                                    </div>
                                </div>

                                <div className="h-px bg-slate-700/50"></div>

                                <div>
                                    <h4 className="font-semibold text-white/90 mb-1">{t('industry_validation.analysis.infraInference.title')}</h4>
                                    <p className="text-slate-400 text-sm">
                                        {t('industry_validation.analysis.infraInference.description')}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white/90 mb-1">{t('industry_validation.analysis.infraTraining.title')}</h4>
                                    <p className="text-slate-400 text-sm">
                                        {t('industry_validation.analysis.infraTraining.description')}
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
