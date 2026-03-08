import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProJednotlivce = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-36">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">
          Pro jednotlivce
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
          Pro jednotlivce
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Pro lídry, podnikatele a profesionály, kteří chtějí růst, zvládat náročné situace a vést rozhovory, které opravdu rozhodují.
        </p>
      </div>
    </section>

    {/* Individuální koučink */}
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Koučink
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Individuální leadership koučink
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Strategická spolupráce pro lídry a podnikatele, kteří stojí před důležitými rozhodnutími, řeší náročné situace v týmu nebo chtějí růst do další úrovně leadershipu.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <span className="font-medium text-foreground">Formát:</span>{" "}
              Individuální 90minutová setkání zaměřená na konkrétní situace z vaší praxe.
            </p>
            <Button variant="outline" asChild>
              <Link to="/koucink">Zjistit více o koučinku</Link>
            </Button>
          </div>
          <div className="bg-background border border-border p-10 flex items-center justify-center min-h-[280px]">
            <p className="text-muted-foreground/50 font-sans text-sm tracking-wide uppercase">
              Koučink
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Otevřené workshopy */}
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 bg-secondary border border-border p-10 flex items-center justify-center min-h-[280px]">
            <p className="text-muted-foreground/50 font-sans text-sm tracking-wide uppercase">
              Workshopy
            </p>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Workshopy
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Otevřené leadership workshopy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Krátké, intenzivní tříhodinové workshopy pro jednotlivce v malé skupině. Zaměřené na praktické komunikační a leadership dovednosti, které mají okamžitý dopad na práci i vztahy.
            </p>
            <ul className="space-y-3 mb-8">
              {["Hluboké rozhovory", "Náročné rozhovory bez konfliktu", "Rozhodování lídra"].map(
                (title) => (
                  <li key={title} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {title}
                  </li>
                )
              )}
            </ul>
            <Button variant="outline" asChild>
              <Link to="/otevrene-workshopy">Zobrazit workshopy</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-primary">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
          Začněme rozhovor.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10">
          Každá spolupráce začíná úvodní konzultací.
        </p>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          asChild
        >
          <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">
            Domluvit konzultaci
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default ProJednotlivce;
