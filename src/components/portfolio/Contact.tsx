import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap, Download, Github, Facebook } from "lucide-react";
import linkedinIcon from "@/assets/linkedin.png";

const Contact = () => (
  <section id="contact" className="py-20 hero-gradient">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">Get In Touch</h2>
        <div className="w-16 h-1 bg-gold rounded mx-auto mb-8" />
        <p className="text-primary-foreground/70 text-lg mb-10">
          Open to consulting, advisory, and leadership roles in infrastructure, transport governance, and renewable energy.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <a
            href="mailto:ngasyeab@gmail.com"
            className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors min-w-0"
          >
            <Mail className="text-gold shrink-0" size={20} />
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs text-primary-foreground/60">Email</div>
              <div className="text-[13px] font-medium truncate">ngasyeab@gmail.com</div>
            </div>
          </a>
          <a
            href="mailto:abadibullahibue@gmail.com"
            className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors min-w-0"
          >
            <Mail className="text-gold shrink-0" size={20} />
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs text-primary-foreground/60">Alt. Email</div>
              <div className="text-[13px] font-medium truncate">abadibullahibue@gmail.com</div>
            </div>
          </a>
          <a
            href="tel:+251932333439"
            className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors min-w-0"
          >
            <Phone className="text-gold shrink-0" size={20} />
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs text-primary-foreground/60">Phone</div>
              <div className="text-[13px] font-medium truncate">+251 932 333 439</div>
            </div>
          </a>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="https://linkedin.com/in/abadi-bulla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:brightness-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" /> Connect on LinkedIn
          </a>
          <a
            href="https://web.facebook.com/abadi.bulla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:brightness-110"
          >
            <Facebook size={18} /> Facebook
          </a>
          <a
            href="https://github.com/ngasyeab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#24292e] text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:brightness-110"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="/Abadi_Bulla_CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-primary-foreground/20"
          >
            <Download size={18} /> Download CV
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-primary-foreground/50 text-sm">
            <div className="flex items-center gap-2 text-center">
              <GraduationCap size={16} />
              M.Eng Road & Transport · B.Sc Civil Engineering · B.Ed Physics — Mekelle University
            </div>
          </div>
          <p className="text-primary-foreground/30 text-xs mt-6">
            © {new Date().getFullYear()} Abadi Bulla Hibue. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
