import { motion } from "framer-motion";
import { Construction, Bus, Sun, Cpu, Ruler, FlaskConical, Landmark, GraduationCap, Database } from "lucide-react";

const items = [
  { icon: Construction, title: "Civil & Highway Engineering" },
  { icon: Bus, title: "Transport Governance & Logistics" },
  { icon: Sun, title: "Solar & Off-Grid Energy Systems" },
  { icon: Cpu, title: "Digital Transit Automation" },
  { icon: Ruler, title: "AutoCAD & Geometric Design" },
  { icon: FlaskConical, title: "Materials & Geotechnical Testing" },
  { icon: Landmark, title: "Public Policy & Capital Budgeting" },
  { icon: Database, title: "Regional Data Center Operations" },
  { icon: GraduationCap, title: "STEM Education & Curriculum Design" },
];

const CoreExpertise = () => (
  <section id="expertise" className="py-20 section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Core Expertise</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <item.icon className="text-gold mb-3" size={28} />
              <h3 className="font-body font-semibold text-foreground">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CoreExpertise;
