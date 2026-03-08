import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-36">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6 animate-fade-in">
          Leadership · Komunikace · Mindset
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Leadership. Komunikace. Mindset.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Pomáhám lídrům, podnikatelům a firmám rozvíjet silnou komunikaci, zvládat náročné situace a budovat zdravou pracovní kulturu.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" asChild>
            <Link to="/kontakt">Domluvit úvodní konzultaci</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/pro-firmy">Pro firmy</Link>
          </Button>
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
              Firemní tréninky a rozvoj týmů
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Navrhuji a vedu workshopy zaměřené na komunikaci, leadership a spolupráci v týmech.
              Programy jsou praktické, interaktivní a zaměřené na reálné situace z pracovního prostředí.
            </p>
            <Button variant="outline" asChild>
              <Link to="/pro-firmy">Pro firmy</Link>
            </Button>
          </div>
          <div className="space-y-5">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Individuální leadership koučink
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Individuální spolupráce pro podnikatele a lídry, kteří chtějí růst, rozhodovat jistěji a zvládat náročné situace s větší vnitřní stabilitou.
            </p>
            <Button variant="outline" asChild>
              <Link to="/koucink">Individuální koučink</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* About preview */}
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
          O mně
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
          O mně
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-4">
          Pracuji s lídry a týmy, které chtějí růst nejen ve výsledcích, ale i ve způsobu, jakým spolupracují a komunikují.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mb-10">
          Ve své práci propojuji leadership, mezikulturní komunikaci a osobní rozvoj.
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
          <Link to="/kontakt">Rezervovat termín</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Home;
