import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import App from './App';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PitchDeck from './pages/PitchDeck';
import Login from './pages/Login';
import RecruitingUseCase from './pages/RecruitingUseCase';
import SoftwareSalesUseCase from './pages/SoftwareSalesUseCase';
import VCResearchUseCase from './pages/VCResearchUseCase';
import CallCenterUseCase from './pages/CallCenterUseCase';
import VoipUseCase from './pages/VoipUseCase';
import UseCases from './pages/UseCases';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PartnersPage } from './pages/PartnersPage';
import OnePager from './pages/OnePager';
import { Logo, AIBadge } from "./components/Logo";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { navigateToApp } from "./analytics";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Determine text direction or other lang specific props if needed
  // const isRTL = i18n.dir() === 'rtl';

  const getPath = (path: string) => {
    const lang = i18n.language;
    // Ensure path ends with slash if it's not root
    const normalizedPath = path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`;
    if (lang === 'en') return normalizedPath;
    return `/${lang}${normalizedPath}`;
  };

  // Check if we are effectively on the home page (root or /uk or /pl)
  const isHome = location.pathname === '/' || location.pathname === '/uk' || location.pathname === '/pl' || location.pathname === '/uk/' || location.pathname === '/pl/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (!isHome) {
      window.location.href = `${getPath('/')}#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLinkClick = (path: string) => {
    window.location.href = getPath(path);
    setMobileMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex items-center gap-2 cursor-pointer flex-1 min-w-0" onClick={() => handleLinkClick('/')}>
            <Logo variant="dark" />
            <AIBadge />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="#use-cases" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'use-cases')}>{t('nav.useCases')}</a>
            <a href="#features" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'features')}>{t('nav.features')}</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'pricing')}>{t('nav.pricing')}</a>

            <a href="#team" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'team')}>{t('nav.team')}</a>
            <a href="#partners" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'partners')}>{t('nav.partners')}</a>

            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => navigateToApp('register')}
            >
              {t('nav.register')}
            </Button>
          </div>

          {/* Mobile: Menu button */}
          <div className="xl:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex-shrink-0"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col space-y-4">
              <a href="#use-cases" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'use-cases')}>{t('nav.useCases')}</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'features')}>{t('nav.features')}</a>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'pricing')}>{t('nav.pricing')}</a>
              <a href="#team" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'team')}>{t('nav.team')}</a>
              <a href="#partners" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'partners')}>{t('nav.partners')}</a>

              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => navigateToApp('register')}
              >
                {t('nav.register')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function LocalizedRoutes({ lang }: { lang: string }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // We need to determine if we show navigation inside this wrapper context
  const location = useLocation();
  // Simplified check: show navigation on Blog pages
  const isBlogRoute = location.pathname.includes('/blog');

  return (
    <>
      {isBlogRoute && <Navigation />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/pitchdeck/:slideId?" element={<PitchDeck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/usecases/recruiting" element={<RecruitingUseCase />} />
        <Route path="/usecases/softwaresales" element={<SoftwareSalesUseCase />} />
        <Route path="/usecases/vcresearch" element={<VCResearchUseCase />} />
        <Route path="/usecases/callcenter" element={<CallCenterUseCase />} />
        <Route path="/usecases/voip" element={<VoipUseCase />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/one_pager" element={<OnePager />} />
      </Routes>
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/uk/*" element={<LocalizedRoutes lang="uk" />} />
        <Route path="/pl/*" element={<LocalizedRoutes lang="pl" />} />
        <Route path="/*" element={<LocalizedRoutes lang="en" />} />
      </Routes>
    </BrowserRouter>
  );
}
