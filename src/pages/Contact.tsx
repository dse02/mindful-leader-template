import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xyknplga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success(c.success);
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Něco se pokazilo. Zkuste to prosím znovu.");
      }
    } catch {
      toast.error("Něco se pokazilo. Zkuste to prosím znovu.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-24 md:py-36">
        <div className="container max-w-xl">
          <p className="text-accent font-sans text-sm tracking-[0.2em] uppercase mb-6 text-center">
            {c.tag}
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-6 text-center">
            {c.title}
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-14 leading-relaxed">
            {c.desc}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-sans font-medium text-foreground mb-2">
                {c.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder={c.namePlaceholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-sans font-medium text-foreground mb-2">
                {c.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder={c.emailPlaceholder}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-sans font-medium text-foreground mb-2">
                {c.messageLabel}
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder={c.messagePlaceholder}
              />
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              {submitting ? "Odesílám..." : c.submit}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
