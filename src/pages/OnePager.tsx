import React from 'react';
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Download,
    MessageSquare,
    Mail,
    Calendar,
    Search,
    User,
    Users,
    Target,
    Zap,
    BarChart3,
    ArrowRight
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// Dynamic Double Arrow Component
interface DoubleArrowProps {
    x: number;
    y: number;
    length: number;
    angle: number;
    color: string;
    reverse?: boolean;
}

const DoubleArrow: React.FC<DoubleArrowProps> = ({ x, y, length, angle, color, reverse = false }) => {
    const getSolidPath = () => {
        const L = length;
        if (!reverse) {
            // Rightward (In): 0 -> L
            return `M0,6 L${L - 25},6 L${L - 25},-1 L${L},12 L${L - 25},25 L${L - 25},18 L0,18 Z`;
        } else {
            // Leftward (In): L -> 0
            return `M${L},6 L25,6 L25,-1 L0,12 L25,25 L25,18 L${L},18 Z`;
        }
    };

    const getOutlinePath = () => {
        const L = length;
        if (!reverse) {
            // Leftward (Out): L -> 0
            return `M${L},-6 L25,-6 L25,1 L0,-12 L25,-25 L25,-18 L${L},-18 Z`;
        } else {
            // Rightward (Out): 0 -> L
            return `M0,-6 L${L - 25},-6 L${L - 25},1 L${L},-12 L${L - 25},-25 L${L - 25},-18 L0,-18 Z`;
        }
    };

    return (
        <g transform={`translate(${x}, ${y}) rotate(${angle})`}>
            <path d={getSolidPath()} fill={color} />
            <path d={getOutlinePath()} fill="#f8fafc" stroke={color} strokeWidth="3" />
        </g>
    );
};

