import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/i18n/LanguageContext";
import danielaPhoto from "@/assets/daniela_hero.png";
import kristynaPhoto from "@/assets/kristyna_kolcavova.png";
import annaPhoto from "@/assets/anna_behler.png";
import gabrielaPhoto from "@/assets/gabriela_simsova.png";
import matyasPhoto from "@/assets/matyas_drevo.png";
import martinPhoto from "@/assets/martin_belan.png";

const testimonialPhotos: Record<string, string> = {
  kristyna_kolcavova: kristynaPhoto,
  anna_behler: annaPhoto,
  gabriela_simsova: gabrielaPhoto,
  matyas_drevo: matyasPhoto,
  martin_belan: martinPhoto,
};

const Home = () => {
  const { t, localPath } = useLanguage();
  const h = t.home;

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end md:items-center overflow-hidden">
        <img
          src={danielaPhoto}
          alt="Daniela Sedloňová – leadership kouč"
          className="absolute inset-0 w-full h-full object-cover object-[25%_top] md:object-left-top"
        />
        <div className="absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_top,black_40%,transparent_70%)] md:[mask-image:linear-gradient(to_right,transparent_45%,black_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background from-[15%] via-background/80 via-[35%] to-transparent to-[65%] md:bg-gradient-to-r md:from-transparent md:from-[40%] md:to-background/90 md:to-[75%]" />
        <div className="relative z-10 container max-w-6xl pb-16 md:pb-0">
          <div className="ml-auto w-full md:w-[38%] md:pr-4">
            <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6 animate-fade-in">
              {h.heroTag}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {h.heroTitle1}<br />{h.heroTitle2}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {h.heroDesc}
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild>
                <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">{h.heroCta}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How we can work together */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">
            {h.cooperationTag}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
            {h.cooperationTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-4xl mx-auto">
            <div className="space-y-5">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                {h.companyTitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {h.companyDesc}
              </p>
              <Button variant="outline" asChild>
                <Link to={localPath("/pro-firmy")}>{h.companyBtn}</Link>
              </Button>
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                {h.individualTitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {h.individualDesc}
              </p>
              <Button variant="outline" asChild>
                <Link to={localPath("/pro-jednotlivce")}>{h.individualBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core expertise */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">
            {h.expertiseTag}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-12">
            {h.expertiseTitle}
          </h2>
          <ul className="space-y-4 max-w-md mx-auto">
            {h.themes.map((theme) => (
              <li key={theme} className="flex items-center gap-4 text-lg text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                {theme}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4">
            {h.aboutTag}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            {h.aboutTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            {h.aboutDesc}
          </p>
          <Button variant="outline" asChild>
            <Link to={localPath("/o-mne")}>{h.aboutBtn}</Link>
          </Button>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 md:py-32">
        <div className="container">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">
            {h.clientsTag}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
            {h.clientsTitle}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 max-w-5xl mx-auto items-center justify-items-center">
            {[
              "Google", "L'Oréal", "Legrand", "WPP", "Česká spořitelna",
              "Dentsu", "Livesport", "Siemens", "EON", "University of New York",
              "UMPRUM", "Point One", "Struers", "Geometry", "Proficio", "Servier"
            ].map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-16 px-4 text-muted-foreground/60"
              >
                <span className="text-sm md:text-base font-sans font-medium tracking-wide text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-5xl">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">
            {h.testimonialsTag}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-4">
            {h.testimonialsTitle}
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16">
            {h.testimonialsDesc}
          </p>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {h.testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <blockquote className="bg-background rounded-lg p-8 flex flex-col justify-between shadow-sm h-full">
                    <p className="text-foreground leading-relaxed mb-6 italic text-[0.95rem]">
                      „{t.quote}"
                    </p>
                    <footer className="flex items-center gap-3 text-sm text-muted-foreground">
                      {t.photo ? (
                        <img
                          src={testimonialPhotos[t.photo]}
                          alt={t.author}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-medium text-foreground">{t.author}</span>
                        <br />
                        {t.company}
                      </div>
                    </footer>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-primary">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            {h.ctaTitle}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            {h.ctaDesc}
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">{h.ctaBtn}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
