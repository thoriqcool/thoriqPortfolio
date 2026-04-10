// "use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. Komponen Emoji Animated (pengganti image)
const EmojiDisplay = ({ emoji }: { emoji: string }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.span
        initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="text-6xl md:text-7xl drop-shadow-xl"
      >
        {emoji}
      </motion.span>
    </div>
  );
};

// 2. Data Projects (REALISTIC VERSION)
const projects = [
  {
    title: 'Nature Camp Experience',
    description: 'Mengikuti berbagai kegiatan perkemahan di beberapa provinsi yang melatih kemandirian, kerja sama tim, dan kecintaan terhadap alam.',
    tags: ['Camping', 'Teamwork', 'Outdoor'],
    emoji: '🌲',
    color: 'from-green-500/20 to-emerald-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Personal Growth Journey',
    description: 'Perjalanan belajar hal baru secara mandiri, mulai dari eksplorasi hobi hingga meningkatkan wawasan melalui pengalaman sehari-hari.',
    tags: ['Learning', 'Self Development'],
    emoji: '📚',
    color: 'from-yellow-500/20 to-orange-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Fishing Activity Log',
    description: 'Kegiatan memancing sebagai hobi utama yang memberikan pengalaman santai dan kesenangan tersendiri di waktu luang.',
    tags: ['Fishing', 'Relax'],
    emoji: '🎣',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Political Insight Reading',
    description: 'Aktivitas membaca dan memahami berbagai artikel politik untuk menambah wawasan tentang kondisi dan perkembangan negara.',
    tags: ['Politics', 'Reading'],
    emoji: '📰',
    color: 'from-red-500/20 to-rose-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Music & Creative Hobby',
    description: 'Menyalurkan hobi melalui bernyanyi dan bermain gitar sebagai bentuk ekspresi diri dan aktivitas santai.',
    tags: ['Music', 'Guitar'],
    emoji: '🎤',
    color: 'from-purple-500/20 to-pink-500/20',
    isContent: true,
    youtube: '#',
  },
];

// 3. Komponen Utama
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects & Kegiatan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass border border-white/10 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">

                {/* Emoji Area */}
                <div className={`aspect-video rounded-xl mb-4 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <EmojiDisplay emoji={project.emoji} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-grow">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        Content
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="flex gap-2 pt-5 mt-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" className="rounded-full flex-1" asChild>
                      <a href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Info
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="rounded-full flex-1" asChild>
                      <a href={project.demo}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Lihat
                      </a>
                    </Button>
                  )}
                  {project.youtube && (
                    <Button size="sm" className="rounded-full w-full" asChild>
                      <a href={project.youtube}>
                        <Play className="h-4 w-4 mr-2" />
                        Lihat
                      </a>
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}