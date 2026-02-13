import { motion } from "framer-motion";
import { MessageCircle, Lock, Users, Image, Heart, UserCircle } from "lucide-react";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";


const features = [
    {
        icon: MessageCircle,
        image: image1,
        title: "Instant Messaging",
        desc: "Send and receive messages in real-time with lightning speed."
    },
    {
        icon: Lock,
        image: image3,
        title: "End-to-End Encryption",
        desc: "Your conversations are fully secure and private."
    },
    {
        icon: Users,
        image: image4,
        title: "Group Chats",
        desc: "Create groups and stay connected with your team or friends."
    },
    {
        icon: Users,
        image: image5,
        title: "Group Chats",
        desc: "Create groups and stay connected with your team or friends."
    },
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
                    Universal Accessibility
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
                    Beautiful on  <span className="gradient-text">Every Device</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A sleek, responsive interface that works perfectly in any browser.
                </p>
            </motion.div>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
            >
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="glass-card rounded-2xl p-8 group hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-default"
                    >
                        <img
                            src={f.image}
                            alt={f.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />

                        {/* <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <f.icon size={22} className="text-primary-foreground" />
                        </div>

                        <h3 className="text-lg font-bold text-foreground mb-2">
                            {f.title}
                        </h3>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {f.desc}
                        </p> */}
                    </motion.div>
                ))}
            </motion.div>

        </div>
    </section>
);

export default FeaturesSection;
