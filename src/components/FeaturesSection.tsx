import { motion } from "framer-motion";
import { MessageCircle, Lock, Users, Image, Heart, UserCircle } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "Real-Time Messaging", desc: "Instant delivery with live typing indicators and read receipts." },
  { icon: Lock, title: "End-to-End Encryption", desc: "Your messages are fully encrypted — only you and your recipient can read them." },
  { icon: Users, title: "Group Chats", desc: "Create groups with your friends and family to share experiences and stay connected." },
  { icon: Image, title: "Media & File Sharing", desc: "Share photos, videos, documents, and voice notes seamlessly." },
  { icon: Heart, title: "Message Reactions", desc: "React to any message with emojis for quick, expressive responses." },
  { icon: UserCircle, title: "Customizable Profiles", desc: "Express yourself with custom avatars" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => (
  <section id="features" className="py-24 md:py-32">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4 tracking-wide uppercase">
          Features
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
          Everything you need to <span className="gradient-text">stay connected</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Powerful tools built for the way you communicate.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className="glass-card rounded-2xl p-8 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <f.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
