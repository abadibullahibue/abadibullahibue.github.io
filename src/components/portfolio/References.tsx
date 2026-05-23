import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const references = [
  {
    name: "Etsub Girmay",
    title: "General Manager",
    org: "Global Consulting Architects and Engineers PLC",
    context: "Direct corporate employer and engineering inspector across 5 years of heavy construction execution.",
    email: null,
    phone: "+251-914-022-814",
  },
  {
    name: "Milashu Negese, M.Eng",
    title: "Chief Supervisor for Civil Engineering Works",
    org: "Mekelle Municipality",
    context: "Long-term municipal peer and transport planning reference.",
    email: null,
    phone: "+251-914-267-696",
  },
  {
    name: "Goitom Yisfa Alemu",
    title: "Director, Information Management Office (IMO)",
    org: "Mekelle University · Senior Lecturer, MIT",
    context: "Institutional technology collaborator and infrastructure project reference.",
    email: "goitom.yisfa@mu.edu.et",
    phone: "+251-946-904-032",
  },
];

const References = () => (
  <section id="references" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
          Professional References
        </h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {references.map((ref, i) => (
          <motion.div
            key={i}
            className="bg-secondary rounded-xl p-6 border border-border hover:shadow-md transition-shadow text-center flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <User className="text-gold" size={28} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{ref.name}</h3>
            <p className="text-gold text-sm font-semibold mb-1">{ref.title}</p>
            <p className="text-muted-foreground text-sm mb-3">{ref.org}</p>
            <p className="text-foreground/60 text-xs italic mb-4">{ref.context}</p>
            <div className="space-y-2 text-sm mt-auto">
              {ref.email && (
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors break-all"
                >
                  <Mail size={14} /> {ref.email}
                </a>
              )}
              <a
                href={`tel:${ref.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center justify-center gap-2 text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={14} /> {ref.phone}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default References;
