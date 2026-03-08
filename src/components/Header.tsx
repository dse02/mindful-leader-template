import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isProJednotlivceActive = ["/pro-jednotlivce", "/koucink", "/otevrene-workshopy"].includes(
    location.pathname
  );

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
        <Link to="/" className="flex items-baseline gap-2 group relative">
          <span className="relative">
            <span className="text-2xl md:text-3xl font-serif italic font-semibold text-primary">
              Daniela
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-[calc(100%+2rem)] h-3 text-primary/70"
              viewBox="0 0 120 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8 C30 2, 60 2, 118 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] uppercase text-primary">
            Sedloňová
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={navLinkClass(location.pathname === "/")}>
            Domů
          </Link>
          <Link to="/pro-firmy" className={navLinkClass(location.pathname === "/pro-firmy")}>
            Pro firmy
          </Link>

          {/* Pro jednotlivce dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`${navLinkClass(isProJednotlivceActive)} inline-flex items-center gap-1`}
            >
              Pro jednotlivce
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border shadow-lg py-2">
                <Link
                  to="/pro-jednotlivce"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  Přehled
                </Link>
                <Link
                  to="/koucink"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  Individuální koučink
                </Link>
                <Link
                  to="/otevrene-workshopy"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-sm font-sans text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  Otevřené workshopy
                </Link>
              </div>
            )}
          </div>

          <Link to="/o-mne" className={navLinkClass(location.pathname === "/o-mne")}>
            O mně
          </Link>
          <Link to="/kontakt" className={navLinkClass(location.pathname === "/kontakt")}>
            Kontakt
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className={navLinkClass(location.pathname === "/")}>
              Domů
            </Link>
            <Link to="/pro-firmy" onClick={() => setMobileOpen(false)} className={navLinkClass(location.pathname === "/pro-firmy")}>
              Pro firmy
            </Link>
            <p className="text-xs font-sans tracking-[0.15em] uppercase text-accent mt-2">Pro jednotlivce</p>
            <Link to="/pro-jednotlivce" onClick={() => setMobileOpen(false)} className={`${navLinkClass(location.pathname === "/pro-jednotlivce")} pl-4`}>
              Přehled
            </Link>
            <Link to="/koucink" onClick={() => setMobileOpen(false)} className={`${navLinkClass(location.pathname === "/koucink")} pl-4`}>
              Individuální koučink
            </Link>
            <Link to="/otevrene-workshopy" onClick={() => setMobileOpen(false)} className={`${navLinkClass(location.pathname === "/otevrene-workshopy")} pl-4`}>
              Otevřené workshopy
            </Link>
            <Link to="/o-mne" onClick={() => setMobileOpen(false)} className={navLinkClass(location.pathname === "/o-mne")}>
              O mně
            </Link>
            <Link to="/kontakt" onClick={() => setMobileOpen(false)} className={navLinkClass(location.pathname === "/kontakt")}>
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
