import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const OtevreneWorkshopy = () => {
  const { t, localPath } = useLanguage();
  const o = t.otevreneWorkshopy;

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">{o.heroTag}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
            {o.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{o.heroDesc}</p>
        </div>
      </section>


      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {o.workshops.map((ws) => (
              <div key={ws.title} className="bg-background border border-border p-8 flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{ws.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{ws.description}</p>
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-sans tracking-wide text-accent uppercase">{o.preparing}</p>
                  <p className="text-xs text-muted-foreground">{o.location}</p>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link to={localPath("/otevrene-workshopy")}>
                    {o.reserveBtn}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-primary">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            {o.ctaTitle}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">{o.ctaDesc}</p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">
              {o.ctaBtn}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OtevreneWorkshopy;
