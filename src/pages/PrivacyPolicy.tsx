
import { Navigation } from "../Router";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Privacy Policy - DealoAgent.ai</title>
                <meta name="description" content="Privacy Policy for DealoAgent.ai. Learn how we collect, use, and protect your data." />
                <link rel="canonical" href="https://dealoagent.ai/privacy-policy" />
            </Helmet>

            <Navigation />

            <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                    <p className="text-gray-600 mb-8">Last Updated: January 2, 2026</p>

                    <div className="space-y-8 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                Welcome to DealoAgent.ai ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information.
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website and AI-powered sales services.
                            </p>
                            <p>
                                By accessing or using DealoAgent.ai, you agree to the terms of this Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We collect information to provide better services to our users. The types of information we collect include:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Personal Account Information:</strong> Name, email address, phone number, and company details when you register.</li>
                                <li><strong>Connected Data:</strong> When you integrate your email (e.g., Gmail, Outlook), messengers, or CRM, we process the content of your communications (emails, messages, attachments) to provide our AI analysis and outreach services.</li>
                                <li><strong>Usage Data:</strong> Information on how you interact with our service, including log files, device information, and IP address.</li>
                                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience and analyze site traffic.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4">We use the collected data for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide, operate, and maintain our AI sales agent services.</li>
                                <li>To improved and personalize our AI models and user experience.</li>
                                <li>To analyze trends, usage, and activities in connection with our services.</li>
                                <li>To communicate with you, including for customer service, updates, and marketing (which you can opt-out of).</li>
                                <li>To prevent fraud and ensure the security of our platform.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                            <p className="mb-4">We do <strong>not</strong> sell your personal data. We may share your information in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Providers:</strong> We may employ third-party companies and individuals to facilitate our service (e.g., cloud hosting, AI model providers) who have access to your data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                                <li><strong>Legal Requirements:</strong> We may disclose your data if required to do so by law or in response to valid requests by public authorities.</li>
                                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your personal data may be transferred.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
                            <p className="mb-4">
                                The security of your data is important to us. We implement industry-standard security measures, including encryption and SOC 2 ready architecture,
                                to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Data Rights</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to access and receive a copy of your personal data.</li>
                                <li>The right to rectify or update inaccurate data.</li>
                                <li>The right to request deletion of your personal data.</li>
                                <li>The right to restrict or object to our processing of your data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
                            <p className="mb-4">
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
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
