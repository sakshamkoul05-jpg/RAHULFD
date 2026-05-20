import React from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease-out rounded focus:outline-none focus:ring-2 focus:ring-lantern-glow/50 focus:ring-offset-2 focus:ring-offset-background active:scale-95";
  
  const variants = {
    primary: "bg-primary text-on-primary shadow-ambient hover:bg-primary-container hover:text-on-primary-container border border-transparent font-sans font-medium tracking-wide",
    secondary: "bg-secondary text-on-secondary shadow-ambient hover:bg-secondary-container hover:text-on-secondary-container border border-transparent font-sans font-medium tracking-wide",
    ghost: "bg-transparent border border-outline text-on-surface hover:bg-surface-dim font-display text-lg tracking-normal", // Clay border and Libre Caslon
    glass: "bg-surface/20 backdrop-blur-md border border-surface/30 text-on-surface hover:bg-surface/30 shadow-ambient",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      {...props}
    >
      {/* Wood grain / noise texture overlay for primary/secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
});

Button.displayName = 'Button';
