import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Animasi beda dari sebelumnya (fade + scale)
const variants = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -30 },
};

// DATA GUNUNG
const mountains = [
  {
    name: "Gunung Prau",
    location: "Jawa Tengah",
    height: "2.565 mdpl",
    emoji: "⛰️",
  },
  {
    name: "Gunung Salak",
    location: "Jawa Barat",
    height: "2.211 mdpl",
    emoji: "🌿",
  },
  {
    name: "Gunung Bromo",
    location: "Jawa Timur",
    height: "2.329 mdpl",
    emoji: "🌋",
  },
  {
    name: "Gunung Seulawah",
    location: "Aceh",
    height: "1.810 mdpl",
    emoji: "🌲",
  },
  {
    name: "Gunung Burni Telong",
    location: "Aceh",
    height: "2.624 mdpl",
    emoji: "🔥",
  },
];

export default function SummitCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % mountains.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + mountains.length) % mountains.length);
  };

  // auto play
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium block mb-2">
            Summit Log
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-3">
            Gunung yang Pernah Didaki
          </h2>
          <p className="text-muted-foreground">
            Beberapa perjalanan menuju puncak yang pernah saya lalui
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl glass text-center shadow-card"
            >
              {/* Emoji */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-7xl mb-4"
              >
                {mountains[index].emoji}
              </motion.div>

              {/* Nama Gunung */}
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                {mountains[index].name}
              </h3>

              {/* Lokasi */}
              <p className="text-muted-foreground mb-1">
                {mountains[index].location}
              </p>

              {/* Ketinggian */}
              <p className="text-primary font-semibold text-lg">
                {mountains[index].height}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigasi */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full glass hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full glass hover:scale-110 transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {mountains.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-primary/30"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}