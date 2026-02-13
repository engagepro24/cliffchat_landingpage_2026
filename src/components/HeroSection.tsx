// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import heroMockup from "@/assets/hero-mockup.png";

// const HeroSection = () => (
//   <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
//     {/* Background shapes */}
//     <div className="absolute inset-0 -z-10 overflow-hidden">
//       <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
//       <div className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full bg-secondary/40 blur-3xl" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
//     </div>

//     <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
//       <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//         {/* Left */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center lg:text-left"
//         >
//           <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6 tracking-wide uppercase">
//             Now in Beta
//           </span>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-foreground mb-6">
//             Messaging.{" "}
//             <span className="gradient-text">Reimagined.</span>
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
//             Secure, fast, and beautifully simple real-time messaging.
//             Connect with the people who matter most — privately and instantly.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <a
//               href="#cta"
//               className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-orange px-8 py-4 text-base font-bold text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
//             >
//               Get Started <ArrowRight size={18} />
//             </a>
//             <a
//               href="#features"
//               className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-foreground/15 px-8 py-4 text-base font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
//             >
//               Learn More
//             </a>
//           </div>
//         </motion.div>

//         {/* Right - mockup */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.95 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex justify-center lg:justify-end"
//         >
//           <div className="relative">
//             <div className="absolute inset-0 rounded-3xl gradient-orange opacity-20 blur-3xl scale-90" />
//             <img
//               src={heroMockup}
//               alt="Cliff Chat web app interface"
//               className="relative w-full max-w-lg animate-float drop-shadow-2xl rounded-2xl"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );

// export default HeroSection;



import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Lock, Globe } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";
import { useRef } from "react";

