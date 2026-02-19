import { ArrowUp } from "lucide-react";

export function ProductHuntWidget() {
    return (
        <a
            href="https://www.producthunt.com/products/dealoagent-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-[#FF6154]/5 hover:bg-[#FF6154]/10 border border-[#FF6154]/10 rounded-xl px-4 py-2 mt-4 transition-all duration-300 group backdrop-blur-sm"
        >
            {/* Product Hunt Logo Area */}
            <div className="flex flex-col items-center justify-center border-r border-[#FF6154]/10 pr-4">
                {/* SVG Logo */}
                <div className="w-10 h-10 mb-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        className="w-full h-full"
                        aria-labelledby="icon-label-ph"
                        role="img"
                    >
                        <title id="icon-label-ph">Product Hunt</title>
                        <g fill="none" fillRule="evenodd">
                            <path fill="#FF6154" d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"></path>
                            <path fill="#FFF" d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"></path>
                        </g>
                    </svg>
                </div>
                <span className="text-[10px] text-[#FF6154] font-medium mt-0.5 uppercase tracking-wide">Featured on</span>
                <span className="text-[10px] text-gray-500 font-medium">Product Hunt</span>
            </div>

            {/* Upvote & Text */}
            <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5">
                    <ArrowUp className="w-4 h-4 text-[#FF6154]" />
                    <span className="text-white font-bold text-sm">UPVOTE</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="text-gray-400 text-xs text-center w-full">Join the launch!</span>
                </div>
            </div>
        </a>
    );
}
