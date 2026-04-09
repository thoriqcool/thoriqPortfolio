import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Music, BookOpen, Fish, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Leaf, value: 'Nature', label: 'Lover' },
    { icon: Music, value: 'Music', label: 'Enthusiast' },
    { icon: BookOpen, value: 'Always', label: 'Learning' },
    { icon: Fish, value: 'Fishing', label: 'Hobby' },
  ];

  const accordionData = [
    {
      title: "Tentang Saya",
      content: "Saya adalah pribadi yang menyukai alam, menyanyi, dan selalu tertarik untuk belajar hal-hal baru dalam hidup.",
      content2: "Saya juga memiliki ketertarikan khusus pada seseorang yang berarti bagi saya, yang menjadi bagian dari perjalanan hidup saya.",
      content3: "Saya percaya bahwa setiap pengalaman kecil dapat memberikan makna besar jika dilihat dari sudut pandang yang berbeda."
    },
    {
      title: "Minat & Pengalaman",
      content: "Saya memiliki minat dalam membaca artikel tentang politik dan memahami kondisi negara.",
      content2: "Saya pernah menjadi praja muda dan sering mengikuti kegiatan perkemahan di berbagai provinsi, yang membentuk saya menjadi pecinta alam.",
      content3: "Pengalaman tersebut juga membuat saya lebih terbuka terhadap hal-hal baru dan tantangan."
    },
    {
      title: "Hobi & Kehidupan",
      content: "Saya menikmati berbagai aktivitas seperti bermain gitar, olahraga, dan memancing.",
      content2: "Memancing adalah hobi favorit saya karena selain menyenangkan, juga membantu meredakan stres dan memberikan ketenangan.",
      content3: "Bagi saya, kebahagiaan bisa datang dari hal-hal sederhana, seperti mendapatkan ikan saat memancing."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-widest text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Saya Lebih Dalam
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="aspect-square rounded-3xl glass flex items-center justify-center text-7xl"
            >
              🌿
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">

            {/* Accordion */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full p-4 flex justify-between items-center"
                  >
                    <span className="font-bold">{item.title}</span>
                    <ChevronDown className={`${activeAccordion === index ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 text-muted-foreground space-y-2">
                          <p>{item.content}</p>
                          <p>{item.content2}</p>
                          <p>{item.content3}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 text-center border rounded-xl"
                >
                  <stat.icon className="mx-auto mb-2 text-primary" />
                  <p className="font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
