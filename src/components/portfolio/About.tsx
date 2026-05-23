import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">Professional Profile</h2>
        <div className="w-16 h-1 bg-gold rounded mb-8" />
        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          Senior infrastructure administrator and professional engineer with a <span className="font-semibold text-foreground">20-year career</span> spanning public-sector logistics governance, heavy civil construction, off-grid renewable energy deployments, and academic STEM leadership. Currently serving as Deputy Bureau Head for the Tigray Bureau of Transport and Communication, specializing in institutional digital transformation, transit asset stabilization, and modernizing post-conflict public utility frameworks.
        </p>
        <p className="text-foreground/80 text-lg leading-relaxed">
          A distinct multidisciplinary profile — M.Eng in Road and Transport Engineering, B.Sc in Civil Engineering, and B.Ed in Physics — bridging complex geometric and structural civil designs with macro-level public policy execution and automated data center operations. Dedicated to "Build Back Better" principles delivering climate-resilient, logistically secure, and financially transparent public infrastructure.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { num: "20+", label: "Years Experience" },
            { num: "100M ETB", label: "Revenue Recovered" },
            { num: "176", label: "Off-Grid Clinics Powered" },
            { num: "300+", label: "Staff Supervised" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary">
              <div className="font-display text-2xl md:text-3xl font-bold text-gold">{stat.num}</div>
              <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
