import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { Users, Lock, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function Login() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            // In a real app, this would redirect to the dashboard
            window.location.href = "https://app.dealoagent.ai";
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Helmet>
                <title>{t('login.title')} | DealoAgent.ai</title>
            </Helmet>
            <div className="w-full max-w-md space-y-8">
                <div className="flex flex-col items-center justify-center text-center cursor-pointer" onClick={() => window.location.href = '/'}>
                    <Logo variant="dark" />
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                        {t('login.title')}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {t('login.subtitle')}
                    </p>
                </div>

                <Card className="mt-8 border-0 shadow-xl ring-1 ring-gray-900/5">
                    <CardHeader>
                        <CardTitle>{t('login.employeeLogin')}</CardTitle>
                        <CardDescription>
                            {t('login.enterCredentials')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">{t('login.emailLabel')}</Label>
                                <div className="relative">
                                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={t('login.emailPlaceholder')}
                                        className="pl-10"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">{t('login.passwordLabel')}</Label>
                                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                        {t('login.forgotPassword')}
                                    </a>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        className="pl-10"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? t('login.signingIn') : t('login.signInButton')}
                                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-center border-t p-6">
                        <p className="text-sm text-gray-500">
                            {t('login.noAccount')}{" "}
                            <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                                {t('login.contactAdmin')}
                            </a>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

