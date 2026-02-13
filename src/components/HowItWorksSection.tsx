import { motion } from "framer-motion";
import { UserPlus, MessageSquare, Wifi } from "lucide-react";

const steps = [
  { icon: UserPlus, num: "01", title: "Create Account", desc: "Sign up in seconds with your email." },
  { icon: MessageSquare, num: "02", title: "Start Chatting", desc: "Open Cliff Chat in your browser and message anyone instantly." },
  { icon: Wifi, num: "03", title: "Stay Connected", desc: "Enjoy seamless, real-time conversations from any device." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 section-sand">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
          How it works
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
          Up and running in <span className="gradient-text">3 steps</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-3xl gradient-orange mx-auto mb-6 flex items-center justify-center shadow-lg">
              <s.icon size={32} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-primary tracking-widest">{s.num}</span>
            <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
