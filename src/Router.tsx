import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import PitchDeck from './pages/PitchDeck';
import Login from './pages/Login';
import RecruitingUseCase from './pages/RecruitingUseCase';
import SoftwareSalesUseCase from './pages/SoftwareSalesUseCase';
import VCResearchUseCase from './pages/VCResearchUseCase';
import CallCenterUseCase from './pages/CallCenterUseCase';
import UseCases from './pages/UseCases';
import { Logo, AIBadge } from "./components/Logo";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigateToApp } from "./analytics";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (!isHome) {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex items-center gap-2 cursor-pointer flex-1 min-w-0" onClick={() => window.location.href = '/'}>
            <Logo variant="dark" />
            <AIBadge />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="/#use-cases" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'use-cases')}>Use cases</a>
            <a href="/#features" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
            <a href="/#pricing" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
            <a href="/#team" className="text-gray-700 hover:text-gray-900" onClick={(e) => handleNavClick(e, 'team')}>Team</a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
            <Button variant="ghost" className="hidden xl:flex" onClick={() => navigateToApp('sign_in')}>Sign In</Button>
            <Button
              variant="outline"
              onClick={() => window.open('https://t.me/alex12alex', '_blank')}
            >
              Talk to Sales
            </Button>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              onClick={() => navigateToApp('register')}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile: Menu button */}
          <div className="lg:hidden flex-shrink-0">
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
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col space-y-4">
              <a href="/#use-cases" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'use-cases')}>Use cases</a>
              <a href="/#features" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
              <a href="/#pricing" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'pricing')}>Pricing</a>
              <a href="/#team" className="text-gray-700 hover:text-gray-900 py-2" onClick={(e) => handleNavClick(e, 'team')}>Team</a>
              <a href="/blog" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setMobileMenuOpen(false)}>Blog</a>
              <Button variant="ghost" className="justify-start" onClick={() => navigateToApp('sign_in')}>Sign In</Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://t.me/alex12alex', '_blank')}
              >
                Talk to Sales
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => navigateToApp('register')}
              >
                Register Now
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
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isBlogRoute = location.pathname.startsWith('/blog');


  return (
    <>
      {isBlogRoute && <Navigation />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/pitchdeck" element={<PitchDeck />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/usecases/recruiting" element={<RecruitingUseCase />} />
        <Route path="/usecases/softwaresales" element={<SoftwareSalesUseCase />} />
        <Route path="/usecases/vcresearch" element={<VCResearchUseCase />} />
        <Route path="/usecases/callcenter" element={<CallCenterUseCase />} />
      </Routes>
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

