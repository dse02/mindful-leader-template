import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t, localPath } = useLanguage();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/pro-firmy", label: t.nav.forCompanies },
    { to: "/pro-jednotlivce", label: t.nav.forIndividuals },
    { to: "/o-mne", label: t.nav.about },
    { to: "/kontakt", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-serif text-2xl font-semibold mb-4">Daniela Sedloňová</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          <div>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={localPath(link.to)}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://www.linkedin.com/in/danielasedlonova/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <p className="mt-8 text-sm text-primary-foreground/50">
              info@danielasedlonova.cz
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Daniela Sedloňová. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
