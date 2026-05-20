import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export default function CinematicCard({ 
  imageSrc, 
  title, 
  subtitle, 
  price, 
  className,
  onClick 
}) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-lg cursor-pointer bg-surface shadow-ambient",
        "border border-transparent transition-colors duration-500",
        "hover:border-lantern-glow/50",
        className
      )}
      onClick={onClick}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background Image with Parallax/Scale */}
      <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
        <motion.img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80" />

      {/* Amber Glow accent on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-lantern-glow/10 mix-blend-overlay pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end text-[#f2f1ec] z-10">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-headline-md font-display mb-1">{title}</h3>
            {subtitle && <p className="text-sm font-sans opacity-80">{subtitle}</p>}
          </div>
          {price && (
            <div className="text-right">
              <p className="text-sm font-sans opacity-80 uppercase tracking-widest">Starting from</p>
              <p className="text-xl font-display">₹{price}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
