import { motion } from "framer-motion";
import { TrendingUp, Sun, Bus, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: Bus,
    title: "Digital Transit Transformation",
    description: "Deployed automated Electronic Ticketing and POS systems across 44 regional bus terminals, converting manual workflows into a unified cloud tracking network with real-time fiscal oversight.",
  },
  {
    icon: TrendingUp,
    title: "Public Revenue Recovery",
    description: "Recovered approximately 100M ETB in operational public funds within 12 months by closing tariff leakages and enforcing transparent transport pricing compliance.",
  },
  {
    icon: Sun,
    title: "Off-Grid Cold-Chain Energy",
    description: "Engineered and commissioned solar PV systems for 176 remote clinics under WHO restoration, guaranteeing continuous vaccine refrigeration in post-conflict rural Tigray.",
  },
  {
    icon: GraduationCap,
    title: "National STEM Assessment",
    description: "Authored and peer-validated 1,000+ matrix-standard Physics and Mathematics test items adopted into the Ethiopian National Curriculum's centralized examination framework.",
  },
];

const Achievements = () => (
  <section id="achievements" className="py-20 section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Key Achievements</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <a.icon className="text-gold mb-4" size={36} />
            <h3 className="font-display text-xl font-bold text-foreground mb-3">{a.title}</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">{a.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
