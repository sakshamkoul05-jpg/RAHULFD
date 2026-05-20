import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function Login() {
  const [role, setRole] = useState('customer'); // customer, staff, admin, cafe

  return (
    <div className="min-h-screen relative flex items-center justify-center px-gutter overflow-hidden bg-background">
      {/* Background Image / Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2500&auto=format&fit=crop" 
          alt="Night fog" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md glass-panel p-8 md:p-12 rounded-xl"
      >
        <h2 className="text-headline-md text-[#fbf9f4] text-center mb-8">Enter the Retreat</h2>
        
        <form className="space-y-6">
          <Input 
            label="Email Address"
            type="email"
            placeholder="wanderer@example.com"
            className="bg-surface/20 text-[#fbf9f4] border-outline-variant/30 placeholder:text-outline-variant/70"
          />
          <Input 
            label="Password"
            type="password"
            placeholder="••••••••"
            className="bg-surface/20 text-[#fbf9f4] border-outline-variant/30 placeholder:text-outline-variant/70"
          />
          
          <div className="pt-4">
            <Button className="w-full bg-[#f4d35e] text-primary hover:bg-[#e4c451]">
              Unlock Portal
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center border-t border-outline-variant/20 pt-6">
          <p className="text-sm text-outline-variant/80">Staff Access</p>
          <div className="flex justify-center gap-4 mt-2">
            <button onClick={() => setRole('admin')} className="text-xs text-[#fbf9f4]/60 hover:text-[#f4d35e]">Admin</button>
            <button onClick={() => setRole('staff')} className="text-xs text-[#fbf9f4]/60 hover:text-[#f4d35e]">Staff</button>
            <button onClick={() => setRole('cafe')} className="text-xs text-[#fbf9f4]/60 hover:text-[#f4d35e]">Café Ops</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
