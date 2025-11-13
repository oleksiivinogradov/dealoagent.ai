import { useMemo } from "react";

export function Logo({ variant = "light", className = "" }: { variant?: "light" | "dark"; className?: string }) {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";
  const uniqueId = useMemo(() => `logo-${Math.random().toString(36).substr(2, 9)}`, []);
  
  return (
    <div className={`relative inline-flex items-center ${className}`} style={{ paddingTop: '0' }}>
      {/* Text with the full name */}
      <span className={`${textColor} font-semibold tracking-tight inline-flex items-center text-xl sm:text-2xl lg:text-[36px]`} style={{ height: '48px' }}>DealoAgent</span>
    </div>
  );
}

export function AIBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 ${className}`} style={{ width: '40px', height: '40px', flexShrink: 0 }}>
      <span className="font-semibold text-white text-xl sm:text-2xl lg:text-[36px]">AI</span>
    </div>
  );
}