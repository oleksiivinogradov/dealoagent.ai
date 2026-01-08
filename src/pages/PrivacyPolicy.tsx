
import { Navigation } from "../Router";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Privacy Policy - DealoAgent.ai</title>
                <meta name="description" content="Privacy Policy for DealoAgent.ai and DealoAgent Web Automation Extension. Learn how we collect, use, and protect your data." />
                <link rel="canonical" href="https://dealoagent.ai/privacy-policy" />
            </Helmet>

            <Navigation />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                    <p className="text-gray-600 mb-8">Last Updated: January 8, 2026</p>

                    <div className="space-y-8 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                Welcome to DealoAgent.ai ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, AI-powered sales services, and our Chrome Extension ("DealoAgent Web Automation").
                            </p>
                            <p>
                                By accessing or using DealoAgent.ai or installing our Chrome Extension, you agree to the terms of this Privacy Policy.
                            </p>
                        </section>

                        <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h2 className="text-2xl font-semibold text-blue-900 mb-4">2. Chrome Extension Privacy Notice (DealoAgent Web Automation)</h2>
                            <p className="mb-4 text-blue-800">
                                This section explicitly details the data practices of our Chrome Extension, "DealoAgent Web Automation," in compliance with the Chrome Web Store Developer Program Policies.
                            </p>

                            <h3 className="text-lg font-semibold text-blue-900 mt-4 mb-2">Data Collection & Usage by Category</h3>
                            <ul className="list-disc pl-6 space-y-2 text-blue-800">
                                <li>
                                    <strong>Personally Identifiable Information (PII):</strong> We collect names, email addresses, job titles, and company details from profiles you visit (e.g., LinkedIn) <em>only</em> when you trigger an automation to save this data to your DealoAgent CRM. We also use your account email for authentication.
                                </li>
                                <li>
                                    <strong>Authentication Information:</strong> The extension accesses authentication tokens (cookies) for the specific services you choose to automate (e.g., LinkedIn) to perform actions on your behalf. These tokens are used locally within the browser session and are not permanently stored on our servers.
                                </li>
                                <li>
                                    <strong>Personal Communications:</strong> We process emails and chat messages (e.g., LinkedIn messages) <em>only</em> when you instruct the extension to analyze or sync these communications to the DealoAgent platform for CRM record-keeping and AI response generation.
                                </li>
                                <li>
                                    <strong>Website Content:</strong> We access and read text and images on the web pages you visit to extract relevant business information (e.g., lead details) and to fill forms automatically. We do not modify website content other than filling input fields as requested.
                                </li>
                                <li>
                                    <strong>User Activity:</strong> We track your interactions within the extension interface (clicks, feature usage) to improve product functionality. We do <strong>not</strong> track your browsing activity across the web generally, nor do we log mouse movements or keystrokes outside of our extension's specific interface.
                                </li>
                                <li>
                                    <strong>Web History:</strong> We do <strong>not</strong> collect or store your browsing history. We only access the URL and content of the specific active tab when you engage the extension.
                                </li>
                                <li>
                                    <strong>Location:</strong> We may collect coarse location data (IP address) for security and analytics purposes. We do not collect precise GPS coordinates.
                                </li>
                                <li>
                                    <strong>Financial and Payment Information:</strong> The extension does <strong>not</strong> collect, process, or store user financial or payment information.
                                </li>
                                <li>
                                    <strong>Health Information:</strong> The extension does <strong>not</strong> collect any health information, medical history, or biometrics.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. General Information We Collect</h2>
                            <p className="mb-4">Apart from the extension, when using our core SaaS platform, we collect:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Account Data:</strong> Name, email, phone number, and billing details provided during registration.</li>
                                <li><strong>Connected Service Data:</strong> Emails, calendar events, and CRM records synced via OAuth integrations/APIs (Gmail, Outlook, etc.).</li>
                                <li><strong>Usage Logs:</strong> Server logs, IP addresses, and device info for security and debugging.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Your Information</h2>
                            <p className="mb-4">We use gathered data to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and maintain the DealoAgent service and extension functionality.</li>
                                <li>Automate sales tasks (e.g., drafting emails, filling forms) as directed by you.</li>
                                <li>Improve our AI models (anonymized data only).</li>
                                <li>Ensure security and prevent fraud.</li>
                                <li>Comply with legal obligations.</li>
                            </ul>
                            <p className="mt-4 font-semibold">We certify that:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We do not sell or transfer user data to third parties, outside of approved use cases (e.g., secure processing).</li>
                                <li>We do not use user data for purposes unrelated to the product's core functionality.</li>
                                <li>We do not use user data to determine creditworthiness.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
                            <p className="mb-4">We do <strong>not</strong> sell your personal data. We may share your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Providers:</strong> We may employ third-party companies and individuals to facilitate our service (e.g., cloud hosting, AI model providers) who have access to your data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your data if required to do so by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Storage and Security</h2>
                            <p className="mb-4">
                                <strong>Storage:</strong> Data is stored in secure cloud environments (e.g., AWS) with SOC 2 ready architecture.
                            </p>
                            <p className="mb-4">
                                <strong>Security:</strong> We employ industry-standard security measures, including encryption (TLS/SSL) for data in transit and at rest, along with strict access controls. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                            <p className="mb-4">
                                <strong>Retention:</strong> We retain personal data only as long as necessary to provide our services or as required by law. You may request data deletion at any time.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Data Rights</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to access and receive a copy of your personal data.</li>
                                <li>The right to rectify or update inaccurate data.</li>
                                <li>The right to request deletion of your personal data.</li>
                                <li>The right to restrict or object to our processing of your data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
                            <p className="mb-4">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <p className="font-semibold">Email: alex@dealoagent.ai</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
