import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/i18n/LanguageContext";
import workshopImg from "@/assets/workshop_group.jpeg";
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

const ProFirmy = () => {
  const { t, localPath } = useLanguage();
  const p = t.proFirmy;

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">{p.heroTag}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
            {p.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{p.heroDesc}</p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">{p.formatsTag}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-16">
            {p.formatsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {p.workshops.map((w) => (
              <div key={w.title} className="bg-background p-8 border border-border flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground/60 text-sm text-center mt-8">{p.workshopsPriceNote}</p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">{p.topicsTag}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-12">
            {p.topicsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {p.topics.map((topic) => (
              <div key={topic} className="flex items-center gap-4 text-lg text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-3xl">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-4 text-center">{p.coachingTag}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground text-center mb-8">
            {p.coachingTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg text-center mb-6">
            {p.coachingDesc}
          </p>
          <p className="text-foreground text-center mb-10">
            <span className="font-medium">{p.coachingFormatLabel}</span> {p.coachingFormat}
          </p>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to={localPath("/koucink")}>{p.coachingBtn}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
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
              {h.testimonials.map((item, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <blockquote className="bg-secondary rounded-lg p-8 flex flex-col justify-between shadow-sm h-full">
                    <p className="text-foreground leading-relaxed mb-6 italic text-[0.95rem]">
                      „{item.quote}"
                    </p>
                    <footer className="flex items-center gap-3 text-sm text-muted-foreground">
                      {item.photo ? (
                        <img
                          src={testimonialPhotos[item.photo]}
                          alt={item.author}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-muted flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-medium text-foreground">{item.author}</span>
                        <br />
                        {item.company}
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

      <section className="py-24 md:py-32 bg-primary">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            {p.ctaTitle}
          </h2>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            asChild
          >
            <Link to={localPath("/kontakt")}>{p.ctaBtn}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProFirmy;
