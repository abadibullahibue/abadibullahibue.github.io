import { motion } from "framer-motion";

const categories = [
  {
    title: "Civil & Highway Engineering",
    skills: ["Flexible & Rigid Pavement Design", "Highway Geometric Layout", "Pavement Distress Diagnosis", "Structural Rehabilitation", "ERA Design Guidelines"],
  },
  {
    title: "Materials & Geotechnics",
    skills: ["Proctor Compaction Tests", "California Bearing Ratio (CBR)", "Concrete Slump Testing", "USCS Soil Classification", "Aggregate Durability"],
  },
  {
    title: "Energy Architecture",
    skills: ["Solar PV Array Sizing", "Deep-Cycle Battery Storage", "Inverter Waveform Alignment", "Charge Controller Calibration", "Cold-Chain Electrical Engineering"],
  },
  {
    title: "Software & Technical Tools",
    skills: ["AutoCAD Suite", "Odoo ERP", "Electronic POS Networks", "GPS Telematic Fleet Integration", "PhET Simulations", "MS Excel Engineering Modeling"],
  },
  {
    title: "Executive Governance",
    skills: ["Public Policy Formulation", "Transit Tariff Design", "Capital Infrastructure Budgeting", "Inter-Governmental Liaison", "300+ Staff Management"],
  },
  {
    title: "STEM Education",
    skills: ["Modern Physics Lecturing", "Applied Calculus", "Curriculum Design", "Examination Authoring", "Digital Laboratory Integration"],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Skills & Tools</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-secondary rounded-xl p-6 border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-3 border-b border-gold/30">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="text-sm font-semibold px-3 py-1.5 rounded-full bg-card text-foreground/80 border border-border">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
