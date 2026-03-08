import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import danielaPhoto from "@/assets/daniela_main.jpeg";

const themes = [
  "Leadership komunikace",
  "Náročné rozhovory v týmu",
  "Zvládání konfliktů",
  "Multikulturní spolupráce",
  "Rozhodování lídrů",
];

const Home = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={danielaPhoto}
        alt="Daniela Sedloňová – leadership kouč"
        className="absolute inset-0 w-full h-full object-cover object-left-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/50 via-40% to-background/95" />
      <div className="relative z-10 container max-w-5xl">
        <div className="ml-auto max-w-lg md:max-w-xl text-right">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6 animate-fade-in">
            Leadership · Komunikace · Multikulturní spolupráce
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Rozhovory, které rozhodují.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Pomáhám lídrům a firmám vést s jasností, zvládat konflikty a budovat silné týmy – i v mezinárodním prostředí.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" asChild>
              <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">Domluvit úvodní konzultaci</a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* How we can work together */}
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">
          Spolupráce
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
          Jak můžeme spolupracovat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Firemní workshopy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Praktické workshopy pro manažery a týmy zaměřené na komunikaci, řešení konfliktů a efektivní spolupráci v mezinárodním prostředí.
            </p>
            <Button variant="outline" asChild>
              <Link to="/pro-firmy">Pro firmy</Link>
            </Button>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Individuální koučink
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategické rozhovory pro lídry a podnikatele, kteří stojí před náročným rozhodnutím, konfliktem nebo změnou role.
            </p>
            <Button variant="outline" asChild>
              <Link to="/koucink">Individuální koučink</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Core expertise */}
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">
          Expertíza
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-12">
          Leadership se rozhoduje v rozhovorech.
        </h2>
        <ul className="space-y-4 max-w-md mx-auto">
          {themes.map((t) => (
            <li key={t} className="flex items-center gap-4 text-lg text-foreground">
              <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* About preview */}
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
          O mně
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
          O mně
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-10">
          Pomáhám lídrům a firmám rozvíjet komunikaci, která vytváří jasnost, důvěru a výsledky. Ve své práci propojuji leadership rozvoj, praktické komunikační dovednosti a zkušenosti z práce s mezinárodními týmy.
        </p>
        <Button variant="outline" asChild>
          <Link to="/o-mne">Více o mně</Link>
        </Button>
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
          <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">Domluvit konzultaci</a>
        </Button>
      </div>
    </section>
  </div>
);

export default Home;
