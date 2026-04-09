import { motion } from "framer-motion";
import { ArrowDown, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/thoriqcool",
      label: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/thariq_279",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <ThreeScene />

      {/* 🌿 BACKGROUND GLOW */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          
          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <motion.img
              src="/fotopertama.jpg"
              alt="Thariq"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-glow"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">Nature Lover</span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-6"
            >
              Saya menyukai alam, bernyanyi, dan belajar hal baru.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground mb-8"
            >
              Saya tertarik pada politik dan memiliki pengalaman dalam kegiatan perkemahan yang membentuk saya sebagai pecinta alam. Saya juga menikmati aktivitas seperti bermain gitar dan memancing sebagai cara untuk bersantai.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10"
            >
              <Button
                size="lg"
                className="rounded-full px-8 shadow-glow hover:scale-105 transition"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Lihat Projects
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 hover:scale-105 transition"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ⬇️ SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass cursor-pointer"
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}