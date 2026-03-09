const OchranaOsobnichUdaju = () => {
  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-12">
            Informace o zpracování osobních údajů
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Správce:</strong> Daniela Sedloňová, Buzulucká 570/8, 160 00 Praha 6, IČ: 76053261.
              <br />
              E-mail: <a href="mailto:info@danielasedlonova.cz" className="text-accent hover:underline">info@danielasedlonova.cz</a>.
            </p>

            <p>
              Zpracovávám vaše údaje (jméno, e-mail, fakturační údaje) pouze pro účely odpovědí na poptávky, plnění smlouvy a zákonné účetní povinnosti (10 let).
            </p>

            <p>
              <strong className="text-foreground">Cookies:</strong> Tento web nevyužívá žádné analytické ani marketingové cookies třetích stran (jako Google Analytics). Používám pouze nezbytné technické cookies pro fungování webu, proto není vyžadována cookie lišta.
            </p>

            <p>
              <strong className="text-foreground">Zpracovatelé:</strong> Wedos (hosting), Google Workspace (e-mail), ProAccounting (účetnictví) a SimpleShop (fakturace).
            </p>

            <p className="text-sm text-muted-foreground/60 pt-8 border-t border-border">
              Účinnost od 9. března 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OchranaOsobnichUdaju;
