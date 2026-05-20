import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import CinematicCard from '@/components/ui/CinematicCard';

// Using high quality unsplash images for Himalayan/Rustic visuals
const HERO_IMAGE = "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2500&auto=format&fit=crop"; // Misty mountain
const COTTAGE_IMAGE_1 = "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1500&auto=format&fit=crop"; // Rustic cabin interior/exterior
const COTTAGE_IMAGE_2 = "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1500&auto=format&fit=crop"; // Forest cabin
const CAFE_IMAGE = "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1500&auto=format&fit=crop"; // Rustic cafe coffee
const EXPERIENCE_IMAGE = "https://images.unsplash.com/photo-1517409217036-728b9d799014?q=80&w=1500&auto=format&fit=crop"; // Bonfire

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: yHero, opacity: opacityHero }}
        >
          <img 
            src={HERO_IMAGE} 
            alt="Misty Himalayan Mountains" 
            className="w-full h-full object-cover object-center"
          />
          {/* Fog/Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background opacity-90" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-display text-[#fbf9f4] leading-[1.1] tracking-tight mb-6">
              Vedara <br/> Sanctuary
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-[#e4e2dd] font-sans max-w-2xl mx-auto mb-10 font-light">
              A sanctuary of wisdom, wilderness, and quiet luxury in the heart of the Himalayas.
            </p>
            <Button size="lg" className="bg-[#fbf9f4] text-primary hover:bg-[#eae8e3]">
              Discover the Retreat
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Storytelling / About Section */}
      <section className="py-32 px-gutter bg-background relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-display-lg-mobile md:text-display-lg text-primary mb-8"
          >
            The Slow Living Philosophy
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-body-lg text-on-surface-variant leading-relaxed"
          >
            Here, time doesn't rush. Built with locally sourced cedar and stone, Vedara is designed to harmonize with the ancient pine forests. Wake up to the breath of misty mountains and end your day by the warm, amber glow of a vintage lantern. This is not just a stay; it's a return to yourself.
          </motion.p>
        </div>
      </section>

      {/* 3. Featured Cottages */}
      <section className="py-24 px-gutter bg-surface-container-low relative z-10">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Our Sanctuaries</p>
              <h2 className="text-headline-lg text-primary">Rustic Cottages</h2>
            </div>
            <Link to="/stay" className="hidden md:inline-flex text-secondary hover:text-secondary-container transition-colors font-sans tracking-wide border-b border-secondary pb-1">
              View All Cottages
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <CinematicCard 
              imageSrc={COTTAGE_IMAGE_1}
              title="The Cedar Suite"
              subtitle="2 Guests • Mountain View • Fireplace"
              price="12,000"
              className="h-[500px] md:h-[600px]"
            />
            <CinematicCard 
              imageSrc={COTTAGE_IMAGE_2}
              title="Pine Ridge Villa"
              subtitle="4 Guests • Forest Deck • Private Bonfire"
              price="24,000"
              className="h-[500px] md:h-[600px]"
            />
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="ghost">View All Cottages</Button>
          </div>
        </div>
      </section>

      {/* 4. Cafe & Experiences Split */}
      <section className="py-24 px-gutter bg-background relative z-10">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Cafe */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start"
          >
            <div className="w-full h-[400px] overflow-hidden rounded-lg mb-8 shadow-ambient">
              <img src={CAFE_IMAGE} alt="Rustic Cafe" className="w-full h-full object-cover" />
            </div>
            <p className="text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Taste the Mountains</p>
            <h3 className="text-headline-md text-primary mb-4">The Woodland Café</h3>
            <p className="text-body-md text-on-surface-variant mb-8">
              Savor artisanal coffee and Himachali delicacies prepared with organic ingredients. A cozy space adorned with handcrafted woodwork and warm lighting.
            </p>
            <Button variant="secondary">Explore Menu</Button>
          </motion.div>

          {/* Experiences */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-start lg:mt-32"
          >
            <div className="w-full h-[400px] overflow-hidden rounded-lg mb-8 shadow-ambient">
              <img src={EXPERIENCE_IMAGE} alt="Bonfire under stars" className="w-full h-full object-cover" />
            </div>
            <p className="text-label-caps text-on-surface-variant uppercase tracking-widest mb-4">Immersive Journeys</p>
            <h3 className="text-headline-md text-primary mb-4">Bonfire & Wilderness</h3>
            <p className="text-body-md text-on-surface-variant mb-8">
              From guided pine forest trails at dawn to soulful music and bonfire gatherings under the starlit Himalayan sky.
            </p>
            <Button variant="ghost">View Experiences</Button>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
