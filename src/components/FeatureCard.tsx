import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function FeatureCard({ icon: Icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-indigo-500 hover:shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative">
        <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-3">
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="mb-3">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
