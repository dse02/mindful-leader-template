import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import workshopWide from "@/assets/workshop_wide.jpg";

const ProJednotlivce = () => {
  const { t, localPath } = useLanguage();
  const p = t.proJednotlivce;

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">{p.heroTag}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
            {p.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{p.heroDesc}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">{p.coachingTag}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                {p.coachingTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{p.coachingDesc}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                <span className="font-medium text-foreground">{p.coachingFormatLabel}</span>{" "}
                {p.coachingFormat}
              </p>
              <Button variant="outline" asChild>
                <Link to={localPath("/koucink")}>{p.coachingBtn}</Link>
              </Button>
            </div>
            <div className="bg-background border border-border p-10 flex items-center justify-center min-h-[280px]">
              <p className="text-muted-foreground/50 font-sans text-sm tracking-wide uppercase">
                {p.coachingTag}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 bg-secondary border border-border p-10 flex items-center justify-center min-h-[280px]">
              <p className="text-muted-foreground/50 font-sans text-sm tracking-wide uppercase">
                {p.workshopsTag}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">{p.workshopsTag}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
                {p.workshopsTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{p.workshopsDesc}</p>
              <ul className="space-y-3 mb-8">
                {p.workshopsList.map((title) => (
                  <li key={title} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {title}
                  </li>
                ))}
              </ul>
              <Button variant="outline" asChild>
                <Link to={localPath("/otevrene-workshopy")}>{p.workshopsBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-primary">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            {p.ctaTitle}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">{p.ctaDesc}</p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">
              {p.ctaBtn}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProJednotlivce;
