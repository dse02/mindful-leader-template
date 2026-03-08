import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const workshops = [
  { title: "90 minut přednáška", desc: "Intenzivní přednáška zaměřená na konkrétní téma." },
  { title: "Půldenní workshop", desc: "Praktický workshop s prostorem pro diskuzi a cvičení." },
  { title: "Celodenní workshop", desc: "Komplexní program s hloubkovým ponorem do tématu." },
];

const topics = [
  "Leadership komunikace",
  "Zvládání konfliktů",
  "Mezikulturní spolupráce",
  "Psychologická bezpečnost v týmu",
];

const ProFirmy = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-36">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">Pro firmy</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
          Firemní vzdělávání a rozvoj leadershipu
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Pomáhám firmám rozvíjet silnou komunikaci, zvládat konflikty a posilovat leadership týmů.
        </p>
      </div>
    </section>

    {/* Workshops */}
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">Formáty</p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
          Nabídka workshopů
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {workshops.map((w) => (
            <div key={w.title} className="bg-background p-8 border border-border">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{w.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Topics */}
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">Témata</p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-12">
          Témata, která řešíme
        </h2>
        <ul className="space-y-4">
          {topics.map((t) => (
            <li key={t} className="flex items-center gap-4 text-lg text-foreground">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-primary">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
          Domluvme nezávazný rozhovor.
        </h2>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          asChild
        >
          <Link to="/kontakt">Kontaktovat</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default ProFirmy;
