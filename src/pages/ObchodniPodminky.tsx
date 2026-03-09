const ObchodniPodminky = () => {
  const sections = [
    {
      num: "1",
      title: "Úvod",
      text: "Tyto podmínky upravují vztah mezi Danielou Sedloňovou (IČ: 76053261) a klienty mých online kurzů a konzultací.",
    },
    {
      num: "2",
      title: "Smlouva",
      text: "Smlouva vzniká odesláním objednávky (tlačítko zavazující k platbě).",
    },
    {
      num: "3",
      title: "Platba",
      text: "Platba probíhá bankovním převodem na základě faktury s QR kódem generované systémem SimpleShop. Nejsem plátce DPH.",
    },
    {
      num: "4",
      title: "Digitální obsah",
      text: "Přístup ke kurzům je zaslán po připsání platby. U konzultací lze termín zrušit zdarma do 24h předem.",
    },
    {
      num: "5",
      title: "Odstoupení",
      text: "Máte právo odstoupit do 14 dnů, pokud jste však již obdrželi přístup k digitálnímu obsahu s vaším souhlasem, toto právo zaniká.",
    },
    {
      num: "6",
      title: "Autorská práva",
      text: "Veškeré materiály jsou mým duševním vlastnictvím a jejich šíření je zakázáno.",
    },
  ];

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-12">
            Všeobecné obchodní podmínky
          </h1>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.num}>
                <h2 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {s.num}. {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground/60 pt-8 mt-12 border-t border-border">
            Účinnost od 9. března 2026.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ObchodniPodminky;
