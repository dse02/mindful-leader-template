import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Zpráva byla odeslána. Děkuji!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-xl">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6 text-center">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-6 text-center">
            Spojme se
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-14 leading-relaxed">
            Pokud máte zájem o spolupráci, napište nebo si domluvte úvodní konzultaci.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-sans font-medium text-foreground mb-2">
                Jméno
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Vaše jméno"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-sans font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="vas@email.cz"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-sans font-medium text-foreground mb-2">
                Zpráva
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Vaše zpráva..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Odeslat
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
