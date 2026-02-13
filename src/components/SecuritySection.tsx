import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server } from "lucide-react";

const points = [
  { icon: Lock, text: "End-to-end encryption on every message" },
  { icon: Eye, text: "No data tracking or ad profiling" },
  { icon: Server, text: "Secure cloud infrastructure" },
  { icon: Shield, text: "Open security audits & transparency" },
];

const SecuritySection = () => (
  <section id="security" className="py-24 md:py-32 section-dark relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] -z-0" />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
          Security
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Privacy-first <span className="gradient-text">messaging</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto opacity-70">
          Your conversations belong to you. We never read, sell, or share your data.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <p.icon size={20} className="text-primary" />
            </div>
            <span className="text-sm font-medium">{p.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
