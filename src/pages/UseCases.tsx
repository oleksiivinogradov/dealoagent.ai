import { Navigation } from "../Router";
import { IndustryUseCases } from "../components/IndustryUseCases";
import { Helmet } from "react-helmet-async";

export default function UseCases() {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Industry Use Cases - DealoAgent.ai</title>
                <meta name="description" content="Discover how DealoAgent.ai transforms sales, recruiting, and research workflows across different industries with AI-powered intelligence." />
                <link rel="canonical" href="https://dealoagent.ai/usecases/" />
            </Helmet>
            <Navigation />
            <main className="pt-20">
                <IndustryUseCases />
            </main>
        </div>
    );
}
