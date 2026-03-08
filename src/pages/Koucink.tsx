import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Koucink = () => (
  <div>
    {/* Hero */}
    <section className="py-24 md:py-36">
      <div className="container max-w-3xl text-center">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">Koučink</p>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
          Individuální leadership koučink
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Strategická spolupráce pro podnikatele a lídry, kteří chtějí růst a dělat jasná rozhodnutí.
        </p>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">Nabídka</p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
          Formáty spolupráce
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Single session */}
          <div className="bg-background p-8 border border-border flex flex-col">
            <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase mb-2">Jednorázově</p>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Single session</h3>
            <p className="text-muted-foreground text-sm mb-6">90 minut</p>
            <p className="text-2xl font-serif font-semibold text-foreground mt-auto">6 000 Kč</p>
          </div>

          {/* 6 sessions */}
          <div className="bg-background p-8 border border-border flex flex-col">
            <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase mb-2">Balíček</p>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">6× 90 minut</h3>
            <p className="text-muted-foreground text-sm mb-6">Coaching package</p>
            <p className="text-2xl font-serif font-semibold text-foreground mt-auto">32 400 Kč</p>
          </div>

          {/* 12 sessions */}
          <div className="bg-background p-8 border border-border flex flex-col">
            <p className="text-accent font-sans text-xs tracking-[0.15em] uppercase mb-2">Balíček</p>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">12× 90 minut</h3>
            <p className="text-muted-foreground text-sm mb-6">Coaching package</p>
            <p className="text-2xl font-serif font-semibold text-foreground mt-auto">54 000 Kč</p>
          </div>
        </div>
      </div>
    </section>

    {/* Description */}
    <section className="py-24 md:py-32">
      <div className="container max-w-3xl text-center">
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Koučinkové sezení jsou hluboké strategické rozhovory zaměřené na reálné výzvy, se kterými se v roli lídra setkáváte.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Pracujeme s vašimi konkrétními situacemi – rozhodováním, komunikací, vedením lidí i osobním nastavením.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32 bg-primary">
      <div className="container max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
          Rezervovat úvodní konzultaci
        </h2>
        <Button
          size="lg"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          asChild
        >
          <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">Rezervovat termín</a>
        </Button>
      </div>
    </section>
  </div>
);

export default Koucink;
