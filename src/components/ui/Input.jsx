import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const Input = forwardRef(({ className, label, error, id, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={inputId} className="mb-2 text-label-caps text-on-surface-variant uppercase tracking-widest">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={cn(
          "w-full bg-surface-dim border border-outline-variant/50 rounded-md px-4 py-3 text-on-surface",
          "shadow-inner-etched transition-all duration-300 outline-none",
          "focus:border-transparent focus:ring-1 focus:ring-lantern-glow focus:shadow-[0_0_10px_rgba(244,211,94,0.3)]",
          "placeholder:text-outline",
          error && "border-error focus:ring-error focus:shadow-[0_0_10px_rgba(186,26,26,0.3)]",
          className
        )}
        {...props}
      />
      {error && (
        <span className="mt-1 text-sm text-error">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
