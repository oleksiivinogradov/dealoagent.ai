import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  value?: string;
  delay?: number;
  className?: string;
}

export function FloatingCard({ icon: Icon, title, subtitle, value, delay = 0, className = "" }: FloatingCardProps) {
  return (
    <div
      style={{ animationDelay: `${delay}s` }}
      className={`animate-fade-in-up rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="rounded-lg bg-white/20 p-2">
            <Icon className="h-5 w-5 text-white" />
          </div>
        )}
        <div className="flex-1">
          <div className="text-white/90">{title}</div>
          {subtitle && <div className="text-sm text-white/60">{subtitle}</div>}
        </div>
        {value && (
          <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {value}
          </div>
        )}
      </div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  delay?: number;
  className?: string;
}

export function MetricCard({ label, value, trend, delay = 0, className = "" }: MetricCardProps) {
  return (
    <div
      style={{ animationDelay: `${delay}s`, position: 'relative', top: '-40px' }}
      className={`animate-fade-in-scale rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl ${className}`}
    >
      <div className="mb-1 text-sm text-white/70">{label}</div>
      <div className="mb-1 text-white">{value}</div>
      {trend && (
        <div className="flex items-center gap-1 text-sm text-green-400">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          {trend}
        </div>
      )}
    </div>
  );
}