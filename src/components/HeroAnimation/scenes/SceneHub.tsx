import { SceneProps } from '../types';
import { MessageSquare, Database, Sparkles } from 'lucide-react';

export function SceneHub(_props: SceneProps) {
  return (
    <div className="absolute inset-0 z-40 flex justify-center items-center px-4 pt-8">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-3xl" />
      <div className="relative w-full max-w-5xl aspect-video sm:aspect-[2/1] rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-2xl overflow-hidden flex flex-row">
        {/* Sidebar */}
        <div className="w-16 sm:w-56 bg-slate-50/90 border-r border-gray-200/50 p-3 sm:p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-6 mt-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-800 text-lg hidden sm:inline tracking-tight">DealoAgent</span>
          </div>
          <div className="space-y-2">
            <div className="h-9 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center sm:justify-start px-3 text-blue-700 text-sm font-semibold">
              <MessageSquare className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Unified Inbox</span>
            </div>
            <div className="h-9 rounded-lg flex items-center justify-center sm:justify-start px-3 text-gray-600 text-sm">
              <Database className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">CRM Knowledge</span>
            </div>
          </div>
        </div>

        {/* Main panel */}
        <div className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-white/95 to-blue-50/50 flex flex-col">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-2xl font-bold text-gray-900">The Converged Workspace</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">All tools, emails, and insights in one place.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
            <div className="bg-white rounded-xl border border-gray-100 p-4">
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">Priority</span>
              <p className="text-sm font-semibold text-gray-800 mt-2">Acme Corp Enterprise Deal</p>
              <div className="mt-3 space-y-2">
                <div className="h-2 bg-gray-100 rounded-full w-full" />
                <div className="h-2 bg-gray-100 rounded-full w-4/5" />
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 text-white">
              <div className="flex items-center gap-2 mb-2 text-slate-300">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-semibold uppercase">Insights</span>
              </div>
              <p className="text-sm leading-snug">C-Level engagement up 40% after automated follow-ups.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
