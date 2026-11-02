import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'HOME', href: '#hero' },
  { id: 'treasury', label: 'NATIONAL TREASURY', href: '#treasury' },
  { id: 'intelligence', label: 'NATIONAL INTELLIGENCE', href: '#intelligence' },
];

interface NavigationProps {
  currentRoute?: 'home' | 'intelligence';
}

export const Navigation: React.FC<NavigationProps> = ({ currentRoute = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (currentRoute === 'intelligence') {
      setActiveSection('intelligence');
      return;
    }

    const handleScroll = () => {
      const sections = ['hero', 'treasury', 'intelligence'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentRoute]);

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#24211D] border-b border-black/40 shadow-sm">
      <div className="max-w-content mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-12 sm:h-13">
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 h-full">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative h-full flex items-center font-sans font-bold text-xs lg:text-[13px] tracking-wider uppercase transition-colors px-1 ${
                    isActive
                      ? 'text-paper-raised'
                      : 'text-paper-secondary/75 hover:text-paper-raised'
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Active Red Bottom Bar Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3.5px] bg-official-red" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Header Title & Toggle */}
          <div className="flex items-center justify-between w-full md:hidden">
            <span className="font-sans text-xs font-bold tracking-wider text-paper-raised uppercase">
              {NAV_ITEMS.find((item) => item.id === activeSection)?.label || 'MENU'}
            </span>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-1.5 text-paper-raised hover:bg-black/30 rounded-[1px] transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#1D1B17] py-3 px-2 space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 font-sans text-xs uppercase font-bold tracking-wider rounded-[1px] transition-colors ${
                    isActive
                      ? 'bg-official-red text-paper-raised'
                      : 'text-paper-secondary hover:text-paper-raised hover:bg-black/25'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-[10px] font-mono tracking-widest">ACTIVE</span>
                  )}
                </a>
              );
            })}
          </div>
        )}

      </div>
    </nav>
  );
};
