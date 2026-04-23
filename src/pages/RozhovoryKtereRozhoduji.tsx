import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageCircle, Users, Target, BookOpen, Calendar, MapPin, Clock, UserCheck, Gift, Percent } from "lucide-react";

const RozhovoryKtereRozhoduji = () => {
  const { lang } = useLanguage();
  const isEn = lang === "en";

  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl text-center">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6">
            {isEn ? "Open Course" : "Otevřený kurz"}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-semibold text-foreground leading-tight mb-8">
            {isEn ? "Conversations that matter" : "Rozhovory, které rozhodují"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? "A communication techniques workshop for tough situations — tame your emotions, build relationships, and achieve results."
              : "Workshop komunikačních technik pro náročné situace – skroťte emoce, budujte vztahy a\u00A0dosáhněte výsledků."}
          </p>
          {/* Rezervovat místo - skryto, kurz se připravuje */}
        </div>
      </section>

      {/* Představte si… */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-12 text-center">
            {isEn ? "Imagine…" : "Představte si…"}
          </h2>
          <div className="space-y-6">
            {(isEn
              ? [
                  "…your team finally understands what you want from them and stops asking about unnecessary details",
                  "…a client responds constructively after a tough conversation and collaboration continues smoothly",
                  "…you handle even an unpleasant conversation with confidence and control, and relationships grow stronger",
                  "…conflicts turn into results that move you and your projects forward",
                ]
              : [
                  "…že váš tým konečně pochopí, co od něj chcete, a\u00A0přestane se ptát na zbytečné detaily",
                  "…že klient po náročném rozhovoru reaguje konstruktivně a\u00A0spolupráce pokračuje hladce",
                  "…že i nepříjemný rozhovor zvládnete s\u00A0jistotou a\u00A0kontrolou, a\u00A0vztahy se posílí",
                  "…že konflikty se promění ve výsledky, které posouvají vás i\u00A0vaše projekty dál",
                ]
            ).map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                <p className="text-foreground text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-accent font-medium text-center mt-10 italic">
            {isEn
              ? "This is not a coincidence — it's a new way of communicating that works."
              : "Toto není náhoda – je to nový způsob komunikace, který funguje."}
          </p>
        </div>
      </section>

      {/* O čem workshop bude */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {isEn ? "What the workshop covers" : "O\u00A0čem workshop bude"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(isEn
              ? [
                  "How to handle difficult conversations without damaging relationships",
                  "How to resolve conflict and strengthen trust",
                  "How to lead the toughest conversations while leaving room for understanding and cooperation",
                  "Obstacles to healthy communication and how to overcome them",
                ]
              : [
                  "Jak zvládat náročné rozhovory bez poškození vztahů",
                  "Jak vyřešit konflikt a\u00A0posílit důvěru",
                  "Jak vést nejtěžší rozhovory, aby zůstalo místo pro porozumění a\u00A0spolupráci",
                  "Překážky zdravé komunikace a\u00A0jak je překonat",
                ]
            ).map((item, i) => (
              <div key={i} className="bg-secondary border border-border p-6">
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktické techniky */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <Target className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {isEn ? "Practical techniques" : "Praktické techniky"}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(isEn
              ? ["Labelling / naming emotions", "Conflict de-escalation", "Open questions & paraphrasing", "Nonviolent communication"]
              : ["Labelling / pojmenování emocí", "Deeskalace konfliktu", "Otevřené otázky a\u00A0parafrázování", "Nenásilná komunikace"]
            ).map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-background border border-border p-5">
                <span className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pro koho */}
      <section className="py-24 md:py-32">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <Users className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {isEn ? "Who is the workshop for" : "Pro koho je workshop"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(isEn
              ? [
                  { icon: UserCheck, label: "Managers & team leaders" },
                  { icon: Target, label: "Entrepreneurs" },
                  { icon: MessageCircle, label: "Anyone communicating with colleagues, clients or partners" },
                ]
              : [
                  { icon: UserCheck, label: "Manažeři a\u00A0team leadeři" },
                  { icon: Target, label: "Podnikatelé" },
                  { icon: MessageCircle, label: "Všichni, kdo komunikují s\u00A0kolegy, klienty nebo obchodními partnery" },
                ]
            ).map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-6 h-6 text-accent mx-auto mb-4" />
                <p className="text-foreground leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formát a informace - skryto, kurz se připravuje */}

      {/* Hromadná sleva */}
      <section className="py-24 md:py-32">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-secondary border border-border p-8">
              <Percent className="w-6 h-6 text-accent mb-4" />
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                {isEn ? "Group discount" : "Hromadná sleva"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isEn
                  ? "Ordering two or more participants in one order? Enter the code TEAM10 and get a 10% discount. Participants don't have to be from the same company — they can be colleagues, partners, or friends."
                  : "Pokud objednáváte dva a\u00A0více účastníků v\u00A0rámci jedné objednávky, zadejte kód TEAM10 a\u00A0získáte desetiprocentní slevu. Účastníci nemusí být ze stejné firmy – mohou to být kolegové, partneři, přátelé."}
              </p>
              <p className="mt-4 inline-block bg-accent/10 text-accent font-mono font-semibold px-4 py-2 border border-accent/20 text-sm tracking-wider">
                TEAM10
              </p>
            </div>
            <div className="bg-secondary border border-border p-8">
              <Users className="w-6 h-6 text-accent mb-4" />
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                {isEn ? "Custom corporate course" : "Firemní kurz na míru"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {isEn
                  ? "Want to organize the workshop just for your team? Content and price will be tailored — contact me for a corporate offer."
                  : "Chcete uspořádat workshop pouze pro váš tým? Obsah i\u00A0cena se upraví na míru – kontaktujte mne pro firemní nabídku."}
              </p>
              <Button variant="outline" className="mt-6" asChild>
                <a href="https://calendly.com/danielasedlonova/konzultace" target="_blank" rel="noopener noreferrer">
                  {isEn ? "I want a corporate course" : "Chci kurz pro firmu"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Materiály a bonus */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <Gift className="w-8 h-8 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {isEn ? "Materials & bonus" : "Materiály a\u00A0bonus"}
            </h2>
          </div>
          <div className="space-y-4">
            {(isEn
              ? [
                  "One-pager with key techniques for every participant",
                  "Practical checklist for difficult conversations",
                  "Tips you can apply immediately in your work",
                ]
              : [
                  "One-pager s\u00A0klíčovými technikami pro každého účastníka",
                  "Praktický checklist pro náročné rozhovory",
                  "Tipy, které můžete rovnou aplikovat ve své práci",
                ]
            ).map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-background border border-border p-5">
                <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - skryto, kurz se připravuje */}
    </div>
  );
};

export default RozhovoryKtereRozhoduji;
