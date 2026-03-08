import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="font-serif text-2xl font-semibold mb-4">Daniela Sedloňová</p>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
            Pomáhám lídrům, podnikatelům a firmám rozvíjet silnou komunikaci a budovat zdravou pracovní kulturu.
          </p>
        </div>
        <div>
          <nav className="flex flex-col gap-3">
            {[
              { to: "/", label: "Domů" },
              { to: "/pro-firmy", label: "Pro firmy" },
              { to: "/koucink", label: "Individuální koučink" },
              { to: "/o-mne", label: "O mně" },
              { to: "/kontakt", label: "Kontakt" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-sm text-primary-foreground/50">
            info@leadershipcoach.cz
          </p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Daniela Sedloňová. Všechna práva vyhrazena.
      </div>
    </div>
  </footer>
);

export default Footer;
