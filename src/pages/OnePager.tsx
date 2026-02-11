import React from 'react';
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Download,
    ArrowRight
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { IntegrationHub } from "@/components/IntegrationHub";

export default function OnePager() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isExporting, setIsExporting] = useState(false);

    const handleDownloadPDF = async () => {
        if (!contentRef.current) return;
        setIsExporting(true);
        try {
            const element = contentRef.current;
            // Ensure web fonts are fully loaded before canvas capture (prevents baseline drift in PDF)
            if ("fonts" in document) {
                await (document as Document & { fonts: FontFaceSet }).fonts.ready;
            }

            // Get button position for link
            const button = element.querySelector('a[href="https://app.dealoagent.ai"]');
            let linkRect = null;
            if (button) {
                const contentRect = element.getBoundingClientRect();
                const btnRect = button.getBoundingClientRect();
                // We need relative coordinates within the 794x1123 container
                // The container is scaled via CSS logic potentially, but we know intrinsic size is 794
                // Let's use offsetLeft/Top if possible or calculate relative

                // Calculate scaling if the display size differs from 794
                const currentScale = contentRect.width / 794;

                linkRect = {
                    x: (btnRect.left - contentRect.left) / currentScale,
                    y: (btnRect.top - contentRect.top) / currentScale,
                    w: btnRect.width / currentScale,
                    h: btnRect.height / currentScale
                };
            }

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                windowWidth: 794,
                windowHeight: 1123,
                onclone: (clonedDoc) => {
                    // Fix for SVG rendering issues
                    const clonedButton = clonedDoc.querySelector('a[href="https://app.dealoagent.ai"]');
                    if (clonedButton) {
                        (clonedButton as HTMLElement).style.display = 'inline-flex';
                    }

                    // === html2canvas text-baseline fix ===
                    // html2canvas uses its own text layout engine that positions text
                    // lower than the browser does. CSS flex/align-items don't help because
                    // html2canvas doesn't fully implement them. The only reliable fix is to
                    // use asymmetric padding to compensate: less paddingTop + more paddingBottom
                    // visually shifts text upward within its container.

                    // Fix the main badge pill ("AI-Native Workflow Hub")
                    clonedDoc.querySelectorAll('[data-pdf-badge]').forEach((el) => {
                        const badge = el as HTMLElement;
                        // Original py-1.5 = 6px each. Text renders ~4px too low in html2canvas.
                        badge.style.paddingTop = '1px';
                        badge.style.paddingBottom = '11px';
                        badge.style.lineHeight = '1.1';
                    });

                    // Fix small pills (Gmail, Outlook, etc.)
                    // At 794px width sm: breakpoint is active → sm:py-1 = 4px each side
                    clonedDoc.querySelectorAll('[data-pdf-pill]').forEach((el) => {
                        const pill = el as HTMLElement;
                        // Compensate ~3px downward drift at sm: sizes
                        pill.style.paddingTop = '1px';
                        pill.style.paddingBottom = '7px';
                        pill.style.lineHeight = '1.1';
                    });

                    // Fix card headers — force row layout with proper gap
                    clonedDoc.querySelectorAll('[data-pdf-header]').forEach((el) => {
                        const header = el as HTMLElement;
                        header.style.display = 'flex';
                        header.style.alignItems = 'center';
                        header.style.flexDirection = 'row';
                    });
                    clonedDoc.querySelectorAll('[data-pdf-header-inner]').forEach((el) => {
                        const inner = el as HTMLElement;
                        inner.style.display = 'flex';
                        inner.style.alignItems = 'center';
                        inner.style.flexDirection = 'row';
                        inner.style.gap = '8px';
                    });
                    // Fix h3 titles in card headers
                    clonedDoc.querySelectorAll('[data-pdf-header-inner] h3').forEach((el) => {
                        const h3 = el as HTMLElement;
                        h3.style.lineHeight = '1';
                        h3.style.margin = '0';
                        h3.style.padding = '0';
                    });
                    // Fix the "YOUR" add-button text (colored bg pill in bottom-right of cards)
                    clonedDoc.querySelectorAll('[data-pdf-add-btn]').forEach((el) => {
                        const btn = el as HTMLElement;
                        // sm:py-1 = 4px each. Compensate baseline drift.
                        btn.style.paddingTop = '1px';
                        btn.style.paddingBottom = '7px';
                        btn.style.lineHeight = '1.1';
                    });
                    // Fix subtitle text below badge
                    clonedDoc.querySelectorAll('[data-pdf-subtitle]').forEach((el) => {
                        const sub = el as HTMLElement;
                        sub.style.lineHeight = '1.3';
                    });
                }
            });

            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

            // A4 size: 210mm x 297mm
            pdf.addImage(imgData, "PNG", 0, 0, 210, 297);

            // Add clickable link
            if (linkRect) {
                // Convert px (based on 794px width) to mm (210mm width)
                const pxToMm = 210 / 794;
                pdf.link(
                    linkRect.x * pxToMm,
                    linkRect.y * pxToMm,
                    linkRect.w * pxToMm,
                    linkRect.h * pxToMm,
                    { url: "https://app.dealoagent.ai" }
                );
            }

            pdf.save("DealoAgent_OnePager.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsExporting(false);
        }
    };

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
                className="w-[794px] h-[1123px] bg-white shadow-2xl overflow-hidden relative"
                style={{ width: "794px", height: "1123px" }}
            >
                <IntegrationHub variant="onepager" />
            </div>
        </div>
    );
}
