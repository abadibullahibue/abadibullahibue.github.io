import { motion } from "framer-motion";
import { Bus, Sun, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: Bus,
    title: "Automated Transit Ticket Infrastructure",
    objective: "Modernize transport terminal tracking and protect tariff revenues across 44 public regional bus hubs.",
    execution: "Deployed electronic POS hardware, custom database syncing, and Odoo-linked dashboards converting legacy manual workflows into real-time digital operations.",
    result: "Recovered ~100M ETB in administrative and operational revenue within a single year.",
  },
  {
    icon: Sun,
    title: "WHO Off-Grid Cold-Chain Energy Rollout",
    objective: "Secure reliable alternative energy for 176 remote healthcare posts across Tigray.",
    execution: "Designed mounting configurations for solar PV panels, charge controllers, and industrial battery banks engineered to withstand harsh conditions.",
    result: "Guaranteed continuous power for vaccine storage, preventing medical spoilage in remote rural zones.",
  },
  {
    icon: GraduationCap,
    title: "National Curriculum Assessment Contribution",
    objective: "Create high-standard evaluation tools for secondary physics and mathematics education.",
    execution: "Authored 1,000+ matrix-aligned question codes and testing criteria matching the Ministry of Education's cognitive domains.",
    result: "Scaled across multiple regional districts to standardize STEM student performance tracking.",
  },
];

const Publications = () => (
  <section id="publications" className="py-20 section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Projects & Impact</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow flex flex-col"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p.icon className="text-gold mb-3" size={28} />
            <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gold font-semibold">Objective: </span>
                <span className="text-foreground/75">{p.objective}</span>
              </div>
              <div>
                <span className="text-gold font-semibold">Execution: </span>
                <span className="text-foreground/75">{p.execution}</span>
              </div>
              <div>
                <span className="text-gold font-semibold">Result: </span>
                <span className="text-foreground/75">{p.result}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
