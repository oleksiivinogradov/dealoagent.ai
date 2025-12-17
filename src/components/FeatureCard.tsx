import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, features, className }: FeatureCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 transition-all hover:border-indigo-500 hover:shadow-xl ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-6 inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3 shadow-lg shadow-indigo-500/30">
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-6 text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 rounded-xl bg-white/60 p-3 border border-indigo-100 hover:border-indigo-300 hover:bg-white hover:shadow-sm transition-all">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                <svg
                  className="h-3 w-3 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-700 leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
