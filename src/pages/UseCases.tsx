import { Navigation } from "../Router";
import { IndustryUseCases } from "../components/IndustryUseCases";

export default function UseCases() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-20">
                <IndustryUseCases />
            </main>
        </div>
    );
}
