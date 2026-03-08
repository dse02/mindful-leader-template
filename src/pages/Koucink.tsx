import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import koucinkImg from "@/assets/koucink_mistnost.jpeg";

const Koucink = () => {
  const { t } = useLanguage();
  const k = t.koucink;

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">{k.heroTag}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
            {k.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{k.heroDesc}</p>
        </div>
      </section>

      <section className="py-0">
        <div className="container max-w-4xl">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={koucinkImg}
              alt="Koučovací místnost – útulný prostor pro individuální setkání"
              className="w-full h-full object-cover img-muted"
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">{k.offerTag}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
            {k.offerTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 border border-border flex flex-col">
              <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase mb-2">{k.single}</p>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{k.singleTitle}</h3>
              <p className="text-muted-foreground text-sm mb-6">{k.singleTime}</p>
              <p className="text-2xl font-serif font-semibold text-foreground mt-auto">{k.singlePrice}</p>
            </div>
            <div className="bg-background p-8 border border-border flex flex-col">
              <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase mb-2">{k.package}</p>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{k.pack6Title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{k.pack6Desc}</p>
              <p className="text-2xl font-serif font-semibold text-foreground mt-auto">{k.pack6Price}</p>
            </div>
            <div className="bg-background p-8 border border-border flex flex-col">
              <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase mb-2">{k.package}</p>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">{k.pack12Title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{k.pack12Desc}</p>
              <p className="text-2xl font-serif font-semibold text-foreground mt-auto">{k.pack12Price}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-3xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">{k.desc1}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">{k.desc2}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-primary">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            {k.ctaTitle}
          </h2>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">{k.ctaBtn}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Koucink;
