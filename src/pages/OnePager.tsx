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
                    // Fix for SVG rendering issues in some cases
                    const clonedButton = clonedDoc.querySelector('a[href="https://app.dealoagent.ai"]');
                    if (clonedButton) {
                        // Ensure styles are explicit
                        (clonedButton as HTMLElement).style.display = 'inline-flex';
                    }
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
