import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const location = useLocation();
  const { lang, t, switchLang, localPath } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Strip /en prefix for path matching
  const cleanPath = location.pathname.replace(/^\/en/, "") || "/";

  const isProJednotlivceActive = ["/pro-jednotlivce", "/koucink", "/otevrene-workshopy"].includes(cleanPath);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = (active: boolean) =>
    `text-sm font-sans tracking-wide transition-colors duration-200 ${
      active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to={localPath("/")} className="font-serif text-xl md:text-2xl font-semibold text-primary tracking-tight">
          Daniela Sedloňová
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to={localPath("/")} className={navLinkClass(cleanPath === "/")}>
            {t.nav.home}
          </Link>
          <Link to={localPath("/pro-firmy")} className={navLinkClass(cleanPath === "/pro-firmy")}>
            {t.nav.forCompanies}
          </Link>

          {/* Pro jednotlivce dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${navLinkClass(isProJednotlivceActive)} inline-flex items-center gap-1`}
            >
              {t.nav.forIndividuals}
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border shadow-lg py-2">
                <Link
                  to={localPath("/pro-jednotlivce")}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {t.nav.overview}
                </Link>
                <Link
                  to={localPath("/koucink")}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {t.nav.coaching}
                </Link>
                <Link
                  to={localPath("/otevrene-workshopy")}
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  {t.nav.workshops}
                </Link>
              </div>
            )}
          </div>

          <Link to={localPath("/o-mne")} className={navLinkClass(cleanPath === "/o-mne")}>
            {t.nav.about}
          </Link>
          <Link to={localPath("/kontakt")} className={navLinkClass(cleanPath === "/kontakt")}>
            {t.nav.contact}
          </Link>

          {/* Language switcher */}
          <button
            onClick={switchLang}
            className="text-sm font-sans font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors border border-border px-3 py-1.5"
          >
            {lang === "cs" ? "EN" : "CZ"}
          </button>
        </nav>

        {/* Mobile: lang switch + toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={switchLang}
            className="text-sm font-sans font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors border border-border px-2.5 py-1"
          >
            {lang === "cs" ? "EN" : "CZ"}
          </button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <Link to={localPath("/")} onClick={() => setMobileOpen(false)} className={navLinkClass(cleanPath === "/")}>
              {t.nav.home}
            </Link>
            <Link to={localPath("/pro-firmy")} onClick={() => setMobileOpen(false)} className={navLinkClass(cleanPath === "/pro-firmy")}>
              {t.nav.forCompanies}
            </Link>
            <p className="text-xs font-sans tracking-[0.15em] uppercase text-accent mt-2">{t.nav.forIndividuals}</p>
            <Link to={localPath("/pro-jednotlivce")} onClick={() => setMobileOpen(false)} className={`${navLinkClass(cleanPath === "/pro-jednotlivce")} pl-4`}>
              {t.nav.overview}
            </Link>
            <Link to={localPath("/koucink")} onClick={() => setMobileOpen(false)} className={`${navLinkClass(cleanPath === "/koucink")} pl-4`}>
              {t.nav.coaching}
            </Link>
            <Link to={localPath("/otevrene-workshopy")} onClick={() => setMobileOpen(false)} className={`${navLinkClass(cleanPath === "/otevrene-workshopy")} pl-4`}>
              {t.nav.workshops}
            </Link>
            <Link to={localPath("/o-mne")} onClick={() => setMobileOpen(false)} className={navLinkClass(cleanPath === "/o-mne")}>
              {t.nav.about}
            </Link>
            <Link to={localPath("/kontakt")} onClick={() => setMobileOpen(false)} className={navLinkClass(cleanPath === "/kontakt")}>
              {t.nav.contact}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
