import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah K.", role: "Product Designer", text: "Cliff Chat replaced three apps for me. The speed and encryption are unmatched.", avatar: "SK" },
  { name: "David M.", role: "Startup Founder", text: "Our entire team moved to Cliff Chat. Group chats and file sharing just work.", avatar: "DM" },
  { name: "Amina R.", role: "Freelancer", text: "Finally a messaging app that respects my privacy without sacrificing design.", avatar: "AR" },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 md:py-32 section-sand">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
          Loved by <span className="gradient-text">thousands</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-orange flex items-center justify-center text-xs font-bold text-primary-foreground">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