const floatKeyframes = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(0.5deg); }
  66% { transform: translateY(-6px) rotate(-0.5deg); }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes pulse-ring {
  0% { transform: scale(0.95); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 0.2; }
  100% { transform: scale(0.95); opacity: 0.6; }
}
@keyframes orbit {
  from { transform: rotate(0deg) translateX(140px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
}
@keyframes ticker {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

const stats = [
  { label: "Active Users", value: "120K+" },
  { label: "Messages/Day", value: "4.2M" },
  { label: "Uptime", value: "99.99%" },
];

const pillars = [
  { icon: <Lock size={14} />, label: "End-to-end Encrypted" },
  { icon: <Zap size={14} />, label: "< 50ms Latency" },
  { icon: <Globe size={14} />, label: "Global CDN" },
];

const tickerItems = [
  "Secure Messaging",
  "Real-Time Delivery",
  "End-to-End Encryption",
  "Group Channels",
  "File Sharing",
  "Voice Notes",
  "Read Receipts",
  "Cross-Platform",
  "Secure Messaging",
  "Real-Time Delivery",
  "End-to-End Encryption",
  "Group Channels",
  "File Sharing",
  "Voice Notes",
  "Read Receipts",
  "Cross-Platform",
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <>
      <style>{floatKeyframes}</style>

      <section
        ref={containerRef}
        className="relative min-h-screen flex flex-col overflow-hidden pt-16 bg-background"
      >
        {/* ── Layered Background ───────────────────────────── */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -z-10 pointer-events-none"
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Radial spotlights */}
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[100px]" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-secondary/50 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[60px]" />

          {/* Diagonal accent stripe */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--primary) 0px, transparent 1px, transparent 80px, var(--primary) 81px)",
            }}
          />
        </motion.div>

        {/* ── Ticker Bar ──────────────────────────────────── */}
        <div className="relative z-10 border-b border-foreground/6 py-2.5 overflow-hidden bg-background/50 backdrop-blur-sm">
          <div
            className="flex gap-10 whitespace-nowrap"
            style={{ animation: "ticker 30s linear infinite" }}
          >
            {tickerItems.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground/60 uppercase tracking-widest"
              >
                <span
                  className="w-1 h-1 rounded-full bg-primary/50 inline-block"
                  aria-hidden
                />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main Content ─────────────────────────────────── */}
        <div className="flex-1 container mx-auto px-4 md:px-8 py-12 md:py-20 flex items-center">
          <div className="w-full grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-center">

            {/* ── LEFT ──────────────────────────────────── */}
            <div className="text-center lg:text-left">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Now in Beta
                </span>
              </motion.div>

              {/* Headline — split layout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="font-black tracking-tight leading-none text-foreground mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-[clamp(3rem,9vw,6.5rem)] block"
                  >
                    Messaging.

                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-[clamp(3rem,9vw,6.5rem)] block text-primary"

                  >
                    Reimagined.
                  </motion.div>

                </h1>
              </motion.div>

              {/* Divider accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="origin-left h-px w-40 mx-auto lg:mx-0 mb-7 mt-4"
                style={{
                  background:
                    "linear-gradient(to right, var(--primary), transparent)",
                }}
              />

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                Secure, fast, and beautifully simple real-time messaging.
                Connect with the people who matter most —&nbsp;
                <span className="text-foreground font-semibold">
                  privately and instantly.
                </span>
              </motion.p>

              {/* Pillar chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
              >
                {pillars.map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-foreground/10 bg-foreground/4 px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {icon}
                    {label}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a
                  href="#cta"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-2xl gradient-orange px-9 py-4 text-base font-bold text-primary-foreground shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                >
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight size={18} />
                  </span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-foreground/12 px-8 py-4 text-base font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>

              {/* Stats row */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex gap-8 mt-12 justify-center lg:justify-start border-t border-foreground/6 pt-8"
              >
                {stats.map(({ label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl font-black text-foreground tracking-tight">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground/70 font-medium mt-0.5">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </motion.div> */}
            </div>

            {/* ── RIGHT — mockup ──────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.93 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end relative"
            >
              {/* Orbit ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="absolute w-[340px] h-[340px] rounded-full border border-primary/10"
                  style={{ animation: "pulse-ring 4s ease-in-out infinite" }}
                />
                <div className="absolute w-[440px] h-[440px] rounded-full border border-primary/5" />

                {/* Orbiting dot */}
                <div
                  className="absolute"
                  style={{ animation: "orbit 8s linear infinite" }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary shadow-lg" />
                </div>
                <div
                  className="absolute"
                  style={{
                    animation: "orbit 13s linear infinite reverse",
                    animationDelay: "-4s",
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                </div>
              </div>

              {/* Card shell */}
              <div className="relative z-10">
                {/* Glow */}
                <div
                  className="absolute -inset-8 rounded-[2.5rem] opacity-30 blur-2xl -z-10 gradient-orange"
                />

                {/* Border shimmer */}
                <div
                  className="absolute -inset-[1px] rounded-3xl -z-[1]"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--primary) 0%, transparent 50%, var(--secondary) 100%)",
                    opacity: 0.35,
                  }}
                />

                <motion.div style={{ y: mockupY }}>
                  <img
                    src={heroMockup}
                    alt="Cliff Chat web app interface"
                    className="relative w-full max-w-[500px] drop-shadow-2xl rounded-3xl"
                    style={{ animation: "float 6s ease-in-out infinite" }}
                  />
                </motion.div>

                {/* Notification bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5, ease: "backOut" }}
                  className="absolute -top-4 -right-6 bg-background/95 backdrop-blur-md border border-foreground/10 rounded-2xl px-4 py-2.5 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">
                      12 online now
                    </span>
                  </div>
                </motion.div>

                {/* Delivery badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.5, ease: "backOut" }}
                  className="absolute -bottom-4 -left-6 bg-background/95 backdrop-blur-md border border-foreground/10 rounded-2xl px-4 py-2.5 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Zap size={12} className="text-primary" />
                    <span className="text-xs font-bold text-foreground">
                      Delivered in 23ms
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;