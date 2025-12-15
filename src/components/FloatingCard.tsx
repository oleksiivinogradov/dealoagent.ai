import { LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

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

interface ChatBubbleProps {
  question: string;
  answer: React.ReactNode;
  isActive?: boolean;
  onComplete?: () => void;
  className?: string;
}

export function ChatBubble({ question, answer, isActive = false, onComplete, className = "" }: ChatBubbleProps) {
  const [displayedQuestion, setDisplayedQuestion] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];

    const clearAllTimers = () => timers.forEach(clearTimeout);

    if (isActive) {
      // 1. CLEAR STATE immediately when activated (before starting new animation)
      setDisplayedQuestion("");
      setShowAnswer(false);
      setIsTyping(false);
      setIsThinking(false);

      // Start Sequence
      const runSequence = () => {
        // Initial Delay before typing starts
        timers.push(setTimeout(() => {
          typeQuestion(0);
        }, 500));
      };

      const typeQuestion = (index: number) => {
        if (index <= question.length) {
          setDisplayedQuestion(question.slice(0, index));
          setIsTyping(true);
          // Random typing speed (20-50ms)
          timers.push(setTimeout(() => typeQuestion(index + 1), 20 + Math.random() * 30));
        } else {
          setIsTyping(false);
          setIsThinking(true);
          // Thinking time
          timers.push(setTimeout(() => {
            setIsThinking(false);
            setShowAnswer(true);
            // Reading time before notifying completion (keep showing answer)
            timers.push(setTimeout(() => {
              if (onComplete) onComplete();
            }, 4000));
          }, 800));
        }
      };

      runSequence();
    }
    // If !isActive, do nothing. Keep current state (displayed question/answer) as is.

    return () => clearAllTimers();
  }, [isActive, question, onComplete]);

  return (
    <div
      className={`animate-fade-in-up flex w-72 flex-col gap-3 rounded-2xl border border-white/20 bg-slate-900/60 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isActive ? 'scale-105 shadow-blue-500/20 ring-1 ring-blue-500/30' : 'scale-100'} ${className}`}
    >
      {/* User Question */}
      <div className="flex items-start justify-end gap-2">
        <div className={`rounded-2xl rounded-tr-sm bg-blue-600/90 px-3 py-2 text-xs text-white shadow-lg min-h-[34px] flex items-center transition-all duration-300 ${displayedQuestion ? 'opacity-100' : 'opacity-0'}`}>
          {displayedQuestion}
          {isTyping && <span className="animate-pulse ml-1">|</span>}
        </div>
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-slate-700">
          <span className="text-[10px] text-white">ME</span>
        </div>
      </div>

      {/* AI Answer */}
      <div className={`flex items-start gap-2 transition-opacity duration-500 ${showAnswer || isThinking ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
          <span className="text-[9px] font-bold text-white">AI</span>
        </div>
        <div className="flex-1 rounded-2xl rounded-tl-sm bg-slate-700/50 px-3 py-2 text-xs text-blue-100 shadow-lg min-h-[34px] flex items-center">
          {isThinking ? (
            <div className="flex gap-1 px-1">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          ) : (
            showAnswer && answer
          )}
        </div>
      </div>
    </div>
  );
}