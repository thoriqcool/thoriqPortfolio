import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Peserta KEMNAS 2024',
    issuer: 'Kegiatan Nasional',
    date: '2024',
    credentialId: 'KEMNAS-2024',
    image: '🏕️',
    color: 'from-green-500/20 to-emerald-500/20',
    link: '#',
  },
  {
    title: 'Peserta Kemah Budaya 2024',
    issuer: 'Kegiatan Budaya',
    date: '2024',
    credentialId: 'KB-2024',
    image: '🎭',
    color: 'from-amber-500/20 to-orange-500/20',
    link: '#',
  },
  {
    title: 'Peserta LP3 Aceh Singkil',
    issuer: 'LP3 Aceh Singkil',
    date: '2023',
    credentialId: 'LP3-2023',
    image: '🌲',
    color: 'from-green-600/20 to-lime-500/20',
    link: '#',
  },
  {
    title: 'Juara 3 LBFT',
    issuer: 'Lomba',
    date: '2023',
    credentialId: 'LBFT-3',
    image: '🥉',
    color: 'from-yellow-500/20 to-orange-400/20',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Prestasi</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Pengalaman & Prestasi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group perspective"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card transition-all duration-300 group-hover:shadow-glow relative overflow-hidden">
                
                {/* GLOW BACKGROUND */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/10 to-transparent blur-xl" />

                {/* ICON */}
                <motion.div 
                  className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <span className="text-3xl">{cert.image}</span>
                </motion.div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground/70 font-mono">
                    ID: {cert.credentialId}
                  </p>
                  
                  {/* BUTTON MUNCUL SAAT HOVER */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="pt-2"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full opacity-0 group-hover:opacity-100 transition"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Detail
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}