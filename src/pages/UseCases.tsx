import { Navigation } from "../Router";
import { IndustryUseCases } from "../components/IndustryUseCases";
import { Helmet } from "react-helmet-async";

import { useTranslation } from "react-i18next";

export default function UseCases() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>{t('useCasesIndex.helmet.title')}</title>
                <meta name="description" content={t('useCasesIndex.helmet.description')} />
                <link rel="canonical" href="https://dealoagent.ai/usecases/" />
            </Helmet>
            <Navigation />
            <main className="pt-20">
                <IndustryUseCases />
            </main>
        </div>
    );
}