export default function OnePager() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handleDownloadPDF = async () => {
        if (!contentRef.current) return;
        setIsExporting(true);
        try {
            const element = contentRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                windowWidth: 794,
            });
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
            pdf.save("DealoAgent_OnePager.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsExporting(false);
        }
    };

    const integrations = [
        { icon: MessageSquare, label: "Messengers", sub: "TG, Slack, Teams" },
        { icon: Mail, label: "Email", sub: "Gmail, Outlook, Zoho" },
        { icon: Calendar, label: "Calendar", sub: "Google, Outlook" },
        { icon: Search, label: "Data Sources", sub: "Google, LinkedIn" },
    ];

    const features = [
        { icon: Target, label: "Zero Data Entry" },
        { icon: Zap, label: "Auto-Outreach" },
        { icon: BarChart3, label: "Deal Insights" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-8 flex flex-col items-center">
            {/* Control Bar */}
            <div className="w-[794px] mb-4 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-sm text-gray-500">DealoAgent One Pager (A4 Preview)</div>
                <Button onClick={handleDownloadPDF} disabled={isExporting} className="bg-blue-600 hover:bg-blue-700 text-white">
                    {isExporting ? "Generating..." : <><Download className="mr-2 h-4 w-4" />Download PDF</>}
                </Button>
            </div>

            {/* A4 Page */}
            <div
                ref={contentRef}
                className="w-[794px] h-[1123px] bg-white shadow-2xl overflow-hidden flex flex-col"
                style={{ width: "794px", height: "1123px" }}
            >
                {/* Hero Title */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white px-10 py-8 text-center">
                    <h1 className="text-4xl font-bold mb-2">Your AI Business Assistant</h1>
                    <p className="text-blue-200 text-lg">Automate sales. Focus on closing deals.</p>
                </div>

                {/* Hub-and-Spoke Layout */}
                <div className="flex-grow relative bg-slate-50" style={{ height: "750px" }}>

                    {/* SVG Arrows Layer - Double-arrow design (Solid In, Outline Out) */}
                    {/* SVG Arrows Layer - Dynamic Double Arrows */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 794 750">
                        {/* LEFT SIDE */}
                        <DoubleArrow x={216} y={250} length={92} angle={35} color="#93c5fd" />
                        <DoubleArrow x={216} y={336} length={57} angle={12} color="#93c5fd" />
                        <DoubleArrow x={216} y={422} length={59} angle={-15} color="#93c5fd" />
                        <DoubleArrow x={216} y={500} length={92} angle={-35} color="#93c5fd" />

                        {/* RIGHT SIDE (3 Boxes) */}
                        {/* 1. Zero Data Entry (Top) */}
                        <DoubleArrow x={514} y={325} length={70} angle={-23} color="#c4b5fd" reverse />
                        {/* 2. Auto-Outreach (Middle) */}
                        <DoubleArrow x={525} y={375} length={53} angle={0} color="#c4b5fd" reverse />
                        {/* 3. Deal Insights (Bottom) */}
                        <DoubleArrow x={514} y={425} length={70} angle={23} color="#c4b5fd" reverse />

                        {/* TOP (CEO) */}
                        <DoubleArrow x={397} y={195} length={52} angle={90} color="#6ee7b7" />

                        {/* BOTTOM (Sales) */}
                        <DoubleArrow x={397} y={556} length={53} angle={270} color="#5eead4" />
                    </svg>

                    {/* TOP: CEO/Owner */}
                    <div className="absolute top-36 left-1/2 -translate-x-1/2">
                        <div className="bg-white border-2 border-emerald-500 rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
                            <div className="bg-emerald-100 p-2 rounded-lg">
                                <User className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">CEO / Owner</div>
                                <div className="text-slate-500 text-xs">Full Control via AI Chat</div>
                            </div>
                        </div>
                    </div>

                    {/* LEFT: Integrations */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                        {integrations.map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-md flex items-center gap-3 w-48">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <item.icon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-800 text-sm">{item.label}</div>
                                    <div className="text-slate-400 text-xs">{item.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CENTER: Circle with Logo + Agents */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex flex-col items-center justify-center shadow-2xl border-4 border-white">
                            {/* Logo */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-white font-bold text-2xl">DealoAgent</span>
                                <div className="px-2 py-1 rounded bg-gradient-to-br from-blue-500 to-purple-600">
                                    <span className="font-bold text-white text-lg">AI</span>
                                </div>
                            </div>
                            {/* Agent Pills */}
                            <div className="flex flex-wrap justify-center gap-2 px-4">
                                <span className="px-3 py-1 rounded-full bg-blue-500/30 text-blue-100 text-xs font-medium">Outreach</span>
                                <span className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-100 text-xs font-medium">Research</span>
                                <span className="px-3 py-1 rounded-full bg-teal-500/30 text-teal-100 text-xs font-medium">CRM</span>
                                <span className="px-3 py-1 rounded-full bg-pink-500/30 text-pink-100 text-xs font-medium">Analytics</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Features */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                        {features.map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-md flex items-center gap-3 w-48">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <item.icon className="w-5 h-5 text-purple-600" />
                                </div>
                                <div className="font-semibold text-slate-800 text-sm">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* BOTTOM: Employees */}
                    <div className="absolute bottom-36 left-1/2 -translate-x-1/2">
                        <div className="bg-white border-2 border-teal-500 rounded-xl px-5 py-3 shadow-lg flex items-center gap-3">
                            <div className="bg-teal-100 p-2 rounded-lg">
                                <Users className="w-6 h-6 text-teal-600" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Sales Team</div>
                                <div className="flex items-center gap-1 text-slate-500 text-xs">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="mx-1">...</span>
                                    <span>All Connected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-slate-900 text-white py-4 px-10">
                    <div className="flex justify-around text-center">
                        <div>
                            <div className="text-2xl font-bold text-blue-400">20h+</div>
                            <div className="text-xs uppercase tracking-wider text-white/60">Saved Weekly</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-purple-400">3.2x</div>
                            <div className="text-xs uppercase tracking-wider text-white/60">Deal Velocity</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-teal-400">Zero</div>
                            <div className="text-xs uppercase tracking-wider text-white/60">Manual Entry</div>
                        </div>
                    </div>
                </div>

                {/* CTA Footer */}
                <div className="px-10 py-4 bg-white flex items-center justify-between border-t border-slate-200">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Ready to automate your revenue?</h3>
                        <p className="text-slate-500 text-sm">Book a 15-min demo • alex@dealoagent.ai</p>
                    </div>
                    <a href="https://dealoagent.ai" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors">
                        Book Demo <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
