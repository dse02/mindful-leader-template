import { Button } from "@/components/ui/button";

const workshops = [
  {
    title: "Hluboké rozhovory",
    description:
      "Workshop zaměřený na umění vést rozhovory, které vytvářejí skutečné porozumění a důvěru.",
    date: "Připravujeme",
    location: "Praha / Online",
  },
  {
    title: "Náročné rozhovory bez konfliktu",
    description:
      "Jak vést obtížné rozhovory v týmu a udržet respekt, jasnost i vztahy.",
    date: "Připravujeme",
    location: "Praha / Online",
  },
  {
    title: "Rozhodování lídra",
    description:
      "Praktický workshop o tom, jak se rozhodovat pod tlakem, s neúplnými informacemi a v nejistotě.",
    date: "Připravujeme",
    location: "Praha / Online",
  },
];

const OtevreneWorkshopy = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-36">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">
          Pro jednotlivce
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
          Otevřené leadership workshopy
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Tříhodinové praktické workshopy v malé skupině zaměřené na rozhovory, které rozhodují v leadershipu i životě.
        </p>
      </div>
    </section>

    {/* Workshop cards */}
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((ws) => (
            <div
              key={ws.title}
              className="bg-background border border-border p-8 flex flex-col"
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {ws.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {ws.description}
              </p>
              <div className="space-y-1 mb-6">
                <p className="text-xs font-sans tracking-wide text-accent uppercase">
                  {ws.date}
                </p>
                <p className="text-xs text-muted-foreground">{ws.location}</p>
              </div>
              <Button size="sm" asChild>
                <a
                  href="https://calendly.com/danielasedlonova/konzultace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rezervovat místo
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-primary">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
          Máte otázky?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10">
          Napište mi a ráda vám poradím, který workshop je pro vás ten pravý.
        </p>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          asChild
        >
          <a
            href="https://calendly.com/danielasedlonova/konzultace"
            target="_blank"
            rel="noopener noreferrer"
          >
            Domluvit konzultaci
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default OtevreneWorkshopy;
