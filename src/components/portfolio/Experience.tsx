import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    org: "Tigray Bureau of Transport and Communication",
    role: "Deputy Bureau Head | Directorate Director, Service & Bus Station Management",
    years: "2024 – Present",
    highlights: [
      "Deployed automated Electronic Ticketing System across 44 public transit terminals, unifying paper workflows into a cloud tracking network",
      "Recovered ~100M ETB in public revenue within 12 months through integrated POS infrastructure curbing tariff leakages",
      "Supervised setup of the Regional Data Center with a 10M ETB capital budget, unifying telemetry and communication links",
      "Mandated GPS-linked speed limiter calibration across commercial transit vehicles and government fleet assets",
      "Organized and sustained 300+ technical and operational roles, deploying over 42M ETB in annual public wages",
      "Engineered a traveler micro-donation module generating 5M ETB for the Regional Veterans Commission",
    ],
  },
  {
    org: "World Health Organization (WHO) — Regional Health Post Restoration",
    role: "Solar Systems Subcontractor & Technical Installation Lead",
    years: "2023 – 2024",
    highlights: [
      "Managed logistics and remote storage protocols for solar PV arrays, battery banks, and medical refrigeration components",
      "Coordinated distribution across remote corridors to deliver off-grid energy setups to 176 rural clinics and health posts",
      "Supervised array framing, inverter calibration, and thermal validation — securing continuous cold-chain vaccine storage",
    ],
  },
  {
    org: "The Global Consulting Architects and Engineers PLC",
    role: "Construction Engineering Technician",
    years: "November 2016 – December 2021",
    highlights: [
      "Enforced civil QA through Proctor density, CBR subgrade, and concrete slump tests per ERA manuals",
      "Lead AutoCAD drafter for highway alignments, drainage cross-sections, intersections, and as-built structural plans",
      "Compiled five years of engineering logs, billing measurement sheets, and monthly milestone briefings for consultants",
    ],
  },
  {
    org: "Row Consultant | Mullu Hadgu Construction",
    role: "Construction Site Supervisor",
    years: "2018 – 2019",
    highlights: [
      "Supervised workforce, equipment, and material supply on Adigudem–Adiwejerat road rehabilitation and asphalt resurfacing",
      "Diagnosed subgrade moisture failures and embankment anomalies on-site, preventing structural degradation",
    ],
  },
  {
    org: "Sheba College, Microlink College, New Millennium College & regional high schools",
    role: "Senior Physics Specialist & Mathematics Instructor",
    years: "2001 – 2016",
    highlights: [
      "Lectured modern physics, applied electronics, and calculus across regional private higher-education institutions",
      "Authored 1,000+ matrix-standard Physics and Mathematics evaluation items for the Ethiopian National Curriculum",
      "Pioneered classroom integration of interactive PhET simulations in under-resourced science departments",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center">Professional Experience</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-12" />
      </motion.div>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-gold border-4 border-card shadow" />
            <div className="bg-secondary rounded-xl p-6 md:p-8 border border-border hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-gold font-semibold flex items-center gap-2">
                    <Briefcase size={16} /> {exp.org}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm font-medium mt-1 md:mt-0 bg-muted px-3 py-1 rounded-full w-fit">
                  {exp.years}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="text-foreground/75 text-sm flex gap-2">
                    <span className="text-gold mt-1.5 flex-shrink-0">●</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
