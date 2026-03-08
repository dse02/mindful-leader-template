import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import danielaAbout from "@/assets/daniela_about.jpg";

const About = () => {
  const { t, localPath } = useLanguage();
  const a = t.about;

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">{a.tag}</p>
              <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-8">
                {a.title}
              </h1>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>{a.p1}</p>
                <p>{a.p2}</p>
                <p>{a.p3}</p>
              </div>
              <div className="mt-10">
                <Button variant="outline" asChild>
                  <Link to={localPath("/kontakt")}>{a.cta}</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={danielaAbout}
                alt={a.photoAlt}
                className="w-full max-w-sm aspect-[3/4] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
