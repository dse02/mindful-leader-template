import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => (
  <div>
    <section className="py-24 md:py-36">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">O mně</p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
              O mně
            </h1>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Jsem leadership kouč a firemní trenér zaměřený na komunikaci, kulturu a mindset.
              </p>
              <p>
                Mám zkušenosti s prací s lídry a mezinárodními týmy. Pomáhám lidem nacházet jasnost v rozhodování, budovat silné vztahy v týmech a rozvíjet svůj leadership autentickým způsobem.
              </p>
              <p>
                Ve své práci propojuji strategické myšlení s praktickými nástroji pro každodenní vedení lidí.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="outline" asChild>
                <Link to="/kontakt">Spojme se</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm aspect-[3/4] bg-secondary border border-border flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Portrétní fotografie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
