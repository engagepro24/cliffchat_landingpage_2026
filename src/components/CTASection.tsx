import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/30 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
    </div>

    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
          Start Chatting <span className="gradient-text">Smarter</span> Today
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Join millions who trust Cliff Chat for fast, secure, and beautiful messaging.
        </p>
        <a
          href="https://www.cliffchat.chat"
          className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-orange px-10 py-5 text-lg font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all"
        >
          SignUp  <ArrowRight size={20} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
