import React, { useRef, useState } from 'react';
import { motion, useAnimation, useDragControls } from 'framer-motion';
import { Lightbulb, LightbulbOff } from 'lucide-react';
import { useThemeStore } from '@/store/useThemeStore';
import { cn } from '@/utils/cn';

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useThemeStore();
  const controls = useAnimation();
  const dragControls = useDragControls();
  const ropeRef = useRef(null);
  const [isPulling, setIsPulling] = useState(false);

  const handleDragEnd = (event, info) => {
    setIsPulling(false);
    // If pulled down more than 50px, toggle theme
    if (info.offset.y > 50) {
      toggleTheme();
    }
    
    // Snap back
    controls.start({
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10,
        mass: 1.5
      }
    });
  };

  const handleDragStart = () => {
    setIsPulling(true);
  };

  const isDark = theme === 'dark';

  return (
    <div className={cn("fixed top-0 right-10 z-50 flex flex-col items-center", className)}>
      {/* The Rope */}
      <motion.div 
        className="w-[2px] bg-secondary-container origin-top"
        animate={controls}
        initial={{ height: 60 }}
        style={{
          boxShadow: "inset 1px 0 0 rgba(0,0,0,0.2)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,0 L2,2 L0,4 L2,6 L0,8 L2,10' stroke='rgba(0,0,0,0.1)' fill='none'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* The Lantern/Bulb */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 100 }}
        dragElastic={0.2}
        dragControls={dragControls}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={controls}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "cursor-grab active:cursor-grabbing p-3 rounded-full relative",
          "border-2 border-secondary-container bg-surface shadow-ambient",
          "transition-colors duration-500"
        )}
      >
        {/* Glow effect when dark */}
        <div className={cn(
          "absolute inset-0 rounded-full transition-opacity duration-700 ease-in-out mix-blend-screen",
          isDark ? "opacity-100 bg-[#f4d35e] blur-md" : "opacity-0"
        )} />
        
        {isDark ? (
          <Lightbulb className="w-6 h-6 text-[#f4d35e] relative z-10" />
        ) : (
          <LightbulbOff className="w-6 h-6 text-outline relative z-10" />
        )}
      </motion.div>
    </div>
  );
}
